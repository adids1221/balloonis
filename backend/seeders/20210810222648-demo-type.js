'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Type', [{
      name: "balloons",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: "wall-stickers",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: "gifts",
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
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
