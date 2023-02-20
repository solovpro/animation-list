import React, { useEffect, useState } from 'react';
import axios from 'axios';

import UsersList from './components/UsersList/UsersList';
import UserType from './types/types';

import s from './App.module.scss';

const App: React.FC = () => {
   const [users, setUsers] = useState<UserType[]>([]);
   const [partOfUsers, setPartOfUsers] = useState<UserType[]>([]);
   const [onePartLength, setOnePartLength] = useState<number>(20);
   const [errorRequest, setErrorRequest] = useState<boolean>(false);

   const getNewPartOfUsers = () => {
      const fullUsers: number = 100;
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
            if (errorRequest) {
               setErrorRequest(false);
            }
         })
         .catch(() => {
            setErrorRequest(true);
         });
   };

   useEffect(() => {
      getUsers();
   }, []);

   return (
      <main className={s.app}>
         {!errorRequest ? (
            <UsersList users={users} partOfUsers={partOfUsers} getNewPartOfUsers={getNewPartOfUsers} />
         ) : (
            <div>Ошибка получения данных</div>
         )}
      </main>
   );
};

export default App;
