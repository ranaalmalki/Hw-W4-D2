
let url="https://66e7e69bb17821a9d9da6eb2.mockapi.io/login"


let email_em= document.getElementById("Email-em")
let pass= document.getElementById("password")
let form= document.getElementById("formid")




   
    form.addEventListener("submit",(event)=>{
        event.preventDefault(),

fetch(url, {
    method:'POST',
    body: JSON.stringify({
        email:email_em.value,
        password:pass.value,

    }),
    headers:{
         'Content-type':'application/json; charset=UTF-8'
    
},
})
.then((res)=>res.json())
.then((data)=>{


// Swal.fire({
//     title: 'Success!',
//     text: 'Welcom back',
//     icon: 'success',
//     confirmButtonText: 'OK'
// })


    })


})



