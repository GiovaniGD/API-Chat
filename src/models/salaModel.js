function listarSalas() {
    return [
        {
            "_id": {
                "$oid": "kbasjbbqwiuiuge"
            },
            "nome": "Guerreiros da InfoCimol",
            "tipo": "publica"
        },{
            "_id": {
                "$oid": "ubkbibfewiwbeifewj"
            },
            "nome": "Só os confirmados da INFO",
            "tipo": "privada",
            "chave": "at8q4haw"
        },
        {
            "_id": {
                "$oid": "jbadfbwefbseifewkjb"
            },
            "nome": "Guerreiros da INFO",
            "tipo": "publico"
        }
    ];
}

const db = require("./db");
function listarSalas() {
    return db.findAll("salas");
}

module.exports = {listarSalas}