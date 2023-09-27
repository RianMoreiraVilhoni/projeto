const express=require('express')

const app=express()

app.listen(3000, ()=>console.log('Online server at port 3000'))

module.exports=app

const skinControler=require('./mvc/controllers/skinController.js')