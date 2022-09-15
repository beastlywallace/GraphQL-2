import {ApolloServer} from "apollo-server";
import db from './config/database.config'
import typeDefs from "./GraphQl/type-def";
import resolvers from "./GraphQl/index"


const server = new ApolloServer({
    typeDefs,
    resolvers
})

db.sync().then(()=>{
    console.log("Database connected successfully")
}).catch(err=>{
    console.log(err)
})

server.listen().then(({url})=>{
    console.log(`Server running at ${url}`)
})
