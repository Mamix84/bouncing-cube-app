import { Light } from 'three';

export abstract class AbstractLight {

    private light: Light;

    constructor() { }

    protected initLight(light: Light) {
        this.light = light;
    }

    retrieveLight(): Light {
        return this.light;
    }
  
    abstract animateLight: void ();
}
