import { createServer } from 'http';
const port = process.env.PORT || 3000;

createServer((req, res) => {
  res.write('Hello World!');
  res.end();
}).listen(port, '::', () => {
  console.log(`Server is definitely listening on port: ${port}`);
});
