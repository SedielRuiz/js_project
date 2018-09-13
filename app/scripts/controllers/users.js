/**
 * Función para agregar toda la logica de la administración 
 * usuarios
 */

var users=[];
function usersActionsController() {
    
}
function saveUser(){
	var s = confirm("¿Seguro que desa guardar el usuario: "+$("#name").val()+"?");
	if(s){
		users.push({
			"name": $("#name").val(),
			"lastName": $("#lastName").val(),
			"document": $("#document").val(),
			"phone": $("#phone").val()
		});
		clear();
		console.log(users);
	}else{return 0;}
}
function clear(){
	$("#name").val("");
	$("#lastName").val("");
	$("#document").val("");
	$("#phone").val("");
}