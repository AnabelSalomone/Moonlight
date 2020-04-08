#!/usr/bin/env node

/**
 * Module dependencies.
 */

import { app } from './app';
import DebugModule from "debug";
import http from 'http';
import logService from './services/log';

const debug = DebugModule("moonlight backend");
/**
 * Get port from environment and store in Express.
 */

const port = normalizePort(process.env.PORT || 3030);
app.set('port', port);

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
process.on('exit', onExit);

process.on('SIGINT', onExit);
process.on('uncaughtException', onExit);

function onExit(): void {
  logService.log('close');
}
/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val: any): any {
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

function onError(error: any): void {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logService.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      logService.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening(): void {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
