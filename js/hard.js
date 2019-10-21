'use strict';

let lang = 'ru';

switch (lang) {
  case 'ru':
    var days = ['Пн ', 'Вт ', 'Ср ', 'Чт ', 'Пт ', 'Сб ', 'Вс'];
  break;
  case 'en':
    days = ['Mon ', 'Tue ', 'Wn ', 'Th ', 'Fri ', 'Sat ', 'Sun'];
    break;
}

console.log(days);

let namePerson = 'Артем',
    result = (namePerson == 'Артем') ? 'Директор' : 'Студент' && (namePerson =='Максим') ? 'Преподаватель' : 'Студент';

    

console.log(result);

