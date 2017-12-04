$(document).ready(() => {
  const vrView = new VRView.Player('#vrview', {
    video: 'https://storage.googleapis.com/complete-will-104723.appspot.com/yoga.mp4',
    width: '100%',
    height: 300
  });
  VRView.setVolume(0)
  // VRView.on('ready', function(event) {
  //   VRView.setVolume(0)
  //  VRView.play()
  // });
})
