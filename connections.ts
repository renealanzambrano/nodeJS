const mysql = require("mysql");
const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'mydb2',
    port:'3306'
});

conn.connect(function(error: any){  
    if(!!error){
        console.log('error');
    }else{
        console.log('Conexion exitosa');
    }
});

module.exports= conn;