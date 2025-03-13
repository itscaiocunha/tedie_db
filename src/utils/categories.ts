const CATEGORIES = [
    { id: 1, name: "Ferramentas" },
    { id: 2, name: "Materiais de Construção" },
    { id: 3, name: "Elétrica" },
    { id: 4, name: "Hidráulica" }
];

export function validateCategory(categoryName: string) {
    return CATEGORIES.find(cat => cat.name.toLowerCase() === categoryName.toLowerCase())?.id || null;
}
