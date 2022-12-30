# 短網址生成器

![Index page about Restaurant List](./2-3 A11.JPG)

## 介紹

這是一個短網址生成器，可以將網址的長度縮短並複製，相當方便實用。

---

## 功能

- 輸入網址將網址縮短
- 縮短後，按下COPY鍵可複製短網址
- 輸入短網址將連結至原網址

---

## 開始使用

1.先確認有安裝 node.js 與 npm

2.開啟終端機(Terminal)，clone 此專案

```bash
git clone https://github.com/Ian920511/url-shortener.git
```

3.初始化

```bash
cd url-shortener //進入存放檔案的資料夾
npm install  //安裝插件
```

4.新增 .env 檔，設定環境變數連線 MongoDB

```bash
MONGODB_URI = mongodb+srv://<使用者帳號>:<使用者密碼>@<資料庫伺服器位置>/<資料庫名稱>
```

5.完成後，輸入

```bash
npm run dev
```

6.看見此行訊息則代表順利運行

```bash
Sever is running on http://localhost:3000
```

7.進入網頁即可

```bash
http://localhost:3000
```

8.若需要暫停伺服器，則輸入

```bash
ctrl + c
```

---

## 規格

- 程式編輯器: [Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/ "Visual Studio Code")
- 使用框架: [express](https://www.npmjs.com/package/express)@4.18.2
- 模板引擎: [express-handlebars](https://www.npmjs.com/package/express-handlebars)@6.0.6
- 資料庫: [MongoDB]
- 編程資料庫: [Mongoose](https://mongoosejs.com/)@6.8.1
- 環境變數: [dotenv](https://www.npmjs.com/package/dotenv)@16.0.3
