# @bricked/fc-template

[![license](https://custom-icon-badges.demolab.com/github/license/brycked/fc-template?logo=law)](LICENSE.md)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![version](https://img.shields.io/github/v/release/brycked/fc-template?display_name=tag&logo=github)](package.json)

A template for creating Fancade editor scripts.

## ToDo

- [ ] Find & replace `fc-template` with the name of this repository
- [ ] Find & replace the description with a proper one
- [ ] Remove `"dryRun": true` from the [`package.json`](./package.json)
- [ ] Remove this section

## Installation

### Install as dependency

Install the package from npm to use it in your local editor scripts.

```sh
npm install @bricked/ts-template
yarn add @bricked/ts-template
pnpm add @bricked/ts-template
```

### Install in Fancade editor

1. Head to the [npm build](https://www.npmjs.com/package/@bricked/fc-template?activeTab=code) or extract the [latest release](https://github.com/brycked/fc-template/releases/latest)

2. Find the desired script in `dist/` and open it

3. Paste the code directly in the Fancade editor

## Usage

`fc-template` can be used as a template for creating Fancade editor scripts.

## Building

### Building Publicly

Pulls to the repository will automatically be built with [semantic-release](https://github.com/semantic-release/npm).
The built package can be found on [npm](https://www.npmjs.com/package/@bricked/fc-template?activeTab=code) or in the
[latest github release](https://github.com/brycked/fc-template/releases/latest).

### Building Locally

The package can also be built locally using the `build` script.

```sh
npm run build
yarn run build
pnpm run build
```
