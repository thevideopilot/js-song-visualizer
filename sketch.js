let mySound, amplitude;

function preload() {
  mySound = loadSound("music.mp3");
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  console.log("setup");
  amplitude = new p5.Amplitude();
}

function draw() {
  background(2);
  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 10, 600);
  console.log(size);
  fill(255, 0, 0);
  ellipse(250, 200, size, 80);
}

function mousePressed() {
  if (mySound.isPlaying()) {
    // song to stop
    mySound.stop();
  } else {
    mySound.play();
  }
}
