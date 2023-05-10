<script setup lang="ts">
import { Train } from '@/models/train';
import { Ref, ref } from 'vue';


const props = defineProps<{
  trains: Train[] | undefined | null
}>()

const chosenTrain: Ref<Train | null | undefined> = ref(null)

function showSpeedLimitsOfTrain(name: string): void {
  chosenTrain.value = props.trains?.find(el => el.name === name)
}

</script>

<template>
  <div class="bg-light p-3 rounded">
    <h2 class="text-center mb-4">Данные поездов</h2>
    <div class="row">
      <div class="col">
        <h4>Таблица поездов</h4>
        <table class="table table-striped mb-4" v-if="props.trains">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Наименование</th>
              <th scope="col">Описание</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="train, index in props.trains">
              <th scope="row">{{ index + 1 }}</th>
              <td><a class="nav-item" role="button" @click="showSpeedLimitsOfTrain(train.name)">{{ train.name }}</a></td>
              <td><span v-if="train.description">{{ train.description }}</span><span v-else>-</span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col" v-if="chosenTrain">
        <h4>Таблица скоростей поезда {{ chosenTrain?.name }}</h4>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Наименование</th>
              <th scope="col">Скоростной лимит</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="speedLimit, index in chosenTrain.speedLimits">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ speedLimit.name }}</td>
              <td><span v-if="speedLimit.speedLimit">{{ speedLimit.speedLimit }}</span><span v-else>-</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


