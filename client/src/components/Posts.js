import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function Posts() {
  const [postName, setPostName] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [postRate, setPostRate] = useState(0);
  const [postReview, setPostReview] = useState("");

  const [postList, setPostList] = useState([]);

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
    <div>
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
          // <div className="pt-3 text-center">
          //   <h2>Name: {val.postName}</h2>
          //   <h5>Description: {val.postDescription}</h5>
          //   <h5>Rate: {val.postRate}</h5>
          //   <h5>Review: {val.postReview}</h5>
          //   <hr />
          // </div>
          
          <div className="album py-5 bg-light">
            <div className="container">

              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                <div className="col">
                  <div className="card shadow-sm py-3">
                    <svg className="rounded-circle mx-auto" width="140" height="140">
                      <rect width="100%" height="100%" fill="#E57F84" />
                    </svg>
                    <div className="card-body">
                      <h2 className="text-center">{val.postName}</h2>
                      <p className="card-text"><h5>Description: </h5>{val.postDescription}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <i class="mdi mdi-star text-warning me-n1"></i>
                      </div>
                    </div>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
