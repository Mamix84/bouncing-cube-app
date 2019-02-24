import { Mesh } from 'three';

export abstract class AbstractObjectManager {

    public mesh: Mesh;

    constructor() {
       this.mesh = this.createObject();
    }

    abstract createObject(): Mesh;
}
