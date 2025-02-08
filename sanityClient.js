"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
// sanityClient.ts
const client_1 = require("@sanity/client");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.client = (0, client_1.createClient)({
    projectId: "hiha7y11", // Replace with your project ID
    dataset: 'production', // Or your dataset name
    apiVersion: '2024-01-04', // Today's date or latest API version
    useCdn: false, // Disable CDN for real-time updates
    token:"skghNLnphGqpqQyZRBH4WdZI6s11buGG1oR3q1MuNBkJ9r0wlnzdkoO8qXaWvo3W2QZNgqjAlOthtya1A2BYGnjjotgzjyUlrvcAooa4HOzWvytkqIHMUumczVcs60zXaqwU6eokqqFNHiYezyJlnByv0M2oaInNrYSVCFr7ZUDR5fyjY56v",
});

