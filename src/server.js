import express from "express";
import { ApolloServer } from "apollo-server-express";
import getConnection from "../database/mongoose";

// open connection to database
getConnection();

const app = express();

app.use(express.json());

const server = new ApolloServer({
  //   typeDefs,
  //   resolvers,
  //   context,
});

server.applyMiddleware({ app });

app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
