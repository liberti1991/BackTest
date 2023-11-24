import { Router } from 'express';


const router = Router();

router.get('/test1', (request, response) => {
  return response.json('Hello Dev List!');
});

router.post('/test1noia', (request, response) => {
  return response.json('noia');
});

export { router };
