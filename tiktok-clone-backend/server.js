import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import tiktokVideos from "./dbModel.js";

// app config
const app = express();
const port = process.env.PORT || 9000;

// middle wares
app.use(express.json());
app.use((req, res, next) => {
	res.setHeader("Acess-Control-Allow-Origin", "*"),
		res.setHeader("Acess-Control-Allow-Headers", "*"),
		next();
});
// DB config

const connection_url =
	"mongodb+srv://admin:2xaAbaThaDezKCqI@cluster0.3m2g2.mongodb.net/tiktok?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
});

// API endpoints

app.get("/", (req, res) => res.status(200).send("Hello World!"));

app.get("/v1/posts", (req, res) => res.status(200).send(data));

app.get("/v2/posts", (req, res) => {
	tiktokVideos.find((err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
});

app.post("/v2/posts", (req, res) => {
	// POST request is to ADD DATA to the database
	// it will let us ADD a video DOCUMENT to the tiktokVideos COLLECTION
	const dbVideos = req.body;

	tiktokVideos.create(dbVideos, (err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(201).send(data);
		}
	});
});

//listeners

app.listen(port, () => console.log(`listening on localhost: ${port}`));
