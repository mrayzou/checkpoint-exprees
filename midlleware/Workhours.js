function workinghours(req,res,next){
    let date= new Date()
    let hours= date.getHours()
    let day= date.getDay()
    let openingdays=[1,2,3,4,5,6]
    if (openingdays.includes(day) && hours >= 9 && hours <= 17)
    {
        return next()
    }
    else {
        res.redirect('/errorpage')
    }
} 
module.exports = workinghours