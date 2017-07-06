# Telicon
A telecom-centric, SVG-based icon font designed for Monster UI&mdash;an interface layer for the Unified Communications platform [KAZOO](https://github.com/2600hz/kazoo).

<h1 align="center"><img src="https://github.com/joshsanders/telicon/docs/logo.svg" alt="Telicon" width="50%"></h1>

## Project Progress
Keep track of Telicon's progress through the project's [CHANGELOG.md](https://github.com/joshsanders/telicon/CHANGELOG.md) file.

## Icon Workflow
Icons will be updated/added as they are needed. New and updated icons should be referenced in the [CHANGELOG.md](https://github.com/joshsanders/telicon/blob/master/CHANGELOG.md) file as a `minor` version update.

* Icons will be kept within the [`icons/svg/...`](https://github.com/joshsanders/telicon/tree/master/icons/svg) directory in the repo.
* Each icon will have a production-ready version (`[icon-name].svg`) available in the repo.

The following tools are currently used to design and produce icons:

* Adobe Illustrator (any svg editor will do)
* SVGO for optimization
* IcoMoon

### SVG Sprite
A buildout of an svg 'sprite' is currently in the development process, and can be tracked via this project's [CHANGELOG.md](https://github.com/joshsanders/telicon/blob/master/CHANGELOG.md) file.

## Versioning
Telicon will be maintained under the [Semantic Versioning guidelines](http://semver.org) as much as possible. Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

* Breaking backward compatibility bumps the major (and resets the minor and patch)
* New additions, including new icons, without breaking backward compatibility bumps the minor (and resets the patch)
* Bug fixes, changes to brand logos, and misc changes bumps the patch

## Copyright and License
The icons, code, and assets included in project are licensed under the The MIT License (MIT) - see [this project's license file](https://github.com/joshsanders/telicon/blob/master/LICENSE.md) for details.
