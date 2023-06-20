import { Object3D } from "three" 


export abstract class AbstractObject3D extends Object3D {
  abstract animate(): void;
}