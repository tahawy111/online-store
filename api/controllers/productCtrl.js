import Product from "../models/Product.js";

export const create = async (req, res) => {
  const { name, description, price, quantity, category } = req.body;
  let productPictures = [];
  console.log(req.files);
  if (req.files.length > 1) {
    productPictures = req.files.map((file) => {
      return { img: file.filename };
    });
  } else {
    productPictures = [{ img: req.file.filename }];
  }

  const newProduct = new Product({
    name,
    price,
    description,
    productPictures,
    quantity,
    category: category ? category : [],
    createdBy: req.user._id,
  });

  try {
    const product = await newProduct.save();
    res.status(201).json({ product });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error occured creating product. Please try again!" });
  }
};
