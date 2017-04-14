<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Week of the day</title>
    </head>
    <body>
        <?php
        $day_of_week = date('w');
        echo 'Today is ';

        switch ($day_of_week) {
            case 1:
                echo "Monday";
                break;
            case 2:
                echo "Tueday";
                break;
            case 3:
                echo "Wednesday";
                break;
            case 4:
                echo "Thursday";
                break;
            case 5:
                echo "Friday";
                break;
            case 6:
                echo "Saturday";
                break;
            case 7:
                echo "Sunday";
                break;
        }
         ?>

    </body>
</html>
