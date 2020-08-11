import * as React from 'react';
import { Spin } from 'antd';
import styled from '../../styles';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  width: 100%;
  height: 100%;
`;

const Spinner = () => {
  return (
    <Container>
      <Spin size="large" />
    </Container>
  );
};

export default Spinner;