import ReactDOM from 'react-dom/client'
import React from 'react';
import Header from './src/Component/Header'
import Body from './src/Component/Body'

const AppLayout=()=>{
    return (
      <div className="app">
        <Header/>
        <Body/>
      </div>
    )
  }

const react=ReactDOM.createRoot(document.getElementById("root"));

react.render(<AppLayout/>)