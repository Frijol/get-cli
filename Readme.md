get-cli
====

Very simple server on Tessel that serves the t2-cli repo from a local network.

Used in the situation where one person has a copy of the T2 CLI and wants to be able to serve it to many other people.

## Setting Up to Serve

*Prerequisite: assumes that you already have a local copy of the t2 cli but want to serve it to others*

* Clone this repo
* Use npm to install the Tessel 2 CLI: `npm install -g t2-cli` and plug in your Tessel
* Start Tessel as a wireless access point: `t2 ap -n <somename>` (it will show up in your Wifi list as whatever name you make up)
* Run the file with `t2 run index.js` or if you'd prefer to plug it into the wall and forget about it, `t2 push index.js`

## Receiving and Using the Served CLI

* Connect to the wireless access point created in the `t2 ap` command above
* Go to [`http://192.168.1.101:8080/`](http://192.168.1.101:8080/) and the T2 CLI file will download
* Unzip the file wherever it downloaded, navigate to inside that unzipped directory in the command line, and run `npm link --local`
* If it worked, you should now be able to run `t2` commands
* Remember to reconnect your computer to a different Wifi network once you've finished if you need internet access

## To Update the T2 CLI Served

* Get an updated copy of the T2 CLI by installing it with `npm install -g t2-cli` and looking in your global node modules, or git cloning it from github.com/tessel/t2-cli. You may wish to reduce the size of the file by deleting any unused dependencies, such as all of the grunt npm modules
* In the directory where your `t2-cli` folder resides, run `tar -cvz -f cli.tar.gz t2-cli/.`
* Copy the tarball (.tar.gz) file you just created into the `public` folder of this repo, replacing the existing `cli.tar.gz`

## File Structure

* `index.js` is the entry point, which creates a webserver and pushes the file from `public` to the client to download
* `public` folder contains the zipped tarball of the CLI
* `.tesselinclude` tells the T2 CLI to push over files not specified by Node `require`s in the index file, namely the public folder
