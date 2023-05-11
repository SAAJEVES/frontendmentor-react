import React, { useContext, useEffect,useState } from 'react';

const createContent = React.createContext(null);

const ContentProvider = ({children}) => {
  // SideBar
  const [sideBar, setSideBar] = useState(false);

  const openSideBar = () => {
    setSideBar(true);
  }

  const closeSideBar = () => {
    setSideBar(false);
  }

  // Destination
  const [filterData, setFilterData] = useState("Moon");

  const handleClickDestination = (name) => {
    setFilterData(name);
  }

  // Crew
  const [crew, setCrew] = useState("Anousheh Ansari");

  const handleClickCrew = (name) => {
    setCrew(name);
  }

  // Technology
  const [width, setWidth] = useState(window.innerWidth);
  const [spaceV, setSpaceV] = useState("Launch vehicle");

  const handleClickTechnology = (name) => {
    setSpaceV(name);
  }


  // Loaders
  const [load, setLoad] = useState(true);

  const resetLoad = () => {
    setLoad(true);
  }


  return (
    <createContent.Provider value={{ sideBar, openSideBar, closeSideBar, filterData, setFilterData, handleClickDestination, crew, handleClickCrew, width, setWidth, spaceV, setSpaceV, handleClickTechnology}}>
      {children}
    </createContent.Provider>
  )
}

export const useContentProvider = () => {
  return useContext(createContent);
}

export default ContentProvider;