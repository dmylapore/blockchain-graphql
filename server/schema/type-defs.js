const { gql } = require("apollo-server")

const typeDefs = gql`
    type User{
       id: ID!
       username: String!
       firstname: String!
       lastname: String!
       age: Int
       email: String!
       password: String!
    }

    type Query {
       users: [User!]!
       user(id: ID!): User
    }

    input SignUpUserinput {
       username: String!
       firstname: String!
       lastname: String!
       age: Int
       email: String!
       password: String!
    }

    type Mutation {
       # npm signUpUser(username: String, firstname: String, lastname: String, email: String, password: String): User!
       signUpUser(input: SignUpUserinput!): User
    }
`;

module.exports = { typeDefs };