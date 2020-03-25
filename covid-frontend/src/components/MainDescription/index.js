import React, { useEffect } from 'react'

const MainDescription = () => {
  let mapUrl;

  useEffect(() => {
    return () => {
      mapUrl = `https://www.arcgis.com/apps/Embed/index.html?webmap=14aa9e5660cf42b5b4b546dec6ceec7c`
    }
  }, [])

  console.log(mapUrl);
  return (
    <div className="main-description">
      <div className="row">
        <div className="col-md-6">
          <div className="col-left">
            <div className="description-content">
              <h1>GLOBAL COVID19 CASES</h1>
              <iframe width="400" height="300" frameBorder="0" scrolling="no" src={mapUrl}>
              </iframe>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="col-right">
            <div className="description-body">
              <h1>WHAT WE DO:</h1>
              <p>We facilitate the connection between private investors & COVID-19 projects.  All donations are processed through stripe to get cash to the people who need it quickly.</p>
              <h1>WHO WE HELP:</h1>
              <p>We help any organized effort working to combat COVID-19 or its impacts.  If you have one, or are working on one - reach out so we can help.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainDescription;