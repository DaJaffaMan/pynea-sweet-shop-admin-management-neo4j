// CSV dump. uuids is probably better for this
LOAD CSV WITH HEADERS FROM 'file:///machines.csv' AS machine
MERGE (m1:Machine {id: machine.machineId, type: machine.type, capacity: toInteger(machine.capacity), status: machine.status}})
