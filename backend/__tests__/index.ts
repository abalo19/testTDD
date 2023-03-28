import request from "supertest";
import { app } from "../src/app";

describe("Test d'ouverture de l'application", () => {
  let server: any;

  beforeAll(async () => {
    server = app.listen(5000); // lancement de l'application sur le port 5000
  });

  afterAll(async () => {
    await server.close(); // fermeture du serveur après les tests
  });

  it("Devrait ouvrir l'application sur le port 5000", async () => {
    const response = await request(app).get("/");
    expect(response.status).toEqual(200);
  });
});
    