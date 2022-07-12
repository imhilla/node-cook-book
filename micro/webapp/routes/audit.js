const { Router } = require("express");
const restify = require("restify");

const router = Router();

const { AUDITSERVICE_SERVICE_HOST, AUDITSERVICE_SERVICE_PORT } = process.env;

router.get("/", (req, res, next) => {
  const host = AUDITSERVICE_SERVICE_HOST;
  const port = AUDITSERVICE_SERVICE_PORT;
  const url = `http://${host}:${port}`;
  const client = restify.createJsonClient({ url });

  client.get("/list", (err, svcReq, svcRes, data) => {
    if (err) {
      next(err);
      return;
    }
    res.render("audit", data);
  });
});

module.exports = router;
