import React from "react";
import styled from "styled-components";
import OfferCard from "./OfferCard";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { fetchOffersQuery, Response } from "../../data/graphql/fetchOffers";
import { IOffer } from "../../models/Offer";
import AppLoadingModal from "../ui/AppLoadingModal";

const Offers = () => {
  const {loading, data} = useQuery<Response, {}>(gql(fetchOffersQuery))
  const offers = data ? data.fetchOffers : [];
  return (
    <>
      {loading ? (
        <AppLoadingModal visible={loading} />
      ) : (
        <Flex>
          {offers.map((offer: IOffer) => (
              <OfferCard
                title={offer.title}
                description={offer.description}
                link={offer.link}
                imageUrl={offer.imageUrl}
              />
            ))}
        </Flex>
      )}
    </>
  );
};

export default Offers;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;  
`;
