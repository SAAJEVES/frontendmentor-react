import React from 'react';
import {useLoaderData} from "react-router-dom";
import DestinationComponent from '../component/DestinationComponent';

// Css
import "../css/Destination.css";

// Utils
import { useContentProvider } from '../utilsprovider/ContentProvider';

const Destination = () => {
  const data = useLoaderData();
  const {closeSideBar, filterData} = useContentProvider();

  return (
    <div className="destination" onClick={closeSideBar}>
      <div className="destination-container">
      <h3><span>01</span> pick your destination</h3>
        {
          data.map((datum) => {
            if (datum.name === filterData) {
              return (
                <DestinationComponent key={datum.name} dataProp={{data, datum}} />
              )
            }
          })
        }
      </div>

    </div>
  )
}


export const destinationData = async() => {
  const destination = await fetch('http://localhost:3000/destinations');
  return destination.json();
}

export default React.memo(Destination);