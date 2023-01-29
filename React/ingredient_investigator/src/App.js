import './App.css';
import Camera from './components/Camera';
import { useState } from 'react';
import Results from './components/Results';
import axios from "axios";

function App() {
  const [launch, setLaunch] = useState(true);
  const [image, setImage] = useState(null);
  const [ingredients, setIngredients] = useState({"data":{
    "Hazard Value": 2,
    "Hazard Text": "Safe",
    "Ingredients":{
      "Ingredient Name 1" : {
        "Hazard Level": 2,
        "Description": "This is a very long description. Lorem ipsum dolor sit ahmet",
      },
      "Ingredient Name 2" : {
        "Hazard Level": 5,
        "Description": "This is a very long description. Lorem ipsum dolor sit ahmet",
      },
    }
  }});

  const sendImage = async(event) => {
    const form = new FormData();
    form.append('image',image, 'image.jpeg');
    try{
      const response = await axios({
        method: "POST",
        url: "/api/upload/file",
        data: form,
        headers: {...form.getHeaders()},
      })
      setIngredients(response.data)
    }
    catch(error) {
      console.log(error);
    }
  }
  return (
    <div className="App">
      {launch ?  <Camera setLaunch={setLaunch} setImage={setImage} sendImage={sendImage}/>: <Results ingredients={ingredients} />}

    </div>
  );
}

export default App;
