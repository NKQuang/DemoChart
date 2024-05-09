const express = require('express');
const app = express();
const port = 3000;

// Sử dụng EJS làm template engine
app.set('view engine', 'ejs');

// Định nghĩa route
app.get('/', (req, res) => {
    res.render('index');
});

// Chạy thử
app.listen(port, () => {
    console.log(`Mở http://localhost:${port}`);
});
