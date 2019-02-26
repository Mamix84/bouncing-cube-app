import { Component, OnInit } from '@angular/core';
import { WebGLRenderer, Scene, Camera } from 'three';
import { MainCamera } from './camera/main-camera';
import { MainScene } from './scene/main-scene';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private renderer: WebGLRenderer;
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

    // Scene
    this.scene = new MainScene();

    // Camera
    this.camera = new MainCamera();
    this.scene.add(this.camera);

    // Canvas
    document.getElementById('canvas').appendChild(this.renderer.domElement);
    window.addEventListener('resize', this.onWindowResize, false);

    // Animation
    this.animate();
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate(): any {
    const requestId = requestAnimationFrame(this.animate.bind(this));

    this.animation = this.renderer.render(this.scene, this.camera);
  }
}
