import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "myDataBase",
  port: "3306",
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM posts";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  const postName = req.body.postName;
  const postDescription = req.body.postDescription;
  const postRate = req.body.postRate;
  const postReview = req.body.postReview;

  const sqlInsert =
    "INSERT INTO posts (postName, postDescription, postRate, postReview) VALUES (?, ?, ?, ?)";
  db.query(
    sqlInsert,
    [postName, postDescription, postRate, postReview],
    (err, result) => {
      console.log(result);
    }
  );
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
