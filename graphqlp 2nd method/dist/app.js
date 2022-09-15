"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const database_config_1 = __importDefault(require("./config/database.config"));
const type_defs_1 = require("./GraphQl/type-defs");
const server = new apollo_server_1.ApolloServer({
    schema: type_defs_1.schema
});
database_config_1.default.sync()
    .then(() => {
    console.log("Database connected successfully");
})
    .catch((err) => {
    console.log(err);
});
server.listen().then(({ url }) => {
    console.log(`Server running at ${url}`);
});
