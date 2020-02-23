function verifyUser(uname,pwd)
{
    if((uname == "raju" || uname == "rani")&&(uname == pwd))
    {
       console.log("valid user")
       return true;
    }
    else
        console.log("not valid user");
    return false;
}
async function getRoles(user,pwd)
{
    var roles = { 
        "raju" : ["admin","HR"],
        "rani" : ["manager","trainer"]
        }
    const  valid = verifyUser(user,pwd); 
    if(valid)
    {   
        console.log("Roles of user "+roles[user]) 
        return roles[user];
    }
    return "notvalid";
}
async function checkUserAccess(user,pwd)
{
    const role = await(getRoles(user,pwd));
    if(role != "notvalid")
    {
        for (i in role)
        {
            if (role[i] == "admin")
            {
                console.log("access granted for admin services");
                return "success";
            }
        }
        console.log("access not granted for admin services");
        return "success";
    }
    return "Failed";
}
checkUserAccess("raj","raju");