#!/usr/bin/env node
"use strict";
/**
 * Module dependencies.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const debug_1 = __importDefault(require("debug"));
const http_1 = __importDefault(require("http"));
const log_1 = __importDefault(require("./services/log"));
const debug = debug_1.default("moonlight backend");
/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || 3030);
app_1.app.set('port', port);
/**
 * Create HTTP server.
 */
const server = http_1.default.createServer(app_1.app);
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
process.on('exit', onExit);
process.on('SIGINT', onExit);
process.on('uncaughtException', onExit);
function onExit() {
    log_1.default.log('close');
}
/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
    const portNorm = parseInt(val, 10);
    if (isNaN(portNorm)) {
        // named pipe
        return val;
    }
    if (portNorm >= 0) {
        // port number
        return portNorm;
    }
    return false;
}
/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;
    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            log_1.default.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            log_1.default.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
//# sourceMappingURL=index.js.map