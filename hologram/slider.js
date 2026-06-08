/* ============================================================
   THREE.JS SETUP - الطريق الترابي مع طبقات تحته
   الطريق الأسفلتي بدون طبقات
============================================================ */
let scene, camera, renderer, controls;
let currentModel = null;

function initHologramSystem() {
    const container = document.getElementById('hologram-container');
    if (!container) {
        console.error('Container not found - slider.js:11');
        return;
    }
    
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050510);
    scene.fog = new THREE.FogExp2(0x050510, 0.003);
    
    camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 1.2, 4);
    
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x050510);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);
    
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = true;
    controls.enablePan = true;
    controls.target.set(0, 0, 0);
    
    // إضاءة
    const ambientLight = new THREE.AmbientLight(0x404060, 0.6);
    scene.add(ambientLight);
    
    const mainLight = new THREE.DirectionalLight(0xffffff, 1.2);
    mainLight.position.set(3, 5, 4);
    mainLight.castShadow = true;
    scene.add(mainLight);
    
    const fillLight = new THREE.PointLight(0x4466cc, 0.5);
    fillLight.position.set(-2, 2, 3);
    scene.add(fillLight);
    
    const backLight = new THREE.PointLight(0xffaa44, 0.4);
    backLight.position.set(1, 1, -4);
    scene.add(backLight);
    
    const bottomLight = new THREE.PointLight(0x33ccff, 0.5);
    bottomLight.position.set(0, -0.8, 0);
    scene.add(bottomLight);
    
    // شبكة أرضية مرجعية
    const gridHelper = new THREE.GridHelper(10, 10, 0x44aaff, 0x2266aa);
    gridHelper.position.y = -0.8;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.2;
    scene.add(gridHelper);
    
    console.log('✅ Three.js initialized - slider.js:62');
    
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }
    animate();
    
    window.addEventListener('resize', () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
    
    setTimeout(() => {
        loadAsphaltRoad();
    }, 500);
}

/* ============================================================
   دالة توسيط قسري لأي مجسم
============================================================ */
function centerModel(model, targetSize = 3.5) {
    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    
    const scaleFactor = targetSize / Math.max(size.x, size.z);
    model.scale.set(scaleFactor, scaleFactor, scaleFactor);
    
    const newBox = new THREE.Box3().setFromObject(model);
    const newCenter = newBox.getCenter(new THREE.Vector3());
    model.position.sub(newCenter);
    
    console.log(`📏 الأبعاد: عرض ${size.x.toFixed(2)}, عمق ${size.z.toFixed(2)} - slider.js:97`);
    console.log(`🔧 نسبة التصغير: ${scaleFactor.toFixed(4)} - slider.js:98`);
    
    return { size, center, scaleFactor };
}

/* ============================================================
   دالة إضافة طبقات تحت المجسم (نفس عرض وطول المجسم)
============================================================ */
function addLayersUnderModel(model, targetSize = 3.5) {
    const group = new THREE.Group();
    
    // حساب الأبعاد بعد التكبير
    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const depth = targetSize * (size.z / size.x);
    
    // إضافة المجسم الأصلي
    group.add(model);
    
    // ========================================
    // الطبقة 1: Base Layer (تحت المجسم مباشرة)
    // ========================================
    const baseLayer = new THREE.Mesh(
        new THREE.BoxGeometry(targetSize, 0.2, depth),
        new THREE.MeshStandardMaterial({
            color: 0x888888,
            metalness: 0.2,
            roughness: 0.6,
            transparent: true,
            opacity: 0.85
        })
    );
    baseLayer.position.set(0, -0.15, 0);
    baseLayer.castShadow = true;
    group.add(baseLayer);
    console.log('✅ Base Layer عند Y = 0.15 - slider.js:133');
    
    // ========================================
    // الطبقة 2: Subbase Layer
    // ========================================
    const subbaseLayer = new THREE.Mesh(
        new THREE.BoxGeometry(targetSize + 0.2, 0.3, depth + 0.2),
        new THREE.MeshStandardMaterial({
            color: 0xb08d57,
            metalness: 0.1,
            roughness: 0.7,
            transparent: true,
            opacity: 0.85
        })
    );
    subbaseLayer.position.set(0, -0.4, 0);
    subbaseLayer.castShadow = true;
    group.add(subbaseLayer);
    console.log('✅ Subbase Layer عند Y = 0.40 - slider.js:151');
    
    // ========================================
    // الطبقة 3: Soil Layer
    // ========================================
    const soilLayer = new THREE.Mesh(
        new THREE.BoxGeometry(targetSize + 0.5, 0.5, depth + 0.5),
        new THREE.MeshStandardMaterial({
            color: 0x6b4423,
            metalness: 0.05,
            roughness: 0.8,
            transparent: true,
            opacity: 0.85
        })
    );
    soilLayer.position.set(0, -0.8, 0);
    soilLayer.castShadow = true;
    group.add(soilLayer);
    console.log('✅ Soil Layer عند Y = 0.80 - slider.js:169');
    
    return group;
}

/* ============================================================
   المجسم الأول (الطريق الأسفلتي) - بدون طبقات
============================================================ */
function loadAsphaltRoad() {
    console.log('🔄 جاري تحميل الطريق الأسفلتي... - slider.js:178');
    
    const loader = new THREE.GLTFLoader();
    
    loader.load('models/2.gltf',
        (gltf) => {
            console.log('✅ تم تحميل الطريق الأسفلتي - slider.js:184');
            
            if (currentModel) scene.remove(currentModel);
            currentModel = gltf.scene;
            
            centerModel(currentModel, 3.5);
            scene.add(currentModel);
            
            camera.position.set(0, 1.2, 4);
            controls.target.set(0, 0, 0);
            controls.update();
            
            console.log('✅ الطريق الأسفلتي في المركز (0,0,0) بدون طبقات - slider.js:196');
        },
        null,
        (error) => console.error('خطأ في تحميل الطريق الأسفلتي: - slider.js:199', error)
    );
}

/* ============================================================
   المجسم الثاني (الطريق الترابي) + طبقات تحته
============================================================ */
function loadDirtRoadWithLayers() {
    console.log('🔄 جاري تحميل الطريق الترابي مع الطبقات... - slider.js:207');
    
    const loader = new THREE.GLTFLoader();
    
    loader.load('models/sence.gltf',
        (gltf) => {
            console.log('✅ تم تحميل الطريق الترابي - slider.js:213');
            
            if (currentModel) scene.remove(currentModel);
            
            const roadModel = gltf.scene;
            
            // توسيط المجسم
            centerModel(roadModel, 3.5);
            
            // إضافة الطبقات تحت المجسم
            currentModel = addLayersUnderModel(roadModel, 3.5);
            
            scene.add(currentModel);
            
            camera.position.set(0, 1.2, 4);
            controls.target.set(0, 0, 0);
            controls.update();
            
            console.log('✅ الطريق الترابي + 3 طبقات في المركز (0,0,0) - slider.js:231');
            console.log('📋 الطبقات: Base | Subbase | Soil - slider.js:232');
        },
        null,
        (error) => console.error('خطأ في تحميل الطريق الترابي: - slider.js:235', error)
    );
}

/* ============================================================
   تبديل المجسمات
============================================================ */
function switchHologramModel(path) {
    if (path.includes('sence')) {
        document.getElementById('btn-model1')?.classList.remove('active');
        document.getElementById('btn-model2')?.classList.add('active');
        loadDirtRoadWithLayers();  // الترابي مع طبقات
    } else {
        document.getElementById('btn-model1')?.classList.add('active');
        document.getElementById('btn-model2')?.classList.remove('active');
        loadAsphaltRoad();  // الأسفلتي بدون طبقات
    }
}

/* ============================================================
   WEBSOCKET - التحكم باليد
============================================================ */
let ws = null;
let handActive = false;

function connectWebSocket() {
    try {
        ws = new WebSocket('ws://localhost:8765');
        
        ws.onopen = () => {
            console.log('✅ WebSocket connected - slider.js:265');
            showStatus('🖐️ جاهز للتحكم باليد', '#00ffcc');
        };
        
        ws.onerror = (err) => {
            console.error('WebSocket error: - slider.js:270', err);
            showStatus('⚠️ غير متصل بخادم اليد', '#ff4444');
        };
        
        ws.onclose = () => {
            console.log('WebSocket closed - slider.js:275');
            if (handActive && controls) controls.enabled = true;
        };
        
        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            
            if (data.handPresent === true) {
                if (!handActive) {
                    handActive = true;
                    if (controls) controls.enabled = false;
                    showStatus('🖐️ التحكم باليد مفعل', '#00ffcc');
                }
                
                if (currentModel) {
                    // Zoom - يدين
                    if (data.gesture === 'zoom' && data.distance) {
                        const targetZ = 3 + (1 - data.distance) * 3;
                        camera.position.z += (targetZ - camera.position.z) * 0.12;
                    }
                    // Pan - قبضة اليد
                    else if (data.gesture === 'pan' && data.x !== undefined) {
                        currentModel.position.x += ((data.x - 0.5) * 2 - currentModel.position.x) * 0.12;
                        currentModel.position.y += ((0.5 - data.y) * 1.2 - currentModel.position.y) * 0.12;
                    }
                    // Rotate - يد مفتوحة
                    else if (data.gesture === 'rotate' && data.x !== undefined) {
                        currentModel.rotation.y += ((data.x - 0.5) * 3.5 - currentModel.rotation.y) * 0.1;
                        currentModel.rotation.x += ((data.y - 0.5) * 1.8 - currentModel.rotation.x) * 0.1;
                    }
                }
            }
            else if (data.handPresent === false && handActive) {
                handActive = false;
                if (controls) controls.enabled = true;
                showStatus('🖱️ التحكم بالماوس مفعل', '#ffaa00');
            }
        };
    } catch(e) {
        console.error('WebSocket error: - slider.js:314', e);
    }
}

function showStatus(msg, color) {
    let el = document.getElementById('status-indicator');
    if (!el) {
        el = document.createElement('div');
        el.id = 'status-indicator';
        el.style.cssText = `
            position: fixed;
            bottom: 25px;
            right: 25px;
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(10px);
            padding: 10px 18px;
            border-radius: 10px;
            font-family: 'Cairo', sans-serif;
            font-size: 13px;
            font-weight: 500;
            z-index: 10000;
            border-left: 3px solid;
            pointer-events: none;
        `;
        document.body.appendChild(el);
    }
    el.style.borderLeftColor = color;
    el.style.color = color;
    el.innerHTML = msg;
    el.style.opacity = '1';
    
    clearTimeout(window.statusTimeout);
    window.statusTimeout = setTimeout(() => {
        if (el) el.style.opacity = '0';
    }, 2500);
}

/* ============================================================
   دوال إضافية
============================================================ */
function activateProjectMap(id) {
    console.log('Project map activated: - slider.js:355', id);
}

function closeProjectMap() {
    console.log('Project map closed - slider.js:359');
}

function initBookPages() {
    console.log('Book pages initialized - slider.js:363');
}

/* ============================================================
   بدء التشغيل
============================================================ */
window.addEventListener('DOMContentLoaded', () => {
    initHologramSystem();
    initBookPages();
    setTimeout(() => {
        connectWebSocket();
    }, 1500);
});