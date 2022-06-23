const express = require("express");
const router = new express.Router();
const Category = require("../models/categoryModel");
const auth = require("../auth/auth");
const upload = require("../uploads/categoryFile");

router.post(
  "/category/insert",
  auth.verifyAdmin,
  upload.single("categoryImage"),
  async (req, res) => {
    if (req.file === undefined) {
      return res.status(400).json({ message: "Invalid file type" });
    }
    const categoryName = req.body.categoryName;
    const category = await Category.findOne({
      categoryName: categoryName
  })
  if(category) return res.status(400).send({message: 'Category already registered with given name.'})
    const categoryImage = req.file.filename;
    const data = new Category({
      categoryName: categoryName,
      categoryImage: categoryImage,
    });

    data
      .save()
      .then(function () {
        res
          .status(200)
          .send({ success: true, message: "New Category added successfully!" });
      })
      .catch(function (e) {
        res.status(400).send({ message: "Empty Field Found!! Fill the form completely" });
      });
    // return res.json({success: true, message:"Category Inserted Successfully"});
  }
);

router.get("/category/single", auth.verifyAdmin, async (req, res) => {
  const CategoryData = await Category.find();
  res.json({ success: true, message: "Category Data", data: CategoryData });
});

router.get("/category/all", async (req, res) => {
  const CategoryData = await Category.find();
  res.json({ success: true, message: "Category Data", data: CategoryData });
});

router.delete("/category/delete/:cid", auth.verifyAdmin, function (req, res) {
  const cid = req.params.cid;
  Category.deleteOne({ _id: cid })
    .then(function () {
      res.status(200).send({ success: true, message: "Category deleted!!" });
    })
    .catch(function () {
      res.status(400).send({message: "Category deletion failed!!" });
    });
});

module.exports = router;
