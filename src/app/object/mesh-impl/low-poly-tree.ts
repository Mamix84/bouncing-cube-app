import { Mesh, Object3D, Scene } from 'three';
import MTLLoader from 'three-dlc/src/loaders/MTLLoader';
import OBJLoader from 'three-dlc/src/loaders/OBJLoader';
import { AbstractObject } from '../abstract-object';
import { ObjectInterface } from '../object-interface';
import { MainScene } from 'src/app/scene/scene-impl/main-scene';
import { SceneInterface } from 'src/app/scene/scene-interface';

export class LowPolyTree extends AbstractObject implements ObjectInterface {

    private mainScene: MainScene;
    private name: string;

    constructor(name: string, mainScene: MainScene) {
        super();

        this.name = name;
        this.mainScene = mainScene;

        this.createObject();
    }

    createObject(): void {
        const mtlLoader = new MTLLoader();
        const objLoader = new OBJLoader();

        let tree: Object3D;

        mtlLoader.load('assets/obj/lowpolytree.mtl', (materials) => {
            materials.preload();
            objLoader.setMaterials(materials);
            objLoader.load('assets/obj/lowpolytree.obj', (object) => {
                tree = object;
                tree.scale.x = 2;
                tree.scale.y = 2;
                tree.scale.z = 2;
                tree.position.y = 3;
                tree.position.x = -30 + Math.random() * 60;
                tree.position.z = -8 - Math.random() * 50;
                tree.castShadow = true;
                tree.receiveShadow = true;

                this.initObject(object);

                let scene: Scene;
                scene = this.mainScene.retrieveScene();
                scene.add(tree);
            });
        });

    }

    animateObject(): void {
    }
}
