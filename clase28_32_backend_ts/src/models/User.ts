import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser {
    username: string;
    email: string;
    password: string;
    role?: string;
    isActive?: boolean;
}

const userSchema = new Schema<IUser>(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isActive: { type: Boolean, default: true },
        role: { type: String, default: "user" }
    },
    { timestamps: true }
)

userSchema.pre("save", async function (next) {
    if (!this.isModified) return next(); // ver
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

export const User = mongoose.model("User", userSchema);