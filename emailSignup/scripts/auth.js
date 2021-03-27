const signIn = async (e) => {
  e.preventDefault();
  const email = document.querySelector("#emailLogin").value;
  const password = document.querySelector("#passwordLogin").value;
  try {
    const result = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
  email.value = "";
  password.value = "";
};

const signUp = async (e) => {
  e.preventDefault();
  const email = document.querySelector("#emailSignUp").value;
  const password = document.querySelector("#passwordSignUp").value;
  try {
    const result = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
  email.value = "";
  password.value = "";
};
