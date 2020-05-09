import * as React from 'react';
import styled from '../../styles';
import { Button } from 'antd';

const StyledButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 0;
`;

const ActionButtons = () => {
    return (
      <StyledButtons>
        <Button style={{ background: "#DB4437", marginRight: '10px', color: 'white' }}>
          Clear
        </Button>
        <Button style={{ background: "#4267b2", color: 'white' }}>
          Regenerate
        </Button>
      </StyledButtons>
    );
  };

export default ActionButtons;