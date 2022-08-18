
var submit=document.getElementById("todo-btn")
var del=document.getElementById("del-btn")
var todocont=document.getElementById("todo")
var task=document.getElementById("task")
var count=0

function Submit()
{
if(task.value==""){
    var m = "It looks like you haven't entered the title";
    Swal.fire({
        position:'center',
        icon: 'error',
        text:m,
        title:'Oops!',
        timer: 3000
        })
}
else{
count++
Create(task.value)
} 
}
submit.addEventListener("click",Submit)
function Create(todo){
    var taskdiv=document.createElement("div");
    taskdiv.className=" my-2 py-3 px-2 whole form-group"
    taskdiv.innerHTML+=`<div class="box">
    <div>
    <label>${count}) </label>
    <input value="${todo}" id="input${count}" class="input-title">
    </div>
    <div>
    <button class="btn btn-md" id="edit${count}" onclick="update(${count})"><i class="fas fa-edit"></i> Edit</button>
    <button class="btn btn-md" id="save${count}" onclick="save(${count})"><i class="fas fa-save"></i> Save</button>
    <button class="btn btn-md" id="del${count}" onclick="destroy(${count})"><i class="fas fa-trash"></i> Delete</button>
    </div>
    </div>`
    taskdiv.id=count
   todocont.appendChild(taskdiv)
   task.value="";
   var m = "Your Todo has been added.";
   Swal.fire({
       position:'center',
       icon: 'success',
       text:m,
       title:'Added!',
       timer: 3000
       })
}
function destroy(id){
    document.getElementById(id).remove()
    var m = "Your Todo has been deleted.";
    Swal.fire({
        position:'center',
        icon: 'success',
        text:m,
        title:'Deleted!',
        timer: 3000
        })
}
del.addEventListener("click",DeleteAll)
function DeleteAll(){
    for(var i=1;i<=count;i++)
    {
        if(document.getElementById(i))
        document.getElementById(i).remove()
        else
        continue;
    }
    count=0;
    var m = "Your All Todo has been deleted.";
    Swal.fire({
        position:'center',
        icon: 'success',
        text:m,
        title:'Deleted!',
        timer: 3000
        })
}
function update(id){
    var input=document.getElementById("input"+id)
    var temp=input.value
    task.value=temp
    }    

function save(id){
    var input=document.getElementById("input"+id)
    input.value=task.value
    var m = "Your Todo has been updated successfully.";
    Swal.fire({
        position:'center',
        icon: 'success',
        text:m,
        title:'Updated!',
        timer: 3000
        })
        task.value=""
}
