const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const abilityInput = document.getElementById("ability");
const postBtn = document.getElementById("postBtn");
const server = "http://localhost:8080/";
const success = document.createElement("div");
success.classList.add("alert");
success.classList.add("alert-success");
success.innerHTML = "<strong>great!</strong> you can access the course";
const postToServer = async () => {
     try { 
         const abilities = abilityInput.value.split(", "); 
         const headers = {
              "Access-Control-Allow-Headers": "",
               "Access-Control-Allow-Origin": "",
                "Access-Control-Allow-Methods": "*",
             };
    const result = await axios.post( server, JSON.stringify({
         nam: nameInput.value, age: parseInt(ageInput.value), abilities, }), headers ); 
        if (result.data) { 
            document.getElementById("info").append(success);
            setTimeout(() => { success.remove(); }, 3000);
                     }
                     } catch (error) { 
                         console.log(error); 
                        }};
    postBtn.addEventListener("click", postToServer);