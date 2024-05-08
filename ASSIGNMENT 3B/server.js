const express = require("express");
const app = express();
const PORT = 4500;

app.use(express.json());

const loginModel = require("./db");

app.get("/", async (req, resp) => {
  const result = await loginModel.find();
  resp.send(result);
});

app.post("/", async (req, resp) => {
  const data = new loginModel(req.body);
  console.log(data);
  const result = await data.save();
  resp.send(result);
});

app.patch("/:id", async (req, resp) => {
  const result = await loginModel.updateOne(
    { _id: req.params.id },
    { $set: { name: "vikas" } }
  );
  resp.send(result);
});

app.delete("/", async (req, resp) => {
  const data = req.body.id
  const result = await loginModel.deleteOne({ _id: data});
  resp.send(result);
});

app.listen(PORT, () => {
  console.log("your server is ready");
});
