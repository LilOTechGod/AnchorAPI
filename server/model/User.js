const mongoose = require("mongoose")
let Schema = mongoose.Schema;

let userSchema = new Schema(
    {
        first_name: {
            type: String,
        },
        last_name: {
            type: String,
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String,
        },
        access_token_id: { type: Schema.Types.ObjectId, ref: 'apikey' }

    },
    { timestamps: true },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

let User = mongoose.model("user", userSchema);



module.exports = User;
