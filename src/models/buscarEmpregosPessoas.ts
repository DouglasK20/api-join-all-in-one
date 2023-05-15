import dao from "../database/DAO"
import { valEmprego } from "../types/interface"

export const buscarEmpregoPessoa = async (id: number) => {
    const res = await dao.select({
        from: "pessoa",
        where: {
            id: id
        },
        join: [
            {
                table: 'pessoa_has_emprego',
                on: {
                    __col_relation: {
                        pessoaId: 'pessoa.id'
                    }
                },
            },
            {
                table: 'emprego',
                on: {
                    __col_relation: {
                        id: 'pessoa_has_emprego.empregoId'
                    }
                },
            }
        ],
        columns: ["pessoa.nome", "emprego.nomeEmprego"]
    })
    const resultado = valEmprego(res) ? res : []
    return resultado
}