'use strict';
const { faker } = require('@faker-js/faker');

const categoriesArr = ["programming", "framework", "social-media"];
const bookmarksArr = [...Array(100)].map((bookmark) => {
  const fakeName = faker.company.name();
  const newBookmark = {
    name: fakeName,
    category: categoriesArr[Math.floor(Math.random() * (2 - 0) + 0)],
    slug: fakeName.replace(/\s+/g, '-').toLowerCase(),
    description: faker.lorem.sentence(3),
    url: "https://" + faker.internet.domainName(),
    createdAt: new Date(),
    updatedAt: new Date()
  }

  return newBookmark;
});

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bookmarks', bookmarksArr, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bookmarks', null, {});
  }
};

// [
//   {
//     name: "Github",
//     category: "programming",
//     slug: "github",
//     description: "Git repository service",
//     url: "https://github.com/",
//     createdAt: new Date(),
//     updatedAt: new Date()
//   }, {
//     name: "Laravel",
//     category: "framework",
//     slug: "laravel",
//     description: "Fullstack PHP framework",
//     url: "https://laravel.com/",
//     createdAt: new Date(),
//     updatedAt: new Date()
//   }, {
//     name: "Twitter",
//     category: "social-media",
//     slug: "twitter",
//     description: "Social media",
//     url: "https://twitter.com/",
//     createdAt: new Date(),
//     updatedAt: new Date()
//   }, {
//     name: "Youtube",
//     category: "social-media",
//     slug: "youtube",
//     description: "Video streaming service",
//     url: "https://youtube.com/",
//     createdAt: new Date(),
//     updatedAt: new Date()
//   }, {
//     name: "React JS",
//     category: "framework",
//     slug: "react-js",
//     description: "Frontend framework",
//     url: "https://reactjs.org/",
//     createdAt: new Date(),
//     updatedAt: new Date()
//   },
// ]