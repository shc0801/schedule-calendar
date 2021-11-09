const express = require("express");
var cors = require("cors");

const app = express();
const port = 10001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
     
const corsOptions = {
  origin: "http://test.itsw.info",
  credentials: true,
};
app.use(cors(corsOptions));
app.set("view engine", "ejs");

let serverState = {
  dbConnected: true,
  port: port,
};

const mysql = require("mysql2");

const con = mysql.createConnection({
  host: "test.itsw.info",
  port: "3306",
  user: "sw202131",
  password: "sw202131",
  database: "sw202131",
});

con.connect(function (err) {
  if (err) {
    res.send(err);
    return;
  }
  serverState.dbConnected = true;
});

app.post("/register", (req, res) => {
  const sql = `SELECT * FROM users WHERE user_id = '${req.body.user_id}'`;

  con.query(sql, req.body.user_id, function (err, result) {
    if (result.length != 0) {
      console.log(result);
      res.status(400).json({ msg: "이미 존재하는 아이디입니다." });
      return;
    }

    const sql2 = `INSERT INTO users(user_id, user_name, user_pass) VALUES('${req.body.user_id}', '${req.body.user_name}', '${req.body.user_pass}')`;
    con.query(sql2, req.body, function (err, result, fields) {
      if (err) {
        res.status(400).json({ msg: "데이터가 올바르지 않습니다." });
        return;
      }
      res.json({ msg: "회원가입 되었습니다!", result });
    });
  });
});

app.post("/login", (req, res) => {
  const sql = `SELECT * FROM users WHERE user_id = '${req.body.user_id}' AND user_pass = '${req.body.user_pass}' `;

  con.query(sql, req.body, function (err, result) {
    if (result.length == 0) {
      res.status(400).json({ msg: "데이터가 올바르지 않습니다." });
      return;
    }
    res.json({ msg: "로그인 되었습니다!", result });
  });
});

app.post("/edit", (req, res) => {
  const sql = `INSERT INTO schedules(title, user_id, tag_name, year, month, day, start_time, end_time, content, color) VALUES('${req.body.title}', '${req.body.user_id}', '${req.body.tag_name}', '${req.body.year}', '${req.body.month}', '${req.body.day}', '${req.body.start_time}', '${req.body.end_time}', '${req.body.content}', '${req.body.color}')`;
  con.query(sql, req.body, function (err, result, fields) {
    if (err) {
      console.log(err)
      res.status(400).json({ msg: "데이터가 올바르지 않습니다." });
      return;
    }
    res.json({ msg: "일정이 추가되었습니다!", result });
  });
});

app.post("/get/schedule", (req, res) => {
  const sql = `SELECT * FROM schedules`;
  con.query(sql, req.body, function (err, result, fields) {
    res.json({ msg: "일정이 조회되었습니다!", result });
  });
});

app.post("/delete/schedule", (req, res) => {
  const sql = `DELETE FROM schedules WHERE id = ${req.body.id}`;
  con.query(sql, req.body, function (err, result, fields) {
    res.json({ msg: "일정이 삭제되었습니다!", result });
  });
});

app.listen(port, () => {
  console.log("success");
});
