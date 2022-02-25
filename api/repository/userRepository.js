const { User } = require("../models");

exports.createUser = async (user) => {
  return await User.create({
    where: { email: user.email },
    defaults: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    },
  }).catch((err) => {
    console.log(err);
  });
};
