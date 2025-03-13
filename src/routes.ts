import { Router, Request, Response } from 'express';
import { processProduct } from './controllers/productController';

const router = Router();

router.post('/process-product', async (req: Request, res: Response) => {
    await processProduct(req, res);
});

export default router;
