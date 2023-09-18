const { Students, StudentProfile, Classes } = require("../models");

exports.index = (req, res) => {
  res.render("index");
};

//학생 생성
exports.post_student = async (req, res) => {
  try {
    console.log(req.body);
    const { userid, password, email, name, major, enroll } = req.body;
    const user = await Students.create(
      {
        userid,
        password,
        email,
        StudentProfile: {
          name,
          major,
          enroll,
        },
      },
      { include: StudentProfile }
    );
    console.log(user);
    res.send(user);
  } catch (error) {
    console.log(error);
  }
};
exports.post_class = async (req, res) => {
  try {
    const { name, room, code, teacher_name, StudentId } = req.body;
    const classes = await Classes.create({
      name,
      room,
      code,
      teacher_name,
      StudentId,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.get_student = async (req, res) => {
  try {
    const student = await Students.findAll({
      attributes: ["userid", "email"],
      include: [{ model: StudentProfile, attributes: ["major", "enroll"] }],
    });
    res.send(student);
  } catch (error) {
    console.log(error);
  }
};
