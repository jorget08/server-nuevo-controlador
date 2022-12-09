const net = require('net')
const chalk = require('chalk')
const { Buffer } = require('node:buffer')


const PORT = 3302

/* Crear un servidor y enviarle datos. */
const server = net.createServer((client) => {
    console.log(chalk.grey('crea una nueva conection socket'))
    
    

    client.on('data', async (data) => {
        let x = data.toString('ascii')
        let y = JSON.parse(x)
        console.log(y)
        console.log(y.event)
    })

    client.on('error', (err) => {
        console.error('Error en el socket del cliente', err)
        client.end()
        client.destroy()
    })

    client.on('end', () => {
        console.log('cliente descanectado')
    })

})


server.on('error', (err) => {
    console.error('Error de servidor', err);
})

server.listen(PORT, ()=>{
    console.log(chalk.greenBright(`servidor esta escuchando en la puerta ${chalk.yellow(server.address().port)}`))
})