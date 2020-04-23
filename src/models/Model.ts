import {observable, extendObservable} from 'mobx';
import BackendCache from '../data/BackendCache';

export type Snapshot = {
  id: string;
};

export default abstract class Model<P extends Snapshot, R extends Dict<string | string[]> = {}, C = BackendCache>{
  readonly id!: string;

  snapshot: P & Partial<R>;
  references: Partial<R>;

  protected cache: C;

  constructor(props: P, references: Required<R>, cache: C) {
    this.snapshot = {...props, ...references};
    this.references = observable(references);
    this.cache = cache;

    // assign all props and make them observable
    extendObservable(this, props);
  }
}
