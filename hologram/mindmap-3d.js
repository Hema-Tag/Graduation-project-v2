import * as THREE from "https://unpkg.com/three@0.178.0/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.178.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://unpkg.com/three@0.178.0/examples/jsm/loaders/GLTFLoader.js";

/* ============================================================
   HOLOGRAM SHADER
   - Scanlines رأسية بتتحرك
   - Rim glow على حواف الموديل
   - Flicker عشوائي
   - اللون: سيان / أزرق هولوجرام
============================================================ */
const hologramVertexShader = `
  uniform float uTime;
  varying vec3 vPosition;
  varying vec3 vNormal;
  varying vec2 vUv;

  void main() {
    vPosition = position;
    vNormal   = normalize(normalMatrix * normal);
    vUv       = uv;

    /* موجة خفيفة على الـ vertices */
    vec3 pos = position;
    pos.x += sin(pos.y * 8.0 + uTime * 2.0) * 0.15;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const hologramFragmentShader = `
  uniform float uTime;
  uniform vec3  uColor;
  varying vec3  vPosition;
  varying vec3  vNormal;
  varying vec2  vUv;

  float rand(float n) {
    return fract(sin(n) * 43758.5453123);
  }

  void main() {

    /* --- Rim / Fresnel glow --- */
    vec3 viewDir  = normalize(cameraPosition - vPosition);
    float fresnel = 1.0 - max(dot(vNormal, viewDir), 0.0);
    fresnel = pow(fresnel, 2.5);

    /* --- Scanlines أفقية متحركة --- */
    float lines = sin(vPosition.y * 80.0 + uTime * 4.0);
    lines = smoothstep(0.3, 0.6, lines);

    /* --- Scanlines رأسية ثابتة خفيفة --- */
    float vlines = sin(vPosition.x * 60.0) * 0.15;

    /* --- Flicker --- */
    float flicker = 0.92 + 0.08 * rand(floor(uTime * 12.0));

    /* --- الألفا النهائي --- */
    float alpha = (fresnel * 0.7 + lines * 0.25 + vlines + 0.08) * flicker;
    alpha = clamp(alpha, 0.0, 1.0);

    /* --- لون + نبضة زرقاء --- */
    vec3 pulse = uColor + vec3(0.0, 0.05, 0.15) * sin(uTime * 1.5) * 0.4;

    gl_FragColor = vec4(pulse, alpha);
  }
`;

/* ============================================================
   SCENE SETUP
============================================================ */
const container = document.getElementById("threeContainer");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    45,
    container.clientWidth / container.clientHeight,
    0.1,
    10000
);
camera.position.set(0, 100, 280);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.appendChild(renderer.domElement);

/* ============================================================
   CONTROLS
============================================================ */
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 1;

/* ============================================================
   LIGHTS — خفيفة عشان الـ shader هو الأساس
============================================================ */
scene.add(new THREE.AmbientLight(0xffffff, 0.3));

const dirLight = new THREE.DirectionalLight(0x00eeff, 2);
dirLight.position.set(200, 300, 200);
scene.add(dirLight);

/* ============================================================
   HOLOGRAM MATERIAL FACTORY
   - بنعمل ShaderMaterial جديد لكل موديل
   - اللون الأساسي قابل للتغيير
============================================================ */
function makeHologramMaterial(color = new THREE.Color(0x00eeff)) {
    return new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },
            uColor: { value: color },
        },
        vertexShader: hologramVertexShader,
        fragmentShader: hologramFragmentShader,
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
    });
}

/* ============================================================
   PARTICLE FIELD — جسيمات طايرة حوالين الموديل
============================================================ */
function createParticles() {
    const count = 300;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 300;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 300;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 300;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
        color: 0x00eeff,
        size: 1.2,
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
    });

    return new THREE.Points(geometry, material);
}

const particles = createParticles();
scene.add(particles);

/* ============================================================
   APPLY HOLOGRAM TO ALL MESHES IN GLTF
   - بنمشي على كل child جوه الموديل
   - لو mesh بنغيره بـ hologram material
============================================================ */
function applyHologram(model, color) {
    const mat = makeHologramMaterial(color);
    model.traverse((child) => {
        if (child.isMesh) {
            child.material = mat;
        }
    });
    return mat; // بنرجعه عشان نقدر نحدث uTime
}

/* ============================================================
   LOADER
============================================================ */
const loader = new GLTFLoader();

let modelRoad = null;
let modelSand = null;
let matRoad = null;
let matSand = null;

/* MODEL 1 — Road (لون سيان) */
loader.load(
    "./models/road/scene.gltf",

    function (gltf) {
        modelRoad = gltf.scene;
        modelRoad.scale.set(0.35, 0.35, 0.35);
        modelRoad.position.set(0, 0, 0);

        matRoad = applyHologram(modelRoad, new THREE.Color(0x00eeff));
        scene.add(modelRoad);
    },

    undefined,

    function (error) {
        console.error("Road Error:", error);
    }
);

/* MODEL 2 — Sand (لون بنفسجي فاتح عشان يتميز) */
loader.load(
    "./models/sand/scene.gltf",

    function (gltf) {
        modelSand = gltf.scene;
        modelSand.scale.set(0.35, 0.35, 0.35);
        modelSand.position.set(0, -2, 0);

        matSand = applyHologram(modelSand, new THREE.Color(0x8866ff));
        scene.add(modelSand);
    },

    undefined,

    function (error) {
        console.error("Sand Error:", error);
    }
);

/* ============================================================
   ANIMATION LOOP
============================================================ */
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);

    const elapsed = clock.getElapsedTime();

    /* تحديث الـ uniforms */
    if (matRoad) matRoad.uniforms.uTime.value = elapsed;
    if (matSand) matSand.uniforms.uTime.value = elapsed;

    /* دوران */
    if (modelRoad) modelRoad.rotation.y += 0.002;
    if (modelSand) modelSand.rotation.y += 0.002;

    /* جسيمات تدور ببطء */
    particles.rotation.y += 0.0003;
    particles.rotation.x += 0.0001;

    controls.update();
    renderer.render(scene, camera);
}

animate();

/* ============================================================
   RESIZE
============================================================ */
window.addEventListener("resize", () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
});