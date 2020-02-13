## Fav.sh 2.0

## Wait why rebuild the project?

Long story short I have learned quite a bit about how Javascript and Bundling works since Fav.sh v1, rather than going back and trying to fix my mistakes in the original version, I've decided to rebuild the app from ground up instead.

## Scripts

`start:ext` - Starts the bundler and builds the app to run as an extension

`start:web` - Starts the bundler and builds the app to run as a web app

`start:firefox` - Will load the `dist` folder into Firefox as an extension (to build a `dist` folder, run `start:ext`)

`clean` - Removes the `dist` and `.cache` folders

## How to run

### As a Chrome Extension

- Run `start:ext` to start the bundler

- Open Chrome and navigate to `chrome://extensions`

- Click "Load Unpacked Extension" (you have to enable developer tools) and load the `dist` folder

### As a Firefox Extension

- Run `start:ext` to start the bundler

- Run `start:firefox` which will load the extension into Firefox and start it automatically.

### As a web app

Though this app is not meant to run as a web app, if you are not doing something that is extension related, it's often easier to run the app as a web app. To do so just run `start:web` and navigate to `localhost:1234`
