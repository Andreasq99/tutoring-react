import jwt from "jsonwebtoken";
import {GraphQLError} from 'graphql';
import 'dotenv/config';

const secret = process.env.SECRET;
const expiration = '2h';


const authMiddleware = function({req}){
    const opName = req.body.operationName;
    if(opName === 'login' || opName === 'addUser'){
        return req;
    }
    let token = req.headers.authorization || req.body.token || req.query.token;

    if(req.headers.authorization){
        token = token.split(' ').pop().trim();
    }
    if(!token){
        return req;
    }

    try{
        const {data} = jwt.verify(token, secret, {maxAge: expiration});
        req.user = data;
    } catch{
        console.log('invalid token');
        throw new GraphQLError('invalid token', {
            extensions: {
                code: 'INVALID TOKEN'
            }
        });
    }
    return req;
}

const signToken = function(username, _id){
    const payload = {username, _id};
    return jwt.sign({data: payload}, secret, {expiresIn: expiration});
}

export const Auth = { AuthenticationError: new GraphQLError('Authentication Error', {extensions: {code: 'UNAUTHENTICATED'}}), authMiddleware, signToken};