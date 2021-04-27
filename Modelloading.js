import * as THREE  from 'three/build/three.module'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const loader = new GLTFLoader();

loader.load('earth.glb', function (gltf) {

    scene.add(gltf.scene);

}, undefined, function (error) {

    console.error(error);

});
//let scene;

//function init() {
//    scene = new THREE.Scene();
//    scene.background = new THREE.Color("blue");

//    //scene.add(gltf.scene);
//    camera = new THREE.PerspectiveCamera(40, window, innerWidth / window.innerHeight, 1, 5000);

//    hlight = new THREE.AmbientLight(0x404040, 100);
//    scene.add(hlight);
//    renderer = new THREE.WebGLRenderer({ antialias: true });
//    renderer.setSize(window.innerWidth, window.innerHeight);
//    document.body.appendChild(renderer.domElement);

//    let loader = new THREE.GLTFLoader();
//    loader.load('C:\Users\HuDaN\Documents\model\renderingmodel\earth.glb', function (gltf) {
//        scene.add(gltf.scene);
//        renderer.render(scene, camera)
//    })
//}
//init();

