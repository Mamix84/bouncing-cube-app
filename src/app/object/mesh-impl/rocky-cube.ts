import { BoxGeometry, MeshLambertMaterial, Mesh, Color, RepeatWrapping, TextureLoader } from 'three';
import { AbstractMesh } from '../abstract-mesh';
import { MeshInterface } from '../mesh-interface';

export class RockyCube extends AbstractMesh implements MeshInterface {

    private direction = -1;

    constructor() {
        super();

        this.createMesh();
    }

    createMesh(): void {
        const geometry = new BoxGeometry(2, 2, 2);
        const alpha = 1;
        const beta = 1;
        const gamma = 1;

        const loader = new TextureLoader();
        const texture = loader.load('/assets/texture/rocky.png');
        texture.wrapS = texture.wrapT = RepeatWrapping;
        texture.repeat.set(1, 1);
        texture.anisotropy = 16;

        const material = new MeshLambertMaterial({ map: texture });

        const cube = new Mesh(geometry, material);
        cube.position.x = 12;
        cube.position.y = 1;
        cube.position.z = 0;
        cube.castShadow = true;
        cube.receiveShadow = true;
        super.initMesh(cube);
    }

    animateMesh(): void {
        if (super.retrieveMesh().position.y <= 0) {
            this.direction = 1;
            super.retrieveMesh().position.y = 0.1;
            super.retrieveMesh().position.y += 0.05;
        } else if (super.retrieveMesh().position.y >= 10) {
            this.direction = -1;
            super.retrieveMesh().position.y = 9.9;
            super.retrieveMesh().position.y -= 0.05;
        } else {
            if (this.direction === 1) {
                super.retrieveMesh().position.y += 0.05;
            } else {
                super.retrieveMesh().position.y -= 0.05;
            }
        }



    }
}