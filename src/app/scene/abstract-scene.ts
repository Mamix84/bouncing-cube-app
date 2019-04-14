import { Scene, Mesh } from 'three';
import { AbstractLight } from 'src/app/light/abstract-light';
import { AbstractMesh } from 'src/app/object/abstract-mesh';
import { AbstractObject } from 'src/app/object/abstract-object';

export abstract class AbstractScene {

    private scene: Scene;

    private mapLight: Map<string, AbstractLight>;

    private mapObject: Map<string, AbstractMesh>;

    private mapObjectLoad: Map<string, AbstractObject>;

    constructor() {
        this.mapLight = new Map<string, AbstractLight>();

        this.mapObject = new Map<string, AbstractMesh>();

        this.mapObjectLoad = new Map<string, AbstractObject>();
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

    protected addObjectLoad(key: string, value: AbstractObject) {
        this.mapObjectLoad.set(key, value);
        this.scene.add(value.retrieveObject());
    }

    protected retrieveObjectLoad(key: string): AbstractObject {
        return this.mapObjectLoad.get(key);
    }

}
