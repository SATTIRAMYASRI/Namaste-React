import ReactDOM from 'react-dom/client'
import React from 'react';



const Header=()=>{
  return (<div className="header">
    <div className="logo-container">
      {/* <img className="logo"
      src="data:image/png;base64,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"
      /> */}
     
    </div>
    <div className="nav_items">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    
  </div>)
}

const ResCard=(cardData)=>{
  return (
    <div className="res-card-container">
      <img className="res-card-img" src={cardData.image_url}/>
      <h1>{cardData.food_name}</h1>
      <h3>{cardData.rating}</h3>
      <h3>{cardData.delivery_time}  Min</h3>
    </div>
  )
}

const Body=()=>{
  return(
    <div className='body-container'>
      <h1>Search</h1>
      <div className='res-container'>
          {
            // jsonData.map((data,index)=>{
              
              <ResCard cardData={jsonData[0]}/>
            // })
          }
      </div>
    </div>
  )
}

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
