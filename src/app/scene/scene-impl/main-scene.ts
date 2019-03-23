import { Scene, AxesHelper, Fog, Light, Mesh } from 'three';
import { Cube1 } from 'src/app/object/mesh-impl/cube1';
import { PrimaryLight } from 'src/app/light/light-impl/primary-light';
import { PrimaryAmbientLight } from 'src/app/light/light-impl/primary-ambient-light';
import { PrimaryDirectionalLight } from 'src/app/light/light-impl/primary-directional-light';
import { PrimaryPointLight } from 'src/app/light/light-impl/primary-point-light';
import { AbstractScene } from '../abstract-scene';
import { SceneInterface } from '../scene-interface';
import { Plane } from 'src/app/object/mesh-impl/plane';
import { MarshallCube } from 'src/app/object/mesh-impl/marshall-cube';
import { ChaseCube } from 'src/app/object/mesh-impl/chase-cube';

export class MainScene extends AbstractScene implements SceneInterface {

    constructor() {
        super();

        const scene = new Scene();
        super.initScene(scene);

        this.initLights();

        this.initObjects();
    }

    initObjects(): void {
        const axesHelper = new AxesHelper(5);
        // this.retrieveScene().add(axesHelper);

        super.addObject('marshallCube', new MarshallCube());
        super.addObject('chaseCube', new ChaseCube());
        super.addObject('plane', new Plane());
    }

    initLights(): void {
        // this.addLight('primaryLight', new PrimaryLight());
        // super.addLight('primaryAmbientLight', new PrimaryAmbientLight());
        super.addLight('primaryDirectionaLight', new PrimaryDirectionalLight());
        // super.addLight('primaryPointLight', new PrimaryPointLight());
    }

    animate(): void {
        // super.retrieveLight('primaryDirectionaLight').animateLight();
        super.retrieveObject('marshallCube').animateMesh();
        super.retrieveObject('chaseCube').animateMesh();

    }

}
