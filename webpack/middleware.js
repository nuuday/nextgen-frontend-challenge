const fs = require("fs");
const path = require("path");

const requestDataFromFile = (result, filepath) => {
  const file = path.join(__dirname, filepath);

  if (fs.existsSync(file)) {
    result.json(JSON.parse(fs.readFileSync(file, "utf8")));
  } else {
    result.status(404).json({
      error: {
        status: 404,
        message: "Not Found",
      },
    });
  }
};

module.exports = (app) => {
  app.get("/api/device/list", (_, result) => {
    requestDataFromFile(result, "../data/list.json");
  });

  app.get("/api/device/:id", (request, result) => {
    setTimeout(() => {
      requestDataFromFile(result, `../data/${request.params.id}.json`);
    }, Math.random() * 1000);
  });
};
