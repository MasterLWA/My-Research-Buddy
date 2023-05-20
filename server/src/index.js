import express from 'express';

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Backend working well!');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
