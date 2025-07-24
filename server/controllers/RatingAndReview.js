const mongoose  = require("mongoose");
const Course = require("../models/Course");
const RatingAndRaview = require("../models/RatingAndRaview");

// createRating
exports.createRating = async (req, res) => {
  try {
    // get user Id
    const userId = req.user.id;
    // data fetch
    const { rating, review, courseId } = req.body;
    // check if user is enrolled or not
    const courseDetails = await Course.findOne({
      _id: courseId,
      studentsEnrolled: { $elemMatch: { $eq: userId } },
    });

    if (!courseDetails) {
      return res.status(404).json({
        success: false,
        message: "Student is not enrolled in the course",
      });
    }
    // check if user already review the course
    const alreadyReviewed = await RatingAndRaview.findOne({
      user: userId,
      course: courseId,
    });
    if (alreadyReviewed) {
      res.status(403).json({
        success: false,
        message: "Course is already reviewed by user",
      });
    }
    // create rating and review
    const ratingReview = await RatingAndRaview.create({
      rating,
      review,
      course: courseId,
      user: userId,
    });
    // update course with this rating/review
    const updatedCourseDetails = await Course.findByIdAndUpdate(
      { _id: courseId },
      {
        $push: {
          ratingAndReviews: ratingReview._id,
        },
      },
      { new: true }
    );
    console.log(updatedCourseDetails);
    // return response
    return res.status(200).json({
      success: true,
      message: "Rating and Review Created Successfully",
      ratingReview,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// AverageRating
exports.getAverageRating = async (req, res) => {
  try {
    // get courseId
    const courseId = req.body.courseId;
    // Calculate Average Rating
    const result = await RatingAndRaview.aggregate([
      {
        $match: {
          course: new mongoose.Types.ObjectId(courseId),
        },
      },
      {
        $group: {
          _id: null,
          averageRating: { $avg: "$rating" },
        },
      },
    ]);
    // return rating
    if (result.length > 0) {
      return res.status(200).json({
        success: true,
        averageRating: result[0].averageRating,
      });
    }
    // if no rating and review exist
    return res.status(200).json({
      success: true,
      message: "Average Rating is 0, no rating given by user",
      averageRating: 0,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
//getAllRating And Review
exports.getAllRating = async (req, res) => {
  try {
    const allReview = await RatingAndRaview.find({})
      .sort({ rating: "desc" })
      .populate({
        path: "user",
        select: "firstName LastName email image",
      })
      .populate({ path: "course", select: "courseName" })
      .exec();

    return res.status(200).json({
      success:true,
      message:'All reviewts fetched successfully ',
      data:allReview
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
