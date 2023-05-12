import React, { useEffect} from 'react';
import { useLoaderData } from 'react-router-dom';
import TechnologyComponent from '../component/TechnologyComponent';

// Data from JSON
import data from "../data.json"

// Css
import "../css/Technology.css";

// Utils
import { useContentProvider } from '../utilsprovider/ContentProvider';

const Technology = () => {
  const {closeSideBar, setWidth, spaceV} = useContentProvider();
  // const techdata = useLoaderData();
  const techdata = data.technology;


  useEffect(() =>{
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    })

    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      })
    }
  }, [])

  return (
    <div className='technology' onClick={closeSideBar} >
      <div className="technology-container">
        <h2><span>03</span> space launch 101</h2>
        {
          techdata.map(tech => {
            if (tech.name === spaceV) {
              return (<TechnologyComponent key={tech.name} dataprop={[tech, techdata]} />)
            }
          })
        }
      </div>
    </div>
  )
}

export const technologyData = async () => {
  const data = await fetch(`http://localhost:3000/technology`);

  return data.json();
}

export default React.memo(Technology)