'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bookmarks', [
      {
        name: "Github",
        slug: "github",
        description: "Git repository service",
        url: "https://github.com/",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Laravel",
        slug: "laravel",
        description: "Fullstack PHP framework",
        url: "https://laravel.com/",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Twitter",
        slug: "twitter",
        description: "Social media",
        url: "https://twitter.com/",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Youtube",
        slug: "youtube",
        description: "Video streaming service",
        url: "https://youtube.com/",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "React JS",
        slug: "react-js",
        description: "Frontend framework",
        url: "https://reactjs.org/",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bookmarks', null, {});
  }
};
