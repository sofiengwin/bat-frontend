import * as React from 'react';
import {Link} from 'react-router-dom'

import styled from '../../../styles';

const Flex = styled.div`
  display: flex;
`

const StyledLink = styled.p`
  margin-right: 10px;
`


const HashTags = () => {
  return (
    <Flex>
      <StyledLink><Link to='/matches/hello'>#Hello vs Hello</Link></StyledLink>
      <StyledLink><Link to='/countries/hello'>#Hello</Link></StyledLink>
      <StyledLink><Link to='/leagues/hello'>#Hello</Link></StyledLink>
      <StyledLink><Link to='/bets/hello'>#Hello</Link></StyledLink>
    </Flex>
  );
}

export default HashTags;