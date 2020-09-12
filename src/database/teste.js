const Database = require('./db')
const createproffy = require('./createproffy')


db.then((db)=>{

proffyValue ={
	  nome:'paulo gaspar',
	  avatar:'https://avatars3.githubusercontent.com/u/7680071?s=460&u=77f302630dbc4def328b38867f6e545bec900b79&v=4',
	  whatsapp:'759376782378',
	  bio:'Professor de  programação'
}

classValue ={
	subject:'química',
	cost= "20"
}

classscheduleValue =[
       
       {
       	weekday:1,
       	time_from:720,
       	time_to:1220
       },
        {
       	weekday:0,
       	time_from:520,
       	time_to:1220
       }
]
//createproffy(db, {proffyValue, classValue, classscheduleValue})
})
//module.exports = Database.open(__dirname +"/database.sqlite").then(execute)
