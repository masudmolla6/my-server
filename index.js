const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

// middle Ware
app.use(cors());
app.use(express.json());

const courses = require("./data/courses.json")
const course = require("./data/course.json");

app.get("/", (req, res) => {
    res.send("Hello World");
})

app.get("/courses", (req, res) => {
    res.send(courses)
})

app.get("/courses/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const selectedTopic = course.filter(topics => parseInt(topics.id) === id);
    res.send(selectedTopic);
})

app.get("/courses/topic/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    const topicDetails = course.find((td) => td.topics_id === id);
    res.send(topicDetails);
})

app.listen(port, () => {
    console.log("My Server is runing from port", port);
})