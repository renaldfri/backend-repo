import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.get('/api/hello', (req: Request, res: Response) => {
  res.send('Hello');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});