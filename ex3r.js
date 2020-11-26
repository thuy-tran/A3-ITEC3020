var form=document.getElementById("myForm");

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  checkName();
  checkID();
  checkEmail();
})


