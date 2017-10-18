console.log('loaded databases javascript');

$(document).ready(setup);

function setup(){
    console.log('Inside setup');
    $('*').off; //turn ALL click listeners off
    $('.table tbody').html('');
    $('#create').click(createDatabase);
    $.get('backend/manage_db/show_database.php').done(showDatabases).fail(fail);
}

function showDatabases(data){
	console.log('inside show databases function');
	data = JSON.parse(data);

	for (var counter = 0; counter < data.length; counter++){

		var tr = $('<tr>'); //create empty table row
		var td = $('<td>'); //create table data box
		td.text(data[counter].Database); //add name of database
		tr.append(td); //add table data into empty row
		td = $('<td>'); //add second table data to hold delete button

		var btn = $('<button class="delete" id="' + data[counter].Database + '">delete</button>');

		td.append(btn);
		tr.append(td);
		$('.table tbody').append(tr);
	}
    $('.delete').click(deleteDatabase);
}

function fail(data){
	console.log('failed.');
	console.log(data);
}

function deleteDatabase(){
	console.log('inside deleteDatabase');
	var db_to_be_deleted = $(this).attr('id');
	console.log(db_to_be_deleted);
	var data = {db_name: db_to_be_deleted};
	$.get('backend/manage_db/delete_database.php',data).done(databaseDeleted).fail(fail);
}

function databaseDeleted(data){
	console.log('Inside databaseDeleted');
	console.log(data);
	setup();
}

function createDatabase(){
	console.log('Inside createDatabase');
	var db = $('#db_name').val();
	var data = {db_name: db};
	$.get('backend/manage_db/create_database.php', data).done(databaseCreated).fail(fail);
	$('#create').removeClass('btn-primary').addClass('btn-warning');
}

function databaseCreated(data){
	console.log('Inside databaseCreated');
	$('#create').removeClass('btn-primary').addClass('btn-success');
	setup();
}