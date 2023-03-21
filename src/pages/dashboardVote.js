import React from 'react'
import DashboardComp from '../components/dashboardcomp'
import LoaderComp from '../components/loaderComp'
import candidateData from '../Data files/candidateData.json'

const DashboardVote = () => {
  return (
    <div>
      <DashboardComp activeVote = { {color: "#008000"} }>
        <section className='vote'>
          {!candidateData && <LoaderComp />}
          {candidateData.map(data => {
            return(
              <div className="card">
                <img src= {data.candidateImg} alt= {`img-${data.candidateParty}`} class="candidateImg"/>
                <div class="content">
                    <small class="candidateID">ID: {data.id}</small>
                    <h3 class="candidateName">{data.candidateName}</h3>
                    <p class="candidateParty">{data.candidateParty}</p>
                </div>
                <button class="vote-btn">Vote</button>
              </div>
            )
          })}
        </section>
      </DashboardComp>
    </div>
  )
}

export default DashboardVote
