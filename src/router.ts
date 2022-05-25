import { Router } from 'express';
import { UgyfelController } from './controller/UgyfelController';
import { KeszletController } from './controller/KeszletController';

export function getRouter(): Router {
    const router = Router();
    
    const ugyfel = new UgyfelController();
    const keszlet = new KeszletController();
   
    router.get('/ugyfel', ugyfel.getAll);
    router.get('/ugyfel/:id', ugyfel.getOne);
    router.post('/ugyfel', ugyfel.create);
    router.put('/ugyfel', ugyfel.update);
    router.delete('/ugyfel/:id', ugyfel.delete);

    router.get('/keszlet', keszlet.getAll);
    router.get('/keszlet/:id', keszlet.getOne);
    router.post('/keszlet', keszlet.create);
    router.put('/keszlet', keszlet.update);
    router.delete('/keszlet/:id', keszlet.delete);

   
    return router;
}