const express = require("express");
const app = express();

app.use(express.json());

const products = {
  laptop: { name: "Laptop", brand: "Dell", price: 55000 },
  phone: { name: "Smartphone", brand: "Samsung", price: 25000 },
  headphones: { name: "Headphones", brand: "Sony", price: 3000 },
};

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Day-7",
    routes: [
      "GET /",
      "GET /product",
      "GET /product?name=laptop",
      "GET /product?name=phone",
    ],
  });
});

app.get("/product", (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.json({ products: Object.keys(products) });
  }

  const info = products[name.toLowerCase()];
  if (!info) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.json(info);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
