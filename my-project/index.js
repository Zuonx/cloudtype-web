const express = require('express');
const path = require('path');

const app = express();

// 'public' 디렉토리를 정적 파일 제공 디렉토리로 설정
app.use(express.static(path.join(__dirname, 'public')));

app.listen(8080, function () {
    console.log('server start on 8080');
});

app.get('/', function (req, res) { 
    res.sendFile(path.join(__dirname, 'index.html'));
});
