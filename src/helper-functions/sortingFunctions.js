const byLatestTourney = ( a, b ) => {
  if ( a.id > b.id ){
    return -1;
  }
  if ( a.id < b.id ){
    return 1;
  }
}

const byLatestTourneyAndMapCount = ( a, b ) => {
  if ( a.id > b.id ){
    return -1;
  }
  if ( a.id < b.id ){
    return 1;
  }
  if ( a.map_count < b.map_count ){
    return -1;
  }
  if ( a.map_count > b.map_count ){
    return 1;
  }
}

// PLAYERS

const byWinsIncreasing = ( a, b ) => {
  if ( a.total_wins > b.total_wins ){
    return -1;
  }
  if ( a.total_wins < b.total_wins ){
    return 1;
  }
}

const byWinsDecreasing = ( a, b ) => {
  if ( a.total_wins < b.total_wins ){
    return -1;
  }
  if ( a.total_wins > b.total_wins ){
    return 1;
  }
}

const byWinPercentageIncreasing = ( a, b ) => {
  if ( a.win_rate > b.win_rate ){
    return -1;
  }
  if ( a.win_rate < b.win_rate ){
    return 1;
  }
}

const byWinPercentageDecreasing = ( a, b ) => {
  if ( a.win_rate < b.win_rate ){
    return -1;
  }
  if ( a.win_rate > b.win_rate ){
    return 1;
  }
}

const byTournamentsPlayedIncreasing = ( a, b ) => {
  if ( a.games_played > b.games_played ){
    return -1;
  }
  if ( a.games_played < b.games_played ){
    return 1;
  }
}

const byTournamentsPlayedDecreasing = ( a, b ) => {
  if ( a.games_played < b.games_played ){
    return -1;
  }
  if ( a.games_played > b.games_played ){
    return 1;
  }
}

const byMarginIncreasing = ( a, b ) => {
  if ( a.avg_differential > b.avg_differential ){
    return -1;
  }
  if ( a.avg_differential < b.avg_differential ){
    return 1;
  }
}

const byMarginDecreasing = ( a, b ) => {
  if ( a.avg_differential < b.avg_differential ){
    return -1;
  }
  if ( a.avg_differential > b.avg_differential ){
    return 1;
  }
}

const byLowestMarginIncreasing = ( a, b ) => {
  if ( a.lowest_margin > b.lowest_margin ){
    return -1;
  }
  if ( a.lowest_margin < b.lowest_margin ){
    return 1;
  }
}

const byLowestMarginDecreasing = ( a, b ) => {
  if ( a.lowest_margin < b.lowest_margin ){
    return -1;
  }
  if ( a.lowest_margin > b.lowest_margin ){
    return 1;
  }
}

const byParDifferential = ( a, b ) => {
  if ( a.differential < b.differential ){
    return -1;
  }
  if ( a.differential > b.differential ){
    return 1;
  }
}


// MAPS

const byAvgDifferentialIncreasing = ( a, b ) => {
  if ( parseFloat(a.avg_differential) < parseFloat(b.avg_differential) ){
    return -1;
  }
  if ( parseFloat(a.avg_differential) > parseFloat(b.avg_differential) ){
    return 1;
  }
  if ( parseFloat(a.avg_score) < parseFloat(b.avg_score) ){
    return -1;
  }
  if ( parseFloat(a.avg_score) > parseFloat(b.avg_score) ){
    return 1;
  }
}

const byAvgDifferentialDecreasing = ( a, b ) => {
  if ( parseFloat(a.avg_differential) > parseFloat(b.avg_differential) ){
    return -1;
  }
  if ( parseFloat(a.avg_differential) < parseFloat(b.avg_differential) ){
    return 1;
  }
  if ( parseFloat(a.avg_score) > parseFloat(b.avg_score) ){
    return -1;
  }
  if ( parseFloat(a.avg_score) < parseFloat(b.avg_score) ){
    return 1;
  }
}

const byAvgScoreIncreasing = ( a, b ) => {
  if ( parseFloat(a.avg_score) < parseFloat(b.avg_score) ){
    return -1;
  }
  if ( parseFloat(a.avg_score) > parseFloat(b.avg_score) ){
    return 1;
  }
}

const byAvgScoreDecreasing = ( a, b ) => {
  if ( parseFloat(a.avg_score) > parseFloat(b.avg_score) ){
    return -1;
  }
  if ( parseFloat(a.avg_score) < parseFloat(b.avg_score) ){
    return 1;
  }
}

const byParIncreasing = ( a, b ) => {
  if ( a.par < b.par ){
    return -1;
  }
  if ( a.par > b.par ){
    return 1;
  }
}

const byParDecreasing = ( a, b ) => {
  if ( a.par > b.par ){
    return -1;
  }
  if ( a.par < b.par ){
    return 1;
  }
}

const byLowestScoreIncreasing = ( a, b ) => {
  if ( a.min_score < b.min_score ){
    return -1;
  }
  if ( a.min_score > b.min_score ){
    return 1;
  }
}

const byLowestScoreDecreasing = ( a, b ) => {
  if ( a.min_score > b.min_score ){
    return -1;
  }
  if ( a.min_score < b.min_score ){
    return 1;
  }
}

const byHighestScoreIncreasing = ( a, b ) => {
  if ( a.max_score < b.max_score ){
    return -1;
  }
  if ( a.max_score > b.max_score ){
    return 1;
  }
}

const byHighestScoreDecreasing = ( a, b ) => {
  if ( a.max_score > b.max_score ){
    return -1;
  }
  if ( a.max_score < b.max_score ){
    return 1;
  }
}

const byRoundsPlayedIncreasing = ( a, b ) => {
  if ( a.rounds_played < b.rounds_played ){
    return -1;
  }
  if ( a.rounds_played > b.rounds_played ){
    return 1;
  }
}

const byRoundsPlayedDecreasing = ( a, b ) => {
  if ( a.rounds_played > b.rounds_played ){
    return -1;
  }
  if ( a.rounds_played < b.rounds_played ){
    return 1;
  }
}

const byFirstPlayerTotalMargin = ( a, b ) => {
  if ( a.first_total_differential < b.first_total_differential ){
    return -1;
  }
  if ( a.first_total_differential > b.first_total_differential ){
    return 1;
  }
}

export {
  byLatestTourney,
  byLatestTourneyAndMapCount,
  byWinsIncreasing,
  byWinsDecreasing,
  byWinPercentageIncreasing,
  byWinPercentageDecreasing,
  byTournamentsPlayedIncreasing,
  byTournamentsPlayedDecreasing,
  byMarginIncreasing,
  byMarginDecreasing,
  byLowestMarginIncreasing,
  byLowestMarginDecreasing,
  byParDifferential,
  byAvgDifferentialIncreasing,
  byAvgDifferentialDecreasing,
  byAvgScoreIncreasing,
  byAvgScoreDecreasing,
  byParIncreasing,
  byParDecreasing,
  byLowestScoreIncreasing,
  byLowestScoreDecreasing,
  byHighestScoreIncreasing,
  byHighestScoreDecreasing,
  byRoundsPlayedIncreasing,
  byRoundsPlayedDecreasing,
  byFirstPlayerTotalMargin,
};