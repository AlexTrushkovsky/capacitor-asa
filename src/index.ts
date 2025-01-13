import { registerPlugin } from '@capacitor/core';

import type { ASAIDPlugin } from './definitions';

const ASAID = registerPlugin<ASAIDPlugin>('ASAID', {
  web: () => import('./web').then((m) => new m.ASAIDWeb()),
});

export * from './definitions';
export { ASAID };
