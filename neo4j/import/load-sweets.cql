LOAD CSV WITH HEADERS FROM 'file:///sweets.csv' AS sweet
MERGE (s1:Sweet {name: sweet.name, ingredients: sweet.ingredients, price: toFloat(sweet.price), stock: sweet.stock})
