import app from "./app";

const port = 3001;

app.listen(port, () => {
  console.log(`Server in ${port}`);
  console.log(`CTRL + Clique em http://localhost:${port}`);
});
