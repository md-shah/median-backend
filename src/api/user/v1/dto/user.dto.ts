// eslint-disable-next-line max-classes-per-file
import { IsEmail, IsAlpha, MinLength } from 'class-validator';

// eslint-disable-next-line import/prefer-default-export
export class UserSignupDtoIn {
  @IsAlpha()
  first_name: string;

  @IsAlpha()
  last_name: string;

  @IsEmail()
  email: string;

  @MinLength(5)
  password: string;
}

// eslint-disable-next-line import/prefer-default-export
export class UserSignupDtoOut {
  @IsAlpha()
  id: string;

  @IsAlpha()
  first_name: string;

  @IsAlpha()
  last_name: string;

  @IsEmail()
  email: string;
}
