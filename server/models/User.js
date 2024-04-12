import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
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
            required: true,
            default: false
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

const User = mongoose.model('user', userSchema);

export {User};