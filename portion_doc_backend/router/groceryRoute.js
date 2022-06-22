const express = require("express");
const router = new express.Router();

const auth = require("../auth/auth.js");
const upload = require("../uploads/groceryFile");
const Grocery = require("../models/groceryModel");

router.post(
  "/add/grocery",
  auth.verifyAdmin,
  upload.single("groceryImage"),
  async (req, res) => {
    if (req.file === undefined) {
      return res.status(400).json({ message: "Invalid Image Type!!" });
    }
    const groceryImage = req.file.filename;
    const groceryName = req.body.groceryName;
    const groceryPrice = req.body.groceryPrice;
    const groceryDescription = req.body.groceryDescription;

    const groceryData = new Grocery({
      groceryImage: groceryImage,
      groceryName: groceryName,
      groceryPrice: groceryPrice,
      groceryDescription: groceryDescription,
    });
    groceryData
      .save()
      .then(function () {
        res.status(200).send({
          success: true,
          data: groceryData,
          message: "New grocery added successfully!",
        });
      })
      .catch(function (e) {
        res.status(400).send({ message: e });
      });
  }
);

router.put(
  "/update/grocery/image/:gid",
  auth.verifyAdmin,
  upload.single("groceryImage"),
  async (req, res) => {
    const gid = req.params.gid;

    if (req.file === undefined) {
      return res.json({ message: "Invalid!!" });
    }

    const groceryImage = req.file.filename;

    Grocery.findOne({ _id: gid })
      .then((groceryData) => {
        if (!groceryData.groceryImage) {
          const grocery_image_path = `./uploads/grocery/${groceryData.groceryImage}`;
          fs.unlinkSync(grocery_image_path);
        }

        Grocery.updateOne(
          { _id: gid },
          {
            groceryImage: groceryImage,
          }
        )
          .then(function () {
            res
              .status(200)
              .send({ success: true, message: "Grocery Image Updated!" });
          })
          .catch(function () {
            res.status(400).send({ message: e });
          });
      })
      .catch((e) => {
        res.status(400).send({ message: e });
      });
  }
);

router.put(
  "/update/grocery/:gid",
  auth.verifyAdmin,
  upload.single("groceryImage"),
  async (req, res) => {
    const gid = req.params.gid;
    const groceryName = req.body.groceryName;
    const groceryPrice = req.body.groceryPrice;
    const groceryDescription = req.body.groceryDescription;

    Grocery.findOne({ _id: gid })
      .then((groceryData) => {
        Grocery.updateOne(
          { _id: gid },
          {
            groceryName: groceryName,
            groceryPrice: groceryPrice,
            groceryDescription: groceryDescription,
          }
        )
          .then(function () {
            res.status(200).send({
              success: true,
              message: "Grocery details has been updated!",
            });
          })
          .catch(function () {
            res.status(400).send({ message: e });
          });
      })
      .catch((e) => {
        res.status(400).send({ message: e });
      });
  }
);

router.get("/grocery/all", auth.verifyAdmin, async (req, res) => {
  const GroceryData = await Grocery.find();
  res.json({ success: true, message: "Meals Data", data: GroceryData });
});

router.get("/all/grocery", async (req, res) => {
  const GroceryData = await Grocery.find();
  res.json({ success: true, message: "Grocery Data", data: GroceryData });
});

router.get("/grocery/single/:gid", auth.verifyAdmin, function (req, res) {
  const gid = req.params.gid;
  Grocery.findOne({ _id: gid })
    .then(function (result) {
      res.status(200).send({
        success: true,
        data: result,
        message: "Grocery details by Id",
      });
    })
    .catch(function () {
      res.status(400).send({ message: "Something went wrong!" });
    });
});
router.get("/grocery/single/view/:gid", auth.verifyUser, async (req, res) => {
  const gid = req.params.gid;
  Grocery.findOne({ _id: gid })
    .then(function (result) {
      res
        .status(200)
        .send({ success: true, data: result, message: "Meal details by Id" });
    })
    .catch(function () {
      res.status(400).send({ message: "Something went wrong!" });
    });
});

router.delete("/grocery/delete/:gid", auth.verifyAdmin, function (req, res) {
  const gid = req.params.gid;
  Grocery.deleteOne({ _id: gid })
    .then(function () {
      res
        .status(200)
        .send({ success: true, message: "Grocery has been deleted!" });
    })
    .catch(function () {
      res.status(400).send({ message: "Something went wrong!" });
    });
});

router.post("/search/grocery", async (req, res) => {
  const keyGroceryName = req.body.groceryName
    ? { groceryName: { $regex: req.body.groceryName, $options: "i" } }
    : {};
  const groceries = await Grocery.find(keyGroceryName);
  res.send(groceries);
});

module.exports = router;
