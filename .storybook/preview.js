import Vue from 'vue'

// VueSnap Lib
import VueSnap from '../src/main'

// VueLazy Lib
import VueLazy from 'vue-lazy'
import 'vue-lazy/dist/vue-lazy.css'

Vue.use(VueSnap)
Vue.use(VueLazy)

const tokenContext = require.context(
  '!!raw-loader!../src',
  true,
  /.\.(css|less|scss|svg)$/
);

const tokenFiles = tokenContext.keys().map(function (filename) {
  return { filename: filename, content: tokenContext(filename).default };
});

export const parameters = {
  designToken: {
    defaultTab: 'Colors',
    files: tokenFiles,
  },
  actions: {
    argTypesRegex: "^on[A-Z].*"
  },
};

// function getAllUrlParams(url) {

//   // извлекаем строку из URL или объекта window
//   var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

//   // объект для хранения параметров
//   var obj = {};

//   // если есть строка запроса
//   if (queryString) {

//     // данные после знака # будут опущены
//     queryString = queryString.split('#')[0];

//     // разделяем параметры
//     var arr = queryString.split('&');

//     for (var i = 0; i < arr.length; i++) {
//       // разделяем параметр на ключ => значение
//       var a = arr[i].split('=');

//       // обработка данных вида: list[]=thing1&list[]=thing2
//       var paramNum = undefined;
//       var paramName = a[0].replace(/\[\d*\]/, function (v) {
//         paramNum = v.slice(1, -1);
//         return '';
//       });

//       // передача значения параметра ('true' если значение не задано)
//       var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

//       // преобразование регистра
//       paramName = paramName.toLowerCase();
//       paramValue = paramValue.toLowerCase();

//       // если ключ параметра уже задан
//       if (obj[paramName]) {
//         // преобразуем текущее значение в массив
//         if (typeof obj[paramName] === 'string') {
//           obj[paramName] = [obj[paramName]];
//         }
//         // если не задан индекс...
//         if (typeof paramNum === 'undefined') {
//           // помещаем значение в конец массива
//           obj[paramName].push(paramValue);
//         }
//         // если индекс задан...
//         else {
//           // размещаем элемент по заданному индексу
//           obj[paramName][paramNum] = paramValue;
//         }
//       }
//       // если параметр не задан, делаем это вручную
//       else {
//         obj[paramName] = paramValue;
//       }
//     }
//   }

//   return obj;
// }

// getAllUrlParams('http://test.com/?a=abc').a

console.log(new URL(window.location));