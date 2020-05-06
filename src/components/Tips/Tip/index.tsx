import * as React from 'react';
import {Card, Avatar} from 'antd';

import styled from '../../../styles'
import Results from './Results'
import HashTags from './HashTags'
import TipActions from './TipActions'

const text = `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

const StyledCard = styled(Card)`
  border-bottom: 1px solid #e6ecf0;
  padding: 10px;
  background-color: #fff;
  margin-bottom: 10px;
  box-shadow: 0 2px 10px #f4f4f4;
  .ant-card-wider-padding {
    padding: unset;
  }
  .ant-card-body {
    padding: unset;
  }
  &:hover {
    background-color: #e6ecf0
  }
`;

const Text = styled.div`
  color: #14171a;
`;

const Flex = styled.div`
  display: flex;
`

const PostContainer = styled(Flex)`
  flex-direction: column;
  padding: 0 10px;
`;

const PostHeading = styled.h5`
  margin: 0;
`;

const Header = styled(Flex)`
  justify-content: space-between;
`;

class Tip extends React.Component {
  render() {
    return (
      <StyledCard>
        <Flex>
          <div>
            <Avatar size={32} icon="user" src='https://source.unsplash.com/random/1280x720'/>
          </div>
          <PostContainer>
            <Header>
              <PostHeading>Baddest Guy</PostHeading>
              <Results />
            </Header>
            <Text>
              {text}
              <HashTags />
            </Text>
            <TipActions />
          </PostContainer>
        </Flex>
      </StyledCard>
    );
  }
}

export default Tip;