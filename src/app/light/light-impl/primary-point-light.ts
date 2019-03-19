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
      const min = Math.ceil(0);
      const max = Math.floor(255);
      const colorR = Math.floor(Math.random() * (max - min + 1)) + min;
      const colorG = Math.floor(Math.random() * (max - min + 1)) + min;
      const colorB = Math.floor(Math.random() * (max - min + 1)) + min;
      // light.color = new Color(colorR, colorG, colorB);
      light.color = new Color(Math.random(), Math.random(), Math.random());
    }
}
