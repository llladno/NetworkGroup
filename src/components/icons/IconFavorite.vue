<script setup lang="ts">
defineProps({
  isFill: Boolean
})
</script>
<template>
  <svg width="40" height="27" viewBox="0 0 40 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M7.17832 4.19829C7.96496 1.69954 10.2818 0 12.9014 0H33.5C36.8137 0 39.5 2.68629 39.5 6V21C39.5 24.3137 36.8137 27 33.5 27H5.45279C2.7507 27 0.825997 24.3762 1.6374 21.7989L7.17832 4.19829Z"
        fill="url(#paint0_linear_178_98)"/>
    <path
        d="M22.5046 16.9498L18.4871 19L19.2546 14.6576L16 11.5825L20.4913 10.9507L22.5 7L24.5087 10.9507L29 11.5825L25.7454 14.6576L26.5129 19L22.5046 16.9498Z"
        :fill=" isFill ? 'white' : 'url(#paint1_linear_178_98)'" stroke="white" stroke-width="0.8" stroke-linecap="round"
        stroke-linejoin="round"/>
    <defs>
      <linearGradient id="paint0_linear_178_98" x1="15.2903" y1="7.6415e-07" x2="34.5588" y2="39.4796"
                      gradientUnits="userSpaceOnUse">
        <stop stop-color="#DDBE77"/>
        <stop offset="0.911458" stop-color="#876516"/>
      </linearGradient>
      <linearGradient id="paint1_linear_178_98" x1="21.0323" y1="7" x2="31.0152" y2="22.1465"
                      gradientUnits="userSpaceOnUse">
        <stop stop-color="#DDBE77"/>
        <stop offset="0.911458" stop-color="#876516"/>
      </linearGradient>
    </defs>
  </svg>
</template>

<style scoped>
svg {
  transition: 0.2s;
  cursor: pointer;
}
</style>