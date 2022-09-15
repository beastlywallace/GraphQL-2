"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const database_config_1 = __importDefault(require("./config/database.config"));
const type_def_1 = __importDefault(require("./GraphQl/type-def"));
const index_1 = __importDefault(require("./GraphQl/index"));
const server = new apollo_server_1.ApolloServer({
    typeDefs: type_def_1.default,
    resolvers: index_1.default
});
database_config_1.default.sync().then(() => {
    console.log("Database connected successfully");
}).catch(err => {
    console.log(err);
});
server.listen().then(({ url }) => {
    console.log(`Server running at ${url}`);
});
