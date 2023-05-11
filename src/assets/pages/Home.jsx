import React from 'react';

// Css
import '../css/Home.css';

// Utils
import { useContentProvider } from '../utilsprovider/ContentProvider';

const Home = () => {
  const {closeSideBar} = useContentProvider();
  return (
    <div className="home" onClick={closeSideBar}>
      <div className="home-container" >
        <div className="home-flex">
          <div className="home-flex-left">
            <div className="home-flex-left-heading">
              <h5>So, you want to travel to</h5>
              <h2>Space</h2>
            </div>
            <div className="home-flex-left-text">
              <p>
                Let’s face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we’ll give you a truly out of this world experience!
              </p>
            </div>
          </div>
          <div className="home-flex-right">
            <div className="home-flex-right-heading">
              <h2>Explore</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Home);