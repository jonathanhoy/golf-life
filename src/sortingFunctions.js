const byLatestTourney = ( a, b ) => {
  if ( a.tourney_id > b.tourney_id ){
    return -1;
  }
  if ( a.tourney_id < b.tourney_id ){
    return 1;
  }
}

const byLatestTourneyAndMapCount = ( a, b ) => {
  if ( a.tourney_id > b.tourney_id ){
    return -1;
  }
  if ( a.tourney_id < b.tourney_id ){
    return 1;
  }
  if ( a.map_count < b.map_count ){
    return -1;
  }
  if ( a.map_count > b.map_count ){
    return 1;
  }
}

const byWinPercentage = ( a, b ) => {
  if ( a.win_rate > b.win_rate ){
    return -1;
  }
  if ( a.win_rate < b.win_rate ){
    return 1;
  }
}

export { byLatestTourney, byLatestTourneyAndMapCount, byWinPercentage };