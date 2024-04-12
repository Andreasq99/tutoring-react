import {gql} from "apollo-server-express";
import {Kind} from "graphql/language/index.js";
import {GraphQLScalarType} from 'graphql';

const DateScalar = new GraphQLScalarType({
    name: 'Date',
    description: 'A Date object in GQL',
    serialize(date){
        return date.GetTime();
    },
    parseValue(time){
        return new Date(time);
    },
    parseLiteral(time){
        if(time.kind === Kind.INT){
            return new Date(parseInt(time.value, 10));
        }
        return null;
    }
});

const typeDefs = gql`
    scalar Date

    type Query {
        me: User
    }

    type Mutation {
        addUser(username: String!, password: String!, firstName: String!, lastName: String!): Auth
    }

    type User {
        _id: ID!
        username: String!
        firstName: String!
        lastName: String!
        appointments: [Appointment]
    }

    type Auth {
        token: ID!
        user: User
    }

    type Appointment {
        name: String!
        subject: String!
        startTime: Date
        endTime: Date
    }
`;

export {typeDefs, DateScalar}