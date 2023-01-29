import './App.css';
import Camera from './components/Camera';
import { useState } from 'react';
import Results from './components/Results';
import axios from "axios";

function App() {
  const [launch, setLaunch] = useState(true);
  const [image, setImage] = useState(null);
  const [ingredients, setIngredients] = useState({
    "HazardValue": "4   ",
    "HazardText": "Safe",
    "Ingredients":{
      "Ingredient Name 1" : {
        "HazardLevel": "2",
        "Description": "This is a very long description. Lorem ipsum dolor sit ahmet",
      },
      "Ingredient Name 2" : {
        "HazardLevel": "5",
        "Description": "This is a very long description. Lorem ipsum dolor sit ahmet",
      },
    }
  });

  const sendImage = async(event) => {
    try{
      const response = await axios.get("/api/upload/file", image,"image/png;base64",)
      setIngredients(response)
    }
    catch(error) {
      console.log(error);
    }
  }
  return (
    <div className="App">
      {launch ?   <Camera setLaunch={setLaunch} setImage={setImage}/>: 
                  <Results ingredients={ingredients} />}

    </div>
  );
}

export default App;
