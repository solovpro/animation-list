import React, { useEffect, useState } from 'react';
import axios from 'axios';

import User from './components/User/User';
import UserType from './types/types';

import s from './App.module.scss';

const App: React.FC = () => {
   const [users, setUsers] = useState<UserType[]>([]);
   const [partOfUsers, setPartOfUsers] = useState<UserType[]>([]);
   const [onePartLength, setOnePartLength] = useState<number>(20);
   const [fullUsers] = useState<number>(100);

   const getNewPartOfUsers = () => {
      if (partOfUsers.length !== fullUsers) {
         setPartOfUsers(users.slice(0, onePartLength));
         setOnePartLength(value => value + 20);
      }
   };

   const getUsers = () => {
      axios
         .get('https://63e4d5cfc04baebbcdad16d8.mockapi.io/users')
         .then(response => {
            setUsers(response.data);
            setPartOfUsers(response.data.slice(0, onePartLength));
            setOnePartLength(40); // Присваиваем длину 2-ой пачки 20-ти элементов
         })
         .catch(error => console.log(error));
   };

   useEffect(() => {
      getUsers();
   }, []);

   return (
      <main className={s.app}>
         {users ? (
            <ul>
               {partOfUsers.map((user: UserType) => (
                  <li key={user.id}>
                     <User getNewPartOfUsers={getNewPartOfUsers} user={user} />
                  </li>
               ))}
            </ul>
         ) : (
            <div>loading...</div>
         )}
      </main>
   );
};

export default App;
