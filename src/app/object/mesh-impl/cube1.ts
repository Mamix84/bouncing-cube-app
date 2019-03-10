import { BoxGeometry, MeshPhongMaterial, Mesh, Color } from 'three';
import { AbstractMesh } from '../abstract-mesh';
import { MeshInterface } from '../mesh-interface';

export class Cube1 extends AbstractMesh implements MeshInterface {

    private direction = -1;

    constructor() {
        super();

        this.createMesh();
    }

    createMesh(): void {
        const geometry = new BoxGeometry(1, 1, 1);
        const alpha = 1;
        const beta = 1;
        const gamma = 1;
        const material = new MeshPhongMaterial({
            bumpScale: 1,
            color: new Color().setHSL(alpha, 0.5, gamma * 0.5 + 0.1).multiplyScalar(1 - beta * 0.2),
            specular: new Color(beta * 0.2, beta * 0.2, beta * 0.2),
            reflectivity: beta,
            shininess: Math.pow(2, alpha * 10),
        });
        const cube = new Mesh(geometry, material);
        cube.position.x = 0;
        cube.position.y = 10;
        cube.position.z = 0;
        cube.castShadow = true;
        cube.receiveShadow = true;
        super.initMesh(cube);
    }

    animateMesh(): void {
        if (super.retrieveMesh().position.y <= 0) {
            this.direction = 1;
            super.retrieveMesh().position.y = 0.1;
            super.retrieveMesh().position.y += 0.5;
        } else if (super.retrieveMesh().position.y >= 10) {
            this.direction = -1;
            super.retrieveMesh().position.y = 9.9;
            super.retrieveMesh().position.y -= 0.5;
        } else {
            if (this.direction === 1) {
                super.retrieveMesh().position.y += 0.5;
            } else {
                super.retrieveMesh().position.y -= 0.5;
            }
        }



    }
}
