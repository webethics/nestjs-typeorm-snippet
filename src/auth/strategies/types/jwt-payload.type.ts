import { Users } from '../../../users/entities/user.entity';

export type JwtPayloadType = Pick<Users, 'id' | 'role'> & {
  iat: number;
  exp: number;
};
