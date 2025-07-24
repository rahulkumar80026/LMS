// Import the require module
const express = require("express");
const router = express.Router();

// // Import the controller

// // course controller import
const {
  createCourse,
  getAllCourses,
  getCourseDetails,
} = require("../controllers/CourseController");

// console.log("createCourse:", createCourse);
// console.log("getAllCourses:", getAllCourses);
// console.log("getCourseDetails:", getCourseDetails);


// // categories controllers Import

const {
  showAllCategories,
  createCategory,
  categoryPageDetails,
} = require("../controllers/Category");

// // section Controllers Import
const {
  createSection,
  updateSection,
  deleteSection,
} = require("../controllers/SectionController");



// // SubSectionControllers Import
const {
  createSubSection,
  updatedSubSection,
  deleteSubSection,
} = require("../controllers/Subsection");

// console.log("updatedSubSection:", updatedSubSection);
// console.log("deleteSubSection:", deleteSubSection);

// // Rating Controllers Import
const {
  createRating,
  getAverageRating,
  getAllRating,
} = require("../controllers/RatingAndReview");

// // Importing Middlewares
const { auth, isInstructor, isStudent, isAdmin } = require("../middlewares/auth");

// //***************************************************************************************************************** */
// //                     Course Route
// //************************************************************************************************************************** */
// // courses can only be Created by Instructors
router.post("/createCourse", auth, isInstructor, createCourse);
// Add a Section to a Course
router.post("/addSection", auth, isInstructor, createSection);
// Update a section
router.post("/updateSection", auth, isInstructor, updateSection);
//Delete a Section
router.post("/deleteSection", auth, isInstructor, deleteSection);
// // Edit a Subsection
// router.post("/updateSubSection", auth, isInstructor, updatedSubSection);
// Delete a subSection
// router.delete("/deleteSubSection", auth, isInstructor, deleteSubSection);
// Add a SubSection to a section
router.post("/addSubSection", auth, isInstructor, createSubSection);
// Get All Register courses
router.post("/GetAllCourse", getAllCourses);
// Get details for a Specific Courses
router.post("/getCourseDetails", getCourseDetails);



// //******************************************************************* */
// //                        Category Route
// //******************************************************************************* */
router.get("/showAllCategory",showAllCategories)
router.post("/getCategoryPageDetails",categoryPageDetails)
router.post("/createCategory",createCategory)
// //******************************************************************************** */
// //                              Rating and Review
// //****************************************************************************** */
router.post("/createRating", auth, isStudent, createRating);
router.get("/getAverageRating", getAverageRating);
router.get("/getReviews", getAllRating);


module.exports = router

