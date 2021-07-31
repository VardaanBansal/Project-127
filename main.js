music = "";
musics = "";


function preload()
{
loadSound('music.mp3');
loadSound('music2.mp3');
}

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);


    canvas = createCanvas(500, 500);
    canvas.center()

}
function draw()
{
    image(video, 0, 0, 300, 300);
}
