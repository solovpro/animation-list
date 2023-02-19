import React from 'react';
import { Slide, Fade } from 'react-awesome-reveal';

import UserType from '../../types/types';

import s from './User.module.scss';

interface ListElementProps {
   user: UserType;
   getNewPartOfUsers: () => void;
}

const User: React.FC<ListElementProps> = React.memo(({ user, getNewPartOfUsers }) => (
   <Slide duration={1500} triggerOnce direction={'up'}>
      <Fade
         onVisibilityChange={(inView: boolean) => {
            const isVisiblePenultimate = user.id % 20 === 19 && inView;
            if (isVisiblePenultimate) {
               getNewPartOfUsers();
            }
         }}
         triggerOnce
      >
         <section className={s.user}>
            <p>key: {user.id}</p>
            <p>name: {user.name}</p>
            <p>surname: {user.surname}</p>
         </section>
      </Fade>
   </Slide>
));

export default User;
