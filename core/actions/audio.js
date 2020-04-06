export const PLAY_SOUND = 'CORE.AUDIO.PLAY_SOUND'

export const playSound = (
  mobileSource,
  webSource,
  loop=false,
  volume=1,
) => ({
  type: PLAY_SOUND,
  mobileSource,
  webSource,
  loop,
  volume,
})
