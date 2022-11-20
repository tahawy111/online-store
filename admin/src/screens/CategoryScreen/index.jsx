import {
  Fab,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Tooltip,
  FormControl,
} from "@mui/material";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Layout from "../../components/Layout/index";
import { BsPlusLg } from "react-icons/bs";
import Modal from "./../../components/Modal/index";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../actions/category.cations";
import { toast } from "react-toastify";

const CategoryScreen = (props) => {
  const [addFormData, setAddFormData] = useState({
    name: "",
    parentId: "",
  });
  const dispatch = useDispatch();

  const handleAddChange = ({ target }) =>
    setAddFormData({ ...addFormData, [target.name]: target.value });
  console.log(addFormData);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const category = useSelector((state) => state.category);

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if (category.children.length > 0) {
        createCategoryList(category.children, options);
      }
    }

    return options;
  };
  const categoryList = !category.categories
    ? []
    : createCategoryList(category.categories);

  const handleSubmit = () => {
    if (addFormData.name === "") {
      toast.error("Category Name is Required");
      return;
    }
    if (addFormData.parentId === "") {
      setAddFormData({ name: addFormData.name });
    }
    console.log("Form", addFormData);
    dispatch(addCategory(addFormData)).then(() => {
      setAddFormData({ name: "", parentId: "" });
      setOpen(false);
    });
  };

  return (
    <Layout>
      <Container>
        <div className="mt-3 d-flex align-items-center">
          <Tooltip arrow title="Add New Category">
            <Fab
              className="ms-3"
              onClick={handleClickOpen}
              style={{ background: "#1cb16c" }}
            >
              <BsPlusLg size={20} color="white" />
            </Fab>
          </Tooltip>
        </div>
      </Container>
      <Modal
        open={open}
        handleClose={handleClose}
        title="Add New Category"
        submitText="Add"
        cancelText="Cancel"
        handleSubmit={handleSubmit}
      >
        <TextField
          autoFocus
          margin="dense"
          value={addFormData.name}
          onChange={handleAddChange}
          name="name"
          label="Category Name"
          type="text"
          fullWidth
          variant="standard"
        />
        <FormControl fullWidth className="mt-3">
          <InputLabel id="demo-simple-select-label">Parent Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="parentId"
            value={addFormData.parentId}
            label="Parent Category"
            onChange={handleAddChange}
          >
            {categoryList.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Modal>
    </Layout>
  );
};

export default CategoryScreen;
