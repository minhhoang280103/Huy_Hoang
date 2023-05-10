"use strict";
const express = require("express");
const router = express.Router({});
const StaffController = require("../controllers/staffController");

router.get("/staff/list", StaffController.getList);
router.post("/staff/add", StaffController.addStaff);
router.get("/staff/detail/:id", StaffController.getStaffDetail);
router.post("/staff/edit", StaffController.editStaff);
module.exports = router;