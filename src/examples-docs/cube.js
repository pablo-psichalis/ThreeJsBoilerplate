const THREE = require('three');

// Basic spinning cube


export function createCube(scene) {
    let geometry = new THREE.BoxGeometry(1, 1, 1);
    let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);

    return cube;
}

let hoverDirection = 0.002;
export function hoverRotatingCube(prop) {

    prop.rotation.x += 0.003;
    prop.rotation.y += 0.003;

    prop.position.y += hoverDirection;

    if (prop.position.y <= -0.06 || prop.position.y >= 0.06) {
        hoverDirection *= -1;
    }

}