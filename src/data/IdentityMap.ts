import {action, keys, observable} from 'mobx';
import Model, {Snapshot} from '../models/Model';

export type RecordFactory<M, S> = (s: S) => M;

export default class IdentityMap<S extends Snapshot, M extends Model<any>> {
  private factory: RecordFactory<M, S>;
  private map = observable.map<string, M>({});

  constructor(factory: RecordFactory<M, S>) {
    this.factory = factory;
  }

  @action
  set(snapshot: S) {
    const existing = this.map.get(snapshot.id);
    if (existing) {
      existing.merge(snapshot);
      return existing;
    } else {
      this.map.set(snapshot.id, this.factory(snapshot));
      return this.map.get(snapshot.id);
    }
  }

  get(id: string) {
    return this.map.get(id);
  }

  // a concession to testing
  keys() {
    return keys(this.map);
  }
}
