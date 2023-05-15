interface Emprego {
    nome: string,
    nomeEmprego: string
}

interface Familia {
    nome: string,
    nomePai: string,
    nomeMae: string
}

type Empregos = Emprego[]

export const valEmprego = (val: unknown): val is Empregos => 
    Array.isArray(val) &&
    val.every(
        (obj) => typeof obj.nome === "string"
        && typeof obj.nomeEmprego === "string"
);

type Familias = Familia[]

export const valFamilia = (val: unknown): val is Familias => 
    Array.isArray(val) &&
    val.every(
        (obj) => typeof obj.nome === "string"
        && typeof obj.nomePai === "string"
        && typeof obj.nomeMae === "string"
);
