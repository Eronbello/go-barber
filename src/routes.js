import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ hello: 'teste' }));

export default routes;
