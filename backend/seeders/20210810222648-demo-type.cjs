'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('type', [{
      id: 1,
      name: 'c1',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      name: 'c2',
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 3,
      name: 'c3',
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
