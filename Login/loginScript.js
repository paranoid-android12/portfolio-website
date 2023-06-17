const credentials = new Map;
credentials.set('octucube2004@gmail.com', 'admin123')

function clicked(){
    let emailTemp = document.getElementById('username').value;
    let passTemp = document.getElementById('password').value;

    if(emailTemp == '' || passTemp == ""){
        document.getElementById('error').innerHTML = "Fill out the fields.";
    }
    else if(credentials.get(emailTemp) == undefined){
        document.getElementById('error').innerHTML = "The e-mail provided does not exist.";
    }

    else if(emailTemp != undefined && passTemp == credentials.get(emailTemp)){
        window.open("../Admin/admin.html", "_self")
    }

    else{
        document.getElementById('error').innerHTML = "The password is incorrect.";
    }
}