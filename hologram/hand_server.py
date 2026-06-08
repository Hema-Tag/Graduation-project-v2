import cv2
import mediapipe as mp
import asyncio
import websockets
import json

# ====================================================
# WEBSOCKET CLIENTS
# ====================================================

connected_clients = set()

async def register(websocket):
    connected_clients.add(websocket)
    try:
        await websocket.wait_closed()
    finally:
        connected_clients.remove(websocket)

async def websocket_server():
    async with websockets.serve(register, "localhost", 8765):
        await asyncio.Future()

# ====================================================
# SEND DATA
# ====================================================

async def send_to_clients(data):
    if not connected_clients:
        return
    message = json.dumps(data)
    disconnected = []
    for client in connected_clients:
        try:
            await client.send(message)
        except:
            disconnected.append(client)
    for client in disconnected:
        if client in connected_clients:
            connected_clients.remove(client)

# ====================================================
# SMOOTH FILTER
# ====================================================

class SmoothValue:
    def __init__(self, alpha=0.25):
        self.alpha = alpha
        self.value = None

    def update(self, new_value):
        if self.value is None:
            self.value = new_value
        self.value = self.alpha * new_value + (1 - self.alpha) * self.value
        return self.value

smooth_x = SmoothValue()
smooth_y = SmoothValue()
smooth_distance = SmoothValue()

# ====================================================
# GESTURES
# ====================================================

def is_fist(landmarks):
    tip_ids = [8, 12, 16, 20]
    closed = 0
    for tip in tip_ids:
        if landmarks[tip].y > landmarks[tip - 2].y:
            closed += 1
    return closed >= 3

def is_open_hand(landmarks):
    tip_ids = [8, 12, 16, 20]
    opened = 0
    for tip in tip_ids:
        if landmarks[tip].y < landmarks[tip - 2].y:
            opened += 1
    return opened >= 3

# ====================================================
# MEDIAPIPE
# ====================================================
mp_hands = mp.solutions.hands
hands = mp_hands.Hands(
    static_image_mode=False,
    max_num_hands=2,
    min_detection_confidence=0.7,
    min_tracking_confidence=0.7
)

# فتح الكاميرا بدون عرض نافذة
cap = cv2.VideoCapture(0, cv2.CAP_DSHOW)

# ====================================================
# HAND TRACKING STATE
# ====================================================
hand_detected = False
no_hand_counter = 0
NO_HAND_THRESHOLD = 10

# ====================================================
# VISION LOOP
# ====================================================

async def vision_loop():
    global hand_detected, no_hand_counter
    
    while True:
        success, frame = cap.read()
        if not success:
            continue

        frame = cv2.flip(frame, 1)
        rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        results = hands.process(rgb)

        payload = {
            "handDetected": False,
            "handPresent": False
        }

        if results.multi_hand_landmarks:
            no_hand_counter = 0
            
            if not hand_detected:
                hand_detected = True
                print("🖐️ Hand detected  تفعيل التحكم باليد - hand_server.py:128")
                await send_to_clients({"handPresent": True, "handDetected": True})
            
            payload["handDetected"] = True
            payload["handPresent"] = True

            hand_count = len(results.multi_hand_landmarks)

            if hand_count == 2:
                p1 = results.multi_hand_landmarks[0].landmark[9]
                p2 = results.multi_hand_landmarks[1].landmark[9]
                distance = ((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2) ** 0.5
                distance = smooth_distance.update(distance)
                payload["gesture"] = "zoom"
                payload["distance"] = distance

            else:
                landmarks = results.multi_hand_landmarks[0].landmark
                wrist = landmarks[9]
                x = smooth_x.update(wrist.x)
                y = smooth_y.update(wrist.y)
                payload["x"] = x
                payload["y"] = y

                if is_fist(landmarks):
                    payload["gesture"] = "pan"
                elif is_open_hand(landmarks):
                    payload["gesture"] = "rotate"
                else:
                    payload["gesture"] = "idle"

        else:
            no_hand_counter += 1
            
            if hand_detected and no_hand_counter >= NO_HAND_THRESHOLD:
                hand_detected = False
                print("🖐️ No hand  تفعيل التحكم بالماوس - hand_server.py:164")
                await send_to_clients({"handPresent": False, "handDetected": False})
            
            payload["handDetected"] = False
            payload["handPresent"] = False

        await send_to_clients(payload)
        
        # لا نعرض نافذة الكاميرا - تم التعليق
        # cv2.imshow("Hand Tracking", frame)
        # if cv2.waitKey(1) == 27:
        #     break

        await asyncio.sleep(1/30)

# ====================================================
# MAIN
# ====================================================

async def main():
    await asyncio.gather(
        websocket_server(),
        vision_loop()
    )

if __name__ == "__main__":
    asyncio.run(main())