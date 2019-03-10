import { Mesh } from 'three';

export abstract class AbstractMesh {

    private mesh: Mesh;

    constructor() { }

    protected initMesh(mesh: Mesh) {
        this.mesh = mesh;
    }

    retrieveMesh(): Mesh {
        return this.mesh;
    }

    abstract animateMesh(): void;
}
