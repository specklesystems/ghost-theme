# Speckle Website Theme

## Local development

### Installing ghost

We first need to install ghost locally to then work on our custom theme.
Use Node 16.13.0.

- `npm install ghost-cli@latest -g`
- `ghost install 4.48.2 --local` (or update to match the curret versionnpm run dev)
- Set up you Ghost site
- You can import stuff from our live website from `https://speckle.systems/ghost/#/settings/labs` > Export your content and import into your local site
- Note: images are not exported automatically unforch
- `ghost stop`
- On windows: `npm install -g win-node-env`

### Theme setup

- Clone this repo somewhere on you machine

- `npm install`
- `npm run zip`

Now, in order to trigger Ghost load our theme and use it live as we're editing it, we need to first upload it as a zip.

- in the ghost admin setting upload the zip file just generated inside your `ghost-theme\dist` folder
- set it as active theme
- got to `YOUR-LOCAL-GHOST-INSTALLATION-FOLDER\ghost-local\content\themes`
- replace the newly created `speckle-starter-theme` folder with your actual ghost theme repo folder (I had to rename it to `speckle-starter-theme`)
- alternatively create a symlink
- `npm run dev` inside you theme folder
- now it should be up and running
