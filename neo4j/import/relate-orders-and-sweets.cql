MATCH (s:Sweet), (o:Order)
WHERE s.name CONTAINS 'Chocolate' OR s.name CONTAINS 'Peanut' AND o.customerName CONTAINS 'Hannah'
MERGE (o)-[:CONTAINS]->(s);

MATCH (s:Sweet), (o:Order)
WHERE s.name CONTAINS 'Rock' OR s.name CONTAINS 'Candy' AND o.customerName CONTAINS 'Hannah'
MERGE (o)-[:CONTAINS]->(s);

MATCH (s:Sweet), (o:Order)
WHERE s.name CONTAINS 'Rock' OR s.name CONTAINS 'Candy' AND o.customerName CONTAINS 'John'
MERGE (o)-[:CONTAINS]->(s);

MATCH (s:Sweet), (o:Order)
WHERE s.name CONTAINS 'Rock' OR s.name CONTAINS 'Jelly' OR s.name CONTAINS 'Candy' AND o.customerName CONTAINS 'Hannah'
MERGE (o)-[:CONTAINS]->(s);