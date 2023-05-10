<script setup lang="ts">
import TrainsTables from './components/TrainsTables.vue';
import { onMounted, computed, Ref } from 'vue';
import { trainStore } from '@/stores/trainStore'
import { Train } from './models/train';


const store = trainStore()
const trains: Ref<Train[] | null> = computed(() => store.trains)

onMounted(() => {
  store.fetchTrainsInfo()
})
</script>

<template>
  <div class="bg-dark" style="min-height: 100vh">
    <div class="container pt-4 pb-4">
      <TrainsTables :trains="trains"/>
    </div>
  </div>
</template>



<style>
</style>
