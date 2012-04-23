var dataLoaded = false;

var playerRoster = null;
var seasonData = null;

function launch_app()
{
	if (!dataLoaded)
	{
		if (typeof localStorage !== 'undefined')
		{
			// Load the data from localStorage
			playerRoster = localStorage.getItem("playerRoster");
			seasonData = localStorage.getItem("seasonData");
		}
		
		dataLoaded = true;
	}
}

function clean_variables()
{
	playerRoster = null
	seasonData = null;
	
	location.href = "index.html"
}

function create_new_season(form)
{
	var new_season = { season: form['select-season'].value, year : form['select-year'].value };
	var duplicate = false;
	
	// Now add the new season
	
	if (seasonData === null)
	{
		seasonData = new Array();
	}

	// Potential that the user is attempting to add the same season twice
	// Do not allow this
	
	// TODO: Fix this. I don't like it. I'm just too tired to think of a better way currently.
	for (var i=0; i < seasonData.length; i++)
	{
		if (_.isEqual(seasonData[i], new_season))
		{
			duplicate = true;
			break;
		}
	}
	if (duplicate === false)
	{
		seasonData[seasonData.length] = new_season;
	}
	else
	{
		alert("Attempting to add same season twice. Fix this later.");
	}	
}