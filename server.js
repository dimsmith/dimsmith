const express = require("express")
const http = require("http")
const path = require("path")
const PORT = process.env.PORT || 3000

function resolvePath(_path) {
    return path.join(__dirname, _path)
}

let app = express()
app.set("port", PORT)


app.use("/static", express.static(resolvePath("./dist")))
app.get("/", ((req, res) => {
    res.status(200)
    res.header("Content-Type", "text/html")
    res.sendFile(resolvePath("./src/index.html"))
}))
http.createServer(app)
    .listen(PORT)
    .on("listening", () => {
        console.log(`Worker ${process.pid}, server listening on port ${PORT}`);
    })
