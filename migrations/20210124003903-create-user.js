module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      password: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      first_name: {
        type: Sequelize.STRING,
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      last_name: {
        type: Sequelize.STRING,
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      is_active: {
        type: Sequelize.BOOLEAN,
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user');
  },
};
