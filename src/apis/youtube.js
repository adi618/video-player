import axios from "axios";

const KEY = "AIzaSyBh8dFFn6lQTYWmj4Fpu27KfTHNM2NN7CI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
