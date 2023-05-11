import React from 'react';

// Utils
import { useContentProvider } from '../utilsprovider/ContentProvider';

const CrewComponent = ( {data} ) => {
  const {crew, handleClickCrew} = useContentProvider();

  const {crewMembers, member} = data;

  return (
    <div className="crewcomponent">
      <div className="crewcomponent-flex">
        <div className="crewcomponent-flex-left">
          <h4>{member.role}</h4>
          <h2>{member.name}</h2>
          <p >{member.bio}</p>

          <div className="crewcomponent-links">
            {
              crewMembers.map(person => {
                return <div key={person.name} className={`${person.name === crew ? "link link-active" : "link"}`} onClick={() => handleClickCrew(person.name)}></div>
              })
            }
          </div>
        </div>
        <div className="crewcomponent-flex-right">
          <img src={member.images.png} alt="" />
        </div>
      </div>
    </div>
  )
}

export default React.memo(CrewComponent);