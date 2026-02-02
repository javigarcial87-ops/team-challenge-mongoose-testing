const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../index");
const Post = require("../models/Post");

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterEach(async () => {
  await Post.deleteMany();
});

afterAll(async () => {
  await mongoose.connection.close();
});

/* TEST POST /create */
describe("POST /create", () => {
  test("Debe crear una publicación correctamente", async () => {
    const res = await request(app)
      .post("/create")
      .send({
        title: "Mi primer post",
        body: "Contenido del post"
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Mi primer post");
  });

  test("Debe fallar si faltan campos", async () => {
    const res = await request(app)
      .post("/create")
      .send({
        title: ""
      });

    expect(res.statusCode).toBe(400);
  });
});



describe("GET /", () => {
  test("Debe devolver todas las publicaciones", async () => {
    await Post.create({
      title: "Post prueba",
      body: "Contenido prueba"
    });

    const res = await request(app).get("/");

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
  });
})