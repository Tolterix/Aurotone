import React from 'react'
import { StateContext } from '../../../State'
import './subList.css'
import axios from 'axios'



export default function SubList() {
  let { HomepageListing, apiURL } = React.useContext(StateContext)
  let context = React.useContext(StateContext)

  React.useEffect(() => {
    axios.get(apiURL+`current/runners`)
      .then(res => {
        let tArr1 = res.data.map(i => {
          return (
            `runner: ${i.name}  restraunts: ${i.restraunts}` + '\n' +
            `drop off location: ${i.dropOffLocation}` + '\n' +
            `drop off time: ${i.dropOffTime}`)
        })
        let tArr2 = res.data.map(i => {
          return i.restraunts
        })

        context.setState({
          HomepageListing: {
            ...HomepageListing,
            Runner: {
              ...HomepageListing.Runner,
              listings: tArr1
            },
            Restaurants: {
              ...HomepageListing.Restaurants,
              listings: tArr2
            }
          }
        })
      })
      .catch(err => {
        console.log(err)
      })
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
      <div className="content">
        {Object.keys(HomepageListing).map(ListingGroup => {
            return(
            <div className='individualBox'>
              <h4 className = 'titleBox' id= 'title'>{HomepageListing[ListingGroup].title}</h4>
              <ul className='list_items'>
                { HomepageListing[ListingGroup].listings.map(listing => <div><pre>{listing}</pre></div>)}
              </ul>
            </div>              
            )
        })}
      </div>
  )
}
