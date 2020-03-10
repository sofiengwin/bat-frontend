import BackendCache from '../BackendCache';
import { UserSnapshot } from '../../models/User';

describe('BackendCache', () => {
  let cache: BackendCache;

  beforeEach(() => {
    cache = new BackendCache();
  })
  it.only('adds snapshots to correct map as records', () => {
    const snapshots = {
      users: {
        '1': {
          id: 1, userName: 'Sofien',
          email: 'sofien@example.com',
          oauthId: 'string',
          oauthType: 'string',
        }
      }
    }

    cache.upsertAll(snapshots);
    console.log('nf,mdd', cache.users.get('1').userName)
  })
})