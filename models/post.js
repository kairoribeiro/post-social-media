import mongoose from "mongoose"

const Schema = mongoose.Schema
	
const postSchema = new Schema({
  post: String,
  author: {type: Schema.Types.ObjectId, ref: "Profile"}

},{
    timestamps: true
})

const Post = mongoose.model('Post', postSchema)

export {
  Post
}