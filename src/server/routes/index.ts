import { Router } from 'express';


const router = Router();

router.get('/test1', (request, response) => {
  return response.send('Hello Dev List!');
});

router.post('/test1', (request, response) => {
  return response.send('Hello Dev Post!');
});

export { router };
