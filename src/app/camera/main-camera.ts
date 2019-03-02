import { Camera, PerspectiveCamera, Vector3 } from 'three';

export class MainCamera {

    private camera: PerspectiveCamera;

    constructor() {
        this.createCamera();
    }

    createCamera() {
        this.camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
        this.camera.position.x = 0;
        this.camera.position.y = 1;
        this.camera.position.z = 6;
    }

    updateProjectionMatrix() {
        this.camera.updateProjectionMatrix();
    }

    retrieveCamera(): PerspectiveCamera {
        return this.camera;
    }
}
