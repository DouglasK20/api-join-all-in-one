import dao from "../database/DAO"
import { valFamilia } from "../types/interface"

export const buscarFamilia = async (id: number) => {
    const res = await dao.select({
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
    })
    const resultado = valFamilia(res) ? res : []
    return resultado
}