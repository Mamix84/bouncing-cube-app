import { Camera, PerspectiveCamera, Vector3 } from 'three';

export class MainCamera extends Camera {

    constructor() {
        super();

        this.createCamera();
    }

    createCamera(): Camera {
        let camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
        this.position.x = 0;
        this.position.y = 5;
        this.position.z = 5;
        return camera;
    }
}
