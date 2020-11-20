const { io } = require('../server');

io.on('connection', (client) => {
    console.info('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.info('Usuario desconectado');
    });

    // Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.info(data);

        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario)
        //     callback({
        //         resp: 'TODO SALIO BIEN!!!'
        //     });
        // else
        //     callback({
        //         resp: 'TODO SALIO MAL!!!'
        //     });
    });
});