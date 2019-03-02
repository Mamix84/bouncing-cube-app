import { HemisphereLight, Light } from 'three';
import { LightInterface } from '../light-interface';
import { AbstractLight } from '../abstract-light';

export class PrimaryLight extends AbstractLight implements LightInterface {

    constructor() {
        super();

        this.createLight();
    }

    createLight() {
        const light = new HemisphereLight(0xffffbb, 0x080820, 1);
        super.initLight(light);
    }

    animateLight() { }
}
