import Detector from './src/utils/webgl-detector';
import './styles/style.css';

const THREE = require('three');

// Examples
const cubeStuff = require('./src/examples-docs/cube');

let scene, camera, renderer, cube;
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

    // Renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

}


let mainloop = function () {

    cubeStuff.hoverRotatingCube(cube);
    renderer.render(scene, camera)

    requestAnimationFrame(mainloop);
}

init();
mainloop();