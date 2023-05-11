import { defineStore } from 'pinia'
import trainApi from '@/services/api/trainsApi'
import { TrainState } from '@/stores/trainState'
import { Train } from '@/models/train'

export const trainStore = defineStore('train', {
   state: () => ({
      trains: null,
   } as TrainState),
   actions: {
      async fetchTrainsInfo() {
         const { data, error } = await trainApi.getTrainsInfo()
         if (error) console.log('Ошибка в получении информации о поездах')
         if (data) {
            this.trains = data
         }
      },
      updateTrainSpeedLimits (train: Train): void {
         trainApi.postTrainSpeedLimits(train)
       },
   }
}) 