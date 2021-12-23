const express = require("express");
const db = require("./db/db");

const app = express();
const port = process.env.PORT || 3000;

require("./routes/region")(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

async function main() {
  try {
    await db.connect();

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.log("Server closed: error: ", err);
  }
}

main();
