import BackendCache from '../data/BackendCache';
import Model from './Model';
import Bookmaker from './Bookmaker';

interface Fields {
  id: string;
  name: string;
  amount: string;
  body: string;
}

interface References {
  bookmaker: Bookmaker;
}

type OfferSnapshot = Fields & References;

export default class Offer extends Model<Fields, References> implements Fields {
  readonly id: string;
  readonly name: string;
  readonly amount: string;
  readonly body: string;

  constructor({bookmaker, ...props}: OfferSnapshot, cache: BackendCache) {
    super(props, {bookmaker}, cache);
    this.cache = cache;
  }
}