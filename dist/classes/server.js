"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const evirontment_1 = require("../global/evirontment");
const socket_io_1 = __importDefault(require("socket.io"));
const socket = __importStar(require("../sockets/socket"));
const http_1 = __importDefault(require("http"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.port = evirontment_1.SERVER_PORT;
        this.httpServer = new http_1.default.Server(this.app);
        this.io = socket_io_1.default(this.httpServer);
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    escucharSockets() {
        console.log('Escuchando conexión');
        this.io.on('connection', cliente => {
            console.log('Cliente conectado');
            // Metodo de mensajes
            socket.mensaje(cliente, this.io);
            // Metodo de desconectar
            socket.desconectar(cliente);
        });
    }
    start(callback) {
        this.httpServer.listen(this.port, callback());
    }
}
exports.default = Server;
