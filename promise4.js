
function verifyUser(uname,pwd)
{
    return new Promise(function(resolve,reject){
        if((uname == "raju"|| uname == "rani") && uname == pwd)
        {
            console.log(uname+" is verified");
            resolve(uname);
        }
        else
            reject(uname+"  not found");
    });
}
function getRoles(uname){
    return new Promise(function(resolve,reject){
        var role = {"raju" : ["manager","admin"],"rani" : ["hr"]}; // roles for user dictionary of user roles
        var userrole = role[uname];
        if(userrole)
        {
            console.log("roles of user "+uname+"  "+userrole);
            resolve(role[uname]);
        }
        else
        reject("failed to find "+userrole);
    });
}
function checkUserAccess(role){
    return new Promise(function(resolve,reject){
        for (i in role)
        {
            if (role[i] == "admin")
            {
                resolve("access granted for admin services");
            }
        }
        reject("access not granted for admin services");
    });
}
verifyUser("rani","rani").then(function(uname){
                    getRoles(uname).then(function(role){
                            checkUserAccess(role).then(function(per){
                                console.log(per);
                        })
                        .catch(error => console.log(error));
                    })
                    .catch(error => console.log(error));
                })
            .catch(error => console.log(error));


