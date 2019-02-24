import { HemisphereLight, Light } from 'three';
import { LightFactory } from '../light-factory';

export class PrimaryLight extends LightFactory {

    constructor() {
        super();
    }

    createLight(): Light {
        const light = new HemisphereLight(0xffffbb, 0x080820, 1);
        return light;
    }
}
