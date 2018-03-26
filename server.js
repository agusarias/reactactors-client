const express = require("express"),
  next = require("next");

const dev = process.env.NODE_ENV !== "production",
  app = next({ dev }),
  handle = app.getRequestHandler(),
  PORT = 3000

app.prepare().
  then(() => {
    const server = express()

    server.get("/match/:code", (req, res) => {
      const actualPage = "/match",
        queryParams = { code: req.params.code }
      app.render(req, res, actualPage, queryParams)
    })

    server.get("*", (req, res) => handle(req, res))

    server.listen(PORT, (err) => {
      if (err) {
        throw err
      }

      console.log("> Ready on http://localhost:3000")
    })
  }).
  catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })