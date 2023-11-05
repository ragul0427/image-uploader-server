const Image = require("../modals/image");

const createImage = async (req, res) => {
  console.log(req.body.imageList);
  try {
    await Image.create({ image: req.body.imageList });
    return res.status(200).send({ message: "Image Added successfully" });
  } catch (err) {
    console.log(err);
  }
};
const getImage = async (req, res) => {
  try {
    const result = await Image.find();
    return res.status(200).send({ message: result });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createImage, getImage };
