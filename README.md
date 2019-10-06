###### Tags: `Node.js` `Express.js` `Handlebars`  `MySQL` `sequelize`

# Todo list
用MySQL重做To-do List

---
## 網頁畫面
![image]
![image]
![image]

## 此專案用到的套件
* "bcryptjs": "^2.4.3",
* "body-parser": "^1.19.0",
*  "connect-flash": "^0.1.1",
*  "dotenv": "^8.1.0",
*  "express": "^4.17.1",
*  "express-handlebars": "^3.1.0",
*  "express-session": "^1.16.2",
*  "method-override": "^3.0.0",
*  "mysql2": "^1.7.0",
*  "passport": "^0.4.0",
*  "passport-facebook": "^3.0.0",
*  "passport-local": "^1.0.0",
*  "sequelize": "^5.19.2",
*  "sequelize-cli": "^5.5.1"


## 安裝與執行方式
**1. 執行MyAQL

**2. 打開終端機輸入以下指令複製專案到電腦上**
```git=
git clone https://github.com/ZhaoHouLin/todo-sequelize.git
```

**3. 進入專案資料夾**
```=
cd todo-sequelize
```

**4. 使用VSCode開啟**
```=
code .
```

**5. 安裝相關此專案相關套件**
```npm=
npm install
```

**6. 在根目錄建立.env檔，寫上相關資訊**
```
FACEBOOK_ID='xxxxxxxxxxxxx'
FACEBOOK_SECRET='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
FACEBOOK_CALLBACK='http://localhost:3000/auth/facebook/callback'
```

**7. 開啟伺服器**
```=
npm run dev
```

**8.出現以下log表示開啟成功**
```
http://localhost:3000
mongodb connected!
```
將上方網址複製貼上瀏覽器網址列，即可開啟網頁



