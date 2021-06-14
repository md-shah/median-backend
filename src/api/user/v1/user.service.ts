import { Inject, Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { UserSignupDtoIn, UserSignupDtoOut } from './dto/user.dto';
import { User } from '../../../models/user.model';

@Injectable()
export default class UserServiceV1 {
  userDto: UserSignupDtoIn;

  // eslint-disable-next-line no-useless-constructor
  constructor(
    @Inject('USER_REPOSITORY')
    private UserRepository: typeof User,
  ) {
  }

  async addUser(userDto: UserSignupDtoIn): Promise<UserSignupDtoOut | any> {
    this.userDto = userDto;
    return this.UserRepository.create({
      id: uuidv4(),
      ...this.userDto,
    });
  }

  async getUser(email: string): Promise<UserSignupDtoOut | any> {

    return this.UserRepository.findOne({
      where: {
        email: email,
      },
    });
  }
}
