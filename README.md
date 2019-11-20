# Back-End

Temporary Documentation

## Auth

### Login User

---

    POST api/auth/login

#### Parameters

| Name     | Type   | Description     |
| -------- | ------ | --------------- |
| username | String | User's email    |
| password | String | User's password |

#### Log In Example

```js
{
  username: user2,
  password: password2
}
```

#### Log In Success Response

```js
{
"username": "user2",
"id": 2,
"token": "tokenStringGoesHere"
}
```

#### Log In Error Response

```
HTTP 401
{
  "message": "Invalid credentials"
}

```

### Register New User

---

    POST api/auth/register

#### Register Request

```js
{
  username: user2,
  password: password2
}
```

#### Parameters

| Name     | Type   | Description            |
| -------- | ------ | ---------------------- |
| username | String | <p>User's email</p>    |
| password | String | <p>User's password</p> |

#### Register Success Response

```js
{
"username": "user2",
"id": 2,
}
```

#### Register Error Response

```
HTTP 400
{
  "message": "Please enter username and password"
}
```

```
HTTP 500
{
  "message": "Internal error when adding a new user."
}

```

## Analysis

### Retrieve a user's saved photos and analysis

    GET /api/analysis

#### Parameters

| Name  | Type   | Description                    |
| ----- | ------ | ------------------------------ |
| token | String | Token in authorization headers |

Note that the token payload already includes metadata of the user, there is no need to have a body.

#### Analysis GET Success Response

```js
{
"username": "user2",
"id": 2,
}
```

### Save a user's photo and associated analysis

    POST /api/photos

#### Analysis Save Request

```json
{
  "error": "",
  "hash": "7844c0f891907246c067202b9631f989",
  "resnet": "{'bulletproof_vest': 0.22700253, 'gasmask': 0.19664158, 'assault_rifle': 0.1390793}",
  "source": "https://i.redd.it/asnxp0mahfz31.jpg"
}
```

#### Parameters

These parameters will continue to evolve depending on the DS's API. It will always try to match what the DS API outputs to keep things simple.

| Name   | Type   | Required | Description                        |
| ------ | ------ | -------- | ---------------------------------- |
| token  | String | Yes      | Token in authorization headers     |
| source | String | Yes      | Source URL of the image            |
| hash   | String | Yes      | Hash of the saved image            |
| resnet | String | No       | String output of resnet's analyis  |
| yolov3 | String | No       | String output of yolov3's analysis |
