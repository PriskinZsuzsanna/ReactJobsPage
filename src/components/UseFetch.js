//Custom Hook: needs to start with the word: use
import { useState, useEffect } from 'react'

const useFetch = (url) => {
    
    const [jobsdata, setJobsdata] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] =useState(null)


    useEffect(() => {//runs every render
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) { //fetch error
                        throw Error('could not fetch data') //throw error with our own text
                    }
                    return res.json()
                })
                .then((data) => {
                    setJobsdata(data)
                    setIsPending(false)
                    setError(null)
                })
                .catch((err) => {
                    if(err.name === 'AbortError') {
                        console.log('fetch aborted')
                    } else {
                        setError(err.message) //network error message or catching the thrown fetch error with message
                        setIsPending(false)
                    }
                })
        }, 1000)

        return () => abortCont.abort(); //pause fetch
    }, [url]) //runs only at first render

   
    return { jobsdata, isPending, error}
}

export default useFetch;