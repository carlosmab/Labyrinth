<script setup lang="ts">
import { ref } from "vue";
import { store } from "../store"

const buttonText = ref("Start Game");

const startGame = () => {
  if (store.simulationRunning) {
    buttonText.value = "Start Game";  
  } else {
    buttonText.value = "Stop Game";
  }
  store.simulationRunning = !store.simulationRunning;
}

</script>

<template>
  <div class="control-panel">
    <button class="start-button" @click="startGame">{{ buttonText }}</button>
  </div>
</template>


<style scoped>
.control-panel {
  position: fixed;
  bottom: 130px;
  right: 130px;
  width: 100px;
  height: 100px;
  padding: 10px;
  background-color: #ccccccb0;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.start-button {
  display: block;
  width: 100%;
  margin: 0 auto;
  padding: 10px 20px;
  border: none;
  background-color: #ccc;
  color: #333;
  cursor: pointer;
  transition: all 0.3s;
}

.start-button:hover {
  background-color: #aaa;
}

.start-button:active {
  background-color: #999;
}
</style>