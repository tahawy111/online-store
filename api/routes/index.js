import auth from "./auth.js";
import product from "./product.js";
import category from "./category.js";

export default function (app) {
  app.use("/api/auth", auth);
  app.use("/api/product", product);
  app.use("/api/category", category);
}
