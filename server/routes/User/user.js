var express = require('express');
var router = express.Router();

const signupController = require('../../Controller/User/userRegisterController')
const loginController = require('../../Controller/User/userLoginController')
const profilerImageUpdateController = require('../../Controller/User/profileImageUpdateController')
const viewVehiclesController = require('../../Controller/User/Vehicles/VehicleStoreController')
const {protect} = require('../../middleware/jwtAuth')

/* GET home page. */
router.post('/signup',signupController.signUpPost)

router.post('/login',loginController.LoginPost)

router.get('/')

router.post('/profileImageUpdate',profilerImageUpdateController.profileImageUploadPost)

router.route('/vehicles').get(viewVehiclesController.viewVehicles)

module.exports = router;
