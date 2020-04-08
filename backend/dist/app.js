"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const index_1 = __importDefault(require("./routes/index"));
const moods_1 = __importDefault(require("./routes/moods"));
exports.app = express_1.default();
exports.app.use(morgan_1.default('dev'));
exports.app.use(cors_1.default());
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: false }));
exports.app.use(cookie_parser_1.default());
exports.app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
exports.app.use('/', index_1.default);
exports.app.use('/moods', moods_1.default);
//# sourceMappingURL=app.js.map