const { default: axios } = require("axios");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

app.listen();

const api_key = process.env.API_KEY;

app.get("/random", async (req, res) => {
  const fetchResult = await (
    await axios.get("https://dog.ceo/api/breeds/image/random")
  ).data;
  res.json(fetchResult);
});
