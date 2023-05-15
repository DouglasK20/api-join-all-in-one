"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.valFamilia = exports.valEmprego = void 0;
const valEmprego = (val) => Array.isArray(val) &&
    val.every((obj) => typeof obj.nome === "string"
        && typeof obj.nomeEmprego === "string");
exports.valEmprego = valEmprego;
const valFamilia = (val) => Array.isArray(val) &&
    val.every((obj) => typeof obj.nome === "string"
        && typeof obj.nomePai === "string"
        && typeof obj.nomeMae === "string");
exports.valFamilia = valFamilia;
