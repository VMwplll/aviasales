var express = require("express"),
    http = require("http"),
    mongoose = require("mongoose"),
    app = express();
mongoose.connect('mongodb://127.0.0.1:27017/AviaSales').then(() => {
    console.log("Connected to DB");
}).catch((err) => {
    console.log(err);
})
app.use('/', express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

app.get("/index.html", (req, res) => {
    req.sendFile(path.join(staticPath, "html/index.html"));
})

http.createServer(app).listen(3000);
