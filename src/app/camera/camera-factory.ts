import { Camera } from 'three';

export abstract class CameraFactory extends Camera {

    constructor() {
        super();
        this.createCamera();
    }

    abstract createCamera(): Camera;
}
