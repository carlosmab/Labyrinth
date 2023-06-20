import * as THREE from 'three';

export class Cube extends THREE.Mesh {
  constructor(size: number, color: number) {
    const geometry = new THREE.BoxGeometry(size, size, size);
    const material = new THREE.MeshStandardMaterial({ color });
    super(geometry, material);
  }
}