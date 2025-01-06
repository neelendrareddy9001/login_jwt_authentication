import express from "express";

const app = express();
const PORT = process.env.PORT || 6120;

app.listen(PORT, () => {
  console.log(`Server is listening at port: ${PORT}`);
});
