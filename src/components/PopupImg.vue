<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true
  }
})
</script>

<template>
<div class="popup" @click="$emit('close')">
  <img :src="src" @click='$event.stopPropagation()'>
</div>
</template>

<style scoped lang="scss">
.popup{
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 100;
  img{
    width: 60%;
    border-radius: 20px;
  }
}
</style>