<html>
<body>
<?php
 session_start();
print_r($_SESSION);
 if(isset($_GET["logout"])){
  session_destroy();
 }
$redirect_uri ='http://localhost/g_projects/hello_calendar/index.php';
    require_once '../google-api-php-client/vendor/autoload.php';
    $client = new Google_Client();
    // Get your credentials from the console
$client->setClientId('959193925480-4q1nivhp9lu2r400dpg87cqk67g4ts3b.apps.googleusercontent.com');
$client->setClientSecret('xmkHpH09DgkPamA_ma9ovxu6');
    $client->setRedirectUri($redirect_uri);
$client->addScope('profile');

$client->addScope(Google_Service_Calendar::CALENDAR);


print_r($client->getAccessToken());

    $authUrl = $client->createAuthUrl();
    if (isset($_GET['code'])) {

  $client->authenticate($_GET['code']);
  $_SESSION['access_token'] = $client->getAccessToken();
  header('Location: ' . filter_var($redirect_uri, FILTER_SANITIZE_URL));

    }
    if (!$client->getAccessToken() && !isset($_SESSION['access_token'])) {
        $authUrl = $client->createAuthUrl();
        print "<a class='login' href='$authUrl'>Conectar</a>";
    }        
   if (isset($_SESSION['access_token'])) {

       print "<a class='logout' href='".$_SERVER['PHP_SELF']."?logout=1'>Salir</a><br>";
      $client->setAccessToken($_SESSION['access_token']);
      $service = new Google_Service_Calendar($client);
  $results = $service->events->listEvents('primary', array());
if (count($results->getItems()) == 0) {
  print "<h3>No hay Eventos</h3>";
} else {
  print "<h3>Proximos Eventos</h3>";
  echo "<table border=1>";
  foreach ($results->getItems() as $event) {
    echo "<tr>";
    $start = $event->start->dateTime;
    if (empty($start)) {
      $start = $event->start->date;
    }
    echo "<td>".$event->getSummary()."</td>";
    echo "<td>".$start."</td>";
    echo "</tr>";
  }
    echo "<table>";


}


    }
?>
</body>
</html>