const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const app = express();
const http = require("http");
const cors = require('cors');

const jobRoutes = require('./router/job-routes')
const applicantRoutes = require('./router/applicant-routes')

// setting middleware
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// setting another error program
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message });
    });

app.get('', (req, res)=>{
  res.send('Hello World!')
})


app.use('/api/jobs', jobRoutes)
app.use('/api/applicants', applicantRoutes)

const server = http.createServer(app);

server.listen(5000, () => {
    console.log(`server running in port ${5000}`);
});