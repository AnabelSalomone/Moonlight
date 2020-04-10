"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../database/index"));
class MoodService {
}
exports.default = MoodService;
MoodService.getAllMoods = () => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield index_1.default.query("SELECT * FROM MOOD", null);
    return rows;
});
MoodService.getMoodById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield index_1.default.query(`SELECT * FROM MOOD WHERE ID = $1`, [id]);
    return rows[0];
});
//# sourceMappingURL=moodService.js.map