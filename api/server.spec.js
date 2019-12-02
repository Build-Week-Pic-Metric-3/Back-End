const request = require("supertest");
const server = require("./server.js");
const db = require("../database/dbConfig");

it("should set db environment to testing", function() {
  expect(process.env.DB_ENV).toBe("testing");
});

describe("Analysis", function() {
  describe("GET /", function() {
    it("should return 401 Unauthoried", function() {
      return request(server)
        .get("/api/analysis")
        .then(res => {
          expect(res.status).toBe(401);
        });
    });
  });
});

describe("AUTH Register", function() {
  describe("POST /auth/register", function() {
    beforeEach(async () => {
      await db("users").truncate();
    });
    it("should return 201", function() {
      return request(server)
        .post("/api/auth/register")
        .send({ username: "user10", password: "password10" })
        .then(res => {
          expect(res.status).toBe(201);
        });
    });

    it("should return created username", function() {
      return request(server)
        .post("/api/auth/register")
        .send({ username: "user11", password: "password11" })
        .then(res => {
          expect(res.body.username).toBe("user11");
        });
    });
  });
});

describe("AUTH Login", function() {
  describe("POST /auth/login", function() {
    it("should return 200", function() {
      return request(server)
        .post("/api/auth/login")
        .send({ username: "user11", password: "password11" })
        .then(res => {
          expect(res.status).toBe(200);
        });
    });

    it("should have a token", function() {
      return request(server)
        .post("/api/auth/login")
        .send({ username: "user11", password: "password11" })
        .then(res => {
          expect(!!res.body.token).toBe(true);
        });
    });
  });
});

// the endpoint returns the correct http status code based on input
// the endpont returns the right data format (json in our case)
// the endpoint returns the right data in the body based on input
