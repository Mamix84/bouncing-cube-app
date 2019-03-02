import { AmbientLight, Light } from 'three';
import { LightInterface } from '../light-interface';
import { AbstractLight } from '../abstract-light';

export class PrimaryAmbientLight extends AbstractLight implements LightInterface {

    constructor() {
        super();

        this.createLight();
    }

    createLight() {
        const light = new AmbientLight(0x222222);
        super.initLight(light);
    }

    animateLight() { }
}
