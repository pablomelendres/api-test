const express = require('express')
const app = express()   //all functions of express are stored in app
const cors = require('cors')
const PORT = 8000

app.use(cors())

let objetos = {
    'savage': {
        'age': 28,
        'birthName': 'Something',
        'birthLocation': 'Here'
    },
    'savage2': {
        'age': 21,
        'birthName': 'Something Again',
        'birthLocation': 'Here again'
    },
    'savage3': {
        'age': 18,
        'birthName': 'Something',
        'birthLocation': 'Here'
    },
    'unknown': {
        'age': 'unknown',
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/objetos/:objeName', (request, response) => {
    const objeName = request.params.objeName.toLowerCase()
    console.log(objeName)
    if(objetos[objeName]){
        response.json(objetos[objeName])
    } else{
        response.json(objetos['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})