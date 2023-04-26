<?php
include_once '../../config/database.php';
$database = new Database();
$pdo = $database->getConnection();
$rest_api_url = 'https://stats.fn.sportradar.com/bet365/fr/Africa:Lagos/gismo/stats_season_fixtures2/98175/1';
$json_data = file_get_contents($rest_api_url);
$response_data = json_decode($json_data);
$matchesArray=$response_data->doc[0]->data->matches;
$now = new DateTime();
foreach ($matchesArray as $match) {
  //reform the date come from api
  list($matchDay, $matchMonth, $matchYear) = explode("/", $match->time->date);
  list($matchHour, $matchMinute) = explode(":", $match->time->time);
  // create a new DateTime object for the match time and date
  $matchDate = new DateTime(sprintf("20%02d-%02d-%02d %02d:%02d:00", $matchYear, $matchMonth, $matchDay, $matchHour, $matchMinute));
  //check if the date of the match > now date and add it to new array
  if ($matchDate > $now) {
    $nextMatch[] = $match;
  }
}
print_r($nextMatch);
if(isset($_GET['auth'])){
foreach ($nextMatch as $match) {
    $home_id=$match->teams->home->uid;
    $away_id=$match->teams->away->uid;
    $home=$match->teams->home->name;
    $away=$match->teams->away->name;
    $date=$match->time->date;
    $time=$match->time->time;
    $stmt = $pdo->prepare("INSERT INTO `ticket`( `home_id`, `away_id`, `home_name`, `away_name`, `date`, `time`) VALUES ('$home_id','$away_id','$home','$away','$date','$time')");
    $stmt->execute();
    echo $stmt->rowCount();
}
}
?>