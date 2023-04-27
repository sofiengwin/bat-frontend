import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { provider, auth } from "../../lib/firebase";

import ErrorModal from '../ui/ErrorModal';
import {useFoster} from '../Fosterage';
import { useAppContext } from '../App';

const FirebaseAuthenticator = () => {
  const navigate = useNavigate();

  const {foster, reset} = useFoster();
  const {setAppLoading, addUser} = useAppContext()
  const onError = (_error: any) => {
    foster(() => <ErrorModal
      onCancel={reset}
      onOk={reset}
      show={true}
      actionButtonText='Close'
      message="There are some problems with your logging in."
    />)
  };

  const onCompleted = (data: Response) => {
    // console.log({data}, 'completed')
    // if(data.createUser.errors) {
    //   foster(() => <ErrorModal
    //     onCancel={reset}
    //     onOk={reset}
    //     show={true}
    //     message="There are some problems with your logging in."
    //     actionButtonText='Close'
    //     />)
    //   setAppLoading(false)
    // }

    // if (data.createUser.userDetails){
    //   console.log({data}, 'authentication');
    //   localStorage.setItem('session', data.createUser.userDetails.accessToken);
    //   addUser(data.createUser.userDetails.user);
    //   navigate("/dashboard");
    //   setAppLoading(false)
    // }
  };

  useEffect(() => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log({result})
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        console.log({error})
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    setAppLoading(false)
  }, [])

  return null;
}

export default FirebaseAuthenticator;
