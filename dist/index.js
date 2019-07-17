"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const evirontment_1 = require("./global/evirontment");
const router_1 = __importDefault(require("./routes/router"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const server1 = server_1.default.instance;
server1.app.use(body_parser_1.default.urlencoded({ extended: true }));
server1.app.use(body_parser_1.default.json());
server1.app.use('/', router_1.default);
server1.app.use(cors_1.default({ origin: true, credentials: true }));
server1.start(() => {
    console.log(`El servidor esta corriendo en el puerto ${evirontment_1.SERVER_PORT}`);
});
