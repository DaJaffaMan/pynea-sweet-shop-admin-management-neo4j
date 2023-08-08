
MATCH (m:Machine), (s:Sweet)
WHERE m.type = 'Chocolate Machine' AND s.name CONTAINS 'Chocolate'
CREATE (m)-[r1:PRODUCES]->(s)
WITH m,s
WHERE m.type = 'Chocolate Machine' AND s.name CONTAINS 'Chocolate'
CREATE (m)-[r2:PRODUCES_CHOCOLATE]->(s)
WITH m,s
WHERE s.sweet = 'Candy Dispenser' AND m.type CONTAINS 'Candy'
CREATE (m)-[r3:PRODUCES]->(s)
WITH m,s
WHERE s.sweet = 'Candy Dispenser' AND m.type CONTAINS 'Candy'
CREATE (m)-[r4:PRODUCES_CANDY]->(s)
WITH m,s
WHERE s.sweet = 'Vending Machine' AND m.type CONTAINS 'Vending'
CREATE (m)-[r5:PRODUCES]->(s)
WITH m,s
WHERE s.sweet = 'Vending Machine' AND m.type CONTAINS 'Vending'
CREATE (m)-[r6:PRODUCES_MIXED]->(s);