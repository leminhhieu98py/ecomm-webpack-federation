import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { mount } from 'auth/AuthApp';
import { useHistory } from 'react-router-dom';

const Auth = ({ onSignIn }) => {
  const authRef = useRef();
  const history = useHistory();

  const onAuthNavigate = (authLocation) => {
    const { pathname } = history.location;

    if (authLocation !== pathname) {
      history.push(authLocation);
    }
  };

  useEffect(() => {
    const { onParentNavigate } = mount(authRef.current, {
      onAuthNavigate,
      initialPath: history.location.pathname,
      onSignIn
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={authRef}></div>;
};

export default Auth;
