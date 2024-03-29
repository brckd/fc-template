# @bricked/fc-template

[![license](https://custom-icon-badges.demolab.com/github/license/brckd/fc-template?logo=law)](LICENSE.md)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![version](https://img.shields.io/npm/v/@bricked/fc-template?color=crimson&logo=npm)](https://www.npmjs.com/package/@bricked/fc-template)

A template for creating Fancade editor scripts.

## ToDo

- [ ] [Create](https://github.com/brckd/fc-template/generate) a new repository from this template
- [ ] Find & replace `fc-template` with the name of the new repository
- [ ] Find & replace the description with a proper one
- [ ] Add `NPM_TOKEN` as a [new repository secret](https://github.com/brckd/fc-template/settings/secrets/actions/new)
- [ ] Remove `"dryRun": true` from the [`package.json`](./package.json)
- [ ] Remove this section

## Installation

### Install as dependency

Install the package from npm to use it in your local editor scripts.
[Node.js](https://nodejs.org/) 16.14.0 or newer is required.

```sh
npm install @bricked/ts-template
yarn add @bricked/ts-template
pnpm add @bricked/ts-template
```

### Install in Fancade editor

1. Find the [latest build](#building-publicly) or [build locally](#building-locally)

2. Find the desired script in `dist/` and open it

3. Paste the code directly in the Fancade editor

## Usage

`fc-template` can be used as a template for creating Fancade editor scripts.

## Building

### Building Publicly

Pulls to the repository will automatically be built with [semantic-release](https://github.com/semantic-release/npm).
The built package can be found on [npm](https://www.npmjs.com/package/@bricked/fc-template?activeTab=code) or in the
[latest github release](https://github.com/brckd/fc-template/releases/latest).

### Building Locally

The package can also be built locally using the `build` script.

```sh
npm run build
yarn run build
pnpm run build
```
