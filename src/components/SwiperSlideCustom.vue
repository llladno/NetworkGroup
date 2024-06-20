<template>
  <div class="swiper__custom">
    <swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="50"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
    >
      <swiper-slide v-for="img in imgs">
        <RouterLink :to='`/NetworkGroup/card/${img.id}`'><img :src="img.img"></RouterLink>
      </swiper-slide>
    </swiper>
  </div>

</template>
<script>
// import Swiper core and required modules
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';

// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import {ref} from "vue";
import Api from "../api/Api.ts";


// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const imgs = ref([])
    const onSwiper = () => {
      Api.getModificationsImg().then((data) => {
        imgs.value = data
      })
    };
    return {
      imgs,
      onSwiper,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    };
  },
};
</script>

<style>
.swiper__custom {
  height: 500px;
  width: 100%;
  max-width: 900px;

  .swiper {
    width: 100%;
    height: 100%;

    .swiper-slide {
      height: 200px;

      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>