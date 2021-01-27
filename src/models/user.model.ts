import { Column, Model, Table } from 'sequelize-typescript';

@Table
export default class User extends Model<User> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
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
