const express = require("express");
const cors = require("cors");
const directoryToTree = require("../directoryToTree");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.middlewares();

    this.routes();
  }

  middlewares() {
    this.app.use(cors());

    this.app.use(express.json());

    this.app.use(express.static("public"));
  }

  routes() {
    this.app.post("/directoryTree", (req, res) => {
      const { rootPath, maxDepth } = req.body;
      if (!rootPath || typeof rootPath !== "string") {
        return res.status(400).json({
          error: "Bad request - Please provide a valid rootPath value",
        });
      }
      if (maxDepth < 0 || typeof maxDepth !== "number") {
        return res.status(400).json({
          error: "Bad request - Please provide a valid maxDepth value",
        });
      }
      try {
        const result = directoryToTree(rootPath, maxDepth);
        console.log("--- Results ---");
        console.log(result);
        return res.json({ result });
      } catch (error) {
        console.log(error);
        return res.status(400).json({
          message:
            "Bad request - Invalid path, please check the values of the body",
          error,
        });
      }
    });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Running on port", this.port);
    });
  }
}

module.exports = Server;
