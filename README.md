# sweet-shop-admin-management-neo4j
A sweet shop stock and administration management application stored in a graph database

### Dev guide

The system is an example using neo4j, and graphql to manage entities such as Machines, Sweets, and Orders.

Entities:

    Machines: A machine should have properties like machineId, type, capacity, and status. The machine data will be stored in a Machine node.

    Sweets: A sweet should have properties like name, ingredients, price, and quantityInStock. The sweet data will be stored in a Sweet node.

    Orders: An order should have properties like orderId, customerName, and status. The order data will be stored in an Order node.

Relationships:

    Produces: A relationship from a Machine node to a Sweet node, indicating the machine produces the sweet.

    Contains: A relationship from an Order node to a Sweet node, indicating the order contains this sweet.

Features:

    Add entities: Add a machine, sweet, or order to the system.

    Create relationships: Create a relationship indicating a machine produces a sweet, or an order contains a sweet.

    Query: Implement a feature to query for the following:

        List all sweets produced by a specific machine.

        List all orders containing a specific sweet.

        List all sweets with a quantity less than a given number.

        List all orders in a 'pending' or 'delivered' state.

### Loading in the CSVs and relating nodes
docker exec -it sweet-shop-admin-management-neo4j-neo4j-1 bash

cypher-shell -u neo4j -p password -f $NEO4J_HOME/import/load-machines.cql
cypher-shell -u neo4j -p password -f $NEO4J_HOME/import/load-sweets.cql
cypher-shell -u neo4j -p password -f $NEO4J_HOME/import/load-orders.cql
cypher-shell -u neo4j -p password -f $NEO4J_HOME/import/relate-machines-and-sweets.cql 
cypher-shell -u neo4j -p password -f $NEO4J_HOME/import/relate-orders-and-sweets.cql 