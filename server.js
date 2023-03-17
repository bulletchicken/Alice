const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({
    origin: "http://localhost:3000",
}))


app.use(express.static("public"))

/*
app.set("view engine", "ejs")


app.get('/', (req, res) =>{
    console.log('Here')
    res.render("index")
})

*/

app.listen(3000, () => {
    console.log(`Server running on port http://localhost:3000`);
  });
