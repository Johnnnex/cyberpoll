import React from 'react'
import DashboardComp from '../components/dashboardcomp'

const Home = () => {
  return (
    <div>
      <DashboardComp activeHome = { {color: "#008000"} }>
      <h1><center><code>coming soon...</code></center></h1>
      <LoaderComp />
      </DashboardComp>
    </div>
  )
}

export default Home
