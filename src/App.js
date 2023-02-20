import './App.css';
import Container from './components/Container';
import useFetch from './components/UseFetch';


function App() {

  
  const { jobsdata, isPending, error } = useFetch("http://localhost:3500/jobs")
  
  return (
    <div className="App">
      <Container
      jobsdata={jobsdata}
      isPending={isPending}
      error={error}
      />
    </div>
  );
}

export default App;
