import React from 'react'
import Body from './component/Body/Body'
import appStore from './utilis/appStore'
import {Provider} from "react-redux";
// import { ProviderId } from 'firebase/auth'


const App = () => {
  return (
    <div className=' underline font-bold'>
    <Provider store={appStore}> 
      <Body/>
    </Provider>
    </div>
  )
}

export default App
