var socket = io();

// On son para escuchar
socket.on('connect', function () {
    console.log('Conectado al servidor');
});

// On es para escuchar
socket.on('disconnect', function () {
    console.info('Perdmimos conexión con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Luis Angel',
    mensaje: 'Hola Mundo Gay!'
}, function (resp) {
    console.info('Respuesta server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function (mensaje) {
    console.info('Servidor: ', mensaje);
});