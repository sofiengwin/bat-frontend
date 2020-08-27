import {IOffer, offerFields} from '../../models/Offer';

export const fetchOffersQuery = `
  query fetchOffers {
    fetchOffers {
      ${offerFields}
    }
  }
`;

export interface Response {
  fetchOffers: IOffer[],
}