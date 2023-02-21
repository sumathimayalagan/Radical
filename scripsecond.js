
const select=()=>{
    fetch("http://localhost:7000/select",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify()

})
        .then ((response)=>response.json())
        .then((res)=>{
            console.log("sucess :",res);
            show(res.data);
        })
}
function show(res) {
	let tab =
		`<tr class=".justify-content-center ">
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th class=".justify-content-center">Location</th>
        <th>Email</th>
        <th>DOB</th>
        <th>Education</th>
        <th>About</th>
        <th>Action</th>
        <th>Delete</th>
      </tr>`;
	
	res.forEach(r=> {  
		
            console.log(r); 
            var idd=r.id;
            tab += `<tr>
            <td>${r.id}</td>
            <td>${r.firstname}</td>
            <td>${r.lastname}</td>
            <td>${r.location}</td>
            <td>${r.email}</td>
            <td>${r.dob}</td>
            <td>${r.education}</td>
            <td>${r.about}</td>
            <td><button class="btn-primary" onclick= {window.location.href='firstpage.html';localStorage.setItem("rrr",${idd});}> Edit</button></td>
            <td><button class="btn-danger" onclick={Dele(${idd})}>Delete</button></td>
        </tr>`;
              
	})
	document.getElementById("collections").innerHTML = tab;
}

const Dele=(r)=>{
    
    console.log("rrrrr",r);
    fetch("http://localhost:7000/delet",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(
            {
                'id':r,                
            }
        )
})
        .then ((response)=>response.json())
        .then((res)=>{console.log("sucess :",res);
        localStorage.clear()
        select();
    })
}
select();