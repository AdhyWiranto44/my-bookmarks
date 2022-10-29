'use strict';

const favoritesArr = [
  {
    bookmark: 9,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    bookmark: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    bookmark: 5,
    createdAt: new Date(),
    updatedAt: new Date()
  },
];

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('favorites', favoritesArr, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('favorites', null, {});
  }
};
