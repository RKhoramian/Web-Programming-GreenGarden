const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

const plants = [
    {
        name: 'گل سرخ',
        type: 'flower',
        environment: 'outdoor',
        light: 'high',
        temperature: 'moderate',
        humidity: 'medium',
        growthStage: 'mature',
        scent: 'yes',
        season: 'spring',
        edible: 'no',
        harvestTime: 'long',
        allergies: 'yes',
        petFriendly: 'no',
        imageUrl: 'https://img.freepik.com/free-photo/vibrant-colors-nature-close-up-wet-purple-daisy-generated-by-artificial-intellingence_25030-63819.jpg?t=st=1719502374~exp=1719505974~hmac=0c120af577ae2b3efdde356c71f6856f5e49c873b02add164bd8bed4894e5a31&w=1060'
    },
    {
        name: 'گیاه آلوئه ورا',
        type: 'herb',
        environment: 'indoor',
        light: 'medium',
        temperature: 'hot',
        humidity: 'low',
        growthStage: 'young',
        scent: 'no',
        season: 'summer',
        edible: 'yes',
        harvestTime: 'medium',
        allergies: 'no',
        petFriendly: 'yes',
        imageUrl: 'https://img.freepik.com/free-psd/indoor-plant-isolated_23-2151349503.jpg?t=st=1719506384~exp=1719509984~hmac=a9408c8f91bf1a3b8c650610f7611e6f4701e18d08308d337d085ff00153fe2d&w=360'
    },
    {
        name: 'درخت اکالیپتوس',
        type: 'tree',
        environment: 'indoor',
        light: 'medium',
        temperature: 'moderate',
        humidity: 'low',
        growthStage: 'young',
        scent: 'no',
        season: 'summer',
        edible: 'yes',
        harvestTime: 'medium',
        allergies: 'no',
        petFriendly: 'yes',
        imageUrl: 'https://img.freepik.com/free-photo/ruffled-leaf-palm-plant-rattan-basket_53876-133122.jpg?t=st=1719505748~exp=1719509348~hmac=31867e8f2a7443b1764f197db823f5a9ba408b94f2286409c8ce8e15b5f4d302&w=740'
    },
    {
        name: 'گیاه لوتوس',
        type: 'herb',
        environment: 'indoor',
        light: 'medium',
        temperature: 'cold',
        humidity: 'low',
        growthStage: 'young',
        scent: 'no',
        season: 'summer',
        edible: 'yes',
        harvestTime: 'medium',
        allergies: 'no',
        petFriendly: 'yes',
        imageUrl: 'https://img.freepik.com/free-psd/indoor-plant-isolated_23-2151349492.jpg?t=st=1719505762~exp=1719509362~hmac=5f9b0a1867889ef2ce3e3548703bba794929277dd077dd3fef9ba1f031444004&w=740'
    },
    // Add more plants as needed
];

app.post('/api/suggest-plant', (req, res) => {
    const { type, environment, light, temperature, humidity, growthStage, scent, season, edible, harvestTime, allergies, petFriendly } = req.body;

    const suggestedPlant = plants.find(plant =>
        plant.type === type &&
        plant.environment === environment &&
        plant.light === light &&
        plant.temperature === temperature &&
        plant.humidity === humidity
    );
    if (suggestedPlant) {
        res.json(suggestedPlant);
    } else {
        res.status(404).json({ message: 'No matching plant found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
