import * as React from 'react';
import {Icon} from 'antd';

import styled from '../../../styles';

const Flex = styled.div`
  display: flex;
`;

const StyledIcon = styled(Icon)`
  margin-top: 10px;
  font-size: 18px;
  color: lightskyblue;
`;

const StyledIcons = styled(Flex)`
  justify-content: space-around;
`;

export default () => {
  return (
    <StyledIcons>
      <StyledIcon type="twitter"/>
      <StyledIcon type="facebook"/>
      <StyledIcon type="google" />
      <StyledIcon type="instagram" />
    </StyledIcons>
  );
}