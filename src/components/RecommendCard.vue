<script setup lang="ts">

import {Modification} from "../types/types.ts";
import IconTag from "./icons/IconTag.vue";
import IconHot from "./icons/IconHot.vue";
import IconDownload from "./icons/IconDownload.vue";
import IconFavorite from "./icons/IconFavorite.vue";
import {ref} from "vue";
import IconNew from "./icons/IconNew.vue";

const isFavorite = ref(false)

defineProps({
  modification: Object as () => Modification
})
</script>

<template>
  <div class="recommend-card" @click="$router.push(`/NetworkGroup/card/${modification?.id}`)">
    <div class="recommend-card__info" :style="{backgroundImage: `url(${modification?.img.preview})`}">
      <div class="recommend-card__tags">
        <div class="recommend-card__tag" v-for="tag in modification?.info?.tags?.slice(0,3)">
          <IconTag/>
          <p>{{ tag }}</p>
        </div>
        <div class="recommend-card__tag_status">
          <IconHot v-if="modification?.info?.status === 'HOT'"/>
          <IconNew v-if="modification?.info?.status === 'NEW'"/>
        </div>
      </div>
      <div class="recommend-card__footer">
        <div class="recommend-card__download">
          <IconDownload/>
          <p>{{ modification?.info?.downloads.replace(/\B(?=(\d{3})+(?!\d))/g, " ")}}</p>
        </div>
        <IconFavorite :isFill="isFavorite" @click="isFavorite = !isFavorite"/>
      </div>
    </div>
    <p class="modification__title">{{ modification?.title }}</p>
  </div>
</template>

<style scoped lang="scss">
@use "/src/assets/base/variables";

.recommend-card {
  width: 340px;
  height: 257px;
  border-radius: 16px;
  padding: 8px;
  background: variables.$item-card-background;
  transition: 0.2s;
  cursor: pointer;

  &:hover{
    scale: 1.01;
  }


  &__tags {
    display: flex;
    gap: 8px;
    position: relative;
  }

  &__tag {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 10px 4px 8px;
    background: variables.$item-card-background;
    border-radius: 32px;

    p {
      font-size: 13px;
    }
  }

  &__tag_status {
    position: absolute;
    top: -8px;
    right: -29.5px;
    z-index: 10;
  }

  &__info {
    padding: 8px;
    width: 100%;
    height: 197px;
    border-radius: 16px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__download {
    position: relative;
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .modification__title{
    font-size: 26px;
    margin: 8px 0;
  }
}
</style>