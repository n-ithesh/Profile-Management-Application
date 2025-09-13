import PostModel from "../model/post.model.js";

const getAllPost = async (req, res, next) => {
  try {
    const responseData = await PostModel.find();
    res.send({
      success: true,
      responseData,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSinglePost = async (req, res, next) => {
  try {
    const { postID } = req.query;
    const responseData = await PostModel.findById(postID);
    res.send({
      success: true,
      responseData,
    });
  } catch (error) {
    console.log(error);
  }
};



export {  getAllPost, getSinglePost };
