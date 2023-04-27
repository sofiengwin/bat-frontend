import React from 'react';
import Tip from './Tip';

interface Props {
}

class Tips extends React.Component<Props> {
  render() {
    return (
      <div>
        {Array(5).fill(0).map((_, index) => {
          return <Tip key={index}/>
        })}
      </div>
    );
  }
}

export default Tips;
