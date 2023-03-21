import React from 'react'
import DashboardComp from '../components/dashboardcomp';
import LoaderComp from '../components/loaderComp';

function Results() {
  return (
    <div>
        
      <DashboardComp activeResults={ {color: "#008000"} }>
        <h1><center><code>coming soon...</code></center></h1>
        <LoaderComp />
      </DashboardComp>
    </div>
  )
}

export default Results;
