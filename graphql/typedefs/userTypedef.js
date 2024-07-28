import { gql } from "apollo-server-express";

export const userTypedef = gql`
  type Result {
    status: String!
    message: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
  }

  type ResultSignIn {
    username: String!
    token: String!
    result: Result!
  }

  type Query {
    users: [User!]
    user(id: ID!): User!
  }
  type Mutation {
    signup(input: SignUpInput): User!
    signin(input: SignInInput): ResultSignIn!
  }

  input SignUpInput {
    username: String!
    password: String!
    email: String!
  }

  input SignInInput {
    email: String!
    password: String!
  }
`;
