//listen for click event
document.getElementById("submit").addEventListener("click", (e) => {
  let value = document.getElementById("email").value;
  let name = document.getElementById("name").value;

  //check if inputs are empty
  if (value !== "" && name !== "") {
    storeEmail(value);
    //tell user email is submitted
    alert(`Thank you for submitting your email ${name}`);
  } else {
    alert("Please fill out forms");
  }
});

//function for local storage
function storeEmail(value) {
  localStorage.setItem("email", value);
}
