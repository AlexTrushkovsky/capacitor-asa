import { WebPlugin } from '@capacitor/core';

import type { ASAIDPlugin } from './definitions';

export class ASAIDWeb extends WebPlugin implements ASAIDPlugin {
  getASAID(): Promise<{ token: string; }> {
    throw this.unavailable('capacitor-asa-id unavailable on web');
  }
}
