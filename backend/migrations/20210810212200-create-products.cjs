'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('product', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      product_type: {
        //foreign key
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'type',
          key: 'id'
        }
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING
      },
      image_type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image_data: {
        type: Sequelize.BLOB
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('product');
  }
};