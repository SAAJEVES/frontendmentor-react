import React from 'react';
import CrewComponent from '../component/CrewComponent';
import { useLoaderData } from 'react-router-dom';

// Data from JSON
import data from "../data.json"

// Css
import "../css/Crew.css";

// Utils
import { useContentProvider } from '../utilsprovider/ContentProvider';

const Crew = () => {
  const {crew, closeSideBar} = useContentProvider();

  // const crewMembers = useLoaderData();
  const crewMembers = data.crew;

  return (
    <div className='crew' onClick={closeSideBar} >
      <div className="crew-container">
        <h3> <span>02</span> meet your crew</h3>
        <div className="crew-member">
          {
            crewMembers.map((member) => {
              if (member.name === crew) {
                return (<CrewComponent key={member.name} data={{crewMembers, member }} />)
              }
              
              
            })
          }
        </div>
      </div>
    </div>
  )
}


/* export const crewData = async() => {
  const crew = await fetch("http://localhost:3000/crew");
  return crew.json()
} */

export default React.memo(Crew);