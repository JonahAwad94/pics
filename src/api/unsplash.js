import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 699a704d32df71e6c1e8f0bc783ca0d79fed71695187ce15af98f10229df1164"
  }
});
