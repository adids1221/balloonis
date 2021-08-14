'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Product', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        default: Sequelize.fn('uuid_generate_v4')
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
          model: 'Type',
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
        type: Sequelize.BLOB,
        allowNull: false
      },
      image_path: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Product');
  }
};