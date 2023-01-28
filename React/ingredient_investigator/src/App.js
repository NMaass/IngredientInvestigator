import './App.css';
import Launch from './components/Launch';
import Camera from './components/Camera';
import { useState } from 'react';
import Results from './components/Results';

function App() {
  const [launch, setLaunch] = useState(true);
  return (
    <div className="App">
      {launch ?  <Launch setLaunch={setLaunch}/>: <Results/>}

    </div>
  );
}

export default App;
