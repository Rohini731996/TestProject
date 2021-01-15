// Function to calculate the angle of clock hour and minute
const getAngle = (h, m) => {
    // validate the input
    if (h < 0 || m < 0 || h > 12 || m > 60)
        Console.log("Wrong input");

    if (h == 12)
        h = 0;
    if (m == 60) {
        m = 0;
        h += 1;
        if (h > 12)
            h = h - 12;
    }


    // Calculating the angles moved by hour and minute hands with reference to 12:00
    let hour_angle = (0.5 * (h * 60 + m));
    let minute_angle = (6 * m);

    // Finding the difference between two angles
    let angle = Math.abs(hour_angle - minute_angle);

    // return smaller angle of two possible angles
    angle = Math.min(360 - angle, angle);

    return angle;
}

//for 4:13 time
//Input : getAngle(4,13)
//output : 48 degree

