import Category from "../models/Category.js";

function createCategories(categories, parentId = null) {
  const categoryList = [];
  let category;
  if (parentId === null) {
    category = categories.filter((cat) => cat.parentId === undefined);
  } else {
    category = categories.filter((cat) => cat.parentId == parentId);
  }
  //   console.log(category);

  for (let cate of category) {
    categoryList.push({
      _id: cate._id,
      name: cate.name,
      children: createCategories(categories, cate._id),
    });
  }

  return categoryList;
}

export const create = async (req, res) => {
  const findCategory = await Category.findOne({ name: req.body.name });
  if (findCategory) {
    return res
      .status(403)
      .json({ message: `Category ${req.body.name} is already exist` });
  }
  const categoryObj = {
    name: req.body.name,
  };

  if (req.body.parentId) {
    categoryObj.parentId = req.body.parentId;
  }

  const newCategory = new Category(categoryObj);

  try {
    const category = await newCategory.save();
    res.status(201).json({ category });
  } catch (error) {
    res
      .status(400)
      .json({ message: `Error occured create category. ${error}` });
  }
};

export const get = async (req, res) => {
  const categories = await Category.find();
  if (!categories) {
    return res.status(404).json({ message: `There is no any category` });
  }
  const categoryList = createCategories(categories);
  return res.status(200).json({ categories: categoryList });
};
