
# Velours API

## URL de acesso
https://velours-api.onrender.com


| Método | Descrição |
|---|---|
| `GET` | Retorna informações de um ou mais registros. |
| `POST` | Utilizado para criar um novo registro. |
| `PUT` | Atualiza dados de um registro ou altera sua situação. |
| `DELETE` | Remove um registro do sistema. |



# Produtos [/products]
    + Body

            {
                "name": "Nome Produto",
                "price": "0",
                "discount": "0"
                "quantity": "0"
                "image": "URL",
            }
