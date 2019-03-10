import { PlaneGeometry, MeshPhongMaterial, Mesh, Color, DoubleSide } from 'three';
import { AbstractMesh } from '../abstract-mesh';
import { MeshInterface } from '../mesh-interface';

export class Plane extends AbstractMesh implements MeshInterface {

    constructor() {
        super();

        this.createMesh();
    }

    createMesh(): void {
        const geometry = new PlaneGeometry(100, 100, 102);
        const material = new MeshPhongMaterial({ color: 0xffffff, side: DoubleSide });
        const plane = new Mesh(geometry, material);
        plane.rotation.x = -Math.PI / 2;
        plane.castShadow = true;
        plane.receiveShadow = true;
        super.initMesh(plane);
    }

    animateMesh(): void { }
}
