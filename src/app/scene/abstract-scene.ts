import { Scene, Mesh } from 'three';
import { AbstractLight } from 'src/app/light/abstract-light';
import { AbstractMesh } from 'src/app/object/abstract-mesh';

export abstract class AbstractScene {

    private scene: Scene;

    private mapLight: Map<string, AbstractLight>;

    private mapObject: Map<string, AbstractMesh>;

    constructor() {
        this.mapLight = new Map<string, AbstractLight>();

        this.mapObject = new Map<string, AbstractMesh>();
    }

    protected initScene(scene: Scene) {
        this.scene = scene;
    }

    retrieveScene(): Scene {
        return this.scene;
    }

    protected addLight(key: string, value: AbstractLight) {
        this.mapLight.set(key, value);
        this.scene.add(value.retrieveLight());
    }

    protected retrieveLight(key: string): AbstractLight {
        return this.mapLight.get(key);
    }

    protected addObject(key: string, value: AbstractMesh) {
        this.mapObject.set(key, value);
        this.scene.add(value.retrieveMesh());
    }

    protected retrieveObject(key: string): AbstractMesh {
        return this.mapObject.get(key);
    }

}
