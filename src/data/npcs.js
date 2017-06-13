'use strict';

/* eslint-env node */

exports.NPCs = {};

/*

NPC
Roll to determine Context if it hasn’t already been established, then 1d12 for Oc-
cupation if needed. Use the tables on the next page for traits and followers.
Context . Where they are encountered, or where they come from.

              1-3 Wilderness 4-9 Rural

1 Criminal -4 1
2 Criminal -4 2
3 adventurer/explorer 3
4 adventurer/explorer 4
5 hunter/gatherer 5
6 hunter/gatherer 6
7 Commoner 7
8 Commoner 8
9 ranger/scout 9
10 ranger/scout 10
11 soldier/mercenary 11
beggar/urchin Criminal -1 adventurer/explorer hunter/gatherer
Commoner Commoner Commoner Commoner Tradesperson Merchant -1 militia/soldier/guard Official

10-12 Urban
12 Official 12
1 beggar/urchin 2 beggar/urchin 3 Criminal
4 Commoner
5 Commoner
6 Commoner
7 Commoner
8 Tradesperson 9 Merchant
10 Specialist
11 militia/soldier/guard
12 Official
Activity, Alignment, NPC Trait
Activity, Alignment, Activity, Alignment, NPC Trait NPC Trait
Occupation . If not already determined by initial roll.

1 Criminal
2-6 Commoner
7-8 Tradesperson
1 bandit/brigand/thug 2 bandit/brigand/thug 3 thief
4 thief
5 bodyguard/tough 6 bodyguard/tough 7 burglar
8 burglar
9 dealer/fence
10 racketeer
11 lieutenant
12 boss
1 housewife/husband 2 hunter/gatherer
3 hunter/gatherer
4 farmer/herder
5 farmer/herder
6 farmer/herder
7 laborer/servant
8 laborer/servant
9 driver/porter/guide 10 sailor/soldier/guard 11 clergy/monk
12 apprentice/adventurer -----------------------------------------
1 cobbler/furrier/tailor 2 weaver/basketmaker
3 potter/carpenter
4 mason/baker/chandler 5 cooper/wheelwright
6 tanner/ropemaker
7 smith/tinker
8 stablekeeper/herbalist
9 vintner/jeweler
10 inkeeper/tavernkeeper
11 artist/actor/minstrel
12 armorer/weaponsmith

12 Official
9-10 Merchant
11 Specialist
1 general goods/outfitter
2 general goods/outfitter 2 3 general goods/outfitter 3 4 raw materials
 4 5 grain/livestock 5 6 ale/wine/spirits 6 7 clothing/jewelry 7 8 weapons/armor
 8 9 spices/tobacco 9 10 labor/slaves 10 11 books/scrolls 11 12 magic supplies/items 12
52
1
undertaker sage/scholar/wizard 2 writer/illuminator 3 perfumer 4 architect/engineer
5 locksmith/clockmaker 6 physician/apothecary 7 navigator/guide 8 alchemist/astrologer
9 spy/diplomat 10 cartographer 11 inventor 12
1
town crier
tax collector armiger/gentry armiger/gentry reeve/sheriff/constable mayor/magistrate
priest/bishop/abbot guildmaster knight/templar elder/high priest
noble (baron, etc.) lord/lady/king/queen


NPC Trait
Roll 1d12 for category and 1d12 for
prompt if you want something quick to
say. If you want someone more memo-
rable, roll once in each category.
NPC Follower
Roll 1d12 for each category; reconcile to
the fiction, tag, and equip as you see fit.

 1-3 A liability: Quality -1, +0 tags
4-9 Competent: Quality +0, +1 tags
10-11 Fully capable: Quality +1, +2 tags
12 Exceptional: Quality +2, +4 tags
1-6 Physical Appearance
1 disfigured (missing teeth, eye, etc.) 2 lasting injury (bad leg, arm, etc.)
3 tattooed/pockmarked/scarred
4 unkempt/shabby/grubby
5 big/thick/brawny
6 small/scrawny/emaciated
7 notable hair (wild, long, none, etc.)
8 notable nose (big, hooked, etc.)
9 notable eyes (blue, bloodshot, etc.)
10 clean/well-dressed/well-groomed
11 attractive/handsome/stunning
12 they are [roll again] despite [a contra-
dictory detail of your choice]
1 loner/alienated/antisocial 2 cruel/belligerent/bully
3 anxious/fearful/cowardly 4 envious/covetous/greedy 5 alo of/haught y/a r ro ga nt
6 awkward/shy/self-loathing
7 orderly/compulsive/controlling
8 confident/impulsive/reckless
9 kind/generous/compassionate
10 easygoing/relaxed/peaceful
11 cheerful/happy/optimistic
12 they are [roll again] despite [a contra-
7-9 Personality

1-2 0 (little faith in leader’s cause)
3-10 +1
11-12 +2 (great faith in leader’s cause)
dictory detail of your choice]

 1 Loot, pillage, and burn
2 Hold a grudge and seek payback
3 Question leadership or authority
4-5 Lord over others
6-7 Act impulsively
8-9 Give in to temptation
10-11 Slack off
12 Avoid danger or punishment

 1 Debauchery
2 Vengeance
3-5 Lucre
6-7 Renown
8-9 Glory
10 Affection
11 Knowledge
12 Good
10-12 Quirk
Cost
1 insecure/racist/xenophobic
2 addict (sweets, drugs, sex, etc.)
3 phobia (spiders, fire, darkness, etc.)
4 allergic/asthmatic/chronically ill
5 skeptic/paranoid
6 superstitious/devout/fanatical
7 miser/pack-rat
8 spendthrift/wastrel
9 smart aleck/know-it-all
10 artistic/dreamer/delusional
11 naive/idealistic
12 they are [roll again] despite [a contra-
dictory detail of your choice]

Ask the Fates

Competence
Background
1-2 Life of servitude/oppression: +Meek
3 Past their prime: -1 to Quality, +1 Wise 4-5 Has lived a life of danger: +2 tags
6-9 Unremarkable
10 Has lived a life of privilege: +1 tag
11 Specialist: +1 to Quality, -2 tags
12 Roll twice on this table
Loya lty

Instinct
Hit Points Damage die
 1-3 3 HP d4
4-9 6 HP d6
10-12 9 HP d8

*/

/* Data for occupations */

exports.occupations = {};


/* Data for NPC traits */

exports.NPCTraits = {};


/* Data for NPC followers */

exports.NPCFollowers = {};
