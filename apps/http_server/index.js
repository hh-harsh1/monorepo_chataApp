"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/siginin", (req, res) => {
  console.log("username");
  const username = req.body.username;
  res.send({
    username: username,
  });
});
app.listen(3001, () => {
  console.log("lisning on 3000");
});
