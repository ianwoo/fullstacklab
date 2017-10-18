console.log('loaded users javascript');

$(document).ready(setup);

function setup(){
    console.log('Inside setup');
    $('*').off; //turn ALL click listeners off
    $('.table tbody').html('');
    $('#create').click(createUser);
    $.get('backend/manage_users/show_user.php').done(showUsers).fail(fail);
}

function showUsers(data){
	console.log('inside show users function');
	data = JSON.parse(data);
	console.log(data);
	for (var counter = 0; counter < data.length; counter++){

		var tr = $('<tr>'); //create empty table row
		var td = $('<td>'); //create table data box
		td.text(data[counter].user); //add name of user
		tr.append(td); //add table data into empty row
		td = $('<td>'); //add second table data to hold delete button

		var btn = $('<button class="delete" id="' + data[counter].user + '">delete</button>');

		td.append(btn);
		tr.append(td);
		$('.table tbody').append(tr);
	}
    $('.delete').click(deleteUser);
}

function fail(data){
	console.log('failed.');
	console.log(data);
}

function deleteUser(){
	console.log('inside deleteUser');
	var user_to_be_deleted = $(this).attr('id');
	console.log(user_to_be_deleted);
	var data = {user_name: user_to_be_deleted};
	$.get('backend/manage_users/delete_user.php',data).done(userDeleted).fail(fail);
}

function userDeleted(data){
	console.log('Inside userDeleted');
	setup();
}

function createUser(){
	console.log('Inside createUser');
	var user = $('#user_name').val();
	var data = {user_name: user};
	$.get('backend/manage_users/create_user.php', data).done(userCreated).fail(fail);
	$('#create').removeClass('btn-primary').addClass('btn-warning');
}

function userCreated(data){
	console.log('Inside userCreated');
	$('#create').removeClass('btn-primary').addClass('btn-success');
	setup();
}