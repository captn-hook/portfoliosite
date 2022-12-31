import './style.css';

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const div = document.getElementById('3d');

const sizes = {
    width: div.offsetWidth,
    height: div.offsetHeight
}

const CAMERA = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 1, 500);

CAMERA.position.set(5, 5, 5); // Set position like this
CAMERA.lookAt(new THREE.Vector3(0, 0, 0));

// Controls
const canvas2d = document.getElementById('2d');

const controls = new OrbitControls(CAMERA, canvas2d);
controls.enableDamping = true;
controls.target.set(0, 0, 0);

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
scene.add(CAMERA);

const canvas3d = document.querySelector('canvas.webgl');

//Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas3d
});

const tick = () => {

    // Update Orbital Controls
    controls.update();

    // Render
    renderer.render(scene, camera);
    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
}

tick();