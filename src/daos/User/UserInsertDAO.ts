import db from '../../database';
import UserStatus from '@constants/Status/UserStatus';

export function insertUser(trx, data: any, encodedPw: string) {
  return db.transacting(trx)
    .into('User')
    .insert({
      username: data.username,
      password: encodedPw,
      email: data.email,
      status: UserStatus.PENDING
    });
};
