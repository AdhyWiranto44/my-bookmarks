'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
        name: "Programming",
        slug: "programming",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Framework",
        slug: "framework",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Social Media",
        slug: "social-media",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
