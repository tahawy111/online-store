import auth from "./auth.js";
import product from "./product.js";

export default function (app) {
  app.use("/api/auth", auth);
  app.use("/api/product", product);
}
