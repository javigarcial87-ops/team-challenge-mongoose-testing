const mongoose =require("mongoose")

const postSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required:[true, "el titulo es obligatorio"],
            trim: true
        },

        body:{
            type: String,
            requires:[true, "el contenido es obligatorio"]
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Post", postSchema)















