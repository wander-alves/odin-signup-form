const inputs = document.querySelectorAll('.input-wrapper input');
const form = document.getElementById('signup-form');
const submitButton = document.getElementById('send');

submitButton.addEventListener('click', ()=> { 
  inputs.forEach((item)=> {
    if(!item.validity.valid){
      item.classList.add('error')
    }
  });
  handleForm();
})

function handleForm(){
  form.addEventListener('submit', (event)=>{
    event.preventDefault();
    let data = {};
    inputs.forEach((item)=> {
      data[item.id] = item.value;
    });

    if(data.password !== data['confirm-password']){
      window.alert('The passwords provided not match.')
    }
    console.log(`Sending data to api: ${JSON.stringify(data)}`);
  })
}
inputs.forEach((item)=>{
  item.addEventListener('input', ()=> {
    if(item.validity.valid){
      item.classList.remove('error');
    }
  })
});