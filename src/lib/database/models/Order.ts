import { Schema, model, models } from "mongoose";

const orderSchema = new Schema({
    stripeId: {
        type: String,
        required: true,
        unique: true
    },
    totalAmout: {
        type: Number
    },
    event: {
        type: Schema.Types.ObjectId,
        ref: "Event"
    },
    buyer: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

const Order = models.Order || model("Order", orderSchema);

export default Order;