import { Object3D } from 'three';

export abstract class AbstractObject {

    private object: Object3D;

    constructor() { }

    protected initObject(object: Object3D) {
        this.object = object;
    }

    retrieveObject(): Object3D {
        return this.object;
    }

    abstract animateObject(): void;
}
