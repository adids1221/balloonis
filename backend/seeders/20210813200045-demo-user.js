'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkInsert('User', [{
    //   user_name: "admin",
    //   password: "password",
    //   is_admin: true,
    //   createdAt: new Date(),
    //   updatedAt: new Date(),
    // }
    // ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
