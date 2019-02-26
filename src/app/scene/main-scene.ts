import { Scene, AxesHelper, Fog, Light, Mesh } from 'three';
import { Cube1 } from 'src/app/object/cube1/cube1';
import { PrimaryLight } from 'src/app/light/primary-light/primary-light';

export class MainScene extends Scene {

    private mapLight: Map<string, Light>;

    private mapObject: Map<string, Mesh>;

    constructor() {
        super();

        this.mapLight = new Map<string, Light>();

        this.mapObject = new Map<string, Mesh>();

        const axesHelper = new AxesHelper(5);
        super.add(axesHelper);

        this.initLights();

        this.initObjects();
    }

    initObjects(): void {
        // super.fog = new Fog();

        this.addObject('cube1', new Cube1().mesh);

    }

    initLights(): void {
        this.addLight('primaryLight', new PrimaryLight());
    }

    animate(): void { }

    addLight(key: string, value: Light) {
        this.mapLight.set(key, value);
        super.add(value);
    }

    addObject(key: string, value: Mesh) {
        this.mapObject.set(key, value);
        super.add(value);
    }

}
