var scene, camera, renderer, mesh;
var meshFloor, ambientLight, light, meshPared1;

var floorTexture;

var keyboard = {};
var player = { height: 2.8, speed: 0.2, turnSpeed: Math.PI * 0.01 }
var USE_WIREFRAME = false;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x00538C);
    camera = new THREE.PerspectiveCamera(90, 1280 / 720, 0.1, 1000);

    floorTexture = THREE.ImageUtils.loadTexture("models/floor.jpg");
    floorTexture.wrapS = THREE.RepeatWrapping;
    floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set(6, 6);

    material = new THREE.MeshLambertMaterial({ map: floorTexture });

    meshFloor = new THREE.Mesh(
        new THREE.PlaneGeometry(20, 30, 10, 10),
        material
    )
    meshFloor.rotation.x -= Math.PI / 2;
    meshFloor.receiveShadow = true;
    scene.add(meshFloor)


    meshTecho = new THREE.Mesh(
        new THREE.BoxGeometry(20, 30, 1),
        new THREE.MeshPhongMaterial({ color: 0xffffff, wireframe: USE_WIREFRAME })
    );
    meshTecho.rotation.x -= Math.PI / 2;
    //meshTecho.position.z -= 15;
    meshTecho.position.y += 10;
    meshTecho.receiveShadow = true;
    meshTecho.castShadow = true;

    scene.add(meshTecho);




    meshPared0 = new THREE.Mesh(
        new THREE.BoxGeometry(20, 10, 1),
        new THREE.MeshPhongMaterial({ color: 0xF8FCDA, wireframe: USE_WIREFRAME })
    );
    meshPared0.position.z -= 15;
    meshPared0.position.y += 5;
    meshPared0.receiveShadow = true;
    meshPared0.castShadow = true;

    scene.add(meshPared0);

    meshPared1 = new THREE.Mesh(
        new THREE.BoxGeometry(20, 10, 1),
        new THREE.MeshPhongMaterial({ color: 0xF8FCDA, wireframe: USE_WIREFRAME })
    );
    meshPared1.position.z += 15;
    meshPared1.position.y += 5;
    meshPared1.receiveShadow = true;
    meshPared1.castShadow = true;

    scene.add(meshPared1);

    meshPared2 = new THREE.Mesh(
        new THREE.BoxGeometry(30, 10, 1),
        new THREE.MeshPhongMaterial({ color: 0xF8FCDA, wireframe: USE_WIREFRAME })
    );
    meshPared2.position.y += 5;
    meshPared2.position.x += 10;
    meshPared2.rotation.y -= Math.PI / 2;
    meshPared2.receiveShadow = true;
    meshPared2.castShadow = true;
    scene.add(meshPared2);

    meshPared3 = new THREE.Mesh(
        new THREE.BoxGeometry(30, 10, 1),
        new THREE.MeshPhongMaterial({ color: 0xF8FCDA, wireframe: USE_WIREFRAME })
    );
    meshPared3.position.y += 5;
    meshPared3.position.x -= 10;
    meshPared3.rotation.y -= Math.PI / 2;
    meshPared3.receiveShadow = true;
    meshPared3.castShadow = true;
    scene.add(meshPared3);


    ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambientLight)

    light = new THREE.PointLight(0xffffff, 0.8, 18);
    light.position.set(1, 6, 0);
    light.castShadow = true;
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 25;
    scene.add(light);




    //mesas
    var mtlLoader = new THREE.MTLLoader();
    mtlLoader.load("models/table.mtl", function(materials) {

        materials.preload();



        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load("models/table.obj", function(mesh) {

            mesh.traverse(function(node) {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            })
            scene.add(mesh);
            mesh.scale.x = 4;
            mesh.scale.y = 5;
            mesh.scale.z = 3;
            mesh.position.set(-4, 0, 13);
            //mesh.rotation.y = -Math.PI / 4;
        })
        var objLoader2 = new THREE.OBJLoader();
        objLoader2.setMaterials(materials);
        objLoader2.load("models/table.obj", function(mesh) {

            mesh.traverse(function(node) {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            })
            scene.add(mesh);
            mesh.scale.x = 4;
            mesh.scale.y = 5;
            mesh.scale.z = 3;
            mesh.position.set(-0.6, 0, 13);
            //mesh.rotation.y = -Math.PI / 4;
        })

        var objLoader3 = new THREE.OBJLoader();
        objLoader3.setMaterials(materials);
        objLoader3.load("models/table.obj", function(mesh) {

            mesh.traverse(function(node) {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            })
            scene.add(mesh);
            mesh.scale.x = 4;
            mesh.scale.y = 5;
            mesh.scale.z = 3;
            mesh.position.set(2.8, 0, 13);
            //mesh.rotation.y = -Math.PI / 4;
        })

        var objLoader4 = new THREE.OBJLoader();
        objLoader4.setMaterials(materials);
        objLoader4.load("models/table.obj", function(mesh) {

            mesh.traverse(function(node) {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            })
            scene.add(mesh);
            mesh.scale.x = 4;
            mesh.scale.y = 5;
            mesh.scale.z = 3;
            mesh.position.set(6.2, 0, 13);
            //mesh.rotation.y = -Math.PI / 4;
        })

        var objLoader5 = new THREE.OBJLoader();
        objLoader5.setMaterials(materials);
        objLoader5.load("models/table.obj", function(mesh) {

            mesh.traverse(function(node) {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            })
            scene.add(mesh);
            mesh.scale.x = 4;
            mesh.scale.y = 5;
            mesh.scale.z = 3;
            mesh.position.set(-8, 0, 12);
            mesh.rotation.y = -Math.PI / 2;
        })

        var objLoader6 = new THREE.OBJLoader();
        objLoader6.setMaterials(materials);
        objLoader6.load("models/table.obj", function(mesh) {

            mesh.traverse(function(node) {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            })
            scene.add(mesh);
            mesh.scale.x = 4;
            mesh.scale.y = 5;
            mesh.scale.z = 3;
            mesh.position.set(-8, 0, 8.6);
            mesh.rotation.y = -Math.PI / 2;
        })

        var objLoader7 = new THREE.OBJLoader();
        objLoader7.setMaterials(materials);
        objLoader7.load("models/table.obj", function(mesh) {

            mesh.traverse(function(node) {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            })
            scene.add(mesh);
            mesh.scale.x = 4;
            mesh.scale.y = 5;
            mesh.scale.z = 3;
            mesh.position.set(-8, 0, 5.2);
            mesh.rotation.y = -Math.PI / 2;
        })


        var objLoader8 = new THREE.OBJLoader();
        objLoader8.setMaterials(materials);
        objLoader8.load("models/table.obj", function(mesh) {

            mesh.traverse(function(node) {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            })
            scene.add(mesh);
            mesh.scale.x = 4;
            mesh.scale.y = 5;
            mesh.scale.z = 3;
            mesh.position.set(-8, 0, 1.8);
            mesh.rotation.y = -Math.PI / 2;
        })

        var objLoader9 = new THREE.OBJLoader();
        objLoader9.setMaterials(materials);
        objLoader9.load("models/table.obj", function(mesh) {

            mesh.traverse(function(node) {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            })
            scene.add(mesh);
            mesh.scale.x = 4;
            mesh.scale.y = 5;
            mesh.scale.z = 3;
            mesh.position.set(-8, 0, -1.6);
            mesh.rotation.y = -Math.PI / 2;
        })

        var objLoader10 = new THREE.OBJLoader();
        objLoader10.setMaterials(materials);
        objLoader10.load("models/table.obj", function(mesh) {

            mesh.traverse(function(node) {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            })
            scene.add(mesh);
            mesh.scale.x = 4;
            mesh.scale.y = 5;
            mesh.scale.z = 3;
            mesh.position.set(-8, 0, -5);
            mesh.rotation.y = -Math.PI / 2;
        })

        //mesas izquierda

        var objLoader11 = new THREE.OBJLoader();
        objLoader11.setMaterials(materials);
        objLoader11.load("models/table.obj", function(mesh) {

            mesh.traverse(function(node) {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            })
            scene.add(mesh);
            mesh.scale.x = 4;
            mesh.scale.y = 5;
            mesh.scale.z = 3;
            mesh.position.set(9.4, 0, 12);
            mesh.rotation.y = -Math.PI / 2;
        })

        var objLoader12 = new THREE.OBJLoader();
        objLoader12.setMaterials(materials);
        objLoader12.load("models/table.obj", function(mesh) {

            mesh.traverse(function(node) {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            })
            scene.add(mesh);
            mesh.scale.x = 4;
            mesh.scale.y = 5;
            mesh.scale.z = 3;
            mesh.position.set(9.4, 0, 8.6);
            mesh.rotation.y = -Math.PI / 2;
        })

        var objLoader13 = new THREE.OBJLoader();
        objLoader13.setMaterials(materials);
        objLoader13.load("models/table.obj", function(mesh) {

            mesh.traverse(function(node) {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            })
            scene.add(mesh);
            mesh.scale.x = 4;
            mesh.scale.y = 5;
            mesh.scale.z = 3;
            mesh.position.set(9.4, 0, 5.2);
            mesh.rotation.y = -Math.PI / 2;
        })


        var objLoader14 = new THREE.OBJLoader();
        objLoader14.setMaterials(materials);
        objLoader14.load("models/table.obj", function(mesh) {

            mesh.traverse(function(node) {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            })
            scene.add(mesh);
            mesh.scale.x = 4;
            mesh.scale.y = 5;
            mesh.scale.z = 3;
            mesh.position.set(9.4, 0, 1.8);
            mesh.rotation.y = -Math.PI / 2;
        })

        var objLoader15 = new THREE.OBJLoader();
        objLoader15.setMaterials(materials);
        objLoader15.load("models/table.obj", function(mesh) {

            mesh.traverse(function(node) {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            })
            scene.add(mesh);
            mesh.scale.x = 4;
            mesh.scale.y = 5;
            mesh.scale.z = 3;
            mesh.position.set(9.4, 0, -1.6);
            mesh.rotation.y = -Math.PI / 2;
        })

        var objLoader16 = new THREE.OBJLoader();
        objLoader16.setMaterials(materials);
        objLoader16.load("models/table.obj", function(mesh) {

            mesh.traverse(function(node) {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            })
            scene.add(mesh);
            mesh.scale.x = 4;
            mesh.scale.y = 5;
            mesh.scale.z = 3;
            mesh.position.set(9.4, 0, -5);
            mesh.rotation.y = -Math.PI / 2;
        })


        //mesas centro

        var objLoader17 = new THREE.OBJLoader();
        objLoader17.setMaterials(materials);
        objLoader17.load("models/table.obj", function(mesh) {

            mesh.traverse(function(node) {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            })
            scene.add(mesh);
            mesh.scale.x = 5;
            mesh.scale.y = 5;
            mesh.scale.z = 5;
            mesh.position.set(1, 0, 7);
            mesh.rotation.y = -Math.PI / 2;
        })

        var objLoader18 = new THREE.OBJLoader();
        objLoader18.setMaterials(materials);
        objLoader18.load("models/table.obj", function(mesh) {

            mesh.traverse(function(node) {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            })
            scene.add(mesh);
            mesh.scale.x = 5;
            mesh.scale.y = 5;
            mesh.scale.z = 5;
            mesh.position.set(1, 0, 2.7);
            mesh.rotation.y = -Math.PI / 2;


            mesh.traverse(function(node) {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            })

        })

        var objLoader19 = new THREE.OBJLoader();
        objLoader19.setMaterials(materials);
        objLoader19.load("models/table.obj", function(mesh) {

            mesh.traverse(function(node) {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            })
            scene.add(mesh);
            mesh.scale.x = 5;
            mesh.scale.y = 5;
            mesh.scale.z = 5;
            mesh.position.set(1, 0, -1.);
            mesh.rotation.y = -Math.PI / 2;


            mesh.traverse(function(node) {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            })

        })

    })



    //monitores
    mtlLoader.load("models/computerScreen.mtl", function(materials) {
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load("models/computerScreen.obj", function(mesh) {

            mesh.traverse(function(node) {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            })
            scene.add(mesh);
            mesh.scale.x = 4;
            mesh.scale.y = 4;
            mesh.scale.z = 3;
            mesh.position.set(-4, 1.7, 13.7);
            //mesh.rotation.y = -Math.PI / 4;
        })

        objLoader.load("models/computerScreen.obj", function(mesh) {

            mesh.traverse(function(node) {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            })
            scene.add(mesh);
            mesh.scale.x = 4;
            mesh.scale.y = 4;
            mesh.scale.z = 3;
            mesh.position.set(-1.5, 1.7, 13.7);
            //mesh.rotation.y = -Math.PI / 4;
        })
    })

    // teclado

    mtlLoader.load("models/computerKeyboard.mtl", function(materials) {
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load("models/computerKeyboard.obj", function(mesh) {

            mesh.traverse(function(node) {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            })
            scene.add(mesh);
            mesh.scale.x = 4;
            mesh.scale.y = 4;
            mesh.scale.z = 3;
            mesh.position.set(-4.2, 1.7, 13);
            //mesh.rotation.y = -Math.PI / 4;
        })

        objLoader.load("models/computerKeyboard.obj", function(mesh) {

            mesh.traverse(function(node) {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            })
            scene.add(mesh);
            mesh.scale.x = 4;
            mesh.scale.y = 4;
            mesh.scale.z = 3;
            mesh.position.set(-1.7, 1.7, 13);
            //mesh.rotation.y = -Math.PI / 4;
        })
    })

    //mouse

    mtlLoader.load("models/computerMouse.mtl", function(materials) {
        materials.preload();
        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load("models/computerMouse.obj", function(mesh) {

            mesh.traverse(function(node) {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            })
            scene.add(mesh);
            mesh.scale.x = 4;
            mesh.scale.y = 4;
            mesh.scale.z = 3;
            mesh.position.set(-3.2, 1.7, 13);
            //mesh.rotation.y = -Math.PI / 4;
        })

        objLoader.load("models/computerMouse.obj", function(mesh) {

            mesh.traverse(function(node) {
                if (node instanceof THREE.Mesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            })
            scene.add(mesh);
            mesh.scale.x = 4;
            mesh.scale.y = 4;
            mesh.scale.z = 3;
            mesh.position.set(-5.7, 1.7, 13);
            //mesh.rotation.y = -Math.PI / 4;
        })
    })

    //camara

    camera.position.set(8, player.height, -12);
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