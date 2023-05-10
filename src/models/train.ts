export interface Train {
  name: string,
  description: string,
  speedLimits: SpeedLimit[]
}

export interface SpeedLimit {
  name: string,
  speedLimit: number
}