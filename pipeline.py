import pyodbc

# Conectar ao banco de dados
conn = pyodbc.connect(
    "DRIVER={ODBC Driver 17 for SQL Server};"
    "SERVER=tedie.database.windows.net;"
    "DATABASE=tedie_app;"
    "UID=tedie;"
    "PWD=Sqlte@20te;"
)
cursor = conn.cursor()

# Definir categorias com IDs e palavras-chave
categorias_com_id = {
    1: ("Bebidas", ["cerveja", "refrigerante", "suco", "vinho", "whisky", "água"]),
    2: ("Padaria", ["pão", "bolo", "croissant", "baguete"]),
    3: ("Açougue", ["carne", "bife", "frango", "porco", "linguiça"]),
    4: ("Beleza", ["shampoo", "sabonete", "creme", "perfume"]),
    5: ("Condimentos", ["sal", "açúcar", "ketchup", "mostarda", "pimenta"]),
    6: ("Doces", ["chocolate", "bala", "pirulito", "doce de leite"]),
    7: ("Enlatados", ["milho", "ervilha", "sardinha", "atum"]),
    8: ("Higiene", ["desodorante", "pasta de dente", "absorvente", "lenço umedecido"]),
    9: ("Hortifruti", ["banana", "maçã", "cenoura"]),
    10: ("Limpeza", ["detergente", "sabão", "amaciante", "esponja"]),
    11: ("Mantimentos", ["arroz", "feijão", "macarrão", "farinha"]),
    12: ("Pets", ["ração", "coleira", "areia para gato"]),
    13: ("Snacks", ["salgadinho", "amendoim", "pipoca", "biscoito", "batata"]),
    14: ("Naturais e Orgânicos", ["orgânico", "vegano", "sem glúten", "sem lactose"]),
    15: ("Utilitários", ["pilha", "isqueiro", "saco de lixo"]),
    16: ("Brinquedos", ["boneca", "carrinho", "jogo", "lego"]),
    17: ("Congelados", ["pizza", "hambúrguer", "polpa", "lasanha"]),
    18: ("Laticínios", ["leite", "queijo", "iogurte", "manteiga"]),
    19: ("Bebês", ["fralda", "mamadeira", "lenço umedecido"])
}

# Função para categorizar um produto e retornar ID + Nome da Categoria
def categorizar_produto(produto):
    produto = produto.lower()
    for categoria_id, (categoria_nome, palavras) in categorias_com_id.items():
        if any(palavra in produto for palavra in palavras):
            return categoria_id, f"{categoria_id} - {categoria_nome}"
    return None, "0 - Não categorizado"

# Buscar produtos no banco de dados
cursor.execute("SELECT top(10) id, nome FROM produtos")
produtos = cursor.fetchall()

# Atualizar banco de dados com o ID e Nome da Categoria
for produto in produtos:
    produto_id, nome = produto
    categoria_id, categoria_formatada = categorizar_produto(nome)

    cursor.execute("UPDATE produtos SET categoria_id = ? WHERE id = ?", 
               (categoria_id, produto_id))
    print(f"Produto: {nome} -> Categoria: {categoria_formatada}")

# Confirmar alterações e fechar conexão
conn.commit()
cursor.close()
conn.close()
