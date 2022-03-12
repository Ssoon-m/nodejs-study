const express = require('express');
const database = require(__dirname + '/config/database.js');

const app = express();

const server = app.listen(3000, () => {
  console.log('Start Server : localhost:3000');
});

// db configuration
const dbconfig = database.dbconfig;
// db instance 생성
const connection = database.createConnection(dbconfig);
// db 연결
database.db_connect(connection);

const sql = 'SELECT * from board';
connection.query(sql, (error, results, fields) => {
  if (error) {
    console.log('query is not excuted. fail..... ');
    throw error;
  } else {
    results.map((rowData) => {
      console.log(`아이디 : ${rowData.ID}`);
      console.log(`제목 : ${rowData.TITLE}`);
      console.log(`내용 : ${rowData.CONTENT}`);
      console.log(`작성자 : ${rowData.WRITER}`);
    })
  }
});

connection.end();


// __dirname 은 현재 디렉토리를 의미한다.
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  res.render('index.html');
})

app.get('/about', (req, res) => {
  res.redner('about.html');
})






