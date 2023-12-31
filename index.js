const connection=require("./db/db")
const  express=require("express") ;
const cors=require("cors");
const { usersRouter } = require("./routes/userRoutes");


const app=express();
require("dotenv").config();
app.use(cors());
app.use(express.json());
require("dotenv").config();
app.use("/users",usersRouter)



app.get("/", (req, res) => {
    res.send("Home-Page");
    
  });

app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("connected to DB");
      } catch (err) {
        console.log(err.message);
      }
      console.log(`application running at ${process.env.port}`);
})