"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// TODO: store these variables elsewhere
const pool = new pg_1.Pool({
    user: 'postgres',
    host: '192.168.99.101',
    database: 'postgres',
    password: 'changeme',
    port: 5432,
});
class Db {
}
exports.default = Db;
Db.query = (text, params) => {
    return pool.query(text, params);
};
//# sourceMappingURL=index.js.map