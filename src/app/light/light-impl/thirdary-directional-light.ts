import { DirectionalLight, Light, Color } from 'three';
import { LightInterface } from '../light-interface';
import { AbstractLight } from '../abstract-light';

export class ThirdaryDirectionalLight extends AbstractLight implements LightInterface {

    constructor() {
        super();

        this.createLight();
    }

    createLight() {
        const light = new DirectionalLight(0xffffff, 1);
        light.position.set(10, 50, 100).normalize();

        light.castShadow = true;

        light.shadow.mapSize.width = 1024;
        light.shadow.mapSize.height = 1024;

        const d = 500;
        light.shadow.camera.left = - d;
        light.shadow.camera.right = d;
        light.shadow.camera.top = d;
        light.shadow.camera.bottom = - d;

        super.initLight(light);
    }

    animateLight(): void {
        super.retrieveLight().color = new Color(Math.random(), Math.random(), Math.random());
    }
}
