import {observable, action, ObservableMap} from 'mobx';
import {Snapshot} from '../models/Model';
import Model from '../models/Model';
import Tip from '../models/Tip';
import Bookmaker from '../models/Bookmaker';
import Comment from '../models/Comment';
import { Match } from '../models/Match';
import Offer from '../models/Offer';

interface UpsertSnapshots {
  tips?: Dict<any>;
  // users?: Dict<UserSnapshot>
}

export default class BackendCache {
  // users = observable.map<string, User>({});
  tips = observable.map<string, Tip>({});
  bookmakers = observable.map<string, Bookmaker>({});
  comments = observable.map<string, Comment>({});
  matches = observable.map<string, Match>({});
  offers = observable.map<string, Offer>({});

  @action
  upsertAll(snapshotMap: UpsertSnapshots) {
    // this.upsertSnapshots<UserSnapshot, User>(snapshotMap.users || {}, this.users)
  }

  // upsertSnapshots will update or insert snapshots of a single type
  private upsertSnapshots<S extends Snapshot, M extends Model<any>>(snapshots: Dict<S>, map: ObservableMap<string, M>) {
    console.log({snapshots})
    // Object.keys(snapshots).forEach((id) => {
    //   console.log({id})
    //   map.set(id, snapshots[id]);
    // });
  }
}