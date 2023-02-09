import React, { useState } from 'react';
import User from './components/User/User';

import s from './App.module.scss';

const App: React.FC = () => {
   const [listUsers] = useState([
      {
         id: 1,
         name: 'John',
         surname: 'Doe',
      },
   ]);
   return (
      <div className={s.app}>
         {listUsers.map(user => (
            <User key={user.id} user={user} />
         ))}
      </div>
   );
};

export default App;
