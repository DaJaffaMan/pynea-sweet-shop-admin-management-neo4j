
MATCH (m:Machine), (s:Sweet)
WHERE m.type = 'Chocolate Machine' AND s.name CONTAINS 'Chocolate'
CREATE (m)-[r1:PRODUCES]->(s);

MATCH (m:Machine), (s:Sweet)
WHERE m.type = 'Chocolate Machine' AND s.name CONTAINS 'Chocolate'
CREATE (m)-[r2:PRODUCES_CHOCOLATE]->(s);

MATCH (m:Machine), (s:Sweet)
WHERE m.type = 'Candy Dispenser' AND s.name CONTAINS 'Candy'
CREATE (m)-[r3:PRODUCES]->(s);

MATCH (m:Machine), (s:Sweet)
WHERE m.type = 'Candy Dispenser' AND s.name CONTAINS 'Candy'
CREATE (m)-[r4:PRODUCES_CANDY]->(s);

MATCH (m:Machine), (s:Sweet)
WHERE m.type = 'Vending Machine'
CREATE (m)-[r5:PRODUCES]->(s);

MATCH (m:Machine), (s:Sweet)
WHERE m.type = 'Vending Machine'
CREATE (m)-[r6:PRODUCES_MIXED]->(s);