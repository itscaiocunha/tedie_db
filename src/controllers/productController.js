"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processProduct = processProduct;
const db_1 = __importDefault(require("../config/db"));
const openaiService_1 = require("../services/openaiService");
const categories_1 = require("../utils/categories");
function processProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const product = yield (0, db_1.default)('produtos').whereNull('descricao').first();
            if (!product)
                return res.json({ message: 'Nenhum produto pendente.' });
            const { descricao, categoria, ean } = yield (0, openaiService_1.fetchProductData)(product.nome);
            const categoryId = (0, categories_1.validateCategory)(categoria);
            if (!categoryId)
                return res.status(400).json({ error: 'Categoria inválida.' });
            yield (0, db_1.default)('produtos').where('id', product.id).update({ descricao, categoria_id: categoryId, ean });
            res.json({ message: 'Produto atualizado com sucesso!' });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao processar produto.' });
        }
    });
}
