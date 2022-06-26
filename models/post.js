import mongoose from "mongoose"

const Schema = mongoose.Schema

const commentSchema = new Schema({
  comment: String,
  reaction: {type: String, default: 1}
}, {
  timestamps: true
})
	
const postSchema = new Schema({
  post: String,
  author: {type: Schema.Types.ObjectId, ref: "Profile"},
  comments: [commentSchema],
  

},{
    timestamps: true
})

const Post = mongoose.model('Post', postSchema)

export {
  Post
}