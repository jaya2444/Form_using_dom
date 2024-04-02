// let button= document.querySelector('#btn')
//         let name= document.querySelector('#name')
//         let last= document.querySelector('#last')
//         let mname= document.querySelector('#mname')
//         let mlast= document.querySelector('#mlast')
//         let TaskId= document.querySelector('#TaskId')
//         let Task= document.querySelector('#Task')
//         let box=document.querySelector('#box')
//         let box2=document.querySelector('#box2')
   
//         button.addEventListener("click", (e) => {
//             let selectedSize;
//             const radioButtons = document.querySelectorAll('input[name="size"]');
//             for (const radioButton of radioButtons) {
//                 if (radioButton.checked) {
//                     selectedSize = radioButton.value;
//                     break;
//                 }
//             }
//             e.preventDefault()
//             console.log("name:" + name.value); 
//             console.log("last name:" + last.value);
//             console.log("M name:" + mname.value);
//             console.log("M last name:" + mlast.value);
//             console.log("task:" + Task.value);
//             console.log("Status:"+selectedSize)
//             console.log("task id:" + TaskId.value);
//             console.log("Additional Note:" + box.value);
//             console.log("Instructions:" + box2.value);      
          
//         });


let button = document.querySelector('#btn');
let formData = {};

button.addEventListener("click", (e) => {
    formData.name = document.querySelector('#name').value;
    formData.lastName = document.querySelector('#last').value;
    formData.managerName = document.querySelector('#mname').value;
    formData.managerLastName = document.querySelector('#mlast').value;
    formData.taskId = document.querySelector('#TaskId').value;
    formData.task = document.querySelector('#Task').value;
    formData.additionalNote = document.querySelector('#box').value;
    formData.instructions = document.querySelector('#box2').value;

    const radioButtons = document.querySelectorAll('input[name="size"]');
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            formData.status = radioButton.value;
            break;
        }
    }

    e.preventDefault();
    console.log(formData);
});
