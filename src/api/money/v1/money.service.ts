import { Inject, Injectable } from '@nestjs/common';
import MoneyModel from '../../../models/money.model';

@Injectable()
export default class MoneyServiceV1 {
  private MoneyModel: MoneyModel;

  constructor(private readonly MoneyRepository: typeof MoneyModel) {}

  public addMoneyDetails(dataInput: MoneyModel): Promise<MoneyModel> {
    return this.MoneyRepository.create();
  }
}
