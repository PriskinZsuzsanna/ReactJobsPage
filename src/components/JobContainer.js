import React from 'react'
import './JobContainer.css'


const JobContainer = ({pozicio, ceg, cim, date, munkaido, elvarasok, technologiak, juttatasok, eszkozok, applyText }) => {
    return (
        <div>
            <div className="job-container">

                <div className="job-header section">
                    <div className="job-header-text">
                        <h2>{pozicio}</h2>
                        <h3>{ceg}</h3>
                        <p>{cim}</p>
                    </div>
                    <div className="job-header-date">
                        <button className="button">{date}</button>
                    </div>
                </div>

                <div className="job-body section">
                    <div className="job-details">
                        <div className="job-details-section">
                            <h3>Munkaidő, foglalkoztatás jellege</h3>
                            <p>{munkaido}</p>
                        </div>
                        <div className="job-details-section">
                            <h3>Elvárások:</h3>
                            {elvarasok.map((elvaras) => (
                                <p>{elvaras}</p>
                            ))}
                        </div>
                        <div className="job-details-section">
                            <h3>Elvárt Technológiák:</h3>
                            {technologiak.map((technologia) => (
                                <button className="button">{technologia}</button>
                            ))}
                        </div>
                        <div className="job-details-section">
                            <h3>Juttatások</h3>
                            {juttatasok.map((juttatas) => (
                                <p>{juttatas}</p>
                            ))}
                        </div>
                        <div className="job-details-section">
                            <h3>Biztosított eszközök</h3>
                            {eszkozok.map((eszkoz) => (
                                <button className="button">{eszkoz}</button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="job-footer section">
                    <div className="apply-btn">
                        <button className="btn">{applyText}</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default JobContainer
