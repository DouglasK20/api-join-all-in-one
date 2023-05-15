import { Request, Response } from "express";
import { UnprocessableEntityError, NotFoundError } from "../helpers/api-erros";
import { buscarEmpregoPessoa } from "../models/buscarEmpregosPessoas";

export const buscarEmpregos = async (req: Request, res: Response) => {
    const {id} = req.body    
    if(!id){
        throw new UnprocessableEntityError('O ID inserido é inválido')}

    const resultado = await buscarEmpregoPessoa(id);
    if(resultado.length == 0){
        throw new NotFoundError('Nenhum resultado foi encontrado!')}
    else
        return res.json(resultado)
}