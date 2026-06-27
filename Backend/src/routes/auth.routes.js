const {Router} = require("express")
const authController = require("../controllers/auth.contoller.js")
const authMiddleware = require("../middleware/auth.middleware.js")

const authRouter = Router()


authRouter.post("/register",authController.registerUserController)

authRouter.post("/login",authController.loginUserController)

authRouter.get("/logout",authController.logutUserController)

authRouter.get("/get-me",authMiddleware.authUser,authController.getMeController)

module.exports = authRouter
