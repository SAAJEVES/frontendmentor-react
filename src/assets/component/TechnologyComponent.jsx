import React from 'react';

// Utils
import { useContentProvider } from '../utilsprovider/ContentProvider';


const TechnologyComponent = ({dataprop}) => {
  const {spaceV, width, handleClickTechnology} = useContentProvider();
  const [tech, techdata] = dataprop;

  return (
    <div className="technologycomponent">
      <div className="technologycomponent-flex">
        <div className="technologycomponent-flex-left">
          <div className="technologycomponent-flex-left-links">
            {
              techdata.map((link, index) => {
                return <div className={spaceV === link.name ? "link background" : "link"} key={link.name} onClick={() => handleClickTechnology(link.name)}>{index + 1}</div>
              })
            }
          </div>
          <div className="technologycomponent-flex-left-info">
            <h5>the terminology...</h5>
            <h2>{tech.name}</h2>
            <p className="description">{tech.description}</p>
          </div>
        </div>
        <div className="technologycomponent-flex-right">
          <img src={width > 768 ? tech.images.portrait : tech.images.landscape} alt={tech.name} />
        </div>
      </div>
    </div>
  )
}

export default React.memo(TechnologyComponent);