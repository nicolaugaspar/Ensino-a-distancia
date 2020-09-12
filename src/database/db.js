const Database = require('sqlite-async')

/*Database.open(__dirname +"/database.sqlite").then(execute)*/

function execute(db){
	//criar tabela
return db.exec(``

CREATE TABLE IF NOT EXISTS  proffys (
     
     id INTEGER PRIMARY KEY AUTOINCREMENT,
     name TEXT,
     avatar TEXT,
     whatsapp TEXT,
     bio TEXT
	);
CREATE TABLE if EXISTS classes (

      id  INTEGER PRIMARY KEY AUTOINCREMENT,
      subject TEXT,
      cost TEXT,
       proffy_id INTEGER
      	);

CREATE TABLE IF NOT EXISTS class_Schedule (

        id INTEGER PRIMARY KEY AUTOINCREMENT,
        class_id INTEGER,
        weekday INTEGER,
        time_from INTEGER,
        time_to  INTEGER
	);
`)
}

module.exports = Database.open(__dirname +"/database.sqlite").then(execute)

