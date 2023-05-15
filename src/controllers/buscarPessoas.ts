import { Request, Response } from "express";
import { NotFoundError, UnprocessableEntityError } from "../helpers/api-erros";
import { buscarFamilia } from "../models/buscarFamilia";

export const buscarPessoas = async (req: Request, res: Response) => {
    const {id} = req.body
    console.log(id)
    if(!id){
        throw new UnprocessableEntityError("O ID inserido é inválido")}

    const resultado = await buscarFamilia(id)
    console.log(resultado)
    if(resultado.length == 0)
        throw new NotFoundError("Nenhum resultado foi encontrado!")
    else
       return res.json(resultado)
}