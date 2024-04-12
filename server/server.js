import express from "express";
import {db} from './config/connection.js';
import { ApolloServer } from "apollo-server-express";
import {expressMiddleware} from '@apollo/server/express4';
import { resolvers, typeDefs } from "./schemas/index.js";
import {Auth} from "./utils/auth.js";
import path from "path";

const __dirname = path.resolve();
console.log(__dirname);

const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: Auth.authMiddleware,
    cache: "bounded"
});

const staticFilesDir = process.env.NODE_ENV === 'production' ? '../client/dist' : '../client'

const startServer = async ()=>{
    
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());
    app.use(express.static(path.join(__dirname, staticFilesDir)));

    await server.start();
    
    server.applyMiddleware({app});
    try{
        app.use('/graphql', expressMiddleware(server, {context: Auth.authMiddleware}));
    } catch (err){
        console.log('could not apply express middleware to graphql server', err);

    }


    app.get('*', (req,res)=>{
        res.sendFile(path.join(__dirname, staticFilesDir, 'index.html'));
    });

    const port = process.env.PORT || 3000;
    try{
        db.once('open', ()=>{
            app.listen(port, ()=>{
                console.log(`server is running on port ${port}.`);
            });
        });
    } catch(err){
        console.log(`Error starting server`,err);
    }
}

try{
    startServer();
} catch(err) {
    console.log('Error running server start code', err);
}