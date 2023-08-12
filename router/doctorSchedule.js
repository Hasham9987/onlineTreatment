const express = require("express");
const scheduleRouter = express.Router();
const {
  doctorScheduleCreate,
  doctorScheduleFetch,
  doctorScheduleBook,
} = require("../controller/doctorScheduleController");
const verifyToken = require("../middleware/verifyToken");

scheduleRouter.post(
  "/api/doctorScheduleCreate",
  verifyToken,
  doctorScheduleCreate
);
scheduleRouter.get(
  "/api/doctorScheduleFetch",
  verifyToken,
  doctorScheduleFetch
);
scheduleRouter.post(
  "/api/doctorSchedule/book",
  verifyToken,
  doctorScheduleBook
);

module.exports = scheduleRouter;
