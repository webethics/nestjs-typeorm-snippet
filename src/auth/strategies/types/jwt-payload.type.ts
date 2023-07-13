import { Users } from '../../../users/entities/user.entity';

export type JwtPayloadType = Pick<Users, 'id' | 'role'> & {
  id: Users['id'];
  iat: number;
  exp: number;
};
