import * as React from 'react';
import styled from '../../styles';
import { Button } from 'antd';

const StyledButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 10px;
`;

interface Props {
  resetAcummulation: () => void;
  onSave: () => void;
}

const ActionButtons: React.FC<Props> = ({resetAcummulation, onSave}) => {
    return (
      <StyledButtons>
        <Button style={{ background: "#DB4437", marginRight: '10px', color: 'white' }} onClick={() => resetAcummulation()}>
          Reset
        </Button>
        <Button style={{ background: "#4267b2", color: 'white' }} onClick={onSave}>
          Save
        </Button>
      </StyledButtons>
    );
  };

export default ActionButtons;