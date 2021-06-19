import { User } from '../../models/user.model';

// eslint-disable-next-line import/prefer-default-export
export const UserProviders = [
  {
    provide: 'USER_REPOSITORY',
    useValue: User,
  },
];
