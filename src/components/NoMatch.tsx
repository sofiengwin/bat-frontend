import * as React from 'react';
import ErrorModal from './ui/ErrorModal';
import { useHistory } from 'react-router-dom';

const NoMatch: React.FC = () => {
  const [showError, setShowError] = React.useState(true);
  const history = useHistory();
  const backHome = () => {
    history.push('/');
    setShowError(false);
  }
  return (
    <div>
      <ErrorModal onCancel={backHome} onOk={backHome} show={showError}/>
    </div>
  );
};
export default NoMatch;