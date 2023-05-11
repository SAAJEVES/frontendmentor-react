import React from 'react';

// Utils
import { useContentProvider } from '../utilsprovider/ContentProvider';

const DestinationComponent = ({dataProp}) => {
  const {filterData, handleClickDestination} = useContentProvider();
  const {data, datum} = dataProp;
  const {png} = datum.images;



  return (
    <div className='destination-component-flex'>
      <div className="destination-component-left">
        <img src={png} alt="" />
      </div>
      <div className="destination-component-right">
        <div className="destination-component-right-link">
          {
            data.map(item => (<button 
            key={item.name} 
            className={item.name === filterData ? `border-bottom` : ``}
            onClick={() =>handleClickDestination(item.name)} >
              {item.name}
            </button>))
          }
          
        </div>
        <div className="destination-component-right-info">
          <h2 className='heading'>{datum.name}</h2>
          <p className="text">{datum.description}</p>
          <div className="info">
            <div className="distance">
              <p>avg. distance</p>
              <h2>{datum.distance}</h2>
            </div>
            <div className="time">
              <p>est. travel time</p>
              <h2>{datum.travel}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DestinationComponent