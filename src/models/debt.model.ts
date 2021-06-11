import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
})
export default class MoneyModel extends Model<MoneyModel> {
  @Column({
    allowNull: false,
    primaryKey: true,
    autoIncrement: false,
    type: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.ENUM,
    values: ['asset', 'liability'],
    allowNull: false,
  })
  type: string;

  @Column({
    type: DataType.DECIMAL(19, 4),
    defaultValue: 0,
  })
  amount: number;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  date: Date;

  @Column({
    type: DataType.STRING,
  })
  username: string;

  @Column({
    type: DataType.STRING,
  })
  note: string;

  @Column({ defaultValue: false })
  is_repaid: boolean;

  @Column({ defaultValue: false })
  is_deleted: boolean;
}
