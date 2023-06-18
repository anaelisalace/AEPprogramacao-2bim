import app from './app'

function main() {
    try {
        const porta = 3001
        app.listen(porta, 'localhost', ()=>{
            console.log('Servidor conectado na porta: ', porta)
        })
    } catch (error) {
        console.log('Erro ao subir o servidor: ', error)
    }
}

main()