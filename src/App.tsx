import React, { useEffect, useState } from 'react';
import axios from 'axios';

import User from './components/User/User';
import UserType from './types/types';

import s from './App.module.scss';

const App: React.FC = () => {
   const [users, setUsers] = useState<UserType[]>([]);
   const [partOfUsers, setPartOfUsers] = useState<UserType[]>([
      {
         id: 1,
         name: 'John',
         surname: 'Doe',
      },
      {
         id: 2,
         name: 'John',
         surname: 'Doe',
      },
      {
         id: 3,
         name: 'John',
         surname: 'Doe',
      },
      {
         id: 4,
         name: 'John',
         surname: 'Doe',
      },
      {
         id: 5,
         name: 'John',
         surname: 'Doe',
      },
      {
         id: 6,
         name: 'John',
         surname: 'Doe',
      },
      {
         id: 7,
         name: 'John',
         surname: 'Doe',
      },
      {
         id: 8,
         name: 'John',
         surname: 'Doe',
      },
      {
         id: 9,
         name: 'John',
         surname: 'Doe',
      },
      {
         id: 10,
         name: 'John',
         surname: 'Doe',
      },
      {
         id: 11,
         name: 'John',
         surname: 'Doe',
      },
      {
         id: 12,
         name: 'John',
         surname: 'Doe',
      },
      {
         id: 13,
         name: 'John',
         surname: 'Doe',
      },
      {
         id: 14,
         name: 'John',
         surname: 'Doe',
      },
      {
         id: 15,
         name: 'John',
         surname: 'Doe',
      },
      {
         id: 16,
         name: 'John',
         surname: 'Doe',
      },
      {
         id: 17,
         name: 'John',
         surname: 'Doe',
      },
      {
         id: 18,
         name: 'John',
         surname: 'Doe',
      },
      {
         id: 19,
         name: 'John',
         surname: 'Doe',
      },
      {
         id: 20,
         name: 'John',
         surname: 'Doe',
      },
   ]);
   // Изначально, учитывая отступы и то, что пару блоков уже на экране у нас высота partOfUsers === 2250
   const [partOfUsersHeight, setPartOfUsersHeight] = useState<number>(2250);
   const [scroll, setScroll] = useState<number>(0);

   const getNewPartOfUsers = () => {
      const fullUsers: number = 100;
      if (partOfUsers.length !== fullUsers && users.length) {
         const onePartLength: number = partOfUsers.length + 20;
         setPartOfUsers(users.slice(0, onePartLength));
         setPartOfUsersHeight(value => value + 3000); // Добавляем высоту новых 20 блоков
      }
   };

   const checkScrollHeight = () => {
      if (scroll > partOfUsersHeight) {
         getNewPartOfUsers();
      }
   };

   const getUsers = () => {
      axios
         .get('https://63e4d5cfc04baebbcdad16d8.mockapi.io/users')
         .then(response => {
            setUsers(response.data);
         })
         .catch(error => console.log(error));
   };

   const handleScroll = () => {
      setScroll(window.scrollY);
   };

   useEffect(() => {
      getUsers();
   }, []);

   useEffect(() => {
      // После обновления страницы scroll присваивается window.scrollY,
      // Поэтому сразу после присвоения обнуляем scroll
      setTimeout(() => window.scroll(0, 0), 100);
   }, []);

   useEffect(() => {
      // Я искал библиотеки React, чтобы не взаимодействовать с DOM напрямую, но не нашел ни одной подходящей
      // Чтобы много времени не тратить, решил сделать так, просто и незамудренно, хотя если есть подходящая
      // Библиотека, то лучше использовать ее
      window.addEventListener('scroll', handleScroll);
      return () => window.scrollTo(0, 0);
   }, []);

   useEffect(() => {
      checkScrollHeight();
   }, [scroll]);

   return (
      <main className={s.app}>
         <ul>
            {partOfUsers.map((user: UserType) => (
               <li key={user.id}>
                  <User partOfUsers={partOfUsers} user={user} />
               </li>
            ))}
         </ul>
      </main>
   );
};

export default App;
