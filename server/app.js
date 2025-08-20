import express from "express";
const app = express();
const PORT = 5000;
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/register", (req, res) => {
  res.json({ message: "this is register page" });
});

app.get("/global", (req, res) => {
  res.json({ message: "this is global page" });
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});