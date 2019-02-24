import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three';
import { AbstractObjectManager } from '../abstract-object-manager';

export class Cube1 extends AbstractObjectManager {

    constructor() {
        super();
    }

    createObject(): Mesh {
        const geometry = new BoxGeometry(1, 1, 1);
        const material = new MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new Mesh(geometry, material);
        return cube;
    }
}
