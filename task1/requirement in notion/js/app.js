let fName = document.querySelector('#fname');
let lName = document.querySelector('#lname');
let phone = document.querySelector('#phone');
let password = document.querySelector('#password');
let rePassword = document.querySelector('#re-password');
let submit = document.querySelector('.my-button');
let select = document.querySelector('#Gender');
let checkbox = document.querySelector('#consent');
let radioError = document.querySelector('#radio-error');
let consentError = document.querySelector('#consent-error');
let success = document.querySelector('.success');



function checkInput(item,callback)
{
    if(callback(item)===false)
    {
        console.log('error');
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

let chechPhone = () => checkInput(phone, (p) => p.value.length === 11);

let chechPassword = () => checkInput(password, (p) => p.value.length >= 6);
let checkrePassword = () => checkInput(rePassword, (p) => p.value === password.value && p.value.length !==0);
let checkSelect = () => checkInput(select, (s) => s.value === '1' || s.value === '2');



fName.addEventListener('blur',function(){
    checkfName();
});

lName.addEventListener('blur',function(){
    checklName();
});

phone.addEventListener('blur',function(){
    chechPhone();
});

password.addEventListener('blur',function(){
    chechPassword();
});

rePassword.addEventListener('blur',function(){
    checkrePassword();
});







function clear()
{
    fName.value = '';
    lName.value = '';
    phone.value = '';
    password.value = '';
    rePassword.value = '';
    select.value = '0';
    checkbox.checked = false;
}



submit.addEventListener('click',function(e){
    e.preventDefault();
    let t =true;
    if(!checkfName()) t=false;
    if(!checklName()) t=false;
    if(!chechPhone()) t=false;
    if (!checkrePassword()) t = false;
    if(!chechPassword()) t=false;
    if (!checkSelect()) t = false;
    if(t)
    {
        success.style.display = "block";
        success.style.animation = "identifier 3s ease-in-out forwards";
        setTimeout(() => {
            success.style.display = "none";
            success.style.animation = "none";
        }, 3000);
       let data = {
           fname:fName.value,
           lname:lName.value,
           phone:phone.value,
           password:password.value,
           gender:(select.value === '1')?'male':'female',
           consent:checkbox.checked
       }
       console.log(data);
       clear();
    }
    else
    (
        console.log('failed')
    )
});

