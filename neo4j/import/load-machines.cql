// CSV dump. uuids is probably better for this
LOAD CSV WITH HEADERS FROM 'file:///machines.csv' AS machine
CREATE (m1:Machine {machineId: machine.machineId})
SET m1.type = machine.type,
    m1.capacity = machine.capacity,
    m1.status = machine.status
