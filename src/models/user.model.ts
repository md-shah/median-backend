import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  timestamps: true,
  modelName: 'users',
})
// eslint-disable-next-line import/prefer-default-export
export class User extends Model {
  @Column({
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    validate: {
      notNull: {
        msg: 'Please enter your name',
      },
    },
  })
  id: string;

  @Column
  first_name: string;

  @Column
  last_name: string;

  @Column({ unique: true })
  email: string;

  @Column
  password: string;

  @Column({ defaultValue: true })
  is_active: boolean;
}
