import {User, Appointment} from "../models/index.js";
import axios from 'axios';
import {Auth} from '../utils/auth.js';

const resolvers = {
    Query: {
        me: async(context)=>{
            return await User.findOne({_id: context.user._id});
        }
    },
    Mutation: {
        addUser: async(profileDetails)=>{
            const user = await User.create(profileDetails);
            const token = Auth.signToken(profileDetails.username, user._id);
            return {token, user};
        }
    }
};

export {resolvers};