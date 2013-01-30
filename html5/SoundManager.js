/*
 *                 [[ Frozen-Bubble ]]
 *
 * Copyright (c) 2000-2003 Guillaume Cottenceau.
 * Java sourcecode - Copyright (c) 2003 Glenn Sanson.
 *
 * This code is distributed under the GNU General Public License
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * version 2, as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 675 Mass Ave, Cambridge, MA 02139, USA.
 *
 *
 * Artwork:
 *    Alexis Younes <73lab at free.fr>
 *      (everything but the bubbles)
 *    Amaury Amblard-Ladurantie <amaury at linuxfr.org>
 *      (the bubbles)
 *
 * Soundtrack:
 *    Matthias Le Bidan <matthias.le_bidan at caramail.com>
 *      (the three musics and all the sound effects)
 *
 * Design & Programming:
 *    Guillaume Cottenceau <guillaume.cottenceau at free.fr>
 *      (design and manage the project, whole Perl sourcecode)
 *
 * Java version:
 *    Glenn Sanson <glenn.sanson at free.fr>
 *      (whole Java sourcecode, including JIGA classes
 *             http://glenn.sanson.free.fr/jiga/)
 *
 * Android port:
 *    Pawel Aleksander Fedorynski <pfedor@fuw.edu.pl>
 *    Copyright (c) Google Inc.
 *
 *          [[ http://glenn.sanson.free.fr/fb/ ]]
 *          [[ http://www.frozen-bubble.org/   ]]
 */

function SoundManager(context) {
  this.context = context;
  var soundPool = this.soundPool = new SoundPool(4, AudioManager.STREAM_MUSIC, 
                                                 0);
  var sm = this.sm = new Array(FrozenBubble.NUM_SOUNDS);
  sm[FrozenBubble.SOUND_WON] = soundPool.load(context, R.raw.applause, 1);
  sm[FrozenBubble.SOUND_LOST] = soundPool.load(context, R.raw.lose, 1);
  sm[FrozenBubble.SOUND_LAUNCH] = soundPool.load(context, R.raw.launch, 1);
  sm[FrozenBubble.SOUND_DESTROY] = soundPool.load(context, R.raw.destroy_group,
                                                  1);
  sm[FrozenBubble.SOUND_REBOUND] = soundPool.load(context, R.raw.rebound, 1);
  sm[FrozenBubble.SOUND_STICK] = soundPool.load(context, R.raw.stick, 1);
  sm[FrozenBubble.SOUND_HURRY] = soundPool.load(context, R.raw.hurry, 1);
  sm[FrozenBubble.SOUND_NEWROOT] = soundPool.load(context, R.raw.newroot_solo, 
                                                  1);
  sm[FrozenBubble.SOUND_NOH] = soundPool.load(context, R.raw.noh, 1);
}

SoundManager.prototype.playSound = function playSound(sound) {
  var context = this.context, soundPool = this.soundPool, sm = this.sm;
  if (FrozenBubble.getSoundOn()) {
    var mgr = context.getSystemService(Context.AUDIO_SERVICE);  
    var streamVolumeCurrent = mgr.getStreamVolume(AudioManager.STREAM_MUSIC);
    var streamVolumeMax = mgr.getStreamMaxVolume(AudioManager.STREAM_MUSIC);
    var volume = streamVolumeCurrent / streamVolumeMax;
    soundPool.play(sm[sound], volume, volume, 1, 0, 1);
  }
};
