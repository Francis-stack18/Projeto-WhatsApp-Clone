export class MicrophoneController {
  constructor() {
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
      })
      .then((stream) => {
        this._stream = stream;

        let audio = new Audio();

        audio.srcObject = stream;

        audio.play();
      })
      .catch((err) => {
        console.error(err);
      });
  }

  stop() {
    if (this._stream) {
      this._stream.getTracks().forEach((track) => {
        track.stop();
      });
    }
  }
}
