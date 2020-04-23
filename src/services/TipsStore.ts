// import {types, flow} from 'mobx-state-tree';
// import Tip from '../models/Tip';
// import fetchTipsApiCall from './apis/fetchTips';

// const TipsStore = types.model('TipsStore', {
//   tips: types.map(Tip)
// }).actions((self) => ({
//   fetchTips: () => {
//     flow(function* fetchTips() {
//       const tips = yield fetchTipsApiCall()
//     })
//   }
// }))

// // export type ITipsStore === TipsStore.Type;
// export default TipsStore