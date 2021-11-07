# Installation Guide

## Node JS and NPM

Download and install follow this [page](https://nodejs.org/en/download/)'s instructions.

## Hardhat

Require: `npm`

Run `npm init` and follow instructions, for example:

    ```bash
    $ npm init
    This utility will walk you through creating a package.json file.
    It only covers the most common items, and tries to guess sensible defaults.

    See `npm help init` for definitive documentation on these fields
    and exactly what they do.

    Use `npm install <pkg>` afterwards to install a package and
    save it as a dependency in the package.json file.

    Press ^C at any time to quit.
    package name: (hello-solidity)
    version: (1.0.0)
    description:
    entry point: (index.js)
    test command:
    git repository: https://github.com/ducminhgd/hello-solidity
    keywords: Solidity,hello-world
    author: MinhGDD
    license: (ISC)
    About to write to D:\personal\blockchain\hello-solidity\package.json:

    {
    "name": "hello-solidity",
    "version": "1.0.0",
    "description": "A sample project for Blockchain, using Solidity as main programming language.",
    "main": "index.js",
    "directories": {
        "doc": "docs"
    },
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "repository": {
        "type": "git",
        "url": "git+https://github.com/ducminhgd/hello-solidity.git"
    },
    "keywords": [
        "Solidity",
        "hello-world"
    ],
    "author": "MinhGDD",
    "license": "ISC",
    "bugs": {
        "url": "https://github.com/ducminhgd/hello-solidity/issues"
    },
    "homepage": "https://github.com/ducminhgd/hello-solidity#readme"
    }


    Is this OK? (yes) yes
    ```

Run `npm install --save-dev hardhat` to install Hardhat.

Init Hardhat project, run `npx hardhat`