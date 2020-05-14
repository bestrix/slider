var fs = require('fs');

fs.readFile('style.sass', function (err, logData) {

    // Если произошла ошибка, то мы генерируем исключение,
    // и работа приложения завершается
    if (err) throw err;
  
    // logData имеет тип Buffer, переводим в string
    let text = logData.toString();
  });

  console.log(text)