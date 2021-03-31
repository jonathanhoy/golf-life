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
}

const byAvgDifferentialDecreasing = ( a, b ) => {
  if ( parseFloat(a.avg_differential) > parseFloat(b.avg_differential) ){
    return -1;
  }
  if ( parseFloat(a.avg_differential) < parseFloat(b.avg_differential) ){
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

export {
  byLatestTourney,
  byLatestTourneyAndMapCount,
  byWinPercentage,
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
};