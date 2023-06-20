<script setup lang="ts">
import * as THREE from "three";
import { ref, onMounted } from "vue";
import { LabyrinthCanvas } from "../three-modules/canvas/labyrinth-canvas";
import { Wall, WallLocation } from "../three-modules/objects3D/wall/wall";

const canvasRef = ref(null);

onMounted(() => {
  const canvas = canvasRef.value;
  if (!canvas) {
    return;
  }

  const labyrinth = new LabyrinthCanvas(canvas);
  const wallLocation: WallLocation = {
    init: new THREE.Vector3(0, 0, 0),
    end: new THREE.Vector3(0, 0, 100),
  }
  const wall = new Wall(wallLocation);

  labyrinth.addObject(wall);
  labyrinth.animate()

});


</script>

<template>
  <div class="main-panel">
    <canvas class="canvas" ref="canvasRef"></canvas>
  </div>
</template>

<style scoped>
.main-panel {
  margin: 50px;
  width: 90vw;
  height: 80vh;
  background-color: #ff0000;
}
.canvas {
  width: 100%;
  height: 100%;
}
</style>