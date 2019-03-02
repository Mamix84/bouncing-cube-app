import { Scene, Mesh } from 'three';
import { AbstractLight } from 'src/app/light/abstract-light';
import { AbstractObjectManager } from 'src/app/object/abstract-object-manager';

export abstract class AbstractScene {

    private scene: Scene;

    private mapLight: Map<string, AbstractLight>;

    private mapObject: Map<string, AbstractObjectManager>;

    constructor() {
        this.mapLight = new Map<string, AbstractLight>();

        this.mapObject = new Map<string, AbstractObjectManager>();
    }

    protected initScene(scene: Scene) {
        this.scene = scene;
    }

    retrieveScene(): Scene {
        return this.scene;
    }

    protected addLight(key: string, value: AbstractLight) {
        this.mapLight.set(key, value.retrieveLight());
        this.scene.add(value.retrieveLight());
    }

    protected addObject(key: string, value: Mesh) {
        this.mapObject.set(key, value);
        this.scene.add(value.mesh);
    }
}
