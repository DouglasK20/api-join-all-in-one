import { DataAccessObject } from "mysql-all-in-one";

const dao = new DataAccessObject({ 
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'pessoasempregos'
})

export default dao