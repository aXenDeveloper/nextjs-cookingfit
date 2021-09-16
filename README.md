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
| [next-connect](https://www.npmjs.com/package/next-connect)         | The smol method routing and middleware for Next.js                                    |
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
| [slugify](https://www.npmjs.com/package/slugify)                   | Convert strings                                                                       |
| [CKEditor](https://ckeditor.com/)                                  | Wysiwyg editor                                                                        |
| [multer](https://www.npmjs.com/package/multer)                     | Files upload                                                                          |
| [http](https://www.npmjs.com/package/http)                         | Types for server response                                                             |
| [uuid](https://www.npmjs.com/package/uuid)                         | Generate random UUID                                                                  |

## ‼ Errors

| Code    | Description                                               |
| ------- | --------------------------------------------------------- |
| 5C100/1 | (Authenticated) Catch error function (500)                |
| 2C100/2 | (Authenticated) Invalid session (401)                     |
| 2C100/3 | (Authenticated) Invalid session - empty user object (401) |
| 2C100/4 | (Authenticated) Banned user (401)                         |
| 5C101/1 | (Sign up) Catch error function (500)                      |
| 3C101/2 | (Sign up) Invalid method API (405)                        |
| 2C101/3 | (Sign up) Invalid data from body (403)                    |
| 1C101/4 | (Sign up) Exist user email (403)                          |
| 1C101/5 | (Sign up) You are already logged in (403)                 |
| 1C101/6 | (Sign up) Exist user name (403)                           |
| 5C102/1 | (Sign in) Error with fetch (500)                          |
| 1C102/2 | (Sign in) You are already logged in (403)                 |
| 5C103/1 | (Recipes) Error with fetch (500)                          |
| 3C103/2 | (Recipes) Invalid method API (405)                        |
| 5C104/1 | (Recipe) Error with fetch (500)                           |
| 3C104/2 | (Recipe) Invalid method API (405)                         |
| 3C104/3 | (Recipe) Invalid query params (400)                       |
| 1C104/4 | (Recipe) Not found (404)                                  |
| 5C105/1 | (Add Recipe) Error with fetch (500)                       |
| 3C105/2 | (Add Recipe) Invalid method API (405)                     |
| 3C105/3 | (Add Recipe) Invalid query params (400)                   |
| 2C105/4 | (Add Recipe) Invalid user (401)                           |
| 2C105/5 | (Add Recipe) Banned user (401)                            |
| 3C105/6 | (Add Recipe) Invalid category (400)                       |
| 1C105/7 | (Add Recipe) Exist title (403)                            |
| 5C106/1 | (Upload File Recipe) Invalid method API (500)             |
| 3C106/2 | (Upload File Recipe) Invalid method API (405)             |

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

- page?: _number_,
- limit?: _number_,
- category?: _string_

#### Response

```
{
  id: number;
  title: string;
  url: string;
  member_name: string;
  member_name_seo: string;
  publish_date: number;
  difficulty: 1 | 2 | 3;
  time: number;
  text: string;
  category_name: string;
  image?: string;
}
```

### (GET) Recipe

```
api/recipe
```

#### Query

- url: _string_,
- category: _string_

#### Response

```
{
  id: number;
  title: string;
  member_name: string;
  member_name_seo: string;
  publish_date: number;
  difficulty: 1 | 2 | 3;
  time: number;
  text: string;
  category_name: string;
  image?: string;
  calories?: number;
  proteins?: number;
  fats?: number;
  carbohydrates?: number;
}
```

### (POST) Add Recipe

```
api/recipe/add
```

#### Query

- title: _string_,
- text: _string_,
- time: _number_,
- category_id: \_number\*,
- author_id: \_number\*,
- date: _number_,
- file: _number_,
- calories: \_number\*,
- proteins: \_number\*,
- fats: \_number\*,
- carbohydrates: \_number\*,
