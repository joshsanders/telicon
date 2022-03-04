# Changelog
All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

---

### 🚧 W.I.P. 🚧

- !? need to update `bell-slash`, `headphones-slash`, `eye-slash`, and `phone-slash` to have consistent slash with rest of slash icons

WYSIWYG customs(one day):
- text-size
- bold
- italic
- underline
- strikethrough
- font
- align-left
- align-center
- align-right
- align-justify
- list-numbered
- indent
- outdent
- unlink
- image
- undo [refresh ?]
- redo
- code

---

## [3.3.0] - `2022-03-04`

### Added
- 1 new icons added: `src/icons/svg/...`
  * `device-mst`

### Notes! 
Having massive issues with the dev environment here... npm, sass, and gulp are all broken. Tried running some npm updates but getting deeper down the broken rabbit hole so ignoring for now and manually editing `/docs` and `/dist` as temp. quick fixes to get teams the icons they need. 

---

## [3.2.0] - `2022-03-03`

### Added
- 7 new icons added: `src/icons/svg/...`
  * `camera`
  * `camera-slash`
  * `device-monitor`
  * `device-monitor-slash`
  * `menu`
  * `wifi`
  * `wifi-no-connection`

### Notes! 
Having massive issues with the dev environment here... npm, sass, and gulp are all broken. Tried running some npm updates but getting deeper down the broken rabbit hole so ignoring for now and manually editing `/docs` and `/dist` as temp. quick fixes to get teams the icons they need. 

---

## [3.1.0] - `2021-10-25`

### Added
- 4 new icons added: `src/icons/svg/...`
  * `flag`
  * `puzzle-piece`
  * `tag`
  * `book`

### Notes! 
Having massive issues with the dev environment here... npm, sass, and gulp are all broken. Tried running some npm updates but getting deeper down the broken rabbit hole so ignoring for now and manually editing `/docs` and `/dist` as temp. quick fixes to get teams the icons they need. 

---

## [3.0.0] - `2020-4-05`

### Added
- 28 new icons added: `src/icons/svg/...`
  * `backspace`
  * `bullhorn`
  * `cancel`
  * `check`
  * `copy`
  * `dot`
  * `folder-check`
  * `folder-group`
  * `folder-minus`
  * `folder-plus`
  * `folder-star`
  * `funnel`
  * `lightbulb`
  * `lightbulb-slash`
  * `paper-plane`
  * `phone-slash`
  * `server`
  * `terminal`
  * `video`
  * `video-slash`
  * `volume-1`
  * `volume-2`
  * `volume-slash`
  * `volume-x`
  * `warning--circle`
  * `warning--circle-o`
  * `warning--octagon`
  * `x--octagon`

### Changed
Updated gulp dependency for docs site, which required a small re-write of the `gulpfile.js`file to reflect new syntax and function implememntation in gulp. This is one of the reasons this set of changes is being considered a <major> version bump.

- Renamed `storage-server-stack` icon to `db-storage` now that a server icon has been added to project

### Removed
- 1 icon removed:
  * `root-level` (redundant to have this icon as well as the layers icons, and layers icons are cleaner)

---

## [2.2.0] - `2019-3-05`

### Added
- 12 new icons added: `src/icons/svg/...`
  * `arrow-from-top`
  * `arrow-from-right`
  * `arrow-from-bottom`
  * `arrow-from-left`
  * `carets-sortable`
  * `drag-handle`
  * `folder-open`
  * `layers--2`
  * `layers--3`
  * `link`
  * `paper-clip`
  * `shopping-cart`

---

---

## [2.1.0] - `2019-1-24`

### Changed
`edit` icon design was updated

### Added
- 13 new icons added: `src/icons/svg/...`
  * `address-book`
  * `arrow-target-up`
  * `arrow-target-right`
  * `arrow-target-down`
  * `arrow-target-left`
  * `bug`
  * `comment`
  * `comment-dots`
  * `comments`
  * `eye`
  * `eye-slash`
  * `mail`
  * `phone`

---

## [2.0.0] - `2018-12-11`

### Changed
- Entire project upgraded from an icon-font implementation to a svg sprite. This is a serious overhaul and drastically changes how icons are implemented and manipulated. For more info on how to use the svg sprite verison of Telicon, see the [README.md](https://github.com/joshsanders/telicon/blob/master/README.md) file.

- Standardized entire library from a base 18px grid to 16px grid for a more standardized size, made more consistent weight throughout icons

- Renamed:
  * `ip` icon to `ip-address`
  * `caret-{*}` icons to `chevron-{*}` so that `caret` namespace can be used for more appropriate arrow icons
  * `pie-chart--full` icon to `pie-chart--100`
  * `service-providers` icon to `service-provider`
  * `account-jump` icon to `account-tree`
  * `mic-muted` icon to `mic-slash`
  * `headphones-deafen` icon to `headphones-slash`

### Added
- 47 new icons added: `src/icons/svg/...`
  * `avatar--badge`
  * `avatar--circle`
  * `bar-graph`
  * `bar-graph--square`
  * `bell`
  * `bell-slash`
  * `bookmark`
  * `caret-up`
  * `caret-right`
  * `caret-down`
  * `caret-left`
  * `chevron-double-up`
  * `chevron-double-right`
  * `chevron-double-down`
  * `chevron-double-left`
  * `download-cloud`
  * `ear`
  * `edit`
  * `ellipses` 
  * `file`
  * `lightning-bolt`
  * `location-pin`
  * `location-scope`
  * `lock`
  * `lock-open`
  * `minus` 
  * `music-note`
  * `operator`
  * `pie-chart--25`
  * `pie-chart--50`
  * `pie-chart--75`
  * `plus`
  * `power`
  * `refresh-alt`
  * `refresh`
  * `search`
  * `star`
  * `stop--circle`
  * `storage-server-stack`
  * `thumbs-up`
  * `thumbs-down`
  * `trash`
  * `trash-x`
  * `upload-cloud`
  * `user-admin-plus`
  * `user-admin-group`
  * `x`

### Removed
- Icons removed
  * `billing-history`
  * `billing-last`
  * `billing-transactions`
  * `credit-1x-charge`
  * `credit-prorated-charge` 
  * `dashboard-needle`
  * `pie-chart--partial`
  * `account`

### Deprecated
- The icon-font implementation of Telicon is now considered deprecated and will no longer be maintained as of this version release (2.0.0). 

---

## [1.0.0] - `2017-06-21`

### Added
- 34 new icons added `icons/svg/...`
  * `arrow-up--circle-o`
  * `arrow-right--circle-o`
  * `arrow-down--circle-o`
  * `arrow-left--circle-o`
  * `billing-last`
  * `calendar-plus`
  * `clock`
  * `dashboard-grid`
  * `downgrade`
  * `download`
  * `enter`
  * `folder`
  * `headphones`
  * `info--circle-o`
  * `mic-muted`
  * `mic`
  * `minus--circle-o`
  * `move-file`
  * `num-pad`
  * `number`
  * `park--circle`
  * `park--circle-o`
  * `pause--circle`
  * `pause--circle-o`
  * `phone-answer`
  * `phone-missed`
  * `pie-chart--full`
  * `pie-chart--partial`
  * `play--circle`
  * `play--circle-o`
  * `plus--circle-o`
  * `upgrade`
  * `upload`
  * `x--circle-o`

### Changed
- Major overhaul of namespacing to aid in categorization of icons. Naming now follows the pattern of `x--y-z`, where
  * `x` = icon-name
  * `--y` = modifier (usually a container variation or visual modification of a dynamic icon)
  * `-z` = denotes that the icon, or modifying container, is outlined

- Updated existing(all) icon styling from rounded to squared. This will allow for quicker development of new icons while increasing the crispness of edges in certain icons

- Icons from `0.2.0` renamed or aliased to a new icon in `1.0.0`
  * `inbound-trunk` aliased to `phone-inbound`
  * `outbound-trunk` aliased to `phone-outbound`
  * `seats` aliased to `user`

### Deprecated
- Namespacing that uses the 'icon' prefix is now considered deprecated. Old icon class names from `0.2.0` are mapped to the correct corresponding icons in this update(`1.0.0`). For new/current namespacing, see the [**Changed**] section above.

### Removed
- Icons removed
  * `account-settings`
  * `configuration`
  * `international-call`
  * `international-number`
  * `loading-circle`

---

## [0.1.0] thru [0.5.0] - `2015-2017`

**This changelog begins with the notes(directly above) on Telicon 1.0.0. The initial implementation and updates to Telicon went undocumented and are being considered as foundational.**

---
