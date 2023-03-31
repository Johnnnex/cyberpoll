import React from 'react'
import DashboardComp from '../components/dashboardcomp'
import LoaderComp from '../components/loaderComp'

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
