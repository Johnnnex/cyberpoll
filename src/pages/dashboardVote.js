import React from 'react'
import DashboardComp from '../components/dashboardcomp'
import LoaderComp from '../components/loaderComp'
import candidateData from '../Data files/candidateData.json'

const DashboardVote = () => {
  const vote = (data) => {
    console.log(data)
    // candId = data
  }
  return (
    <div>
      <DashboardComp activeVote = { {color: "#008000"} }>
        <section className='vote'>
          {!candidateData && <LoaderComp />}
          {candidateData.map(data => {
            return(
              <div key ={data.id} className="card">
                <img src= {data.candidateImg} alt= {`img-${data.candidateParty}`} className="candidateImg"/>
                <div class="content">
                    <small className="candidateID">ID: {data.id}</small>
                    <h3 className="candidateName">{data.candidateName}</h3>
                    <p className="candidateParty">{data.candidateParty}</p>
                </div>
                <button onClick={() => vote(data.id)} className="vote-btn">Vote</button>
              </div>
            )
          })}
        </section>
      </DashboardComp>
    </div>
  )
}

export default DashboardVote
