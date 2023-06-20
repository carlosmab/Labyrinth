import * as THREE from 'three';
import { AbstractObject3D } from '../objects3D/abstract-object-3D';

export class LabyrinthCanvas {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.Renderer;
  canvas: HTMLCanvasElement;
  objects3D: AbstractObject3D[] = [];

  constructor(htmlCanvas: HTMLCanvasElement) {
    
    this.canvas = htmlCanvas;
    this.camera = new THREE.PerspectiveCamera(
      75, window.innerWidth / window.innerHeight, 0.1, 1000
    );
    this.renderer = new THREE.WebGLRenderer({ canvas: htmlCanvas });
    this.scene = new THREE.Scene();

    this.camera.position.set(-500, -500, 180);
    this.camera.lookAt(0, 0, 0);
    this.scene.add(this.camera);
    this.scene.add(new THREE.AmbientLight(0xffffff));
  }

  addObject(object: AbstractObject3D) {
    this.objects3D.push(object);
    this.scene.add(object);
  }

  animate = () => {
    requestAnimationFrame(this.animate);
    this.objects3D.forEach(object3D => {
      object3D.animate();
    });
    this.renderer.render(this.scene, this.camera);
  }

  
}

