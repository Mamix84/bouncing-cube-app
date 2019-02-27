import { Camera, PerspectiveCamera, Vector3 } from 'three';

export class MainCamera extends Camera {

    constructor() {
        super();

        super.camera = this.createCamera();
    }

    createCamera(): Camera {
        let camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
        camera.position.x = 0;
        camera.position.y = 5;
        camera.position.z = 5;
        return camera;
    }
}
