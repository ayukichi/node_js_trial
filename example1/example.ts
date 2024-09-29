import * as http from "http";
import { port } from "./config";

// httpサーバーを設定する
const server = http.createServer(
  (request, response) => {
    // サーバーにリクエストがあった時に実行される関数
    response.end(`Hello! Node.js with TypeScript. Port is ${port}.`);
  }
);
// サーバーを起動してリクエストを待ち受け状態にする
server.listen(port);
// ログを出力する
console.log(`http://localhost:${port} へアクセスください`);