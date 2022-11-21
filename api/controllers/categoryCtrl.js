import Category from "../models/Category.js";

// Category Arrange Function
function createCategories(categories, parentId = null) {
  let category;
  const categoryList = [];
  if (parentId == null) {
    category = categories.filter((cat) => cat.parentId == undefined);
  } else {
    category = categories.filter((cat) => cat.parentId == parentId);
  }

  category.forEach((cat) => {
    categoryList.push({
      _id: cat._id,
      name: cat.name,
      children: createCategories(categories, cat._id),
    });
  });

  return categoryList;
}

export const create = async (req, res) => {
  const { name, parentId } = req.body;

  const categoryObj = { name, createdBy: req.user._id };

  if (parentId) categoryObj.parentId = parentId;

  const findCategory = await Category.findOne({ name });

  if (findCategory)
    return res
      .status(403)
      .json({ message: `Category ${name} is already exist` });

  const newCat = new Category(categoryObj);

  const savedCat = await newCat.save();

  return res
    .status(201)
    .json({ message: "Successfully Created Category", newCategory: savedCat });
};
export const get = async (req, res) => {
  const category = await Category.find();
  res.status(200).json({ categories: createCategories(category) });
};
