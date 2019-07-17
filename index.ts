import Server from './classes/server';
import {SERVER_PORT} from './global/evirontment';
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server1= Server.instance;
server1.app.use(bodyParser.urlencoded({extended:true}));
server1.app.use(bodyParser.json());
server1.app.use('/',router);

server1.app.use(cors({origin:true,credentials:true}));

server1.start(()=>{
    console.log(`El servidor esta corriendo en el puerto ${SERVER_PORT}`);
})
