import * as THREE from "three";
import { AbstractObject3D } from "../abstract-object-3D";

export interface WallLocation {
  init: THREE.Vector3;
  end: THREE.Vector3;
}

export class Wall extends AbstractObject3D {
  wallLocation: WallLocation;
  private width: number = 10;
  private height: number = 300;

  constructor(wallLocation: WallLocation) {
    super();
    this.wallLocation = wallLocation;
    const length = this.wallLocation.init.distanceTo(this.wallLocation.end);
    const geometry = new THREE.BoxGeometry(length, this.height, this.width);
    const material = new THREE.MeshPhongMaterial({ color: 0x808080 });
    const mesh = new THREE.Mesh(geometry, material);
    this.add(mesh);
    this.positionWall();
  }

  private positionWall() {
    const center = new THREE.Vector3();
    center.addVectors(this.wallLocation.init, this.wallLocation.end).multiplyScalar(0.5);
    this.position.copy(center);

    const direction = new THREE.Vector3().subVectors(this.wallLocation.end, this.wallLocation.end).normalize();
    const angle = Math.atan2(direction.y, direction.x);
    this.rotation.z = angle;
  }

  animate(): void {
      
  }
 
  
}