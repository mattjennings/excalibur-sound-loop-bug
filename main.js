import * as ex from "excalibur";

const engine = new ex.Engine({
  width: 400,
  height: 400
});

const snd = new ex.Sound("/jump.mp3");
const loader = new ex.Loader([snd]);

engine.start(loader).then(() => {
  snd.loop = true;
  snd.play();
});
