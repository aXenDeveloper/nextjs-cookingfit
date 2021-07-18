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

CSRF_KEY=
```

You can generate **CSRF_KEY** by [GUID / UUID Generator](https://www.guidgenerator.com/online-guid-generator.aspx).

## ⚒ Debugging API

In file **.env.local** change:

```
DEBUG_API=true
```

## 📂 Packages

| Packages                                                   | Description                                                                           |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [nextjs](https://nextjs.org/)                              | Core for Single Page Application _(SPA)_                                              |
| [react](https://reactjs.org/)                              | Library for Single Page Application _(SPA)_                                           |
| [typescript](https://www.typescriptlang.org/)              | Types in JavaScript                                                                   |
| [font-awesome](https://fontawesome.com/)                   | Icons SVG                                                                             |
| [sass](https://www.npmjs.com/package/sass)                 | CSS Preprocessors                                                                     |
| [eslint](https://eslint.org/)                              | Identifying and reporting on patterns found in ECMAScript/JavaScript code             |
| [bcrypt](https://www.npmjs.com/package/bcrypt)             | Hash passwords                                                                        |
| [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) | An implementation of [JSON Web Tokens](https://datatracker.ietf.org/doc/html/rfc7519) |

## ‼ Errors

| Code    | Description                                                 |
| ------- | ----------------------------------------------------------- |
| 5C100/1 | (Authenticated) Catch error function (500)                  |
| 3C100/2 | (Authenticated) Invalid method API (400)                    |
| 3C100/3 | (Authenticated) Invalid CSRF (401)                          |
| 2C100/4 | (Authenticated) Empty CSRF (400)                            |
| 2C100/5 | (Authenticated) Empty CSRF key in **.env.local** file (400) |
| 5C101/1 | (Sign up) Catch error function (500)                        |
| 3C101/2 | (Sign up) Invalid method API (400)                          |
| 2C101/3 | (Sign up) Invalid data from body (403)                      |
| 1C101/4 | (Sign up) Exist user (403)                                  |
| 5C102/1 | (Sign in) Catch error function (500)                        |
| 3C102/2 | (Sign in) Invalid method API (400)                          |
| 2C102/3 | (Sign in) Invalid data from body (403)                      |
| 2C102/4 | (Sign in) Invalid email or password (401)                   |
| 2C102/5 | (Sign in) Empty CSRF key in **.env.local** file (400)       |

## 😀 Group ID

| ID  | Description   |
| --- | ------------- |
| 1   | Guest         |
| 2   | Banned        |
| 3   | User          |
| 4   | Administrator |

## 📕 API

### (POST) Sign Up

```
api/account/signup
```

#### Body

- name: _varchar(101)_,
- email: _varchar(255)_,
- password: _varchar(255)_,
- confirmPassword: _varchar(255)_

#### Response

```
{

}
```

### (POST) Sign In

```
api/account/signin
```

#### Body

- email: _varchar(255)_,
- password: _varchar(255)_

#### Response

```
{
  email: string,
  csrf: string
}
```
