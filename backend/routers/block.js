const express = require("express");
const router = express.Router();

const blocks = require("../data/block.data.json");

router.get("/:nodeId", (request, response) => {
  // const nodeId = request.params.nodeId;
  console.log(request.params.nodeId);
  const filteredBlocks = blocks.filter((item) => item.nodeId === request.params.nodeId);
  return response.send(filteredBlocks);
});

module.exports = router;
