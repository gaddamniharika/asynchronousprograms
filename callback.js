function verifyUser(uname,pwd,getRoles)
{
    if((uname == "raju" || uname == "rani")&&(uname == pwd))
    {
       console.log("valid user")
       return getRoles(uname,checkUserAccess);
    }
    else
        return console.log("not a valid user");
}
function getRoles(uname,checkUserAccess)
{
    var roles = { 
                "raju" : ["admin","HR"],
                "rani" : ["manager","trainer"]
                }  
    console.log("Roles of user "+roles[uname]) 
    return checkUserAccess(roles[uname]);
}
function checkUserAccess(roles)
{
   var i;
   for(i in roles)
   {
        if(roles[i] == "admin")
        {
            console.log(roles[i]+" access granted.....successful");
            return "success";
        }
   }
   console.log(roles[i]+" not have access.....failed")
   return "failed";
}
//verifyUser("rani","rani",getRoles); // verifyUser functioncall
verifyUser("raju","raju",getRoles)