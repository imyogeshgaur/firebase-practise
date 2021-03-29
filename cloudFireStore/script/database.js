const submitForm = async() =>{
    const dataInDatabase = document.querySelector('.dataInDatabase')
    const userName =document.querySelector('#userName').value;
    const userEmail =document.querySelector('#userEmail').value;
    const userAge =document.querySelector('#userAge').value;
    const userPhone =document.querySelector('#userPhone').value;
    const userPassword =document.querySelector('#userPassword').value;
    const userCPassword =document.querySelector('#userCPassword').value;
    const error = document.querySelector('.error')

    dataInDatabase.style.display = "block"

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

const getData = async() =>{
    const userName1 =document.querySelector('#userName1')
    const userEmail1 =document.querySelector('#userEmail1')
    const userAge1 =document.querySelector('#userAge1')
    const userPhone1 =document.querySelector('#userPhone1')

    try {
        var db = firebase.firestore();
        const dataPromise = await db.collection("users").doc("eznTlxL0gw19eA1jyFS2").get()
        userName1.value = dataPromise.data().name;
        userEmail1.value = dataPromise.data().email;
        userAge1.value = dataPromise.data().age;
        userPhone1.value = dataPromise.data().phone;
    } catch (error) {
       console.log(error); 
    }
}