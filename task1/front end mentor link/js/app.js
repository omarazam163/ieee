let fName = document.querySelector('#fname');
let lName = document.querySelector('#lname');
let email = document.querySelector('#email');
let message = document.querySelector('#message');
let submit = document.querySelector('.my-button');
let radio1 = document.querySelector('#general');
let radio2 = document.querySelector('#support');
let checkbox = document.querySelector('#consent');
let radioError = document.querySelector('#radio-error');
let consentError = document.querySelector('#consent-error');
let success = document.querySelector('.success');



function checkInput(item,callback)
{
    if(callback(item)===false)
    {
        item.nextElementSibling.classList.remove('d-none');
        item.classList.add('error-border');
        item.classList.remove('right-border');
        return false;
    }
    else
    {
        item.nextElementSibling.classList.add("d-none");
        item.classList.remove('error-border');
        item.classList.add('right-border');
        return true;
    }
}




let checkfName = ()=>checkInput(fName, (f) => f.value.length >= 2);
let checklName = ()=>checkInput(lName, (f) => f.value.length >= 2);
let checkemail = () =>{
  return checkInput(email, (e) => {
    let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(e.value.trim());
  })};
let checkmessage = () =>checkInput(message, (m) => m.value.length >= 10);





fName.addEventListener('blur',function(){
    checkfName();
});

lName.addEventListener('blur',function(){
    checklName();
});

email.addEventListener('blur',function(){
    checkemail();
});

message.addEventListener('blur',function(){
    checkmessage();
});







function checkRadio(radio)
{
    if(radio1.checked || radio2.checked)
    {
        radioError.classList.add('d-none');
        return true;
    }
    else
    {
        radioError.classList.remove('d-none');
        return false;
    }
}
function checkConsent() {
  if (checkbox.checked) {
    consentError.classList.add("d-none");
    return true;
  } else {
    consentError.classList.remove("d-none");
    return false;
  }
}


function clear()
{
    fName.value = '';
    lName.value = '';
    email.value = '';
    message.value = '';
    radio1.checked = false;
    radio2.checked = false;
    checkbox.checked = false;
}


submit.addEventListener('click',function(e){
    e.preventDefault();
    let t =true;
    if(!checkfName()) t=false;
    if(!checklName()) t=false;
    if(!checkemail()) t=false;
    if(!checkmessage()) t=false;
    if(!checkRadio()) t=false;
    if(!checkRadio()) t=false;
    if(!checkConsent()) t=false;

    if(t)
    {
        success.style.display = "block";
        success.style.animation = "identifier 3s ease-in-out forwards";
        setTimeout(() => {
            success.style.display = "none";
            success.style.animation = "none";
        }, 3000);
       clear();
    }
    else
    (
        console.log('failed')
    )
});

