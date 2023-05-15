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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarFamilia = void 0;
const DAO_1 = __importDefault(require("../database/DAO"));
const interface_1 = require("../types/interface");
const buscarFamilia = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield DAO_1.default.select({
        from: "pessoa",
        where: {
            id: id
        },
        join: [
            {
                table: 'mae',
                on: {
                    __col_relation: {
                        id: 'id'
                    }
                },
            },
            {
                table: 'pai',
                on: {
                    __col_relation: {
                        id: 'mae.id'
                    }
                },
            }
        ],
        columns: ["pessoa.nome", "pai.nomePai", "mae.nomeMae"]
    });
    const resultado = (0, interface_1.valFamilia)(res) ? res : [];
    return resultado;
});
exports.buscarFamilia = buscarFamilia;
