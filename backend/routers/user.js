const router = require('express').Router();
const cookieParser = require('cookie-parser');
router.use(cookieParser());
const userController = require('../controllers/user')


router.post('/api/change_username',userController.change_username);

router.post('/api/change_avatar',userController.change_avatar);

router.post('/api/change_status',userController.change_status);

router.post('/api/change_passwd',userController.change_passwd);

router.put('/api/setting_user/',userController.setting_user);

router.get('/api/user/:username',userController.get_user_data);

router.get('/api/get_users',userController.get_users);

router.post('/api/confirm_email',userController.confirm_email);


router.post('/api/confirm_change_password',userController.confirm_change_password);

module.exports = router;