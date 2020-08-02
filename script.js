const name=document.getElementById('name')
const password=document.getElementById('password')
const form=document.getElementById('form')
const err0rElement=document.getElementById('error')
var name1 = document.getElementById("name1")
var password1 = document.getElementById("password1")
form.addEventListener('submit',(e) => {
    let messages=[]
    if(name.value==='' || name.value==null){
        messages.push('Name is required')
    }
if(password.value.length<=6){
    messages.push('Password must me longer than 6 characters')
}
if(password.value.length>=20){
    messages.push('Password must me less than 20 characters')
}
if(password.value==='password'){
    messages.push('Password cannot be password')
}
    if(messages.length>0){
        e.preventDefault()
        errorElement.innerText=messages.join(',')
    }
    if (name== "name1" && password== "password1"){
        messages.push('Login success')
    }
    else{
        messages.push('Login failed')
    }
})
  
