import "express-session";
import "mongoose/types"

declare module "express-session" {
    interface SessionData {
        contador?: number;
        userId?: mongoose.ObjectId;
    }
}