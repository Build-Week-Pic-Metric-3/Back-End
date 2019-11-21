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
  username: "user2",
  password: "password2"
}
```

#### Log In Success Response

```js
{
  username: "user2",
  id: 2,
  token: "tokenStringGoesHere"
}
```

#### Log In Error Response

```js
HTTP 401
{
  message: "Invalid credentials"
}

```

### Register New User

---

    POST api/auth/register

#### Register Request

```js
{
  username: "user2",
  password: "password2"
}
```

#### Parameters

| Name     | Type   | Description     |
| -------- | ------ | --------------- |
| username | String | User's email    |
| password | String | User's password |

#### Register Success Response

```json
{
  "username": "user2",
  "id": 2
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

---

    GET /api/analysis

#### Parameters

| Name  | Type   | Description                    |
| ----- | ------ | ------------------------------ |
| token | String | Token in authorization headers |

Note that the token payload already includes metadata of the user, there is no need to have a body.

#### Analysis GET Success Response

```js
[
  {
    faces_source:
      "http://picmetric3.s3.amazonaws.com/93cc62cb0b79f774037c6980052d60f1_faces.png",
    hash: "07020d585b1e4fec65838eb462f58562",
    original:
      "http://picmetric3.s3.amazonaws.com/07020d585b1e4fec65838eb462f58562.png",
    resnet:
      '{"sunglasses": "0.6676245", "sunglass": "0.3276029", "bolo_tie": "0.00093378656"}',
    yolov3: '{"person": "99.90501403808594"}',
    yolov3_source:
      "http://picmetric3.s3.amazonaws.com/93cc62cb0b79f774037c6980052d60f1_yolov3.png"
  },
  {
    faces_source:
      "http://picmetric3.s3.amazonaws.com/93cc62cb0b79f774037c6980052d60f1_faces.png",
    hash: "07020d585b1e4fec65838eb462f58562",
    original:
      "http://picmetric3.s3.amazonaws.com/07020d585b1e4fec65838eb462f58562.png",
    resnet:
      '{"sunglasses": "0.6676245", "sunglass": "0.3276029", "bolo_tie": "0.00093378656"}',
    yolov3: '{"person": "99.90501403808594"}',
    yolov3_source:
      "http://picmetric3.s3.amazonaws.com/93cc62cb0b79f774037c6980052d60f1_yolov3.png"
  },
  {
    faces_source:
      "http://picmetric3.s3.amazonaws.com/93cc62cb0b79f774037c6980052d60f1_faces.png",
    hash: "07020d585b1e4fec65838eb462f58562",
    original:
      "http://picmetric3.s3.amazonaws.com/07020d585b1e4fec65838eb462f58562.png",
    resnet:
      '{"sunglasses": "0.6676245", "sunglass": "0.3276029", "bolo_tie": "0.00093378656"}',
    yolov3: '{"person": "99.90501403808594"}',
    yolov3_source:
      "http://picmetric3.s3.amazonaws.com/93cc62cb0b79f774037c6980052d60f1_yolov3.png"
  }
];
```

### Save a user's photo and associated analysis

---

    POST /api/analysis

#### Analysis Save Request

```json
{
  "error": "",
  "faces_source": "http://picmetric3.s3.amazonaws.com/93cc62cb0b79f774037c6980052d60f1_faces.png",
  "hash": "07020d585b1e4fec65838eb462f58562",
  "original": "http://picmetric3.s3.amazonaws.com/07020d585b1e4fec65838eb462f58562.png",
  "resnet": "{\"sunglasses\": \"0.6676245\", \"sunglass\": \"0.3276029\", \"bolo_tie\": \"0.00093378656\"}",
  "yolov3": "{\"person\": \"99.90501403808594\"}",
  "yolov3_source": "http://picmetric3.s3.amazonaws.com/93cc62cb0b79f774037c6980052d60f1_yolov3.png"
}
```

#### Parameters

These parameters will continue to evolve depending on the DS's API. It will always try to match what the DS API outputs to keep things simple.

| Name   | Type   | Required | Description                                         |
| ------ | ------ | -------- | --------------------------------------------------- |
| token  | String | Yes      | Token in authorization headers                      |
| error  | any    | No       | Backend will abort any requests with an error field |
| source | String | Yes      | Source URL of the image                             |
| hash   | String | Yes      | Hash of the saved image                             |
| resnet | String | No       | String output of resnet's analyis                   |
| yolov3 | String | No       | String output of yolov3's analysis                  |

#### Analysis Save Response

```json
HTTP 201
{
  "user_id" : "IDThatWasInTheToken",
  "analysis_id" : 1,
  "faces_source": "http://picmetric3.s3.amazonaws.com/93cc62cb0b79f774037c6980052d60f1_faces.png",
  "hash": "07020d585b1e4fec65838eb462f58562",
  "original": "http://picmetric3.s3.amazonaws.com/07020d585b1e4fec65838eb462f58562.png",
  "resnet": "{\"sunglasses\": \"0.6676245\", \"sunglass\": \"0.3276029\", \"bolo_tie\": \"0.00093378656\"}",
  "yolov3": "{\"person\": \"99.90501403808594\"}",
  "yolov3_source": "http://picmetric3.s3.amazonaws.com/93cc62cb0b79f774037c6980052d60f1_yolov3.png"
}
```

### Delete a User's Saved Analysis

---

DELETE /api/analysis

#### Parameters

| Name  | Type    | Required | Description                                                  |
| ----- | ------- | -------- | ------------------------------------------------------------ |
| id    | integer | Yes      | ID of the analysis, user_id is already included in the token |
| token | string  | Yes      | Token must be included in authorization headers              |

#### Analysis Delete Request Example

```json
HTTP DEL
{
  id: 1
}
```

#### Analysis Delete Success Response

```json
HTTP 200
{
  message: "Success"
}
```

#### Analysis Delete Error Response

```json
HTTP 500
{
  message: "Internal error when deleting analysis"
}
```

## URL Submission

```
GET /do_data_science/
```

## Parameters

Query string: url : "URLofImageGoesHere"

## Image Submission

```
POST /do_data-science/
```

## Parameters

content-type: 'multipart/form-data'

Image must be under property `file` in multiparty form object.
