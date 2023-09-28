const express = require('express');
const app = express();
const port = 5647;

const pug= require('pug');
const workinghours= require('./midlleware/Workhours');

app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views',('views'))

app.get('/',workinghours,function(req,res){
    res.render('index',{
        title:'home page'
    })
})


app.get('/contact',workinghours,function(req,res){
    res.render('contact',{
        title:'contact'
    })
})

app.get('/errorpage',function(req,res){
    res.render('errorpage',{
        title:'error'
    })
})

app.get('/services',workinghours,function(req,res){
    res.render('services',{
        title:'services'
    })
})






app.listen(port, error=>{
    if (error){
        console.log(error)
    }
    else{
        console.log('server is runing')
    }
})
