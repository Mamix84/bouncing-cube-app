import { AbstractSceneManager } from '../abstract-scene-manager';
import { Scene, AxesHelper, Fog } from 'three';
import { Cube1 } from 'src/app/object/cube1/cube1';
import { PrimaryLight } from 'src/app/light/primary-light/primary-light';

export class MainScene extends AbstractSceneManager {
    constructor() {
        super();
    }

    initScene(): Scene {
        const scene = new Scene();

        const axesHelper = new AxesHelper(5);
        scene.add(axesHelper);

        return scene;
    }

    initObjects(): void {
        this.scene.fog = new Fog();

        this.addObject('cube1', new Cube1().mesh);

    }

    initLights(): void {
        this.addLight('primaryLight', new PrimaryLight());
    }

    animate(): void { }

}
