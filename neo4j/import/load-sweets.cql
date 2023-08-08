LOAD CSV WITH HEADERS FROM 'file:///sweets.csv' AS sweet
MERGE (s1:Sweet {name: sweet.name, ingredients: s1.ingredients, price: toFloat(s1.pricetoFloat), stock: toInteger(s1.stock)})