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
const express_1 = __importDefault(require("express"));
const moodService_1 = __importDefault(require("../services/moodService"));
const router = express_1.default.Router();
/* GET moods listing. */
router.get('/', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const moods = yield moodService_1.default.getAllMoods();
        // If we do have the moods list we send it
        if (moods != null) {
            res.send(moods);
            return;
        }
        res.status(500);
        res.send("Error : can't find the moods");
    });
});
/* GET mood by id. */
router.get('/:id', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const mood = yield moodService_1.default.getMoodById(id);
        // If we do have the moods list we send it
        if (mood != null) {
            res.send(mood);
            return;
        }
        res.status(500);
        res.send("Error : can't find the mood");
    });
});
/* POST mood. */
router.post('/', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield moodService_1.default.createMood(req.body);
        res.send(result);
    });
});
/* DELETE mood. */
router.delete('/:id', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const result = yield moodService_1.default.deleteMood(id);
        res.send(result);
    });
});
exports.default = router;
module.exports = router;
//# sourceMappingURL=moods.js.map