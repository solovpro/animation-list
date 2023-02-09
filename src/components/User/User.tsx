import React from 'react';

import Users from '../../types/types';

import s from './User.module.scss';

interface ListElementProps {
   user: Users;
}

const User: React.FC<ListElementProps> = ({ user }) => (
   <div className={s.element}>
      <div>name: {user.name}</div>
      <div>surname: {user.surname}</div>
   </div>
);

export default User;
