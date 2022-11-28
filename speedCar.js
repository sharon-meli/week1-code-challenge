// Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

// For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

const speedCar = 85
function checkSpeedCar(speedCar){
    if(speedCar <= 70){
        return "OK"
    } else if(speedCar <= 75){
        return "Points:1"
    }else if(speedCar <= 80){
        return "Points:2"
    }else if( speedCar <= 85){
        return "Points:3"
    }else if(speedCar <= 90){
        return "Points:4"
    }else if(speedCar <= 95){
        return "Points:5"
    }else if(speedCar <= 100){
        return "Points:6"
    }else if(speedCar <= 105){
        return "Points:7"
    }else if(speedCar <= 110){
        return "Points:8"
    }else if(speedCar <= 115){
        return "Points:9"
    }else if(speedCar <= 120){
        return "Points:10"
    }else if(speedCar <= 125){
        return "Points:11"
    }else if(speedCar <= 130){
        return "Points:12"
    } else {
        return "License suspended"
    }
}
console.log(checkSpeedCar(speedCar))