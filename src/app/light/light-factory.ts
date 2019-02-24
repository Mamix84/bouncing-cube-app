import { Light } from 'three';

export abstract class LightFactory extends Light {

    constructor() {
        super();

        this.createLight();
    }

    abstract createLight(): Light;

}
