'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const transaction =  await queryInterface.sequelize.transaction();
    try{

      await queryInterface.addColumn('Person','active',{
        type : Sequelize.STRING
      },{transaction});
      await queryInterface.addColumn('Person','activateToken',{
        type : Sequelize.STRING
      },{transaction});
      await transaction.commit();

    }catch(error){
      await transaction.rollback();

    }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    const transaction = await queryInterface.sequelize.transaction();
    try{
      await queryInterface.removeColumn('Person','active',{transaction})
      await queryInterface.removeColumn('Person','activateToken',{transaction})
      await transaction.commit();
    }catch(error){
     await transaction.rollback()
    }
  }
};
