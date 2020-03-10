import BackendCache from '../data/BackendCache';
import Model from './Model';

interface Fields {
  id: string;
  homeTeam: string;
  awayTeam: string;
  score?: string;
  time: number;
}

export class Match extends Model<Fields> implements Fields {
  readonly id: string;
  readonly homeTeam: string;
  readonly awayTeam: string;
  readonly score?: string;
  readonly time: number;

  constructor(props: Fields, cache: BackendCache) {
    super(props, {}, cache);
    this.cache = cache;
  }
}