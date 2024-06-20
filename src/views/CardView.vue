<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted, Ref, ref, watch} from "vue";
import Api from "../api/Api.ts";
import {Modification} from "../types/types.ts";
import Recommend from "../components/Recommend.vue";
import PopupImg from "../components/PopupImg.vue";


const route = useRoute()
const id = route.params.id
const modification: Ref<Modification | undefined> = ref()
const loading = ref(true)
const popup = ref({
  isOpen: false,
  imgurl: ''
})

onMounted(() => {
  Api.getModificationById(+id).then((data) => {
    modification.value = data
  })
})

watch(() => route.params.id, (newId) => {
  Api.getModificationById(+newId).then((data) => {
    modification.value = data
  })
})

</script>

<template>
  <main>
    <div v-if="loading">Loading...</div>
    <div class="modification" v-if="modification">
      <div class="modification__preview">
        <img class="modification__preview-img" loading="lazy" :src="modification.img.preview" alt="preview"
             @load="loading = false" @click="popup = {
               isOpen: true,
               imgurl: modification.img.preview
             }"/>
        <div class="modification__preview_other">
          <img @click="popup = {
               isOpen: true,
               imgurl: image
             }" v-for="image in modification.img.other" :src="image" alt="other" class="modification-img__other">
        </div>
      </div>
      <div class="modification__info">
        <h2 class="modification__title">{{ modification.title }}</h2>
        <p class="modification__description">Description: {{ modification.description }} </p>
      </div>
    </div>
    <Recommend :idModification="+id" v-show="!loading"/>
    <PopupImg :src="popup.imgurl" v-if="popup.isOpen" @close="popup.isOpen = false"/>
  </main>
</template>

<style scoped lang="scss">
.modification-img__other {
  border-radius: 8px;
  width: auto;
  height: 95px;
}

main {
  margin: 32px auto;
  width: 100%;
  max-width: 1420px;

  @media (max-width: 1400px) {
    margin: 32px 5%;
    max-width: none;
    width: auto;
  }

  .modification {
    display: flex;
    gap: 32px;
    align-items: center;
    margin-bottom: 52px;

    &__preview {
      display: flex;
      flex-direction: column;
      gap: 40px;
      width: 50%;

      &_other{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 18px;
        img{
          width: 100%;
          object-fit: cover;
        }
      }
    }

    &__title {
      font-weight: 500;
      font-size: 46px;
      margin-bottom: 32px;
    }

    &__description {
      font-size: 26px;
    }

    &__info {
      width: 50%;
    }

    @media (max-width: 800px){
      &{
        flex-direction: column;
      }
      &__preview{
        width: 100%;
      }
      &__info {
        width: 100%;
      }
    }
  }

  .modification__preview-img {
    object-fit: cover;
    width: 100%;
    max-height: 340px;
    border-radius: 24px;
  }

}
</style>