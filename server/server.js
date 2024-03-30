import { express } from "express";
import {db} from './config/connection.js';
import { ApolloServer } from "apollo-server-express";
import {expressMiddleware} from '@apollo/server/express4';
import { resolvers, typeDefs } from "./schemas/index.js";


const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    constext: 
});