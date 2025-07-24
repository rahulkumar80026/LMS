const express = require("express")
const router = express.Router()


const {
    login,
    signup,
    sendotp,
    changePassword
}=require("../controllers/Auth")

const {resetPasswordToken,resetPassword} = require("../controllers/ResetPassword")
const {auth} = require("../middlewares/auth")

// Routes for Login,Signup, and Authentication

//************************************************************************************** */
                // Authentication
// ******************************************************************************************

// Router for user 
router.post("/login",login)

// Router for user signup
router.post("/signup",signup)

// Router for sending otp to the user's email
router.post('/sendotp',sendotp)

// Router for changing the password
router.post("/changePassword",auth,changePassword)

//********************************************************************* */
//               Reset Password
//********************************************************************************** */
// Router for generating a rest password token 
router.post("/reset-password-token",resetPasswordToken)

// Router for resetting user's password after verifaction
router.post("/reset-password",resetPassword)

// Export the router for use in the main application
module.exports = router
 