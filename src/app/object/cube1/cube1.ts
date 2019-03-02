import { BoxGeometry, MeshPhongMaterial, Mesh, Color } from 'three';
import { AbstractObjectManager } from '../abstract-object-manager';

export class Cube1 extends AbstractObjectManager {

    constructor() {
        super();
    }

    createObject(): Mesh {
        const geometry = new BoxGeometry(1, 1, 1);
        const alpha = 1;
        const beta = 1;
        const gamma = 1;
        const material = new MeshPhongMaterial({
            bumpScale: 1,
            color: new Color().setHSL(alpha, 0.5, gamma * 0.5 + 0.1).multiplyScalar(1 - beta * 0.2) ,
            specular: new Color(beta * 0.2, beta * 0.2, beta * 0.2) ,
            reflectivity: beta,
            shininess: Math.pow(2, alpha * 10),
        });
        const cube = new Mesh(geometry, material);
        return cube;
    }

    animateObject() { }
}
