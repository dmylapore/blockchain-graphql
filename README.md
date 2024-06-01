# GraphQL for Backend

## Introduction:

GraphQL serves as a query language for APIs and a server-side runtime, enabling precise data requests from clients while minimizing over-fetching or under-fetching compared to REST APIs. 

## Key Concepts of GraphQL: 

### 1. Schema: 

GraphQL has its own type system used to define the schema of an API. The syntax for writing schemas is called Schema Definition Language (SDL). 

### Example: 

type User {  
  name: String! (! - required field) 
  email: String!  
} 

### 2. Queries 

Queries are the read operations in GraphQL, used to retrieve data from the server. 

### Example: 

query { 
    user(id: "123") { 
        name 
        email 
  } 
} 


### 3. Mutations 

Mutations are the write operations in GraphQL, used to modify (create, update and delete) the data on the server. 

### Example: 

mutation { 
  createUser(input: {name: "Dhanya", email: "dmylapore@idssoft.com" }) { 
    id 
    name 
  } 
} 
 

### 4. Subscriptions 

Subscriptions enable real-time data updates in GraphQL and users can receive real-time notifications when data changes. 


### 5. Resolvers: 

A resolver is a function that's responsible for populating the data for a single field in your schema. Whenever a client queries for a particular field, the resolver for that field fetches the requested data from the appropriate data source. 

### Example: 

fieldName:(root, args, context, info) => { result } 
 