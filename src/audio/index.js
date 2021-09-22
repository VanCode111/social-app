export const playMusic = async (url, id, title, audio, currentMusic, image) => {
  let music = { id, title, icon: image };
  console.log("asfas", image);
  if (currentMusic === null) {
    audio.src = url;
    music.play = true;
    audio.play();
    music.duration = audio.duration;
  } else if (currentMusic.id != id) {
    audio.currentTime = 0;
    audio.src = url;
    music.play = true;
    audio.play();
    //interval = disableMusic(audio, false, interval);
  } else {
    if (currentMusic.play) {
      music.play = false;
      audio.pause();
      //interval = disableMusic(audio, true, interval);
    } else {
      music.play = true;
      audio.play();
      //interval = disableMusic(audio, false, interval);
    }
  }
  return { music };
};

export const changeTrack = async (direction, audio, tracks, currentMusic) => {
  let audioId;
  if (direction === "right") {
    audioId = currentMusic.id < tracks.length ? currentMusic.id + 1 : 1;
  } else {
    audioId = currentMusic.id > 1 ? currentMusic.id - 1 : tracks.length;
  }
  const track = tracks[audioId - 1];
  const { music } = await playMusic(
    track.url,
    track.id,
    track.title,
    audio,
    currentMusic
  );
  return { music };
};

export const disableMusic = async (audio, disable, interval) => {
  if (interval) {
    clearInterval(interval);
  }
  if (!disable) {
    audio.play();
  }
  const volume = disable ? -0.1 : 0.1;
  new Promise((resolve) => {
    interval = setInterval(() => {
      console.log(1);
      if (
        (disable && audio.volume <= 0.1) ||
        (!disable && audio.volume > 0.9)
      ) {
        resolve();
        clearInterval(interval);
        if (disable) {
          audio.pause();
        }
      } else {
        audio.volume += volume;
      }
    }, 50);
  });
  return interval;
};
