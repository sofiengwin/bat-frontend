import React from 'react';
import { ExclamationCircleFilled, CheckCircleFilled, ClockCircleOutlined } from '@ant-design/icons';
import {IOUTCOME} from '../../models/Tip';

interface Props {
  outcome: IOUTCOME;
  fontSize: string;
}

const OutcomeIcon: React.FC<Props> = ({outcome, fontSize}) => {
  switch(outcome) {
    case 'LOST':
      return <ExclamationCircleFilled />;
    case 'WON':
      return <CheckCircleFilled />;
    default:
      return <ClockCircleOutlined />
  }
}

export default OutcomeIcon;