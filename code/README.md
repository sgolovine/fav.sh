## Fav.sh 2.0

## Wait why rebuild the project?

Long story short I have learned quite a bit about how Javascript and Bundling works since Fav.sh v1, rather than going back and trying to fix my mistakes in the original version, I've decided to rebuild the app from ground up instead.

## How to run

**firefox** - run `yarn firefox`, this will build the extension and open Firefox with the extension installed

**chrome** - run `yarn chrome`, this will build the extension and open Chrome with the extension installed


## How to build

This feature as of now is very WIP. We are still trying to figure out why the extension won't run without a bundler connected and how the build process is supposed to work for extensions. This section will document the build process once we figure it out.

## Project Structure

The project is structured with this basic structure

```
src/
  styles/
  js/
  entry/
  icons/
  manifest.json

```

`styles/` - stores the root styles of the extension, all components within the app are styled using `styled-components`

`js/` - stores all Javascript code to the app.

`entry/` - stores all entry points into the app

`icons/` - stores extension icons

`manifest.json` - extension manifest


## Keeping things clean

Typecheck - `yarn tsc` will check the typescript types

Prettier - `yarn format` will format the projects code with prettier

You can run both with `yarn ci`

## Debugging

Redux - This project ships with Redux devtools. Press ctrl + p to toggle the  redux panel. Note this panel is only included in the development version