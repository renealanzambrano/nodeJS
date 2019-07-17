import {Socket} from 'socket.io'
export const desconectar=(cliente:Socket)=>{
    cliente.on('disconnect',()=>{
        console.log('Cliente desconectado');
    });
}
export const mensaje=(cliente:Socket,io:SocketIO.Server)=>{
    cliente.on('mensaje',(payload:{de:string,cuerpo:string,id:BigInteger,name:String,ap_pat:String,ap_mat:String})=>{
        console.log('mensaje recibido', payload);
        io.emit('mensaje nuevo',payload);
    });
}