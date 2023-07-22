import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const VITE_OPENAI_API_KEY = process.env.VITE_OPENAI_API_KEY;
console.log(VITE_OPENAI_API_KEY)


const config = new Configuration({
    apiKey: VITE_OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);


const app = express();
app.use(bodyParser.json());
app.use(cors());

// const history = [];

// const messages = [];
// for (const [input_text, completion_text] of history) {
//     messages.push({ role: "user", content: input_text });
//     messages.push({ role: "assistant", content: completion_text });
// }

app.post("/chat", async (req, res) => {
    const { message } = req.body;
    console.log(message);

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            { role: "system", content: "You are a helpful assistant that provides recipes. Please give your recipes in this format: First line is '[Dish Name]', the next lines are 'Ingredients:' followed by a list, and then 'Instructions:' followed by a step-by-step guide." },
            { role: "system", content: "Do not start the answer with Sure, Here's ... | Just start directly with the Dish Name" },
            { role: "user", content: `Can you give me a recipe for ${message}?` },
        ]
    });


    res.json({
        completion: completion.data.choices[0].message
    })
    // console.log(completion.data.choices[0].message);
    // res.send(completion.data.choices[0].message);
});

const PORT = 8020;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));