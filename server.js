const express = require("express"),
  next = require("next"),
  bodyParser = require('body-parser'),
  fakeAPI = require("./model/FakeAPI");

const dev = process.env.NODE_ENV !== "production",
  app = next({ dev }),
  handle = app.getRequestHandler(),
  PORT = 3000

app.prepare().
  then(() => {
    const server = express()

    server.use(bodyParser.json())

    server.get("/match/:code", (req, res) => {
      const actualPage = "/match",
        queryParams = { code: req.params.code }
      app.render(req, res, actualPage, queryParams)
    })

    // ######## FAKE SERVER
    const respondWithMatch = (res, match) => {
      res.setHeader("Content-Type", "application/json");
      res.send(JSON.stringify(match));
    }

    server.get("/fakeapi/match/:code", (req, res) => {
      const match = fakeAPI.getMatch(req.params.code)
      respondWithMatch(res, match)
    })

    server.post("/fakeapi/match", (req, res) => {
      const match = fakeAPI.createMatch()
      respondWithMatch(res, match)
    })

    server.put("/fakeapi/match/:code", (req, res) => {
      const match = fakeAPI.makeMove(req.params.code, req.body.player, req.body.position)
      respondWithMatch(res, match)
    })
    // ######## END FAKE SERVER

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