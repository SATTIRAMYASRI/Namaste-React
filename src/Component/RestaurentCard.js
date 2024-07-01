import restaurantList from '../utils/data'

const RestaurentCard=()=>{
    return(
     <div className='res-container'>
            {
              restaurantList.map((data,index)=>{
                return <div key={index} class="res-card-container">
                  <h1 class="res-card-heading">{data.data.name}</h1>
                   <h3>{data.data.avgRating}</h3>
                   <h3>{data.data.deliveryTime} Min</h3>
                </div>
              })
            }
        </div>
    )
  }

export default RestaurentCard;