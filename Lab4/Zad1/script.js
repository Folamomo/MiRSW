let video = document.querySelector('video')

let intersectionObserver = new IntersectionObserver(function(entries) {

  if (entries[0].intersectionRatio > 0) {
        video.play()
      console.log("play")
  } else {
    video.pause()
    console.log("pause")
  }
});

intersectionObserver.observe(document.querySelector('video'));
