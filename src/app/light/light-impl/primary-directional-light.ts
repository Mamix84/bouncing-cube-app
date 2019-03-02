import { DirectionalLight, Light } from 'three';
import { LightInterface } from '../light-interface';
import { AbstractLight } from '../abstract-light';

export class PrimaryDirectionalLight extends AbstractLight implements LightInterface {

    constructor() {
        super();

        this.createLight();
    }

    createLight() {
        const light = new DirectionalLight(0xffffff, 1);
        light.position.set(3, 3, 3).normalize();
        super.initLight(light);
    }

    animateLight() { }
}
