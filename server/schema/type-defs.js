const { gql } = require("apollo-server")

const typeDefs = gql`
    type User{
       id: ID!
       firstname: String!
       lastname: String!
       age: Int
       email: String!
    }

    type Query {
       users: [User!]!
    }
`;

module.exports = { typeDefs };