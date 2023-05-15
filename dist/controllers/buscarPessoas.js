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
exports.buscarPessoas = void 0;
const api_erros_1 = require("../helpers/api-erros");
const buscarFamilia_1 = require("../models/buscarFamilia");
const buscarPessoas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    console.log(id);
    if (!id) {
        throw new api_erros_1.UnprocessableEntityError("O ID inserido é inválido");
    }
    const resultado = yield (0, buscarFamilia_1.buscarFamilia)(id);
    console.log(resultado);
    if (resultado.length == 0)
        throw new api_erros_1.NotFoundError("Nenhum resultado foi encontrado!");
    else
        return res.json(resultado);
});
exports.buscarPessoas = buscarPessoas;
