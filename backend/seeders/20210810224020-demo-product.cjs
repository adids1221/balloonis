'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('product', [{
      id: 1,
      name: "p1",
      product_type: 2,
      price: 1324,
      description: "Lorem",
      image_type: "jpg",
      image_name: "p1",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      name: "p2",
      product_type: 1,
      price: 1324412,
      description: "Lorem",
      image_type: "jpg",
      image_name: "p2",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 3,
      name: "p3",
      product_type: 3,
      price: 23541,
      description: "Lorem",
      image_type: "jpg",
      image_name: "p3",
      created_at: new Date(),
      updated_at: new Date(),
    },
    ], {});
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
