import React from 'react'
import './Container.css'
import JobContainer from './JobContainer'


const Container = ({ jobsdata, isPending, error }) => {

  return (
    <div className='container'>
      <h1>IT PROGRAMOZÁZÓ, FEJLESZTŐ ÁLLÁSOK</h1>

      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {jobsdata &&

        jobsdata.map((job) => (
          <JobContainer
            pozicio={job.pozicio}
            ceg={job.ceg}
            cim={job.cim}
            date={job.date}
            munkaido={job.munkaido}
            elvarasok={job.elvarasok}
            technologiak={job.technologiak}
            juttatasok={job.juttatasok}
            eszkozok={job.eszkozok}
            applyText="Jelentkezem"
          />
        )
        )}


    </div>
  )
}

export default Container
