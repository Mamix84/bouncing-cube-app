import { Camera, PerspectiveCamera, Vector3 } from 'three';
import { CameraFactory } from '../camera-factory';

export class MainCamera extends CameraFactory {

    constructor() {
        super();
    }

    createCamera(): Camera {
        let camera: any;
        camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.x = 0;
        camera.position.y = 5;
        camera.position.z = 5;
        return camera;
    }
}
