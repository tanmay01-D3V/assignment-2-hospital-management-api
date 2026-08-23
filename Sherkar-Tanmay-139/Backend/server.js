const express = require("express");
require("dotenv").config();
const path = require("path");
const cors = require("cors");
const connectDB = require("./Config/db");
const session = require("express-session");
const passport = require("passport");
require("./Config/passport");
connectDB();

const hospitalsRouter = require("./Router/hospitals_router");
const app = express();
const port = process.env.port || 3000;

app.use(
  session({
    secret: "hospital-management-secret",
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:5173"],
  credentials: true,
}));
app.use(express.json());
app.use("/hospitals", hospitalsRouter);
app.use("/auth", require("./Router/auth_router"));

const frontendBuild = path.join(__dirname, "../Frontend/dist");
app.use(express.static(frontendBuild));

app.get("/api", (req, res) => {
    res.status(200).json({message: "Hospitals CRUD API is running"});
})

app.get("*", (req, res) => {
    res.sendFile(path.join(frontendBuild, "index.html"));
})

app.use((err,req,res,next) =>{
    console.error(err);
    res.status(500).json({message:"Internal server error"});
});

app.listen(port, () =>{
    console.log(`http://localhost:${port}/`);
});