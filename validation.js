var r=JSON.parse(localStorage.getItem("rrr"));
console.log(r)
alert('welcome to home page')
// alert(r)

const Add=()=>{
    console.log(r)
    var FirstName = document.getElementById('f').value;
    var LastName = document.getElementById('m').value;
    var Location = document.getElementById('sa').value;
    var dob = document.getElementById('p').value;
    var Email = document.getElementById('mail').value;
    var Education = document.getElementById('qa').value;
    var About = document.getElementById('re').value;
   if(r!=null){
    console.log("update");
    fetch("http://localhost:7000/update",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(
            {    
                'id':r,
                'fname':FirstName,
                'lname':LastName,
                'location':Location,
                'email':Email,
                'dob':dob,
                'edu':Education,
                'about':About,
                
            }
        )
})
        .then ((response)=>response.json())
        .then((res)=>{console.log("sucess :",res);
        window.location.href='secondpage.html';
        localStorage.clear()})
   }
   else{
    console.log("Add data");
    fetch("http://localhost:7000/add",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(
            {   
                'fname':FirstName,
                'lname':LastName,
                'location':Location,
                'email':Email,
                'dob':dob,
                'edu':Education,
                'about':About
            }
        )
})
        .then ((response)=>response.json())
        .then((res)=>{console.log("sucess :",res);
        window.location.href='secondpage.html';})
   }
}


function validation(){
    var FirstName = document.getElementById('f').value;
    var LastName = document.getElementById('m').value;
    var Location = document.getElementById('sa').value;
    var dob = document.getElementById('p').value;
    var Email = document.getElementById('mail').value;
    var Education = document.getElementById('qa').value;
    var About = document.getElementById('re').value;
    console.log(FirstName+"==="+LastName+"==="+Location+"==="+dob+"==="+Email+"==="+Education+"==="+About)
}
    

