import express from "express";

const app = express();
app.use(express.json());
app.post("/siginin", (req, res) => {
  console.log("username");
  const username = req.body.username;

  res.send({
    username: username,
  });
});

app.listen(3001, () => {
  console.log("lisning on 3000");
});
