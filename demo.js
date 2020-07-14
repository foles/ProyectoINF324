var scene, camera, renderer, mesh;
var meshFloor;

var keyboard = {};
var player = { height: 1.8, speed: 0.2, turnSpeed: Math.PI * 0.01 }
var USE_WIREFRAME = false;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x00538C);
    camera = new THREE.PerspectiveCamera(90, 1280 / 720, 0.1, 1000);
    mesh = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshPhongMaterial({ color: 0xff9999, wireframe: USE_WIREFRAME })
    );
    mesh.position.y++;
    mesh.receiveShadow = true;
    mesh.castShadow = true;

    scene.add(mesh);

    meshFloor = new THREE.Mesh(
        new THREE.PlaneGeometry(10, 10, 10, 10),
        new THREE.MeshPhongMaterial({ color: 0xffffff, wireframe: USE_WIREFRAME })
    )
    meshFloor.rotation.x -= Math.PI / 2;
    meshFloor.receiveShadow = true;
    scene.add(meshFloor)

    ambientLight = new THREE.AmbientLight(0xffffff, 0.2)
    scene.add(ambientLight)

    light = new THREE.PointLight(0xffffff, 0.8, 18);
    light.position.set(-3, 6, -3);
    light.castShadow = true;
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 25;
    scene.add(light);

    camera.position.set(0, player.height, -5);
    camera.lookAt(new THREE.Vector3(0, player.height, 0))


    renderer = new THREE.WebGLRenderer();

    renderer.setSize(1280, 720);

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.BasicshadowMap;

    document.body.appendChild(renderer.domElement);

    animate();


}

function animate() {
    requestAnimationFrame(animate);

    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;

    //wsad move camera 
    if (keyboard[87]) {
        camera.position.x -= Math.sin(camera.rotation.y) * player.speed;
        camera.position.z -= -Math.cos(camera.rotation.y) * player.speed;
    }
    if (keyboard[83]) {
        camera.position.x += Math.sin(camera.rotation.y) * player.speed;
        camera.position.z += -Math.cos(camera.rotation.y) * player.speed;
    }

    if (keyboard[65]) {
        camera.position.x += Math.sin(camera.rotation.y + Math.PI / 2) * player.speed;
        camera.position.z += -Math.cos(camera.rotation.y + Math.PI / 2) * player.speed;
    }

    if (keyboard[68]) {
        camera.position.x += Math.sin(camera.rotation.y - Math.PI / 2) * player.speed;
        camera.position.z += -Math.cos(camera.rotation.y - Math.PI / 2) * player.speed;
    }

    // flecha izq  flecha der rotation camera
    if (keyboard[37]) {
        camera.rotation.y -= player.turnSpeed;
    }

    if (keyboard[39]) {
        camera.rotation.y += player.turnSpeed;
    }
    renderer.render(scene, camera)

}

function keyDown() {
    keyboard[event.keyCode] = true;
}

function keyUp() {
    keyboard[event.keyCode] = false
}

window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);



window.onload = init;