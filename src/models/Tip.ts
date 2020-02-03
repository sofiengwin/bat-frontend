import {types, IModelType} from 'mobx-state-tree';

interface Props {
  id: string;
  bet: string;
  message: string;
  outcome: boolean;
}

type TipModel = IModelType<any, any>

const TipProps: TipModel = types.model().props({
  id: types.identifier,
  bet: types.string,
  message: types.string,
  outcome: types.boolean
});

const Tip = TipProps.named('Tip')

export type ITip = typeof Tip.Type
export default Tip;


