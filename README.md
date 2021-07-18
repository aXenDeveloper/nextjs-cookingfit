# (NextJS) CookingFit App

## 🧰 Install

```
git clone https://github.com/aXenDeveloper/nextjs-cookingfit

npm i
# or
yarn

npm run dev
# or
yarn dev
```

## 🔨 Deployment

Use commands:

```bash
npm run build
# or
yarn build

npm start
# or
yarn start
```

See the section about [deployment](https://nextjs.org/docs/deployment) for more information.

## 🛠️ Configuration

1. Go to **.env.local.example** file
2. Rename this file to **.env.local**
3. Complete all fields:

```
MYSQL_HOST=
MYSQL_DATABASE=
MYSQL_USERNAME=
MYSQL_PASSWORD=
MYSQL_PORT=
```

## ⚒ Debugging API

In file **.env.local** change:

```
API_DEBUG=true
```

## 📂 Packages

| Packages                                       | Description                                                               |
| ---------------------------------------------- | ------------------------------------------------------------------------- |
| [nextjs](https://nextjs.org/)                  | Core for Single Page Application _(SPA)_                                  |
| [react](https://reactjs.org/)                  | Library for Single Page Application _(SPA)_                               |
| [typescript](https://www.typescriptlang.org/)  | Types in JavaScript                                                       |
| [font-awesome](https://fontawesome.com/)       | Icons SVG                                                                 |
| [sass](https://www.npmjs.com/package/sass)     | CSS Preprocessors                                                         |
| [eslint](https://eslint.org/)                  | Identifying and reporting on patterns found in ECMAScript/JavaScript code |
| [bcrypt](https://www.npmjs.com/package/bcrypt) | Hash passwords                                                            |

## ‼ Errors

| Code    | Description                               |
| ------- | ----------------------------------------- |
| 5C100/1 | (Sign up) Catch error function (500)      |
| 3C100/2 | (Sign up) Invalid method API (400)        |
| 2C100/3 | (Sign up) Invalid data from body (403)    |
| 1C100/4 | (Sign up) Exist user (403)                |
| 5C101/1 | (Sign in) Catch error function (500)      |
| 3C101/2 | (Sign in) Invalid method API (400)        |
| 2C101/3 | (Sign up) Invalid data from body (403)    |
| 2C101/4 | (Sign up) Invalid email or password (401) |
