# Changelog
All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### In Development
- SVG sprite currently in buildout phase

- New icons
  * `ear` (eavesdrop)
  * `bell`
  * `bell-slash`
  * `lightning-bolt`
  * `power`
  * `cancel`
  * `user-settings`
  * `refresh/reload`  
  * `plus`
  * `minus`
  * `location-pin`  
  * `location-scope`
  * `ellipses`         

### Changed

### Fixed

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
