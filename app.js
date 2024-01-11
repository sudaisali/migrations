const express = require('express')
const app = express()
const Model = require('./app/database/models')


app.use('/get-data',async (req,res,next)=>{
    const data = await Model.billionaries.findAll(
       {
        attributes: [
        'person_name','person_company_relation'
          ],
          include:[{
            model:Model.companies,
            attributes:['company_name','company_founded'],
            include:[
                {
                    model:Model.sectors,
                    attributes:['sector_name']
                }
            ]
          }],
        
       }
    
    )
    console.log(data)
    res.json(data)
})


console.log("helloworld")


app.listen(3001,()=>{
    console.log("server is connected")
})