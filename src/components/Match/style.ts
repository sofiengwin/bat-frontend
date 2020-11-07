import styled from "styled-components";

export const Container = styled.div``;
export const Row = styled.div``;
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.2em;
`;
export const Card = styled.div`
  height: 230px;
  background: #f9fbfc;
  border-radius: 0.4em;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
  padding: 1em;

  &:hover {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.05);
  }
`;
export const Flex = styled.div`
  display: flex;
  justify-content: center;
`;
export const Header = styled.h3`
  color: #9a9a9a;
  font-size: 1.2em;
  padding-left: 0.5em;
  padding-right: 0.5em;
`;
export const Rule = styled.div`
  width: 35%;
  height: 0.1em;
  display: block;
  margin: auto;
  background: #9a9a9a;
`;
export const FlexContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .small-btn {
    align-self: flex-end;
  }
`;
export const SmallCard = styled.div<{
  height?: string;
  background?: string;
  rightRadius?: string;
  leftRadius?: string;
  padding?: string;
}>`
  height: ${(props) => (props.height ? props.height : "80px")};
  padding: ${(props) => (props.padding ? props.padding : "2em")};
  background: ${(props) => (props.background ? props.background : "#1f3672")};
  align-self: flex-end;
  border-top-left-radius: 0.3em;
  border-top-right-radius: 0.3em;
  border-bottom-left-radius: ${(props) =>
    props.leftRadius ? props.leftRadius : "0"};
  border-bottom-right-radius: ${(props) =>
    props.rightRadius ? props.rightRadius : "0"};

  .btn-content {
    display: flex;
    flex-direction: column;
    h1 {
      color: #ffffff;
      font-size: 1.8em;
      padding: 0;
      font-weight: 700;

      sub {
        margin-top: -0.5em;
      }
    }
    p {
      color: #ffffff;
      font-size: 0.9em;
      font-weight: 500;
    }
  }
`;
export const BigCard = styled.div<{ gtc?: string }>`
  display: grid;
  grid-template-columns: ${({ gtc }) => (gtc ? gtc : "")};
  height: 80px;
  width: 80%;
  border-radius: 0.3em;
  overflow: hidden;
`;
export const FirstCard = styled.div`
  height: 100%;
  background: #1f3672;

  h2 {
    color: #ffffff;
    text-align: center;
    line-height: 80px;
  }
`;
export const ThirdCard = styled.div`
  height: 100%;
  background: #778aba;

  h2 {
    color: #ffffff;
    text-align: center;
    line-height: 80px;
  }
`;
export const SecondCard = styled.div`
  background: #778aba;
  display: flex;
  flex-direction: column;

  h2 {
    color: #ffffff;
    text-align: center;
  }
`;
export const List = styled.div`
  padding: 1em;
  margin: 1em 0;
  background: #f9fbfc;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);

  p {
    padding: 0;
    margin: 0;
  }

  &:hover {
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.05);
  }
`;
// export const Container = styled.div``
