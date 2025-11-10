import app from './app.js'
import sequelize from './db/connect.js'

const startServer = async () => {
    try {
        console.log('Conectando a la base de datos...')
        await sequelize.authenticate()
        await sequelize.sync({ force: false })
        console.log('Base de datos conectada')

        console.log('El servidor se está inicializando')
        app.listen(app.get('port'), () => {
            console.log(`Servidor corriendo en el puerto http://localhost:${app.get('port')}`)
        })
    } catch (error) {
        console.log('Algo paso', error)
        process.exit(1)
    }
}

startServer()