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
JWT_SIGNING_PRIVATE_KEY=

NEXTAUTH_URL=http://localhost:3000
```

You can generate **CSRF_KEY** and **JWT_SIGNING_PRIVATE_KEY** by [GUID / UUID Generator](https://www.guidgenerator.com/online-guid-generator.aspx).

## 📂 Packages

| Packages                                                           | Description                                                                           |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| [nextjs](https://nextjs.org/)                                      | Core for Single Page Application _(SPA)_                                              |
| [next-translate](https://github.com/vinissimus/next-translate)     | Translate                                                                             |
| [next-auth](https://next-auth.js.org/)                             | Authentication                                                                        |
| [next-seo](https://github.com/garmeeh/next-seo)                    | SEO                                                                                   |
| [nextjs-progressbar](https://github.com/apal21/nextjs-progressbar) | Progressbar                                                                           |
| [react](https://reactjs.org/)                                      | Library for Single Page Application _(SPA)_                                           |
| [react-query](https://react-query.tanstack.com/)                   | Fetch, cache and update data                                                          |
| [typescript](https://www.typescriptlang.org/)                      | Types in JavaScript                                                                   |
| [font-awesome](https://fontawesome.com/)                           | Icons SVG                                                                             |
| [sass](https://www.npmjs.com/package/sass)                         | CSS Preprocessors                                                                     |
| [eslint](https://eslint.org/)                                      | Identifying and reporting on patterns found in ECMAScript/JavaScript code             |
| [bcrypt](https://www.npmjs.com/package/bcrypt)                     | Hash passwords                                                                        |
| [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)         | An implementation of [JSON Web Tokens](https://datatracker.ietf.org/doc/html/rfc7519) |
| [js-cookie](https://www.npmjs.com/package/js-cookie)               | Cookies                                                                               |
| [tippyjs](https://atomiks.github.io/tippyjs/)                      | tooltip, popover, dropdown                                                            |

## ‼ Errors

| Code    | Description                                                 |
| ------- | ----------------------------------------------------------- |
| 5C100/1 | (Authenticated) Catch error function (500)                  |
| 3C100/2 | (Authenticated) Invalid method API (400)                    |
| 3C100/3 | (Authenticated) Invalid CSRF (401)                          |
| 2C100/4 | (Authenticated) Empty CSRF (400)                            |
| 2C100/5 | (Authenticated) Empty CSRF key in **.env.local** file (400) |
| 2C100/6 | (Authenticated) Banned user (401)                           |
| 5C101/1 | (Sign up) Catch error function (500)                        |
| 3C101/2 | (Sign up) Invalid method API (400)                          |
| 2C101/3 | (Sign up) Invalid data from body (403)                      |
| 1C101/4 | (Sign up) Exist user email (403)                            |
| 1C101/5 | (Sign up) You are already logged in (403)                   |
| 1C101/6 | (Sign up) Exist user name (403)                             |
| 5C102/1 | (Sign in) Error with fetch (500)                            |
| 1C102/2 | (Sign in) You are already logged in (403)                   |
| 5C103/1 | (Recipes) Error with fetch (500)                            |
| 3C103/2 | (Recipes) Invalid method API (400)                          |

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

- name: _string_,
- email: _string_,
- password: _string_,
- confirmPassword: _string_

### (POST) Sign In

```
api/account/signin
```

#### Body

- email: _string_,
- password: _string_

#### Response

```
{
  email: string;
  csrf: string;
}
```

### (GET) Recipes

```
api/recipes
```

#### Query

- page?: _number_ | 0,
- limit?: _number_ | 1

#### Response

```
{
  id: number;
  title: string;
  member_name: string;
  member_name_seo: string;
  publish_date: number;
  difficulty: 1 | 2 | 3;
  category_name: string;
  image?: string;
}
```
