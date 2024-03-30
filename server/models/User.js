import {Schema, Model} from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            required: true
        },
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);



userSchema.pre("save", async function (next) {
    if (this.isNew || this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    next();
  });

userSchema.methods.isCorrectPassword = async function(password){
    return bcrypt.compare(password, this.password);
}

const User = new Model('user', userSchema);

export {User};