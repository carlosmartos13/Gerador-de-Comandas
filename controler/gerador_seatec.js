exports.post =  function(req, res){
    
   const keys = Object.keys(req.body)

   for (key of keys){
       if (req.body[key] == "" ){

        return res.send("Please, fill all fields!")
       
       }
       let {app_start, app_end} = req.body
       return res.render("comanda-seaatec.njk", app_start, app_end)
   }


    
    
}