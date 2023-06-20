//This file talks to the admin controller//
const express = require('express');
// moved to line 5
const adminController = require('../controllers/admin-controller');
const router = express.Router();

router.route('/')
.get(adminController.account) // yes
.get(adminController.read_task) // yes
.post(adminController.create_task) // yes
.delete(adminController.delete_task) // yes

router.route('/:_id')
// error - :_id/
// recognizes the id, but won't delete --> /:_id/
// .post(adminController.delete_task)
//reactivated
.delete(adminController.delete_task) // yes

module.exports = router;