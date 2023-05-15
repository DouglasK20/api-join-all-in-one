"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarEmpregos = void 0;
const api_erros_1 = require("../helpers/api-erros");
const buscarEmpregosPessoas_1 = require("../models/buscarEmpregosPessoas");
const buscarEmpregos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    if (!id)
        throw new api_erros_1.BadRequestError('Id Inválido');
    const resultado = yield (0, buscarEmpregosPessoas_1.buscarEmpregoPessoa)(id);
});
exports.buscarEmpregos = buscarEmpregos;
