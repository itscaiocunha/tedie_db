"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCategory = validateCategory;
const CATEGORIES = [
    { id: 1, name: "Ferramentas" },
    { id: 2, name: "Materiais de Construção" },
    { id: 3, name: "Elétrica" },
    { id: 4, name: "Hidráulica" }
];
function validateCategory(categoryName) {
    var _a;
    return ((_a = CATEGORIES.find(cat => cat.name.toLowerCase() === categoryName.toLowerCase())) === null || _a === void 0 ? void 0 : _a.id) || null;
}
