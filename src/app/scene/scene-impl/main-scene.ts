import { Scene, AxesHelper, Fog, Light, Mesh } from 'three';
import { Cube1 } from 'src/app/object/cube1/cube1';
import { AbstractLight } from 'src/app/light/abstract-light';
import { PrimaryLight } from 'src/app/light/light-impl/primary-light';
import { PrimaryAmbientLight } from 'src/app/light/light-impl/primary-ambient-light';
import { PrimaryDirectionalLight } from 'src/app/light/light-impl/primary-directional-light';
import { AbstractObjectManager } from 'src/app/object/abstract-object-manager';
import { AbstractScene } from '../abstract-scene';
import { SceneInterface } from '../scene-interface';

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
        this.retrieveScene().add(axesHelper);

        super.addObject('cube1', new Cube1());
    }

    initLights(): void {
        this.addLight('primaryLight', new PrimaryLight());
        super.addLight('primaryAmbientLight', new PrimaryAmbientLight());
        super.addLight('primaryDirectionaLight', new PrimaryDirectionalLight());
    }

    animate(): void {
       // super.mapObject.get('cube1').animateObject();
    }

}
