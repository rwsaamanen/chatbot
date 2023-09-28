const cookieSession = require('cookie-session');
const session = require('express-session');
const express = require('express');
const cors = require('cors');
const passportSetup = require('./passport');
const passport = require('passport');
const authRoutes = require('./routes/auth');
const bodyParser = require('body-parser');
const app = express();
const OpenAI = require("openai").default;

console.log('Hello World');

app.use(session({
    name: "session",
    secret: 'key1',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());

app.use(cors({
    origin: "http://localhost:3001",
    methods: "GET, POST, PUT, DELETE, OPTIONS, PATCH, HEAD",
    credentials: true,
}));

app.use('/auth', authRoutes);

// GPT-3

const openai = new OpenAI({ apiKey: API-KEY });
const port = 5000;


app.post('/', async (req, res) => {
    const { message } = req.body.message;
    console.log(message);

   const completion = await openai.completions.create({
        model: "gpt-3.5-turbo-instruct",
        prompt: `${message}`,
        max_tokens: 100,
        temperature: 0.5
      });
      console.log(completion)
      if (
        completion &&
        completion.choices &&
        completion.choices.length > 0 &&
        completion.choices[0].text
    ) {
        const generatedText = completion.choices[0].text;
        console.log("Generated Text:", generatedText);

        res.json({ message: generatedText });
    } else {
        res.status(500).json({ error: "Invalid API response" });
    }
});

app.listen(port, () => {
    console.log('Server running on port 5000')
});
