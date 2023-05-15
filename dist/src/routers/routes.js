"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const buscarEmpregos_1 = require("../controllers/buscarEmpregos");
const router = (0, express_1.Router)();
router.get("/buscaremprego", buscarEmpregos_1.buscarEmpregos);
exports.default = router;
