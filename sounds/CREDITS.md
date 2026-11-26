# Sound effect credits

Every sound in this folder is a recorded effect released under
**CC0 1.0 Universal (public domain dedication)**,
https://creativecommons.org/publicdomain/zero/1.0/ . No attribution is
legally required; it is given here anyway. No Mojang / Minecraft audio is
used, and none was used as a reference file: the samples were chosen by
measuring length, loudness and spectrum against the documented character of
each vanilla sound.

The license of each source page was checked on OpenGameArt (2026-11-07 and
2026-11-08): every page lists CC0 as its only license. The Kenney packs also
ship a CC0 license.txt.

## Processing

Each file was cut from its source (mono, 44.1 kHz), high-passed at 35 Hz,
trimmed of leading and trailing silence, given a short fade-in and a
fade-out, and loudness-matched per category: the gain brings the active RMS
(frames above -40 dB of the peak) to a category target (steps -17 dBFS,
digging -16, blocks -18, mobs and player voice -15, attacks -17, items -17,
explosions -13, cave ambience -22, rain -17), with at most 6 dB of peak
limiting and a -1 dBFS ceiling. Encoded as Ogg Vorbis (quality 3; quality 2
for ambience, weather and fire). Longer recordings were split into single
events; "from Ns" is the start time in the source file. The rain loop is the
source loop unchanged apart from gain. random/explode3 and explode4 layer a
short bang over the low rumble of a distant explosion (both CC0).

### Granular rebuilds (2026-11-08)

dig/stone, dig/gravel, dig/wood, dig/grass (all variants) and
player/fall_small, player/fall_big were rebuilt by a script: many 8-60 ms
Hann-windowed grains are cut from the loudest moments of the listed CC0
recordings, scheduled with an exponentially decaying density over 0.17-0.45 s
(one stronger leading grain), band-shaped per material and loudness-matched
as above. The goal was the dense, dry crumble of block digging instead of a
single click or a boomy knock; fall sounds are a low body thump plus a short
crunch layer. No Mojang audio was used or referenced.

### Synthesized voices (2026-11-11)

player/hurt1-4, mob/say1-10, mob/hurt1-5 and mob/death1-2 are original sounds
made from scratch by `tools/gen-voice-sounds.py` (no recordings used): a
glottal pulse source with pitch contour, jitter, shimmer and vocal fry, breath
and rasp noise, and a cascade of gliding formant resonators. They replace the
earlier CC0 recordings for those names. Run the script again to rebuild them.

The zombie set (mob/say, mob/hurt, mob/death) was remade on 2026-11-24 (1.8.3)
by the same script, still from scratch: instead of sung vowels it builds a
threatening throat (pitch that only falls, chaotic folds with subharmonics and
skipped pulses, an irregular false-fold rattle, loud rasp, a slack wide-band
throat, fluid bubbles, inhaled rattles and teeth hisses).

### Synthesized structure beds (2026-11-14, Part Z E-3)

ambient/site_generator1, site_drip1, site_groan1 and site_wind1 are original
seamless loops made from scratch by `tools/gen-structure-sounds.py` (no
recordings used or referenced): a running backup generator (50 Hz hum and
harmonics, a pulsed two-stroke chug, a rattling cowl), water dripping in a
closed concrete room with a short comb echo, distant organic groans (low
harmonic sweeps, low-passed for distance) with wet squelches, and wind through
broken windows (a gusting band with narrow whistling resonances and a loose
shutter knock). Played positionally at structures by src/core/audio/SiteBeds.js.

### Synthesized ambience beds (2026-11-14, Part Z B-4)

ambient/bed_wind1, bed_birds1, bed_insects1, bed_cave1 and bed_hum1 are
original seamless loops made from scratch by `tools/gen-ambience-sounds.py`
(no recordings used or referenced): wind is brown noise through a slowly
wandering band-pass with gusts and a faint whistle; birds are four made-up
songbird patterns (sine sweeps, trills, an FM warble) placed sparsely, near
and far; insects are three pulse-train chirpers on whole-cycle carriers plus a
soft trilling noise band; the cave bed is a low band-passed rumble with
resonant water drips and a small comb-filter echo; the infection hum is a
beating low drone with harmonics, a slow throb and a breathy band. Seeded,
loudness-matched to the ambience target (active RMS -22 dBFS, -1 dBFS
ceiling), Ogg Vorbis quality 2. Run the script again to rebuild them;
`--report out.json` prints the analysis numbers.

### More synthesized ambience beds (2026-11-17, Tier 3 T3-4)

ambient/bed_surf1, bed_desert1, bed_snow1, bed_swamp1, bed_leaves1, bed_owls1,
bed_rain_leaves1, bed_rain_roof1, bed_thunder1, bed_dino_day1 and
bed_dino_night1 are original seamless loops made from scratch by the same
script (`tools/gen-ambience-sounds.py --only <names>` rebuilds just these). No
recordings, mods or sound packs were used or referenced. Surf: swells of
band-passed noise with a rising wash, a soft-onset hiss and a low floor.
Desert: a dry band-pass wind with sparse high sand ticks. Snow: two thin
resonant moans drifting in pitch over a pale hiss. Swamp: made-up croaks
(pulsed low tones with harmonics), rising bubble blips and a murky drone.
Leaves: high band noise with a fast random flutter in gusts. Night birds:
sparse soft hoots (a low tone with breath), near and far. Rain on leaves:
bright hiss plus heavy decaying drips. Rain on a roof: random taps through a
resonant filter (dull drumming) over a low band. Thunder: three slow rolling
brown-noise rumbles with a short crackle and a faint far floor. Parasitic
Dino forest, day: humid air, a rasping buzzing band in long swells, a whirring
band, canopy drips and far deep calls (a gliding low formant tone, made up);
night: a low drone, two pulsing high chorus bands, low croaks and far deep
calls. Seeded, same loudness rules as above.

## Sources

| Pack | Author | License | Page |
|---|---|---|---|
| Loopable Dungeon Ambience | JaggedStone | CC0 1.0 | https://opengameart.org/content/loopable-dungeon-ambience |
| Dripping water loop | qubodup | CC0 1.0 | https://opengameart.org/content/dripping-water-loop |
| 37 hits/punches | qubodup | CC0 1.0 | https://opengameart.org/content/37-hitspunches |
| 100 CC0 SFX | rubberduck | CC0 1.0 | https://opengameart.org/content/100-cc0-sfx |
| Fantasy Sound Effects (Tinysized SFX) | Vehicle | CC0 1.0 | https://opengameart.org/content/fantasy-sound-effects-tinysized-sfx |
| Swishes Sound Pack | artisticdude | CC0 1.0 | https://opengameart.org/content/swishes-sound-pack |
| 50 RPG sound effects | Kenney (kenney.nl) | CC0 1.0 | https://opengameart.org/content/50-rpg-sound-effects |
| 100 CC0 metal and wood SFX | rubberduck | CC0 1.0 | https://opengameart.org/content/100-cc0-metal-and-wood-sfx |
| open chest SFX | Oiboo | CC0 1.0 | https://opengameart.org/content/open-chest-sfx |
| 75 CC0 breaking / falling / hit sfx | rubberduck | CC0 1.0 | https://opengameart.org/content/75-cc0-breaking-falling-hit-sfx |
| Different steps on wood, stone, leaves, gravel and mud | TinyWorlds | CC0 1.0 | https://opengameart.org/content/different-steps-on-wood-stone-leaves-gravel-and-mud |
| 42 Snow and Gravel Footsteps | qubodup (recorded by Corsica_S) | CC0 1.0 | https://opengameart.org/content/42-snow-and-gravel-footsteps |
| Water Splash and sand footsteps | Peludo | CC0 1.0 | https://opengameart.org/content/water-splash-and-sand-footsteps |
| 80 CC0 RPG SFX | rubberduck | CC0 1.0 | https://opengameart.org/content/80-cc0-rpg-sfx |
| 35 wooden cracks/hits/destructions | qubodup | CC0 1.0 | https://opengameart.org/content/35-wooden-crackshitsdestructions |
| Fire Crackling | AntumDeluge | CC0 1.0 | https://opengameart.org/content/fire-crackling |
| Fireplace Sound loop | PagDev | CC0 1.0 | https://opengameart.org/content/fireplace-sound-loop |
| Medieval sound effects - Weapon Textures | Ben Jaszczak & Brian Nelson (submitted by MedicineStorm) | CC0 1.0 | https://opengameart.org/content/medieval-sound-effects-weapon-textures |
| 80 CC0 creature SFX | rubberduck | CC0 1.0 | https://opengameart.org/content/80-cc0-creature-sfx |
| RPG Sound Pack | artisticdude | CC0 1.0 | https://opengameart.org/content/rpg-sound-pack |
| Liquid Bottle Drink Set | qubodup | CC0 1.0 | https://opengameart.org/content/liquid-bottle-drink-set |
| 7 Eating Crunches | StarNinjas | CC0 1.0 | https://opengameart.org/content/7-eating-crunches |
| Pop sounds | cogitollc | CC0 1.0 | https://opengameart.org/content/pop-sounds |
| 40 CC0 water / splash / slime SFX | rubberduck | CC0 1.0 | https://opengameart.org/content/40-cc0-water-splash-slime-sfx |
| Zombies Sound Pack | artisticdude | CC0 1.0 | https://opengameart.org/content/zombies-sound-pack |
| Undead Moans | AntumDeluge | CC0 1.0 | https://opengameart.org/content/undead-moans |
| Thwack Sounds | AntumDeluge | CC0 1.0 | https://opengameart.org/content/thwack-sounds |
| Hurt Sound Effects | EZduzziteh | CC0 1.0 | https://opengameart.org/content/hurt-sound-effects |
| Chunky Explosion | Joth | CC0 1.0 | https://opengameart.org/content/chunky-explosion |
| Explosions | EZduzziteh | CC0 1.0 | https://opengameart.org/content/explosions-4 |
| 25 CC0 bang / firework SFX | rubberduck | CC0 1.0 | https://opengameart.org/content/25-cc0-bang-firework-sfx |
| Muffled Distant Explosion | NenadSimic | CC0 1.0 | https://opengameart.org/content/muffled-distant-explosion |
| Bell dings/chimes | PWL | CC0 1.0 | https://opengameart.org/content/bell-dingschimes |
| Fantozzi's Footsteps (Grass/Sand & Stone) | qubodup (recorded by Fantozzi) | CC0 1.0 | https://opengameart.org/content/fantozzis-footsteps-grasssand-stone |
| Walking on snow sound | IgnasD | CC0 1.0 | https://opengameart.org/content/walking-on-snow-sound |
| 100 CC0 SFX #2 | rubberduck | CC0 1.0 | https://opengameart.org/content/100-cc0-sfx-2 |
| 51 UI sound effects (buttons, switches and clicks) | Kenney (kenney.nl) | CC0 1.0 | https://opengameart.org/content/51-ui-sound-effects-buttons-switches-and-clicks |
| Rain + Long Thunder | WuxiaScrub | CC0 1.0 | https://opengameart.org/content/rain-long-thunder |

## Files

| File | Source file | Pack | Author | License |
|---|---|---|---|---|
| ambient/cave1.ogg | dungeon_ambient_1.ogg (from 7s) | [Loopable Dungeon Ambience](https://opengameart.org/content/loopable-dungeon-ambience) | JaggedStone | CC0 1.0 |
| ambient/cave2.ogg | dungeon_ambient_1.ogg (from 14s) | [Loopable Dungeon Ambience](https://opengameart.org/content/loopable-dungeon-ambience) | JaggedStone | CC0 1.0 |
| ambient/cave3.ogg | dungeon_ambient_1.ogg (from 41s) | [Loopable Dungeon Ambience](https://opengameart.org/content/loopable-dungeon-ambience) | JaggedStone | CC0 1.0 |
| ambient/cave4.ogg | dungeon_ambient_1.ogg (from 56s) | [Loopable Dungeon Ambience](https://opengameart.org/content/loopable-dungeon-ambience) | JaggedStone | CC0 1.0 |
| ambient/cave5.ogg | dungeon_ambient_1.ogg (from 77s) | [Loopable Dungeon Ambience](https://opengameart.org/content/loopable-dungeon-ambience) | JaggedStone | CC0 1.0 |
| ambient/cave6.ogg | atmosbasement.mp3_.flac (from 7.5s) | [Dripping water loop](https://opengameart.org/content/dripping-water-loop) | qubodup | CC0 1.0 |
| attack/crit1.ogg | hit01.mp3.flac | [37 hits/punches](https://opengameart.org/content/37-hitspunches) | qubodup | CC0 1.0 |
| attack/crit2.ogg | hit12.mp3.flac | [37 hits/punches](https://opengameart.org/content/37-hitspunches) | qubodup | CC0 1.0 |
| attack/knockback1.ogg | hit05.mp3.flac | [37 hits/punches](https://opengameart.org/content/37-hitspunches) | qubodup | CC0 1.0 |
| attack/knockback2.ogg | hit08.mp3.flac | [37 hits/punches](https://opengameart.org/content/37-hitspunches) | qubodup | CC0 1.0 |
| attack/nodamage1.ogg | hit_03.ogg | [100 CC0 SFX](https://opengameart.org/content/100-cc0-sfx) | rubberduck | CC0 1.0 |
| attack/nodamage2.ogg | hit_04.ogg | [100 CC0 SFX](https://opengameart.org/content/100-cc0-sfx) | rubberduck | CC0 1.0 |
| attack/strong1.ogg | hit03.mp3.flac | [37 hits/punches](https://opengameart.org/content/37-hitspunches) | qubodup | CC0 1.0 |
| attack/strong2.ogg | hit06.mp3.flac | [37 hits/punches](https://opengameart.org/content/37-hitspunches) | qubodup | CC0 1.0 |
| attack/strong3.ogg | hit07.mp3.flac | [37 hits/punches](https://opengameart.org/content/37-hitspunches) | qubodup | CC0 1.0 |
| attack/sweep1.ogg | tube-plastic-whoosh-01.wav | [Fantasy Sound Effects (Tinysized SFX)](https://opengameart.org/content/fantasy-sound-effects-tinysized-sfx) | Vehicle | CC0 1.0 |
| attack/sweep2.ogg | tube-plastic-whoosh-02.wav | [Fantasy Sound Effects (Tinysized SFX)](https://opengameart.org/content/fantasy-sound-effects-tinysized-sfx) | Vehicle | CC0 1.0 |
| attack/sweep3.ogg | tin-whistle-whoosh-01.wav | [Fantasy Sound Effects (Tinysized SFX)](https://opengameart.org/content/fantasy-sound-effects-tinysized-sfx) | Vehicle | CC0 1.0 |
| attack/weak1.ogg | swish-3.wav | [Swishes Sound Pack](https://opengameart.org/content/swishes-sound-pack) | artisticdude | CC0 1.0 |
| attack/weak2.ogg | swish-9.wav | [Swishes Sound Pack](https://opengameart.org/content/swishes-sound-pack) | artisticdude | CC0 1.0 |
| block/chest_close1.ogg | doorClose_3.ogg | [50 RPG sound effects](https://opengameart.org/content/50-rpg-sound-effects) | Kenney (kenney.nl) | CC0 1.0 |
| block/chest_close2.ogg | wood_slam_04.ogg | [100 CC0 metal and wood SFX](https://opengameart.org/content/100-cc0-metal-and-wood-sfx) | rubberduck | CC0 1.0 |
| block/chest_open1.ogg | wooded_box_open.ogg | [100 CC0 SFX](https://opengameart.org/content/100-cc0-sfx) | rubberduck | CC0 1.0 |
| block/door_iron_close1.ogg | metal_close_01.ogg | [100 CC0 metal and wood SFX](https://opengameart.org/content/100-cc0-metal-and-wood-sfx) | rubberduck | CC0 1.0 |
| block/door_iron_close2.ogg | metal_slam_01.ogg | [100 CC0 metal and wood SFX](https://opengameart.org/content/100-cc0-metal-and-wood-sfx) | rubberduck | CC0 1.0 |
| block/door_iron_open1.ogg | metal_open_01.ogg | [100 CC0 metal and wood SFX](https://opengameart.org/content/100-cc0-metal-and-wood-sfx) | rubberduck | CC0 1.0 |
| block/door_wood_close1.ogg | doorClose_1.ogg | [50 RPG sound effects](https://opengameart.org/content/50-rpg-sound-effects) | Kenney (kenney.nl) | CC0 1.0 |
| block/door_wood_close2.ogg | doorClose_2.ogg | [50 RPG sound effects](https://opengameart.org/content/50-rpg-sound-effects) | Kenney (kenney.nl) | CC0 1.0 |
| block/door_wood_close3.ogg | doorClose_4.ogg | [50 RPG sound effects](https://opengameart.org/content/50-rpg-sound-effects) | Kenney (kenney.nl) | CC0 1.0 |
| block/door_wood_open1.ogg | doorOpen_1.ogg | [50 RPG sound effects](https://opengameart.org/content/50-rpg-sound-effects) | Kenney (kenney.nl) | CC0 1.0 |
| block/door_wood_open2.ogg | doorOpen_2.ogg | [50 RPG sound effects](https://opengameart.org/content/50-rpg-sound-effects) | Kenney (kenney.nl) | CC0 1.0 |
| block/trapdoor_close1.ogg | wood_close_01.ogg | [100 CC0 metal and wood SFX](https://opengameart.org/content/100-cc0-metal-and-wood-sfx) | rubberduck | CC0 1.0 |
| block/trapdoor_close2.ogg | wood_close_02.ogg | [100 CC0 metal and wood SFX](https://opengameart.org/content/100-cc0-metal-and-wood-sfx) | rubberduck | CC0 1.0 |
| block/trapdoor_open1.ogg | door_open_01.ogg | [100 CC0 metal and wood SFX](https://opengameart.org/content/100-cc0-metal-and-wood-sfx) | rubberduck | CC0 1.0 |
| block/trapdoor_open2.ogg | wood_slam_02.ogg | [100 CC0 metal and wood SFX](https://opengameart.org/content/100-cc0-metal-and-wood-sfx) | rubberduck | CC0 1.0 |
| dig/glass1.ogg | bfh1_glass_breaking_02.ogg | [75 CC0 breaking / falling / hit sfx](https://opengameart.org/content/75-cc0-breaking-falling-hit-sfx) | rubberduck | CC0 1.0 |
| dig/glass2.ogg | bfh1_glass_breaking_05.ogg | [75 CC0 breaking / falling / hit sfx](https://opengameart.org/content/75-cc0-breaking-falling-hit-sfx) | rubberduck | CC0 1.0 |
| dig/glass3.ogg | bfh1_glass_breaking_01.ogg | [75 CC0 breaking / falling / hit sfx](https://opengameart.org/content/75-cc0-breaking-falling-hit-sfx) | rubberduck | CC0 1.0 |
| dig/grass1.ogg | granular rebuild: leaves01-02, Corsica gravel 09-12 | [Different steps on wood, stone, leaves, gravel and mud](https://opengameart.org/content/different-steps-on-wood-stone-leaves-gravel-and-mud) (TinyWorlds); [42 Snow and Gravel Footsteps](https://opengameart.org/content/42-snow-and-gravel-footsteps) (qubodup, recorded by Corsica_S) | see packs | CC0 1.0 |
| dig/grass2.ogg | granular rebuild: leaves01-02, Corsica gravel 09-12 | [Different steps on wood, stone, leaves, gravel and mud](https://opengameart.org/content/different-steps-on-wood-stone-leaves-gravel-and-mud) (TinyWorlds); [42 Snow and Gravel Footsteps](https://opengameart.org/content/42-snow-and-gravel-footsteps) (qubodup, recorded by Corsica_S) | see packs | CC0 1.0 |
| dig/grass3.ogg | granular rebuild: leaves01-02, Corsica gravel 09-12 | [Different steps on wood, stone, leaves, gravel and mud](https://opengameart.org/content/different-steps-on-wood-stone-leaves-gravel-and-mud) (TinyWorlds); [42 Snow and Gravel Footsteps](https://opengameart.org/content/42-snow-and-gravel-footsteps) (qubodup, recorded by Corsica_S) | see packs | CC0 1.0 |
| dig/grass4.ogg | granular rebuild: leaves01-02, Corsica gravel 09-12 | [Different steps on wood, stone, leaves, gravel and mud](https://opengameart.org/content/different-steps-on-wood-stone-leaves-gravel-and-mud) (TinyWorlds); [42 Snow and Gravel Footsteps](https://opengameart.org/content/42-snow-and-gravel-footsteps) (qubodup, recorded by Corsica_S) | see packs | CC0 1.0 |
| dig/gravel1.ogg | granular rebuild: Corsica gravel 01-18 | [42 Snow and Gravel Footsteps](https://opengameart.org/content/42-snow-and-gravel-footsteps) (qubodup, recorded by Corsica_S) | see packs | CC0 1.0 |
| dig/gravel2.ogg | granular rebuild: Corsica gravel 01-18 | [42 Snow and Gravel Footsteps](https://opengameart.org/content/42-snow-and-gravel-footsteps) (qubodup, recorded by Corsica_S) | see packs | CC0 1.0 |
| dig/gravel3.ogg | granular rebuild: Corsica gravel 01-18 | [42 Snow and Gravel Footsteps](https://opengameart.org/content/42-snow-and-gravel-footsteps) (qubodup, recorded by Corsica_S) | see packs | CC0 1.0 |
| dig/gravel4.ogg | granular rebuild: Corsica gravel 01-18 | [42 Snow and Gravel Footsteps](https://opengameart.org/content/42-snow-and-gravel-footsteps) (qubodup, recorded by Corsica_S) | see packs | CC0 1.0 |
| dig/sand1.ogg | sand_footsteps_0.mp3 (from 0.17s) | [Water Splash and sand footsteps](https://opengameart.org/content/water-splash-and-sand-footsteps) | Peludo | CC0 1.0 |
| dig/sand2.ogg | sand_footsteps_0.mp3 (from 1.41s) | [Water Splash and sand footsteps](https://opengameart.org/content/water-splash-and-sand-footsteps) | Peludo | CC0 1.0 |
| dig/sand3.ogg | sand_footsteps_0.mp3 (from 4.41s) | [Water Splash and sand footsteps](https://opengameart.org/content/water-splash-and-sand-footsteps) | Peludo | CC0 1.0 |
| dig/stone1.ogg | granular rebuild: Corsica gravel 01-08, bfh1_rock_breaking/falling, sfx100v2_stones_01-03 | [42 Snow and Gravel Footsteps](https://opengameart.org/content/42-snow-and-gravel-footsteps) (qubodup, recorded by Corsica_S); [75 CC0 breaking / falling / hit sfx](https://opengameart.org/content/75-cc0-breaking-falling-hit-sfx) (rubberduck); [100 CC0 SFX #2](https://opengameart.org/content/100-cc0-sfx-2) (rubberduck) | see packs | CC0 1.0 |
| dig/stone2.ogg | granular rebuild: Corsica gravel 01-08, bfh1_rock_breaking/falling, sfx100v2_stones_01-03 | [42 Snow and Gravel Footsteps](https://opengameart.org/content/42-snow-and-gravel-footsteps) (qubodup, recorded by Corsica_S); [75 CC0 breaking / falling / hit sfx](https://opengameart.org/content/75-cc0-breaking-falling-hit-sfx) (rubberduck); [100 CC0 SFX #2](https://opengameart.org/content/100-cc0-sfx-2) (rubberduck) | see packs | CC0 1.0 |
| dig/stone3.ogg | granular rebuild: Corsica gravel 01-08, bfh1_rock_breaking/falling, sfx100v2_stones_01-03 | [42 Snow and Gravel Footsteps](https://opengameart.org/content/42-snow-and-gravel-footsteps) (qubodup, recorded by Corsica_S); [75 CC0 breaking / falling / hit sfx](https://opengameart.org/content/75-cc0-breaking-falling-hit-sfx) (rubberduck); [100 CC0 SFX #2](https://opengameart.org/content/100-cc0-sfx-2) (rubberduck) | see packs | CC0 1.0 |
| dig/stone4.ogg | granular rebuild: Corsica gravel 01-08, bfh1_rock_breaking/falling, sfx100v2_stones_01-03 | [42 Snow and Gravel Footsteps](https://opengameart.org/content/42-snow-and-gravel-footsteps) (qubodup, recorded by Corsica_S); [75 CC0 breaking / falling / hit sfx](https://opengameart.org/content/75-cc0-breaking-falling-hit-sfx) (rubberduck); [100 CC0 SFX #2](https://opengameart.org/content/100-cc0-sfx-2) (rubberduck) | see packs | CC0 1.0 |
| dig/wood1.ogg | granular rebuild: crack01-09, impactwood02/08/09, wood_breaking_01-02, wood_cracking_01-04 | [35 wooden cracks/hits/destructions](https://opengameart.org/content/35-wooden-crackshitsdestructions) (qubodup); [100 CC0 metal and wood SFX](https://opengameart.org/content/100-cc0-metal-and-wood-sfx) (rubberduck) | see packs | CC0 1.0 |
| dig/wood2.ogg | granular rebuild: crack01-09, impactwood02/08/09, wood_breaking_01-02, wood_cracking_01-04 | [35 wooden cracks/hits/destructions](https://opengameart.org/content/35-wooden-crackshitsdestructions) (qubodup); [100 CC0 metal and wood SFX](https://opengameart.org/content/100-cc0-metal-and-wood-sfx) (rubberduck) | see packs | CC0 1.0 |
| dig/wood3.ogg | granular rebuild: crack01-09, impactwood02/08/09, wood_breaking_01-02, wood_cracking_01-04 | [35 wooden cracks/hits/destructions](https://opengameart.org/content/35-wooden-crackshitsdestructions) (qubodup); [100 CC0 metal and wood SFX](https://opengameart.org/content/100-cc0-metal-and-wood-sfx) (rubberduck) | see packs | CC0 1.0 |
| dig/wood4.ogg | granular rebuild: crack01-09, impactwood02/08/09, wood_breaking_01-02, wood_cracking_01-04 | [35 wooden cracks/hits/destructions](https://opengameart.org/content/35-wooden-crackshitsdestructions) (qubodup); [100 CC0 metal and wood SFX](https://opengameart.org/content/100-cc0-metal-and-wood-sfx) (rubberduck) | see packs | CC0 1.0 |
| fire/fire1.ogg | fire-1.ogg | [Fire Crackling](https://opengameart.org/content/fire-crackling) | AntumDeluge | CC0 1.0 |
| fire/fire2.ogg | fire-1.ogg (from 1.8s) | [Fire Crackling](https://opengameart.org/content/fire-crackling) | AntumDeluge | CC0 1.0 |
| fire/fire3.ogg | fire.wav (from 5s) | [Fireplace Sound loop](https://opengameart.org/content/fireplace-sound-loop) | PagDev | CC0 1.0 |
| item/bow_hit1.ogg | wood_hit_01.ogg | [100 CC0 metal and wood SFX](https://opengameart.org/content/100-cc0-metal-and-wood-sfx) | rubberduck | CC0 1.0 |
| item/bow_hit2.ogg | wood_hit_03.ogg | [100 CC0 metal and wood SFX](https://opengameart.org/content/100-cc0-metal-and-wood-sfx) | rubberduck | CC0 1.0 |
| item/bow_hit3.ogg | wood_hit_04.ogg | [100 CC0 metal and wood SFX](https://opengameart.org/content/100-cc0-metal-and-wood-sfx) | rubberduck | CC0 1.0 |
| item/bow_shoot1.ogg | English Longbow Shoot.wav (from 0.08s) | [Medieval sound effects - Weapon Textures](https://opengameart.org/content/medieval-sound-effects-weapon-textures) | Ben Jaszczak & Brian Nelson (submitted by MedicineStorm) | CC0 1.0 |
| item/bow_shoot2.ogg | English Longbow Shoot.wav (from 1.23s) | [Medieval sound effects - Weapon Textures](https://opengameart.org/content/medieval-sound-effects-weapon-textures) | Ben Jaszczak & Brian Nelson (submitted by MedicineStorm) | CC0 1.0 |
| item/bow_shoot3.ogg | Scythian Recurve Shoot.wav (from 3.38s) | [Medieval sound effects - Weapon Textures](https://opengameart.org/content/medieval-sound-effects-weapon-textures) | Ben Jaszczak & Brian Nelson (submitted by MedicineStorm) | CC0 1.0 |
| item/break1.ogg | crack05.mp3.flac | [35 wooden cracks/hits/destructions](https://opengameart.org/content/35-wooden-crackshitsdestructions) | qubodup | CC0 1.0 |
| item/break2.ogg | crack01.mp3.flac | [35 wooden cracks/hits/destructions](https://opengameart.org/content/35-wooden-crackshitsdestructions) | qubodup | CC0 1.0 |
| item/burp1.ogg | burp_01.ogg | [80 CC0 creature SFX](https://opengameart.org/content/80-cc0-creature-sfx) | rubberduck | CC0 1.0 |
| item/burp2.ogg | burp.wav | [RPG Sound Pack](https://opengameart.org/content/rpg-sound-pack) | artisticdude | CC0 1.0 |
| item/drink1.ogg | swallow-01.flac | [Liquid Bottle Drink Set](https://opengameart.org/content/liquid-bottle-drink-set) | qubodup | CC0 1.0 |
| item/drink2.ogg | swallow-03.flac | [Liquid Bottle Drink Set](https://opengameart.org/content/liquid-bottle-drink-set) | qubodup | CC0 1.0 |
| item/drink3.ogg | swallow-04.flac | [Liquid Bottle Drink Set](https://opengameart.org/content/liquid-bottle-drink-set) | qubodup | CC0 1.0 |
| item/eat1.ogg | crunch.1.ogg (from 0.52s) | [7 Eating Crunches](https://opengameart.org/content/7-eating-crunches) | StarNinjas | CC0 1.0 |
| item/eat2.ogg | crunch.2.ogg (from 0.31s) | [7 Eating Crunches](https://opengameart.org/content/7-eating-crunches) | StarNinjas | CC0 1.0 |
| item/eat3.ogg | crunch.3.ogg (from 0.13s) | [7 Eating Crunches](https://opengameart.org/content/7-eating-crunches) | StarNinjas | CC0 1.0 |
| item/eat4.ogg | crunch.4.ogg (from 0.08s) | [7 Eating Crunches](https://opengameart.org/content/7-eating-crunches) | StarNinjas | CC0 1.0 |
| item/eat5.ogg | crunch.5.ogg (from 0.29s) | [7 Eating Crunches](https://opengameart.org/content/7-eating-crunches) | StarNinjas | CC0 1.0 |
| item/eat6.ogg | crunch.6.ogg (from 0.12s) | [7 Eating Crunches](https://opengameart.org/content/7-eating-crunches) | StarNinjas | CC0 1.0 |
| item/pickup1.ogg | pop1.ogg | [Pop sounds](https://opengameart.org/content/pop-sounds) | cogitollc | CC0 1.0 |
| item/pickup2.ogg | pop2.ogg | [Pop sounds](https://opengameart.org/content/pop-sounds) | cogitollc | CC0 1.0 |
| item/pickup3.ogg | pop3.ogg | [Pop sounds](https://opengameart.org/content/pop-sounds) | cogitollc | CC0 1.0 |
| liquid/bubble1.ogg | bubble_01.ogg | [40 CC0 water / splash / slime SFX](https://opengameart.org/content/40-cc0-water-splash-slime-sfx) | rubberduck | CC0 1.0 |
| liquid/bubble2.ogg | bubble_02.ogg | [40 CC0 water / splash / slime SFX](https://opengameart.org/content/40-cc0-water-splash-slime-sfx) | rubberduck | CC0 1.0 |
| liquid/bubble3.ogg | bubble_03.ogg | [40 CC0 water / splash / slime SFX](https://opengameart.org/content/40-cc0-water-splash-slime-sfx) | rubberduck | CC0 1.0 |
| liquid/splash1.ogg | splash_01.ogg | [100 CC0 SFX](https://opengameart.org/content/100-cc0-sfx) | rubberduck | CC0 1.0 |
| liquid/splash2.ogg | splash_02.ogg | [100 CC0 SFX](https://opengameart.org/content/100-cc0-sfx) | rubberduck | CC0 1.0 |
| mob/scream1.ogg | scream_01.ogg | [80 CC0 creature SFX](https://opengameart.org/content/80-cc0-creature-sfx) | rubberduck | CC0 1.0 |
| mob/scream2.ogg | scream_02.ogg | [80 CC0 creature SFX](https://opengameart.org/content/80-cc0-creature-sfx) | rubberduck | CC0 1.0 |
| player/fall_big1.ogg | granular rebuild: hit02/hit15 + Corsica gravel grains | [37 hits/punches](https://opengameart.org/content/37-hitspunches) (qubodup); [42 Snow and Gravel Footsteps](https://opengameart.org/content/42-snow-and-gravel-footsteps) (qubodup, recorded by Corsica_S) | see packs | CC0 1.0 |
| player/fall_big2.ogg | granular rebuild: hit02/hit15 + Corsica gravel grains | [37 hits/punches](https://opengameart.org/content/37-hitspunches) (qubodup); [42 Snow and Gravel Footsteps](https://opengameart.org/content/42-snow-and-gravel-footsteps) (qubodup, recorded by Corsica_S) | see packs | CC0 1.0 |
| player/fall_small1.ogg | granular rebuild: hit23/hit30 + Corsica gravel grains | [37 hits/punches](https://opengameart.org/content/37-hitspunches) (qubodup); [42 Snow and Gravel Footsteps](https://opengameart.org/content/42-snow-and-gravel-footsteps) (qubodup, recorded by Corsica_S) | see packs | CC0 1.0 |
| player/fall_small2.ogg | granular rebuild: hit23/hit30 + Corsica gravel grains | [37 hits/punches](https://opengameart.org/content/37-hitspunches) (qubodup); [42 Snow and Gravel Footsteps](https://opengameart.org/content/42-snow-and-gravel-footsteps) (qubodup, recorded by Corsica_S) | see packs | CC0 1.0 |
| random/explode1.ogg | Chunky Explosion.mp3 | [Chunky Explosion](https://opengameart.org/content/chunky-explosion) | Joth | CC0 1.0 |
| random/explode2.ogg | explosion1_0.ogg | [Explosions](https://opengameart.org/content/explosions-4) | EZduzziteh | CC0 1.0 |
| random/explode3.ogg | bang_06.ogg layered over nenadsimic muffled distant explosion.ogg | [25 CC0 bang / firework SFX](https://opengameart.org/content/25-cc0-bang-firework-sfx) + [Muffled Distant Explosion](https://opengameart.org/content/muffled-distant-explosion) | rubberduck + NenadSimic | CC0 1.0 |
| random/explode4.ogg | bang_09.ogg layered over nenadsimic muffled distant explosion.ogg | [25 CC0 bang / firework SFX](https://opengameart.org/content/25-cc0-bang-firework-sfx) + [Muffled Distant Explosion](https://opengameart.org/content/muffled-distant-explosion) | rubberduck + NenadSimic | CC0 1.0 |
| random/levelup1.ogg | bell_ding2.wav | [Bell dings/chimes](https://opengameart.org/content/bell-dingschimes) | PWL | CC0 1.0 |
| random/orb1.ogg | bell_ding1.wav | [Bell dings/chimes](https://opengameart.org/content/bell-dingschimes) | PWL | CC0 1.0 |
| step/cloth1.ogg | cloth1.ogg | [50 RPG sound effects](https://opengameart.org/content/50-rpg-sound-effects) | Kenney (kenney.nl) | CC0 1.0 |
| step/cloth2.ogg | cloth2.ogg | [50 RPG sound effects](https://opengameart.org/content/50-rpg-sound-effects) | Kenney (kenney.nl) | CC0 1.0 |
| step/cloth3.ogg | cloth3.ogg | [50 RPG sound effects](https://opengameart.org/content/50-rpg-sound-effects) | Kenney (kenney.nl) | CC0 1.0 |
| step/cloth4.ogg | cloth4.ogg | [50 RPG sound effects](https://opengameart.org/content/50-rpg-sound-effects) | Kenney (kenney.nl) | CC0 1.0 |
| step/grass1.ogg | Fantozzi-SandL1.flac | [Fantozzi's Footsteps (Grass/Sand & Stone)](https://opengameart.org/content/fantozzis-footsteps-grasssand-stone) | qubodup (recorded by Fantozzi) | CC0 1.0 |
| step/grass2.ogg | Fantozzi-SandL2.flac | [Fantozzi's Footsteps (Grass/Sand & Stone)](https://opengameart.org/content/fantozzis-footsteps-grasssand-stone) | qubodup (recorded by Fantozzi) | CC0 1.0 |
| step/grass3.ogg | Fantozzi-SandL3.flac | [Fantozzi's Footsteps (Grass/Sand & Stone)](https://opengameart.org/content/fantozzis-footsteps-grasssand-stone) | qubodup (recorded by Fantozzi) | CC0 1.0 |
| step/grass4.ogg | Fantozzi-SandR1.flac | [Fantozzi's Footsteps (Grass/Sand & Stone)](https://opengameart.org/content/fantozzis-footsteps-grasssand-stone) | qubodup (recorded by Fantozzi) | CC0 1.0 |
| step/grass5.ogg | Fantozzi-SandR2.flac | [Fantozzi's Footsteps (Grass/Sand & Stone)](https://opengameart.org/content/fantozzis-footsteps-grasssand-stone) | qubodup (recorded by Fantozzi) | CC0 1.0 |
| step/grass6.ogg | Fantozzi-SandR3.flac | [Fantozzi's Footsteps (Grass/Sand & Stone)](https://opengameart.org/content/fantozzis-footsteps-grasssand-stone) | qubodup (recorded by Fantozzi) | CC0 1.0 |
| step/gravel1.ogg | gravel.ogg | [Different steps on wood, stone, leaves, gravel and mud](https://opengameart.org/content/different-steps-on-wood-stone-leaves-gravel-and-mud) | TinyWorlds | CC0 1.0 |
| step/gravel2.ogg | Corsica_S-Walking_on_snow_covered_gravel_01.flac | [42 Snow and Gravel Footsteps](https://opengameart.org/content/42-snow-and-gravel-footsteps) | qubodup (recorded by Corsica_S) | CC0 1.0 |
| step/gravel3.ogg | Corsica_S-Walking_on_snow_covered_gravel_04.flac | [42 Snow and Gravel Footsteps](https://opengameart.org/content/42-snow-and-gravel-footsteps) | qubodup (recorded by Corsica_S) | CC0 1.0 |
| step/gravel4.ogg | Corsica_S-Walking_on_snow_covered_gravel_05.flac | [42 Snow and Gravel Footsteps](https://opengameart.org/content/42-snow-and-gravel-footsteps) | qubodup (recorded by Corsica_S) | CC0 1.0 |
| step/sand1.ogg | sand_footsteps_0.mp3 (from 0.80s) | [Water Splash and sand footsteps](https://opengameart.org/content/water-splash-and-sand-footsteps) | Peludo | CC0 1.0 |
| step/sand2.ogg | sand_footsteps_0.mp3 (from 2.00s) | [Water Splash and sand footsteps](https://opengameart.org/content/water-splash-and-sand-footsteps) | Peludo | CC0 1.0 |
| step/sand3.ogg | sand_footsteps_0.mp3 (from 3.22s) | [Water Splash and sand footsteps](https://opengameart.org/content/water-splash-and-sand-footsteps) | Peludo | CC0 1.0 |
| step/sand4.ogg | sand_footsteps_0.mp3 (from 5.05s) | [Water Splash and sand footsteps](https://opengameart.org/content/water-splash-and-sand-footsteps) | Peludo | CC0 1.0 |
| step/snow1.ogg | SnowWalk.ogg | [Walking on snow sound](https://opengameart.org/content/walking-on-snow-sound) | IgnasD | CC0 1.0 |
| step/snow2.ogg | SnowWalk2.ogg | [Walking on snow sound](https://opengameart.org/content/walking-on-snow-sound) | IgnasD | CC0 1.0 |
| step/snow3.ogg | Corsica_S-Walking_on_snow_covered_gravel_and_ice_03.flac | [42 Snow and Gravel Footsteps](https://opengameart.org/content/42-snow-and-gravel-footsteps) | qubodup (recorded by Corsica_S) | CC0 1.0 |
| step/snow4.ogg | Corsica_S-Walking_on_snow_covered_gravel_and_ice_07.flac | [42 Snow and Gravel Footsteps](https://opengameart.org/content/42-snow-and-gravel-footsteps) | qubodup (recorded by Corsica_S) | CC0 1.0 |
| step/stone1.ogg | Fantozzi-StoneL1.flac | [Fantozzi's Footsteps (Grass/Sand & Stone)](https://opengameart.org/content/fantozzis-footsteps-grasssand-stone) | qubodup (recorded by Fantozzi) | CC0 1.0 |
| step/stone2.ogg | Fantozzi-StoneL2.flac | [Fantozzi's Footsteps (Grass/Sand & Stone)](https://opengameart.org/content/fantozzis-footsteps-grasssand-stone) | qubodup (recorded by Fantozzi) | CC0 1.0 |
| step/stone3.ogg | Fantozzi-StoneL3.flac | [Fantozzi's Footsteps (Grass/Sand & Stone)](https://opengameart.org/content/fantozzis-footsteps-grasssand-stone) | qubodup (recorded by Fantozzi) | CC0 1.0 |
| step/stone4.ogg | Fantozzi-StoneR1.flac | [Fantozzi's Footsteps (Grass/Sand & Stone)](https://opengameart.org/content/fantozzis-footsteps-grasssand-stone) | qubodup (recorded by Fantozzi) | CC0 1.0 |
| step/stone5.ogg | Fantozzi-StoneR2.flac | [Fantozzi's Footsteps (Grass/Sand & Stone)](https://opengameart.org/content/fantozzis-footsteps-grasssand-stone) | qubodup (recorded by Fantozzi) | CC0 1.0 |
| step/stone6.ogg | Fantozzi-StoneR3.flac | [Fantozzi's Footsteps (Grass/Sand & Stone)](https://opengameart.org/content/fantozzis-footsteps-grasssand-stone) | qubodup (recorded by Fantozzi) | CC0 1.0 |
| step/wood1.ogg | wood01.ogg | [Different steps on wood, stone, leaves, gravel and mud](https://opengameart.org/content/different-steps-on-wood-stone-leaves-gravel-and-mud) | TinyWorlds | CC0 1.0 |
| step/wood2.ogg | wood02.ogg | [Different steps on wood, stone, leaves, gravel and mud](https://opengameart.org/content/different-steps-on-wood-stone-leaves-gravel-and-mud) | TinyWorlds | CC0 1.0 |
| step/wood3.ogg | wood03.ogg | [Different steps on wood, stone, leaves, gravel and mud](https://opengameart.org/content/different-steps-on-wood-stone-leaves-gravel-and-mud) | TinyWorlds | CC0 1.0 |
| step/wood4.ogg | sfx100v2_footstep_wood_01.ogg | [100 CC0 SFX #2](https://opengameart.org/content/100-cc0-sfx-2) | rubberduck | CC0 1.0 |
| step/wood5.ogg | sfx100v2_footstep_wood_02.ogg | [100 CC0 SFX #2](https://opengameart.org/content/100-cc0-sfx-2) | rubberduck | CC0 1.0 |
| step/wood6.ogg | sfx100v2_footstep_wood_04.ogg | [100 CC0 SFX #2](https://opengameart.org/content/100-cc0-sfx-2) | rubberduck | CC0 1.0 |
| ui/click1.ogg | original, synthesised by tools/gen-ui-click.mjs | - | DEADLOCKED | same as the game |
| ui/click2.ogg | original, synthesised by tools/gen-ui-click.mjs | - | DEADLOCKED | same as the game |
| weapon/pistol1-3, rifle1-3, smg1-3, sniper1-3, shotgun1-3, launcher1-3, flame1-3 .ogg | original, synthesised by tools/gen-gunshots.mjs | - | DEADLOCKED | same as the game |
| weapon/reload1.ogg | metalClick.ogg | [50 RPG sound effects](https://opengameart.org/content/50-rpg-sound-effects) | Kenney (kenney.nl) | CC0 1.0 |
| weapon/reload2.ogg | metalLatch.ogg | [50 RPG sound effects](https://opengameart.org/content/50-rpg-sound-effects) | Kenney (kenney.nl) | CC0 1.0 |
| weather/rain_loop1.ogg | loop_rain.ogg | [40 CC0 water / splash / slime SFX](https://opengameart.org/content/40-cc0-water-splash-slime-sfx) | rubberduck | CC0 1.0 |
| weather/thunder1.ogg | sfx100v2_thunder_01.ogg (from 0.6s) | [100 CC0 SFX #2](https://opengameart.org/content/100-cc0-sfx-2) | rubberduck | CC0 1.0 |
| weather/thunder2.ogg | rain-thunder.ogg (from 21.2s) | [Rain + Long Thunder](https://opengameart.org/content/rain-long-thunder) | WuxiaScrub | CC0 1.0 |

## Synthesized in code (no files)

random/fizz, liquid/lavapop, liquid/lava and liquid/water are not recordings:
they are generated at startup by src/world/FluidSounds.js (filtered noise,
swept sines and envelopes written for this game). They are original works of
this project; no third-party or Mojang audio was used or referenced as a file.
