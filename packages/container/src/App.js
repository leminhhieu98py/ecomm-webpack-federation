import React from 'react';
import Marketing from './RemoteComponents/Marketing';

export default () => {
  return (
    <>
      <h1>Root container</h1>
      {/* TODO: remove after testing AWS deployment */}
      <h1>hello</h1>
      <hr />
      <Marketing />
    </>
  );
};
