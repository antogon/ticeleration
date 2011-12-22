// Create Global Variables
var Ti = {
	fs : Titanium.Filesystem
};

// Configure the layout here
$('body').layout({
	applyDefaultStyles : true
});

function resetWindowPosition()
{
	var currentWindow = Titanium.UI.getMainWindow();
	currentWindow.height = 600;
	currentWindow.width = 800;
	currentWindow.x = Math.round((screen.width / 2) - 300);
	currentWindow.y = Math.round((screen.height / 2) - 200);
}

function loadMenuBar()
{
	var new_menu = Titanium.UI.createMenu();
	var file_submenu = new_menu.addItem("File");
	var about_submenu = new_menu.addItem("About");
	file_submenu.addItem("Exit", function() {
		Titanium.App.exit();
	})
	Titanium.UI.setMenu(new_menu);
}

function loadTitleBar(titleString)
{
	var tSource = $('#north-template').html();
	var temp = Handlebars.compile(tSource);
	var context = {
		north : titleString
	};
	$('#north').html(temp(context).toString());
}

function initialize()
{
	resetWindowPosition();
	loadMenuBar();
	loadTitleBar("Template");
}

initialize();