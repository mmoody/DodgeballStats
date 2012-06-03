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

function create_new_season()
{
	var new_season = { season: $('#select-season_id')[0].value, year : $('#select-year_id')[0].value };
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

function create_main_menu()
{
	if (seasonData == null)
	{
		$('#main_content').html("<p class=\"mid-screen\">No season data to report. <br/>Please create a New Season.</p>");
	}
	else
	{
		for (var i = 0; i < seasonData.length; i++)
		{
			$('#main_content').append("<a href=\"season_info.html\" onClick=\"localStorage.selectedSeason=" + i + "\" data-role=\"button\">" + seasonData[i].season + " " + seasonData[i].year + "</a>");
		}
	}
}