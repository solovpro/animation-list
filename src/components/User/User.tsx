import React from 'react';

import UserType from '../../types/types';

import s from './User.module.scss';

interface ListElementProps {
   user: UserType;
   partOfUsers: UserType[];
}

const User: React.FC<ListElementProps> = React.memo(({ user, partOfUsers }) => {
   let firstPart: boolean = partOfUsers.length === 20;
   let onePart: number = 20;

   // Высчитываем число разницы между элементами, у которых должна быть одинаковая задержка в анимации
   let amount: number = firstPart ? 0 : (partOfUsers.length - onePart) / onePart;

   // одинаковое число у каждого 20-го элемента
   let sameAmount: number = user.id - onePart * amount;

   // у каждого последующего элемента из пачки 20-ти элементов задержка на 0.2s больше
   const animationDelay: string = `${sameAmount * 0.2}s`;

   return (
      <section className={s.user} style={{ animationDelay }}>
         <p>key: {user.id}</p>
         <p>name: {user.name}</p>
         <p>surname: {user.surname}</p>
      </section>
   );
});

export default User;
