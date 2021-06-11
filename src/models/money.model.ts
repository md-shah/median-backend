import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table({
  timestamps: true,
})
export default class MoneyModel extends Model<MoneyModel> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
  })
  id: string;

  @Column({
    type: DataType.ENUM,
    values: ['expense', 'income'],
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
  })
  date: Date;

  @Column({
    type: DataType.STRING,
  })
  note: string;

  @Column({ defaultValue: false })
  is_deleted: boolean;
}
