# npm-zippy
Zip package or folders with npm scripts

## Installation

`npm install --save-dev npm-zippy`

## Example

Modify YourApp/package.json:

```
"scripts": {
    "zippy": "npm-zippy"
    ...
}
```

Create the .zip file containing folder
```
npm run zippy
```

### Arguments 
`--source=./<folder>` **default is: .**

`--destination=./<folder>` **defualt is: .**

`--fileName=build.zip` **default is: 'package.zip'** zip file name

`--ignoreNodeModules=true` **default is: false** for ignoring node_modules directory in zip package
