export const create = async (req, res) => {
  const { name, description, price, quantity, category, createdBy } = req.body;
  console.log({ name, description, price, quantity, category, createdBy });
  let productPictures = [];
  if (req.files.length > 0) {
    productPictures = req.files.map((file) => {
      return { img: file.filename };
    });
  } else {
    productPictures = [{ img: req.file.filename }];
  }

  const newProduct = new Product({
    name,
    slug: slugify(name),
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
