import React from 'react';
import { ExclamationCircleFilled, CheckCircleFilled, ClockCircleFilled } from '@ant-design/icons/lib/icons';

export type IOUTCOME = 'PENDING' | 'WON' | 'LOST';

interface Props {
  outcome: IOUTCOME;
  fontSize: string;
}

const OutcomeIcon: React.FC<Props> = ({outcome, fontSize}) => {
  switch(outcome) {
    case 'LOST':
      return <ExclamationCircleFilled style={{ fontSize, color: '#E66D52' }} />;
    case 'WON':
      return <CheckCircleFilled style={{ fontSize, color: '#77CDC6' }} />;
    default:
      return <ClockCircleFilled style={{ fontSize }} />
  }
}

export default OutcomeIcon;