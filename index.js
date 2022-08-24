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
const connectDB_1 = require("./db/connectDB");
require("dotenv/config");
require("express-async-errors");
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('hi mom');
});
const getPort = () => {
    return Number(process.env.PORT) || 5000;
};
const port = getPort();
const start = (port, uri) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connectDB_1.connectDB)(uri);
        console.log('connected to db');
        app.listen(port, () => {
            console.log(`server listening at port: ${port}`);
        });
    }
    catch (error) {
        console.log(error);
    }
});
start(port, process.env.MONGO_URI);
