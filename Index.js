const express = require('express')
const conn = require('./Src/Connection/conn');
const router = require('./Src/Route/Route');
const bodyParser = require('body-parser');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const port = 3000
const app = express()
app.use(express.json());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));



const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "Customer API",
        description: "Customer API Information",
        contact: {
          name: "Amazing Developer"
        },
        servers: ["http://localhost:3000"]
      }
    },
    apis: ['./Route/Route.js']
    // apis: ["index.js"]
  };

  const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/', router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))