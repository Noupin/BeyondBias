//Third Party Imports
import React from 'react';
import { RecoilRoot } from 'recoil';

//First Party Imports
import App from './App';


const AppContainer = () => {
  return (
    <RecoilRoot>
      <App/>
    </RecoilRoot>
  );
};

export default AppContainer;
