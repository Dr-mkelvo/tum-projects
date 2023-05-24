
document.getElementById("get-activity").addEventListener("click", function(){
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(Response => Response.json())
        .then(data =>{
            document.getElementById("activity").textContent =data.activity
        
    })
})  