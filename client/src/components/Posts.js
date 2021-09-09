import React, { useEffect, useState } from "react";
import Axios from "axios";
import './Posts.css'

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
    <div id="posts">
      <div className="card mx-auto">
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
      <div className="row mx-auto pt-5">
        {postList.map((val) => {
          return (
            <div className="col-lg-4 col-md-6">
              <div class="card d-flex">
                <div class="img">
                  <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
                </div>
                <div class="infos pt-3">
                  <div class="name">
                    <h2>{val.postName}</h2>
                    <h4>2 days ago</h4>
                  </div>
                  <p class="text">
                    {val.postDescription}
                  </p>
                  <ul class="stats d-flex mx-auto">
                    <li>
                      <h3>15K</h3>
                      <h4>Views</h4>
                    </li>
                    <li>
                      <h3>82</h3>
                      <h4>Projects</h4>
                    </li>
                    <li>
                      <h3>1.3M</h3>
                      <h4>Followers</h4>
                    </li>
                  </ul>
                  <div class="links">
                    <button class="follow me-2">Follow</button>
                    <button class="view">View profile</button>
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}

{/* <div className="col-lg-4 col-md-6">
      <div class="card d-flex">
        <div class="img">
          <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
        </div>
        <div class="infos pt-3">
          <div class="name">
            <h2>Bradley Steve</h2>
            <h4>2 days ago</h4>
          </div>
          <p class="text">
            I'm a Front End Developer, follow me to be the first 
            who see my new work.
          </p>
          <ul class="stats d-flex mx-auto">
            <li>
              <h3>15K</h3>
              <h4>Views</h4>
            </li>
            <li>
              <h3>82</h3>
              <h4>Projects</h4>
            </li>
            <li>
              <h3>1.3M</h3>
              <h4>Followers</h4>
            </li>
          </ul>
          <div class="links">
            <button class="follow me-2">Follow</button>
            <button class="view">View profile</button>
          </div>
        </div>
      </div>

    </div> */}