import Detector from './src/utils/webgl-detector';
import './styles/style.css';

const THREE = require('three');

// Examples
const cubeStuff = require('./src/examples-docs/cube');
const sphereStuff = require('./src/examples-docs/sphere');

let scene, camera, renderer;
let cube, sphere;

let ADD = 0.1;

function init() {
    // Check for webGL capabilities
    if (!Detector.webgl) {
        Detector.addGetWebGLMessage();
    }

    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x404040);

    // Camera
    camera = new THREE.PerspectiveCamera(75,
        window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 5;

    // Axis for development
    /* let axes = new THREE.AxesHelper(5);
    scene.add(axes); */

    // Props
    cube = cubeStuff.createCube();
    scene.add(cube);

    sphere = sphereStuff.createSphere();
    scene.add(sphere)

    // Renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

}


let mainloop = function () {

    cubeStuff.hoverRotatingCube(cube);
    renderer.render(scene, camera)

    sphere.rotation.x += 0.003;
    sphere.rotation.y += 0.003;
    sphere.rotation.z += 0.003;

    requestAnimationFrame(mainloop);
}

init();
mainloop();