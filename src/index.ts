import { app } from './server/server';
const port = 5555;

app.listen(port, () => console.log(`The application is running on the port: ${port}`));

