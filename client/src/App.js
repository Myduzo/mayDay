import React, { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [postName, setPostName] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [postRate, setPostRate] = useState(0);
  const [postReview, setPostReview] = useState("");

  const [postList, setPostList] = useState([])

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setPostList(response.data);
    });
  }, []);

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      postName,
      postDescription,
      postRate,
      postReview,
    }).then(() => {
      alert("successful insert");
    });
  };

  return (
    <div className="App">
      <div className="card mx-auto" style={{ width: "40rem" }}>
        <div className="card-body">
          <h5 className="card-title">Post</h5>
          <form>
            <div className="mb-3">
              <label className="form-label">postName</label>
              <input
                className="form-control"
                onChange={(e) => {
                  setPostName(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">postDescription</label>
              <input
                className="form-control"
                onChange={(e) => {
                  setPostDescription(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">postRate</label>
              <input
                className="form-control"
                onChange={(e) => {
                  setPostRate(e.target.value);
                }}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">postReview</label>
              <input
                className="form-control"
                onChange={(e) => {
                  setPostReview(e.target.value);
                }}
              />
            </div>
            <button
              onClick={submitReview}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      {postList.map((val) => {
        return (
          <div className="pt-3">
            <h2>Name: {val.postName}</h2>
            <h5>Description: {val.postDescription}</h5>
            <h5>Rate: {val.postRate}</h5>
            <h5>Review: {val.postReview}</h5>
            <hr />
          </div>
        )
      })}
    </div>
  );
}

export default App;
