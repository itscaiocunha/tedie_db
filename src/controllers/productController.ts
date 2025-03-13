import { Request, Response } from 'express';
import db from '../config/db';
import { fetchProductData } from '../services/openaiService';
import { validateCategory } from '../utils/categories';

export async function processProduct(req: Request, res: Response) {
    try {
        const product = await db('produtos').whereNull('descricao').first();
        if (!product) return res.json({ message: 'Nenhum produto pendente.' });

        const { descricao, categoria, ean } = await fetchProductData(product.nome);
        const categoryId = validateCategory(categoria);
        if (!categoryId) return res.status(400).json({ error: 'Categoria inválida.' });

        await db('produtos').where('id', product.id).update({ descricao, categoria_id: categoryId, ean });
        res.json({ message: 'Produto atualizado com sucesso!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao processar produto.' });
    }
}
