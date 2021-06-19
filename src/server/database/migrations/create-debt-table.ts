import { DataTypes, QueryInterface } from 'sequelize';

export = {
  up: (queryInterface: QueryInterface, Sequelize: typeof DataTypes) => {
    return queryInterface.createTable('debt', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        autoIncrement: false,
      },
      type: {
        type: Sequelize.ENUM,
        values: ['asset', 'liability'],
        allowNull: false,
      },
      amount: {
        type: Sequelize.DECIMAL(19, 4),
        defaultValue: 0,
      },
      date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      note: {
        type: Sequelize.STRING,
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      is_repaid: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      username: {
        type: Sequelize.STRING,
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      is_deleted: {
        type: Sequelize.BOOLEAN,
      },
    });
  },
  down: (queryInterface: QueryInterface, Sequelize: typeof DataTypes) => {
    return queryInterface.dropTable('debt');
  },
};
