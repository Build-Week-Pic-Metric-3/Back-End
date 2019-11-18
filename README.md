# Back-End

Temporary Documentation

## Auth

### Login User

    POST /auth/login

#### Parameters

| Name     | Type   | Description            |
| -------- | ------ | ---------------------- |
| username | String | <p>User's email</p>    |
| password | String | <p>User's password</p> |

### LogIn Example

```js
{
  username: user2,
  password: password2
}
```

#### Success Response

```js
{
"username": "user2",
"id": 2,
"token": "tokenStringGoesHere"
}
```

#### Error Response

```
HTTP 401
{
  "message": "Invalid credentials"
}

```

### Register New User

#### Parameters

| Name     | Type   | Description            |
| -------- | ------ | ---------------------- |
| username | String | <p>User's email</p>    |
| password | String | <p>User's password</p> |

### Register Example

```js
{
  username: user2,
  password: password2
}
```

#### Success Response

```js
{
"username": "user2",
"id": 2,
}
```

#### Error Response

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
