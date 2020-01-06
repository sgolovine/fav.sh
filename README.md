<div align="center">
  <image src="icon.png" height="256" width="256">
  <h2>Fav Bookmark Manager</h2>
  <hr />
</div>

Open source bookmark manager extension for Chrome. Intergrates with Github Gist.

[Install from Chrome Web Store](https://chrome.google.com/webstore/detail/fav-bookmark-manager/gammmbkeceiljlgijimbhhgkfmiejnkl)

### Building from Source

Node, npm and yarn are all required to run the project.

1. `yarn` to install deps

2. `yarn dev` will bundle the app in development

3. Open Chrome/Chromium. Go to `chorme://extensions`

4. Load unpacked extension

5. Load the `build` folder generated in the root project

### Other Scripts

- `build`: builds the app in production
- `prettier`: runs prettier on the project
- `lint`: lints the app with eslint
- `clean`: delete the build folder

## Building for Production

Run `yarn build:prod` to build the extension to the build/ folder

### Packing the extension

Open chrome and navigate to `chrome://extensions`. There toggle "Developer Mode" if not already toggled.
Finally click "Pack extension" and select the `build` folder as the directory and then `buildkey.pem` as the keyfile

## Redux Devtools

Because redux devtools extension does not work with chrome extensions, we use a DevTools panel instead to display the redux store.
It should already be open when you load the app on the right.

### Contributing

PR's and contributions are welcome.

## Roadmap

- Release Schedule of some sort
- Build system
- Other niceties
