import { ApolloServer } from "apollo-server";
import db from "./config/database.config";

import { schema } from "./GraphQl/type-defs";

const server = new ApolloServer({
  schema
});

db.sync()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`);
});
