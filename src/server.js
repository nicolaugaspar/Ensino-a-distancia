const proffys =[
{
  name:"Paulo Gaspar", 
  avatar:"https://avatars3.githubusercontent.com/u/7680071?s=460&u=77f302630dbc4def328b38867f6e545bec900b79&v=4",
  whatsapp:"8579574359876",
  bio:" Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
  subject:"quimica", 
  cost:"20", 
  weekday:[0],
  time_from:[720], 
  time_to:[12020]
},
/*{
name:"Nicolau Gaspar", 
avatar:"https://avatars3.githubusercontent.com/u/7680071?s=460&u=77f302630dbc4def328b38867f6e545bec900b79&v=4",
 whatsapp:"8579574359876",
 bio:" Entusiasta das melhores tecnologias de química avançada.Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
  subject:"quimica", 
 cost:"20", 
 weekday:[0],
 time_from:[720], 
 time_to:[12020]
     }*/
]
 

const subject =["Educação física"];

function pageLanding(req, res){
return res.render("index.html")
}

function pageStudy(req, res){
	const filters = req.query
return res.render( "study.html",{proffys, filters})
}

function pageGiveClasses(req, res){
return res.render( "give-classes.html")
}

const express = require('express')
const server = express()

const nunjucks =  require('nunjucks')
nunjucks.configure('src/views',{
express:server,
noCache:true,

})
server
//configurar arquivos estaticos (css, script e imagens)
.use(express.static("public"))
//rotas
.get('/index',pageLanding)
.get('/study',pageStudy)
.get('/give-classes', pageGiveClasses)
	


.listen(8888);

