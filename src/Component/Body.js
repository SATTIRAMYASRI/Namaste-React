import RestaurentCard from '../Component/RestaurentCard'

const Body=()=>{
    return(
      <div className='body-container'>
        <h1>Search</h1>
        <div className='res-container'>
            <RestaurentCard/>
        </div>
      </div>
    )
  }

export default Body;