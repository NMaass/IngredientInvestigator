import "./App.css";
import Camera from "./components/Camera";
import { useState } from "react";
import Results from "./components/Results";
import axios from "axios";

function App() {
    const [launch, setLaunch] = useState(true);
    const [image, setImage] = useState(null);
    const [ingredients, setIngredients] = useState({
        HazardValue: "2",
        HazardText: "Safe",
        Ingredients: {
            Sugar: {
                HazardLevel: "5",
                Description:
                    "Sugar is a simple carbohydrate that is rapidly broken down and absorbed into the bloodstream, causing a spikes in blood sugar levels.",
            },
            "Enriched Bleached Flour": {
                HazardLevel: "3",
                Description:
                    "Enriched bleached flour is a type of white flour that has been treated with chemicals to bleaching and whitening.",
            },
            "Semi-Sweet Chocolate Chips": {
                HazardLevel: "3",
                Description:
                    "Semi-sweet chocolate chips contain sugar and cocoa butter.",
            },
            Cocoa: {
                HazardLevel: "2",
                Description:
                    "Cocoa is a dark brown powder made from the seeds of the cocoa tree. It is rich in antioxidants and has been linked to health benefits, such as improved heart health and decreased inflammation.",
            },
            "Canola or Soybean Oil": {
                HazardLevel: "2",
                Description:
                    "Canola and soybean oil are plant-based oils that are high in unhealthy omega-6 fatty acids.",
            },
            "Bittersweet Chocolate Chips": {
                HazardLevel: "2",
                Description:
                    "Bittersweet chocolate chips contain sugar, cocoa butter, and milk fat.",
            },
            "Milk Chocolate Chips": {
                HazardLevel: "1",
                Description:
                    "Milk chocolate chips are made from sugar, whole milk powder, cocoa butter, and soy lecithin.",
            },
            Salt: {
                HazardLevel: "1",
                Description:
                    "Salt is a mineral composed of sodium and chloride. It is necessary for human health, but consuming too much can lead to high blood pressure, water retention, and other health problems.",
            },
        },
    });

    const sendImage = async (event) => {
        try {
            const response = await axios.get(
                "/api/upload/file",
                image,
                "image/png;base64"
            );
            setIngredients(response);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="App">
            {launch ? (
                <Camera setLaunch={setLaunch} setImage={setImage} />
            ) : (
                <Results ingredients={ingredients} />
            )}
        </div>
    );
}

export default App;
