var playerRoster = null;
var seasonData = null;

function launch_app()
{
	if (typeof localStorage !== 'undefined')
	{
		// Load the data from localStorage
		playerRoster = localStorage.getItem("playerRoster");
		seasonData = localStorage.getItem("seasonData");
	}
}

function create_new_season(form)
{
	var chosen_season = form['select-season'].value;
	var chosen_year = form['select-year'].value;
	
	// Need to validate that the season does not already exist
	
	if (seasonData == null)
	{
		// If the season data was empty to begin with, then we have a completely new device
		// with no prior recorded seasons.
		
		var new_season = { s_id: 0, data : { season: chosen_season, year : chosen_year } };
		seasonData = new_season;
	}
}