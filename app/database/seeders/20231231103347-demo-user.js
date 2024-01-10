'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Person',[{
    first_name:"sudais",
    last_name:"sudais",
    email:"usdas@gmail.com",
    password:"1234566",
    active:"1273617",
    activateToken:"832wedjds9ew93ui",
    created_at: new Date(),
    updated_at: new Date(),
   }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
