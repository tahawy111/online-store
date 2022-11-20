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
  const { name, parentId } = req.body;
  const categoryObj = { name, createdBy: req.user._id };
  if (parentId !== "") categoryObj.parentId = parentId;
  const findCategory = await Category.findOne({ name });
  if (findCategory)
    return res
      .status(403)
      .json({ message: `Category ${name} is already exist.` });

  const newCat = new Category(categoryObj);

  const category = await newCat.save();

  const allCategories = await Category.find();

  return res.status(201).json({
    message: "Successfully Created Category",
    newCategory: category,
    allCategories: createCategories(allCategories),
  });
};
export const get = async (req, res) => {
  const categories = await Category.find();
  if (!categories) {
    return res.status(404).json({ message: `There is no any category` });
  }
  const categoryList = createCategories(categories);
  return res.status(200).json({
    categoryList,
  });
};
