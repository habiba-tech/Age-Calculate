function calculateAge(){
    const birthdate =new Date(document.getElementById("birthdate").value);
    const age = new Date().getFullYear() - birthdate.getFullYear();
    document.getElementById("result").innerText=`Your age is: ${age}`;
}
