import * as React from 'react';

import Countries from './Countries'
import Leagues from './Leagues'
import Fixtures from './Fixtures'
import Bets from './Bets'
import { Button } from 'antd';

class PostTip extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Fixtures />
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </div>
    );
  }
}

export default PostTip;