import { Scene, Mesh, Light } from 'three';

export abstract class AbstractSceneManager {

    protected mapObjects: Map<string, Mesh>;

    protected mapLights: Map<string, Light>;

    public scene: Scene;

    constructor() {
        this.mapObjects = new Map<string, Mesh>();

        this.mapLights = new Map<string, Light>();

        this.createScene();
    }

    createScene() {
        this.scene = this.initScene();

        this.initObjects();

        this.initLights();
    }

    abstract initScene(): Scene;

    abstract initObjects(): void;

    abstract initLights(): void;

    protected addObject(key: string, mesh: Mesh) {
        this.mapObjects.set(key, mesh);
        this.scene.add(mesh);
    }

    protected addLight(key: string, light: Light) {
        this.mapLights.set(key, light);
        this.scene.add(light);
    }
}
