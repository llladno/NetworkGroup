<script setup lang="ts">
import SwiperSlideCustom from  "./../components/SwiperSlideCustom.vue";
</script>

<template>
  <main>
    <SwiperSlideCustom/>
    <p>Нажми на слайдер, чтобы перейти к товару</p>
  </main>
</template>

<style scoped>
main{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;

  p{
    font-size: 14px;
    opacity: 0.8;
  }
}
</style>