export interface ASAIDPlugin {
  getASAID(): Promise<{ token: string }>;
}
