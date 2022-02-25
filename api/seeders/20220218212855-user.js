"use strict";
const bcryptjs = require("bcryptjs");
const saltRounds = 10;

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    const salt = bcryptjs.genSaltSync(saltRounds);
    const hash = bcryptjs.hashSync("123456", salt);
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Tom",
          lastName: "Lemelle",
          email: "tom@dev.com",
          password: hash,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Dylan",
          lastName: "Couto De Oliveira",
          email: "dylan@dev.com",
          password: hash,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkInsert("Users", null, {});
  },
};
