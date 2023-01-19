import { useEffect } from 'react';
import { useSearchParams, useNavigate } from "react-router-dom";

import {QUERY as createOrFindUserQuery, IFindOrCreate, Response} from '../../data/graphql/findOrCreateUser';
import { gql, useMutation } from "@apollo/client";

import ErrorModal from '../ui/ErrorModal';
import {useFoster} from '../Fosterage';
import { useAppContext } from '../App';

const Authentication = () => {
  const navigate = useNavigate();

  const {foster, reset} = useFoster();
  const {setAppLoading, addUser} = useAppContext()
  const onError = (_error: any) => {
    foster(() => <ErrorModal onCancel={reset} onOk={reset} show={true}/>)
  };

  const onCompleted = (data: Response) => {
    if(data.createUser.errors) {
      foster(() => <ErrorModal onCancel={reset} onOk={reset} show={true}/>)
    }

    if (data.createUser.userDetails){
      localStorage.setItem('session', data.createUser.userDetails.accessToken);
      addUser(data.createUser.userDetails.user);
      navigate("/dashboard");

    }
  };
  const [findOrCreateUser, {loading}] = useMutation<Response, IFindOrCreate>(gql(createOrFindUserQuery), {onCompleted, onError});
  let [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("code")) {
      findOrCreateUser({variables: {accessCode: searchParams.get("code") || ''}})
      setAppLoading(loading)
    }
  })

  return null;
}

export default Authentication;
