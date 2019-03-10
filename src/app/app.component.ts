import { Component, OnInit, HostListener } from '@angular/core';
import { WebGLRenderer, Scene, Camera } from 'three';
import { MainCamera } from './camera/main-camera';
import { MainScene } from './scene/scene-impl/main-scene';
import { SceneInterface } from './scene/scene-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private renderer: WebGLRenderer;
  private mainScene: MainScene;
  private scene: Scene;
  private camera: Camera;
  private animation: any;

  constructor() { }

  ngOnInit() {
    // Renderer
    this.renderer = new WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.autoClear = true;
    this.renderer.shadowMap.enabled = true;
    this.renderer.gammaInput = true;
    this.renderer.gammaOutput = true;

    // Scene
    this.mainScene = new MainScene();
    this.scene = this.mainScene.retrieveScene();

    // Camera
    this.camera = new MainCamera();
    this.scene.add(this.camera.retrieveCamera());

    // Canvas
    document.getElementById('canvas').appendChild(this.renderer.domElement);

    // Animation
    this.animate();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate(): any {
    const requestId = requestAnimationFrame(this.animate.bind(this));

    this.mainScene.animate();

    this.animation = this.renderer.render(this.scene, this.camera.retrieveCamera());
  }
}
