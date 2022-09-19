'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bookmark_categories', [
      {
        bookmarkId: 1,
        categoryId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bookmarkId: 2,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bookmarkId: 3,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bookmarkId: 4,
        categoryId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        bookmarkId: 5,
        categoryId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bookmark_categories', null, {});
  }
};
