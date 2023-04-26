import path from "path";

const MONGO_USERNAME = process.env.DB_USER || "test";
const MONGO_PASSWORD = process.env.DB_PASS || "123456";
const MONGO_HOSTNAME = process.env.DB_HOST || "192.168.206.5";
const MONGO_PORT = process.env.DB_PORT || "27017";
const DB_NAME = process.env.DB_NAME || "testdb";

const DB_URL = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${DB_NAME}`;

// console.log('DB_URL', DB_URL)

const REDIS = {
  host: process.env.REDIS_HOST || "192.168.206.5", // 192.168.229.8
  port: process.env.REDIS_PORT || 15001,
  password: process.env.REDIS_PASS || "123456",
};

const JWT_SECRET =
  "a&*38QthAKuiRwISGLotgq^3%^$zvA3A6Hfr8MF$jM*HY4*dWcwAW&9NGp7*b53!";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "http://front.dev.toimc.com:22500"
    : "http://localhost:8080";

const uploadPath =
  process.env.NODE_ENV === "production"
    ? "/app/public"
    : path.join(path.resolve(__dirname), "../../public");

const adminEmail = ["1500529741@qq.com"];

const publicPath = [
  /^\/public/,
  /^\/login/,
  /^\/content/,
  /^\/user/,
  /^\/comments/,
];

const isDevMode = process.env.NODE_ENV !== "production";

const port = 3000;
const wsPort = 3001;

export default {
  DB_NAME,
  MONGO_HOSTNAME,
  DB_URL,
  REDIS,
  JWT_SECRET,
  baseUrl,
  uploadPath,
  adminEmail,
  publicPath,
  isDevMode,
  port,
  wsPort,
};
