<?php

$date = new DateTime;

echo $date->format('dS M Y');

echo '<br>';

echo 'Unix time: ', $date->getTimeStamp();

echo '<br>';

echo 'Timezone: ', $date->getTimezone()->getName();
