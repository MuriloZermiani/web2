const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./omnistack.db')

db.serialize(function () {
    //criar tabela

    db.run(`
    CREATE TABLE IF NOT EXISTS ideas(

        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        category TEXT,
        image TEXT,
        description TEXT,
        link TEXT

    );`)
    


    //inserir dados na tabela

    const query = `
    INSERT INTO ideas(
        title,
        category,
        image,
        description,
        link
    ) VALUES (?,?,?,?,?);
    `

    const values = [
        "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        "Cursos de Programação",
        "Estudo",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
        "https://rocketseat.com.br"
    ]

   /* db.run(query, values, function(err){
        if(err) return console.log(err)

        console.log(this)
    })*/


    //consultar dados na tabela
    db.all(`SELECT * FROM ideas`, function (err, rows) {
        if (err)
            return console.log(err)

        console.log(rows)
    })

    //deletar dados na tabela 
    
    /*
    db.run(`DELETE FROM ideas WHERE  title = ?`, ['Exercícios'], function (err) {
        if (err)
            return console.log(err)

        console.log("DELETEI", this)
    })*/
})

module.exports = db //exportar meu banco de dados para a aplicação