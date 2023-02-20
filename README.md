<div align="center">

# Animation list

## Список пользователей с lazy loading и анимацией для каждого последующего элемента

#### Ссылка на gh-pages: https://solovpro.github.io/animation-list/


<div align="start">

### UsersList.tsx (строки 15-23)
```bash
Анимация появления блока и, с помощью функции onVisibilityChange,
отслеживаем, когда появится предпоследний user в зоне видимости,
после появления вызываем функцию получения новых пользователей

<Fade
    onVisibilityChange={(inView: boolean) => {
      const isVisiblePenultimate = user.id % 20 === 19 && inView;
       if (isVisiblePenultimate) {
          getNewPartOfUsers();
      }
    }}
    triggerOnce
>
```

</div>

### Стек технологий:
![HTML5](https://img.shields.io/badge/-HTML5-A9A9A9?style=for-the-badge&logo=HTML5)
![CSS3](https://img.shields.io/badge/-SCSS-4B0082?style=for-the-badge&logo=CSS3)
![JavaScript](https://img.shields.io/badge/-JavaScript-8B0000?style=for-the-badge&logo=javascript)
![TypeScript](https://img.shields.io/badge/-TypeScript-000066?style=for-the-badge&logo=typescript)
![ReactJS](https://img.shields.io/badge/-ReactJS-4682B4?style=for-the-badge&logo=React)

</div>