import styled from "../../styles";

export const TipDetails = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 10px;
  justify-content: space-between;
  align-items: center;
`;


export const MatchName = styled.div`
  display: flex;
  width: 200px;
  @media only screen and (max-device-width: 320px) {
    max-width: 170px;
  }
`;

export const BetName = styled.div`
  display: flex;
  @media only screen and (max-device-width: 320px) {
    max-width: 170px;
  }
`;

export const LeagueTipsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(82,86,91,0.15);
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.04);
  width: 100%;
  margin: 5px;
`;

export const LeagueCountryName = styled.div`
  background: rgba(82,86,91,0.15);
  padding: 10px 5px;
`;