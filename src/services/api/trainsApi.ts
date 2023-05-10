import Api from '@/services/api';
import { Train } from '@/models/train'
import { ApiResult } from '@/models/common';

class TrainApi {
   public async getTrainsInfo (): Promise<ApiResult<Train[]>> {
      return await Api.get('https://gist.githubusercontent.com/GlennMiller1991/152583a1bf1e057e8db06f5949ae3dda/raw/f84adf51092706ae0e7c0abc7589ad49800d8112/trains.json')
   }
}

export default new TrainApi()