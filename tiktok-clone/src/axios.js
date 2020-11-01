import axios from "axios";

const instance = axios.create({
	baseURL:
		"https://cors-anywhere.herokuapp.com/https://tiktok-clone-11.herokuapp.com",
});

export default instance;
