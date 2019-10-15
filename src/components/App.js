import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSerchSubmit(term) {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID 699a704d32df71e6c1e8f0bc783ca0d79fed71695187ce15af98f10229df1164"
        }
      })
      .then(() => {});
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSerchSubmit} />
      </div>
    );
  }
}

export default App;
