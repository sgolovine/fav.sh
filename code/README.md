## Fav.sh 2.0

## Wait why rebuild the project?

Long story short I have learned quite a bit about how Javascript and Bundling works since Fav.sh v1, rather than going back and trying to fix my mistakes in the original version, I've decided to rebuild the app from ground up instead.

## Scripts

`bundle` - Starts the bundler and builds the app to run as an extension

`start:firefox` - Will load the `dist` folder into Firefox as an extension (to build a `dist` folder, run `start:ext`)

`clean` - Removes the `dist` and `.cache` folders

## How to run

### As a Chrome Extension

- Run `bundle` to start the bundler

- Open Chrome and navigate to `chrome://extensions`

- Click "Load Unpacked Extension" (you have to enable developer tools) and load the `dist` folder

### As a Firefox Extension

- Run `bundle` to start the bundler

- Run `start:firefox` which will load the extension into Firefox and start it automatically.


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


## Debugging

Redux - This project ships with Redux devtools. Press ctrl + p to toggle the  redux panel. Note this panel is only included in the development version