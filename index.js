const express = require("express")
const cors = require("cors")
const { connection } = require("./db")
const { userRouter } = require("./routes/user.routes")
const { noteRouter } = require("./routes/note.routes")

const path = require("path");

require("dotenv").config()
const port = process.env.PORT
const app = express()

const build_dirname = path.resolve(__dirname, "client", "build")

app.use(express.static(build_dirname));

app.use(cors())
app.use(express.json())
app.use("/api/user", userRouter)
app.use("/api/note", noteRouter)
app.get("*", (req, res) => {
    res.sendFile(path.resolve(build_dirname, "index.html"));
    // res.send({
    //     message:"api is working now"
    // })
})
app.listen(port, async () => {
    try {
        await connection
        console.log("database is connected")
    } catch (error) {
        console.log(error)
    }
    console.log("Server is running on port number", port)
})
