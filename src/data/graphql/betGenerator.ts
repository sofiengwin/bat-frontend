import {ITip, tipFields} from '../../models/Tip';

export const betGeneratorQuery = `
  query betGenerator($minOdd: Float, $maxOdd: Float, $totalOdds: Float) {
    betGenerator(minOdd: $minOdd, maxOdd: $maxOdd, totalOdds: $totalOdds) {
      ${tipFields}
    }
  }
`;
export interface GeneratorOptions {
  minOdd: number;
  maxOdd: number;
  totalodds: number;
}

export interface Response {
  betGenerator: ITip[];
}