<script setup lang="ts">
import {onMounted, Ref, ref} from "vue";
import {Modification} from "../types/types.ts";
import Api from "../api/Api.ts";
import RecommendCard from "./RecommendCard.vue";

const modifications: Ref<Modification[]> = ref([])

const props = defineProps({
  idModification: {
    type: Number,
    required: true
  }
})

onMounted(() => {
  Api.getModificationRecommend(props.idModification).then((data) => {
    modifications.value = data.slice(0,4)
  })
})

function seeAll() {
  Api.getAllModifications().then((data) => {
    modifications.value = data
  })
}
</script>

<template>
  <div class="recommend">
    <div class="recommend__header">
      <h3>Recommend</h3>
      <p class="see-all" @click="seeAll">See all</p>
    </div>
    <div class="recommend__cards">
      <RecommendCard v-for="modification in modifications" :key="modification.id"
                     :modification="modification" />
    </div>
  </div>
</template>

<style scoped lang="scss">

.see-all{
  cursor: pointer;
  transition: 0.2s;
  &:hover{
    opacity: 0.8;
  }
}

.recommend__header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h3{
    font-weight: 400;
    font-size: 36px;
  }
  p{
    font-size: 20px;
  }
}

.recommend__cards{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  column-gap: 20px;
  row-gap: 15px;
}

</style>