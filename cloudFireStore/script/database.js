const submitForm = async() =>{
    const userName =document.getElementById('userName').value;
    const userEmail =document.querySelector('#userEmail').value;
    const userAge =document.querySelector('#userAge').value;
    const userPhone =document.querySelector('#userPhone').value;
    const userPassword =document.querySelector('#userPassword').value;
    const userCPassword =document.querySelector('#userCPassword').value;
    const error = document.querySelector('.error')

    if(userPassword != userCPassword){
        error.innerHTML = "Password Do Not Match!!!"
    }else{
        try {
            var db = firebase.firestore();
            await db.collection("users").add({
                name:userName,
                email:userEmail,
                age:userAge,
                phone:userPhone,
            });
        } catch (error) {
           console.log(error);
        }
    }
}
