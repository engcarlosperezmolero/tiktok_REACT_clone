import mongoose from "mongoose";

const tiktokSchema = mongoose.Schema({
	url: String,
	channel: String,
	song: String,
	likes: String,
	messages: String,
	description: String,
	shares: String,
});

// collection inside the database and their datastructure (schema)
export default mongoose.model("tiktokVideos", tiktokSchema);
