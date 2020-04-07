<h1 align="center"><img src="docs/logo.svg" alt="Telicon logo" width="40%"></h1>

An SVG icon system for Monster UI&reg;&mdash;an interface layer for the Unified Communications platform [KAZOO&reg;.](https://github.com/2600hz/kazoo).

## Getting Started
Visit the [project's site](https://joshsanders.github.io/telicon) to get started.

## Project Progress
Keep track of Telicon's progress through the project's [CHANGELOG.md](https://github.com/joshsanders/telicon/blob/master/CHANGELOG.md) file.

## Icon Details
Icons will be updated/added as needed. 

* all icons built on `16px` grid
* build icons as close to pixel-perfect as possible to ensure visual integrity
* Source svg files for each icon can be found within the [`src/icons/svg/...`](https://github.com/joshsanders/telicon/tree/master/src/icons/svg) directory.

The following tools are currently used to design and produce icons and assets:

* Adobe Illustrator (most vector editors should work) to create the source icons
* SVG optimization and placement within the final sprite is still currently handled as a manual process. Have looked at SVGO, gulp svg sprite optionse, spritebot etc... but no results have been as clean yet as the manual injection of raw svg code

## Updating Project and Documentation in Tandem
When new icons or revisions have been made to the project, they will need to be documented so that the [Icon reference sheet](https://joshsanders.github.io/telicon/icon-sheet.html) can always stay current as the project's library of icons grows. 

#### Updating Icons
1) Create a new icon in Illustrator, and save that svg file in the `./src/icons/svg/` 
2) Access that svg file's raw svg code (open in a text editor usually works) and strip away the added bloat from Illustrator. What we want is the raw svg code. 
3) Cut/copy the raw svg code and place it inside the `telicon-.x.x.x.svg` file found in the `./dist/` folder. To do this, first find the spot in the file where your new icon would fit in alphabetically, and create a new `<symbol id="{{icon.name}}" viewBox="0 0 16 16"></symbol>`. Paste the raw svg code inside this new `<symbol>` element, making sure to maintain the raw coordinates exactly as they are.

All new and updated icons should be documented in the [CHANGELOG.md](https://github.com/joshsanders/telicon/blob/master/CHANGELOG.md) file as a `minor` version update. Read more about updating docs and website below.

#### Updating Docs and Website
Once the `telicon-.x.x.x.svg` file in the `./dist/` folder has been updated with the new icons, the docs site also needs to be updated. 

1) Rename the `telicon-.x.x.x.svg` file to reflect the new version that is about to be distributed
2) Copy the ENTIRE `telicon-.x.x.x.svg` file and place it in the `./docs/img/` folder, removing the current version that's there.
3) Open a terminal window, navigate to project directory, and run `gulp serve`. This will spin up a development browser and begin gulp tasks to watch and compile the `./src/docs` directory to the `./docs` directory when changes are made. This `./docs` directory is used for docs site (using github pages).
3) Open `./src/docs/index.html` and at the bottom of the file in the `<scripts>` tag section, update the `var version = "x.x.x";` to match the new distributed svg file's version naming. 
4) Open `./src/docs/js/icons.js`, and add your icon to the `icons` list. This list is used to populate the Icon Reference Sheet of the docs site. Also update the function at the bottom of the file to reflect the telicon file name change due to version.
5) Document new changes in the [CHANGELOG.md](https://github.com/joshsanders/telicon/blob/master/CHANGELOG.md).
5) Once all files (src and docs) have been properly updated following the steps above, make sure to save all files and stop running gulp.
5) Commit changes to repo and create a tag for the new version to help keep historical track.
 
## Versioning
Telicon will be maintained under the [Semantic Versioning guidelines](http://semver.org) as much as possible. Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

* Breaking backward compatibility bumps the major (and resets the minor and patch)
* Changes or updates(like new or revised icons) without breaking backward compatibility bumps the minor (and resets the patch)
* Bug fixes, changes to individual icons, and misc changes bumps the patch

## Copyright and License
The icons, code, and assets included in project are licensed under the The MIT License (MIT) - see [this project's license file](https://github.com/joshsanders/telicon/blob/master/LICENSE.md) for details.

## Colophon
Designed and maintained by: 
Josh Sanders | Lead Product Designer, 2600Hz
hello@joshsanders.design
www.joshsanders.design
