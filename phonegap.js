navigator.accelerometer.getCurrentAcceleration(onAccelSuccess,
onAccelFailure);

function onAccelSuccess(accel) {
xPos = accel.x;
yPos = accel.y;
zPos = accel.z;
tStamp = accel.timestamp;
}
