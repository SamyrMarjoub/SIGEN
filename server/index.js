const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyparser = require('body-parser')
const cors = require('cors')
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'CEEP'
})
app.use(cors())
app.use(express.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.post('/registro', (req, res) => {
    const nome = req.body.nome
    const email = req.body.email
    const senha = req.body.senha
    const telefone = req.body.telefone
    const sexo = req.body.sexo
    const turma = req.body.turma

    const sqlinsert = "INSERT INTO pessoas (nome, senha, email, telefone, sexo, turma) VALUES (?,?,?,?,?,?);"
    db.query(sqlinsert, [nome, senha, email, telefone, sexo, turma], (err, result) => {
    })
})
app.post('/adminpass', (req, res) => {
    const password = req.body.password
    const user = req.body.user

    const sqlquery = 'select * from autorizacao where login = ? and password = ?;'
    db.query(sqlquery, [user, password], (err, result) => {
        if (result.length === 0) {
            res.send('EMAIL OU SENHA INVALIDOS')
        } else {
            res.send('ok')
        }

    })
})
app.post('/adminRegistro', (req, res) => {
    const nome = req.body.nome
    const email = req.body.email
    const sexo = req.body.sexo
    const senha = req.body.senha
    const materia = req.body.materia
    const sqlinsert = "INSERT INTO professores (nome, email, sexo, senha, materia) VALUES (?,?,?,?,?);"
    db.query(sqlinsert, [nome, email, sexo, senha, materia], (err, result) => {

    })
})
app.get('/ordernarA', (req, res) => {
    const sqlquery = 'SELECT * FROM pessoas ORDER BY nome ASC;'
    db.query(sqlquery, (err, result) => {
        res.send(result)
    })
})
app.get('/ordernarI', (req, res) => {
    const sqlquery = 'SELECT * FROM pessoas ORDER BY id;'
    db.query(sqlquery, (err, result) => {
        res.send(result)
    })
})
app.get('/ordernarTA', (req, res) => {
    const sqlquery = 'SELECT * FROM pessoas WHERE turma = "A";'
    db.query(sqlquery, (err, result) => {
        res.send(result)
    })
})
app.get('/ordernarTB', (req, res) => {
    const sqlquery = 'SELECT * FROM pessoas WHERE turma = "B";'
    db.query(sqlquery, (err, result) => {
        res.send(result)
    })
})
app.post('/login', (req, res) => {
    const email = req.body.email
    const senha = req.body.senha
    const sqllogin = 'SELECT * FROM pessoas WHERE email = ? AND senha = ?;'
    db.query(sqllogin, [email, senha], (err, result) => {
        if (result.length === 0) {
            res.send('EMAIL OU SENHA INVALIDOS')
        } else {
            res.send(`${result[0].id}`)
        }

    })
})
app.get('/getAlunoInfo/:id', (req, res) => {
    const id = req.params.id
    const sqlquery = 'SELECT * FROM pessoas WHERE id = ?;'
    db.query(sqlquery, id, (err, result) => {
        res.send(result[0])

    })
})
app.post('/loginAdmin', (req, res) => {
    const email = req.body.email
    const senha = req.body.senha
    const querySelect = 'SELECT * from professores WHERE email = ? AND senha = ?;'
    db.query(querySelect, [email, senha], (err, result) => {
        if (result.length === 0) {
            res.send('EMAIL OU SENHA INVALIDOS')
        } else {
            const results = result
            res.send(`${results[0].id_professor}`)
        }

    })
})

app.get('/getInfoProfessor/:id', (req, res) => {
    const id = Number(req.params.id)
    const querySelect = 'SELECT * FROM professores WHERE id_professor = ?;'
    db.query(querySelect, id, (err, result) => {
        const results = result
        const array = [results[0].nome, results[0].materia]
        res.send(array)
    })

})
app.post('/buscarAlunos', (req, res) => {
    const aluno = req.body.alunoBuscado
    const querySelect = 'SELECT * FROM pessoas where nome = ? ;'
    db.query(querySelect, aluno, (err, result) => {
        if (result.length === 0) {
            res.send('ALUNO NÃO ENCONTRADO')
        } else {
            res.send(`${result[0].id}`)
        }
    })
})
app.post('/getNotasAluno/:materia', (req, res) => {
    const nome = req.body.lupaAluno
    const materia = req.params.materia

    let searchquery = ''
    if (materia === 'Fisica') {
        searchquery = 'SELECT nota_fisica, nota_fisica2, nota_fisica3 FROM pessoas where nome = ?;'
    } else if (materia === 'Portugues') {
        searchquery = 'SELECT portugues, portugues2, portugues3 FROM pessoas where nome = ?;'
    } else if (materia === 'Matematica') {
        searchquery = 'SELECT matematica, matematica2, matematica3 FROM pessoas where nome = ?;'
    }
    db.query(searchquery, nome, (err, result) => {
        if (result.length === 0) {
            res.send('Erro')
        } else {
            res.send(result)

        }

    })
})

app.get('/getNomeAluno/:id', (req, res) => {
    const id = req.params.id
    const queryName = 'SELECT nome FROM pessoas WHERE id = ?;'
    db.query(queryName, id, (err, result) => {
        res.send(result[0].nome)
    })
})
app.put('/addNotas/:materia', (req, res) => {
    const nota = req.body.Notas
    const id = req.body.id
    const unidade = req.body.unidade
    const materia = req.params.materia
    console.log(materia)

    let queryAddNotas = ''
    if (materia === 'Fisica' && unidade === 'U1') {
        queryAddNotas = "UPDATE pessoas SET nota_fisica = ? WHERE id = ?;"
    } else if (materia === 'Fisica' && unidade === 'U2') {
        queryAddNotas = "UPDATE pessoas SET nota_fisica2 = ? WHERE id = ?;"
    } else if (materia === 'Fisica' && unidade === 'U3') {
        queryAddNotas = "UPDATE pessoas SET nota_fisica3 = ? WHERE id = ?;"
    } else if (materia === 'Portugues' && unidade === 'U1') {
        queryAddNotas = "UPDATE pessoas SET portugues = ? WHERE id = ?;"
    } else if (materia === 'Portugues' && unidade === 'U2') {
        queryAddNotas = "UPDATE pessoas SET portugues2 = ? WHERE id = ?;"
    } else if (materia === 'Portugues' && unidade === 'U3') {
        queryAddNotas = "UPDATE pessoas SET portugues3 = ? WHERE id = ?;"
    } else if (materia === 'Matematica' && unidade === 'U1') {
        queryAddNotas = "UPDATE pessoas SET matematica = ? WHERE id = ?;"
    } else if (materia === 'Matematica' && unidade === 'U2') {
        queryAddNotas = "UPDATE pessoas SET matematica2 = ? WHERE id = ?;"
    } else if (materia === 'Matematica' && unidade === 'U3') {
        queryAddNotas = "UPDATE pessoas SET matematica3 = ? WHERE id = ?;"
    } else if (materia === 'Historia' && unidade === 'U1') {
        queryAddNotas = "UPDATE pessoas SET historia = ? WHERE id = ?;"
    } else if (materia === 'Historia' && unidade === 'U2') {
        queryAddNotas = "UPDATE pessoas SET historia2 = ? WHERE id = ?;"
    } else if (materia === 'Historia' && unidade === 'U3') {
        queryAddNotas = "UPDATE pessoas SET historia3 = ? WHERE id = ?;"
    } else if (materia === 'Geografia' && unidade === 'U1') {
        queryAddNotas = "UPDATE pessoas SET geografia = ? WHERE id = ?;"
    } else if (materia === 'Geografia' && unidade === 'U2') {
        queryAddNotas = "UPDATE pessoas SET geografia2 = ? WHERE id = ?;"
    } else if (materia === 'Geografia' && unidade === 'U3') {
        queryAddNotas = "UPDATE pessoas SET geografia3 = ? WHERE id = ?;"
    } else if (materia === 'Redes' && unidade === 'U1') {
        queryAddNotas = "UPDATE pessoas SET redes = ? WHERE id = ?;"
    } else if (materia === 'Redes' && unidade === 'U2') {
        queryAddNotas = "UPDATE pessoas SET redes2 = ? WHERE id = ?;"
    } else if (materia === 'Redes' && unidade === 'U3') {
        queryAddNotas = "UPDATE pessoas SET redes3 = ? WHERE id = ?;"
    } else if (materia === 'IMC' && unidade === 'U1') {
        queryAddNotas = "UPDATE pessoas SET imc = ? WHERE id = ?;"
    } else if (materia === 'IMC' && unidade === 'U2') {
        queryAddNotas = "UPDATE pessoas SET imc2 = ? WHERE id = ?;"
    } else if (materia === 'IMC' && unidade === 'U3') {
        queryAddNotas = "UPDATE pessoas SET imc3 = ? WHERE id = ?;"
    } else if (materia === 'LTP' && unidade === 'U1') {
        queryAddNotas = "UPDATE pessoas SET ltp = ? WHERE id = ?;"
    } else if (materia === 'LTP' && unidade === 'U2') {
        queryAddNotas = "UPDATE pessoas SET ltp2 = ? WHERE id = ?;"
    } else if (materia === 'LTP' && unidade === 'U3') {
        queryAddNotas = "UPDATE pessoas SET ltp3 = ? WHERE id = ?;"
    } else if (materia === 'Quimica' && unidade === 'U1') {
        queryAddNotas = "UPDATE pessoas SET quimica = ? WHERE id = ?;"
    } else if (materia === 'Quimica' && unidade === 'U2') {
        queryAddNotas = "UPDATE pessoas SET quimica2 = ? WHERE id = ?;"
    } else if (materia === 'Quimica' && unidade === 'U3') {
        queryAddNotas = "UPDATE pessoas SET quimica3 = ? WHERE id = ?;"
    } else if (materia === 'Biologia' && unidade === 'U1') {
        queryAddNotas = "UPDATE pessoas SET biologia = ? WHERE id = ?;"
    } else if (materia === 'Biologia' && unidade === 'U2') {
        queryAddNotas = "UPDATE pessoas SET biologia2 = ? WHERE id = ?;"
    } else if (materia === 'Biologia' && unidade === 'U3') {
        queryAddNotas = "UPDATE pessoas SET biologia3 = ? WHERE id = ?;"
    } else if (materia === 'SEG' && unidade === 'U3') {
        queryAddNotas = "UPDATE pessoas SET seg = ? WHERE id = ?;"
    } else if (materia === 'SEG' && unidade === 'U2') {
        queryAddNotas = "UPDATE pessoas SET seg2 = ? WHERE id = ?;"
    } else if (materia === 'SEG' && unidade === 'U3') {
        queryAddNotas = "UPDATE pessoas SET seg3 = ? WHERE id = ?;"
    } else if (materia === 'APS' && unidade === 'U1') {
        queryAddNotas = "UPDATE pessoas SET Aps = ? WHERE id = ?;"
    } else if (materia === 'APS' && unidade === 'U2') {
        queryAddNotas = "UPDATE pessoas SET Aps2 = ? WHERE id = ?;"
    } else if (materia === 'APS' && unidade === 'U3') {
        queryAddNotas = "UPDATE pessoas SET Aps3 = ? WHERE id = ?;"
    }

    db.query(queryAddNotas, [nota, id], (err, result) => {
        if (result) {
            if (result.affectedRows === 0) {
                res.send('ERRO')
            } else {
                res.send('OK')
            }
        } else[
            console.log('.')
        ]


    })
})

app.get('/getInfoAlunos', (req, res) => {
    const selectquery = "SELECT * FROM pessoas;"
    db.query(selectquery, (err, result) => {
        res.send(result)
    })
})

app.listen('3001', () => {
    console.log('Servidor ON-LINE')
})