const bcrypt = require("bcryptjs");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "usuarios",
      [
        {
          nome: "Luiz",
          email: "luiz1@gmail.com",
          password_hash: await bcrypt.hash("123456", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Luiz2",
          email: "luiz2@gmail.com",
          password_hash: await bcrypt.hash("654321", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Luiz3",
          email: "luiz3@gmail.com",
          password_hash: await bcrypt.hash("123456789", 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down() {},
};
