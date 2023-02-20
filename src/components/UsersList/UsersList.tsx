import React from 'react';

import UserType from '../../types/types';
import User from '../User/User';

interface UsersListProps {
   users: UserType[];
   partOfUsers: UserType[];
   getNewPartOfUsers: () => void;
}

const UsersList: React.FC<UsersListProps> = ({ users, partOfUsers, getNewPartOfUsers }) =>
   users.length ? (
      <ul>
         {partOfUsers.map((user: UserType) => (
            <li key={user.id}>
               <User getNewPartOfUsers={getNewPartOfUsers} user={user} />
            </li>
         ))}
      </ul>
   ) : (
      <div>loading...</div>
   );

export default UsersList;
