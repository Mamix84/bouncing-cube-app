import { PointLight, Light, Color } from 'three';
import { LightInterface } from '../light-interface';
import { AbstractLight } from '../abstract-light';

export class PrimaryPointLight extends AbstractLight implements LightInterface {

    constructor() {
        super();

        this.createLight();
    }

    createLight() {
        const light = new PointLight(0xFFFFFF, 100, 100);
        light.position.set(0, 3, 0);
        light.castShadow = true;

        light.shadow.mapSize.width = 1024;
        light.shadow.mapSize.height = 1024;

        const d = 300;
        light.shadow.camera.left = - d;
        light.shadow.camera.right = d;
        light.shadow.camera.top = d;
        light.shadow.camera.bottom = - d;

        super.initLight(light);
    }

    animateLight() { 
     const light = super.retrieveLight();
      light.color = new Color(Math.random()*255, Math.random()*255, Math.random()*255);
    }
}
