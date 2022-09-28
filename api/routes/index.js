import auth from "./auth.js";

export default function (app) {
  app.use("/api/auth", auth);
}
