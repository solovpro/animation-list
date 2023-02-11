<div align="center">

# Animation list

## Список пользователей с lazy loading и анимацией для каждого последующего элемента

#### Ссылка на gh-pages: https://solovpro.github.io/animation-list/


<div align="start">

### App.tsx (строки 149-151)
```bash
После обновления страницы scroll присваивается window.scrollY,
Поэтому сразу после присвоения обнуляем scroll

useEffect(() => {
  setTimeout(() => window.scroll(0, 0), 100);
}, []);
```

### App.tsx (строки 153-156)
```bash
Я искал библиотеки React, чтобы не взаимодействовать 
с DOM напрямую,но не нашел ни одной подходящей,
чтобы много времени не тратить, решил сделать так,
просто и незамудренно, хотя если есть подходящая
Библиотека, то лучше использовать ее

useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.scrollTo(0, 0);
}, []);
```

</div>

### Стек технологий:
![HTML5](https://img.shields.io/badge/-HTML5-A9A9A9?style=for-the-badge&logo=HTML5)
![CSS3](https://img.shields.io/badge/-SCSS-4B0082?style=for-the-badge&logo=CSS3)
![JavaScript](https://img.shields.io/badge/-JavaScript-8B0000?style=for-the-badge&logo=javascript)
![TypeScript](https://img.shields.io/badge/-TypeScript-000066?style=for-the-badge&logo=typescript)
![ReactJS](https://img.shields.io/badge/-ReactJS-4682B4?style=for-the-badge&logo=React)

</div>