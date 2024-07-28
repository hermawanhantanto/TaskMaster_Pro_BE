import { ApolloServer } from "apollo-server-express";
import rateLimit from "express-rate-limit";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import getConnection from "../database/mongoose.js";
import resolvers from "../graphql/resolvers/resolvers.js";
import typeDefs from "../graphql/typedefs/typedef.js";

dotenv.config();

await getConnection();

const app = express();

app.use(express.json());

// Enable CORS to allow requests from other origins. Customize as necessary for your application.
app.use(cors());

// Helmet helps secure your Express apps by setting various HTTP headers.
app.use(helmet());

// Rate limiting to prevent abuse
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

app.use(limiter);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  //   context,
});

await server.start();

server.applyMiddleware({ app });

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
