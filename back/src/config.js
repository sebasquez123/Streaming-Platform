//SOLAMENTE TIENE LOS PARAMETROS DEL PUERTO Y DE LA BASE DE DATOS


require('dotenv').config(); // Load environment variables from .env file

module.exports = {
    puerto: {
        port: process.env.PORT || 4003,
    },


    mysql:{
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'netflix',
    }
};