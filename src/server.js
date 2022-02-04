import express  from "express";

const app = express();


app.get('/', (req, res) => {
    res.send({"message": "Hello World"});
});

app.post('/post', (req, res) => {
    res.send({"message": "Hello World"});
});

export const start = () => {
    app.listen(3000, ()=> {
        console.log("Server started at 3000");
    })
}