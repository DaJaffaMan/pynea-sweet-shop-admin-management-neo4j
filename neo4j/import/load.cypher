// Machines CSV. uuids is probably better for this
LOAD CSV WITH HEADERS FROM 'file:///machines.csv' AS machine
MERGE (m:Machine {id: toInteger(machine.machineId)})
SET m.type = machine.type,
  m.capacity = toInteger(machine.capacity),
  m.status = machine.status,

LOAD CSV WITH HEADERS FROM 'file:///sweets.csv' AS sweet
MERGE (s:Sweet {name: sweet.name}))})
SET s.ingredients = sweet.ingredients,
  s.price = toFloat(sweet.price),
  s.stock = toInteger(sweet.stock),

MATCH (m:Machine)->(s:Sweet)
WHERE s.sweet CONTAINS 'chocolate' AND m.type CONTAINS 'Chocolate'
CREATE (m)-[:PRODUCES]->(s);

MATCH (m:Machine)->(s:Sweet)
WHERE s.sweet CONTAINS 'chocolate' AND m.type CONTAINS 'Chocolate'
CREATE (m)-[:PRODUCES_CHOCOLATE]->(s);

MATCH (m:Machine)->(s:Sweet)
WHERE s.sweet CONTAINS 'candy' AND m.type CONTAINS 'Candy'
CREATE (m)-[:PRODUCES]->(s);

MATCH (m:Machine)->(s:Sweet)
WHERE s.sweet CONTAINS 'candy' AND m.type CONTAINS 'Candy'
CREATE (m)-[:PRODUCES_CANDY]->(s);

MATCH (m:Machine)->(s:Sweet)
WHERE m.type CONTAINS 'Vending'
CREATE (m)-[:PRODUCES]->(s);

MATCH (m:Machine)->(s:Sweet)
WHERE m.type CONTAINS 'Vending'
CREATE (m)-[:PRODUCES_MIXED]->(s);