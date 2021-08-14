'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.bulkInsert('Product', [{
    //   id: 1,
    //   name: "p1",
    //   product_type: 2,
    //   price: 1324,
    //   description: "Lorem",
    //   image_type: "image/jpeg",
    //   image_name: "8437703b620fa2843df72a36a4579c6e",
    //   image_path: "images\\8437703b620fa2843df72a36a4579c6e",
    //   image_data:"aaaa",
    //   created_at: new Date(),
    //   updated_at: new Date(),
    // },
    // {
    //   id: 2,
    //   name: "p2",
    //   product_type: 1,
    //   price: 1324412,
    //   description: "Lorem",
    //   image_type: "image/jpeg",
    //   image_name: "c1851f656108c032686eaf19e5222541",
    //   image_path: "images\\c1851f656108c032686eaf19e5222541",
    //   created_at: new Date(),
    //   updated_at: new Date(),
    // },
    // {
    //   id: 3,
    //   name: "p3",
    //   product_type: 3,
    //   price: 23541,
    //   description: "Lorem",
    //   image_type: "image/jpeg",
    //   image_name: "c1851f656108c032686eaf19e5222541",
    //   image_path: "images\\c1851f656108c032686eaf19e5222541",
    //   created_at: new Date(),
    //   updated_at: new Date(),
    // },
    // ], {});
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
