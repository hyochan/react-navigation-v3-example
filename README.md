### Archived
See [React Navigation V5](https://github.com/hyochan/react-navigation-v5-example)


# React Native JS Boilerplate
> Specification
* flow
* react-navigation
* localization
* mobx
* jest configured with decorator and injector from mobx

# Gain points
```
1. Sample of mobx and data modeling.
2. Able to learn how to structure react native app with mobx and jest and flow.
3. Test type with flow with `npm run build` command.
4. Learn how to localize your project.
```

# INSTALL
```
1. npm install
2. npm start
```

# Structures
```text
app/
├─ .doobooo // necessary if using dooboo-cli
├─ assets
│  └─ icons // app icons
│  └─ images // app images like background images
├─ node_modules/
├─ src/
│  └─ apis
│  └─ components
│  └─ models
│  └─ stores
│  └─ utils
│  └─ index.js
├─ test/
├─ .babelrc
├─ .buckconfig
├─ .eslintignore
├─ .eslintrc.js
├─ .flowconfig
├─ .gitattributes
├─ .gitignore
├─ .watchmanconfig
├─ app.json
├─ index.js
├─ package.json
├─ README.md
└─ STRINGS.js
```

# Running the project
Running the project is as simple as running
```sh
npm run start
```

This runs the `start` script specified in our `package.json`, and will spawn off a server which reloads the page as we save our files.
Typically the server runs at `http://localhost:8080`, but should be automatically opened for you.

## Troubleshoot
* Facing `Can't find variable Symbol` error in `window` or `ubuntu`.
  ```
  npm install --save mobx@3.6.2
  npm install --save mobx-react@4.4.3
  ```

## Testing the project
Testing is also just a command away:
```sh
npm test
> jest -u

 PASS  src/components/screen/__tests__/NotFound.test.js
  ● Console

    console.log src/utils/Styles.js:6
      calRatio: 8.995502248875562
    console.log src/utils/Styles.js:20
      calRatio: 83.33333333333333
    console.log src/utils/Styles.js:25
      ratio: 2.083333333333333

 PASS  lib/components/screen/__tests__/NotFound.test.js
  ● Console

    console.log lib/utils/Styles.js:1
      calRatio: 8.995502248875562
    console.log lib/utils/Styles.js:1
      calRatio: 83.33333333333333
    console.log lib/utils/Styles.js:1
      ratio: 2.083333333333333

 › 2 snapshots written.
 PASS  lib/components/screen/__tests__/Home.test.js
 › 2 snapshots written.
 PASS  src/components/shared/__tests__/Button.test.js
  ● Console

    console.log src/utils/Styles.js:6
      calRatio: 8.995502248875562
    console.log src/utils/Styles.js:20
      calRatio: 83.33333333333333
    console.log src/utils/Styles.js:25
      ratio: 2.083333333333333

 › 4 snapshots updated.
 PASS  lib/components/shared/__tests__/Button.test.js
  ● Console

    console.log lib/utils/Styles.js:1
      calRatio: 8.995502248875562
    console.log lib/utils/Styles.js:1
      calRatio: 83.33333333333333
    console.log lib/utils/Styles.js:1
      ratio: 2.083333333333333

 › 4 snapshots written.
 PASS  src/components/screen/__tests__/Intro.test.js
  ● Console

    console.log src/utils/Styles.js:6
      calRatio: 8.995502248875562
    console.log src/utils/Styles.js:20
      calRatio: 83.33333333333333
    console.log src/utils/Styles.js:25
      ratio: 2.083333333333333

 › 1 snapshot updated.

Snapshot Summary
 › 8 snapshots written from 3 test suites.
 › 5 snapshots updated from 2 test suites.

Test Suites: 6 passed, 6 total
Tests:       14 passed, 14 total
Snapshots:   5 updated, 8 written, 3 passed, 16 total
Time:        5.251s
Ran all test suites.
```

## Writing tests with Jest
We've created test examples with jest-ts in `src/components/screen/__tests__` and `src/components/shared/__tests__`. Since react is component oriented, we've designed to focus on writing test in same level of directory with component. You can simply run `npm test` to test if it succeeds and look more closer opening the source.

## Localization
We've defined Localization strings in `STRINGS.js` which is in root dir.
We used [react-native-localization](https://github.com/stefalda/ReactNativeLocalization) pacakage for this one.
```
import LocalizedStrings from 'react-native-localization';

const strings = new LocalizedStrings({
  en: {
    LOGIN: 'Login',
  },
  kr: {
    LOGIN: '로그인',
  },
});

export {
  strings,
};
```

Fixed jest setup by adding following in jestSetup.

```
import { NativeModules } from 'react-native';

/**
 * monkey patching the locale to avoid the error:
 * Something went wrong initializing the native ReactLocalization module
 * https://gist.github.com/MoOx/08b465c3eac9e36e683929532472d1e0
 */

NativeModules.ReactLocalization = {
  language: 'en_US',
};
```

## React version
16.5

## React Native version
0.57

## React navigation
3
