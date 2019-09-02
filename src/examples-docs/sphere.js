const THREE = require('three');

export function createSphere() {
    let geometry = new THREE.SphereGeometry(3, 45, 45);
    let material = new THREE.MeshBasicMaterial({ color: 'darkgray', wireframe: true });
    let sphere = new THREE.Mesh(geometry, material);
    //sphere.position.z += -5;

    return sphere;
}