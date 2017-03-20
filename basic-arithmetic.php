<?php

$total_lessons = 30;
$completed_lessons = 15;

//PEMDAS order of operation
//use parenthesis (recommended) for reading purposes
$percentage_complete = number_format( ($completed_lessons / $total_lessons) * 100, 2 );

echo "Completion on this lesson is @ {$percentage_complete}%.";
