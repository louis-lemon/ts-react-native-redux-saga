<h1 align="center">React Native Boilerplate With Typescript + Redux Saga</h1>

<p align="center">
  <a aria-label="last commit" href="https://github.com/tak-bro/ts-react-native-redux-saga/commits/main">
    <img alt="" src="https://img.shields.io/github/last-commit/tak-bro/ts-react-native-redux-saga.svg">
  </a>
  <a aria-label="license" href="https://github.com/tak-bro/ts-react-native-redux-saga/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/tak-bro/ts-react-native-redux-saga.svg" alt="">
  </a>
</p>

> React Native + Typescript + Redux + Redux Saga boilerplate inspired by [karanpratapsingh/react-native-boilerplate](https://github.com/karanpratapsingh/react-native-boilerplate)

## Index

   - [Content](#Content)

   - [Running the project](#RunningProject)

   - [Updates](#Updates)

   - [Known Issues](#KnownIssues)
   
   - [Troubleshooting](#Troubleshooting)
   
   - [Author](#Author)
   
   - [License](#License)

## <a name="Content"></a> Content:

    - React Native (0.63.2) + Hermes
    - TypeScript
    - Clean Directory Layout
    - ESLint
    - Packages:
        - Redux + Redux Saga
        - React Navigation (Hooks)
        - React Native Reanimated
        - React Native Vector Icons
        - React Native Gesture Handler

## <a name="RunningProject"></a> Running the project

Assuming you have all the requirements installed, you can setup and run the project by running:

* `yarn install` to install the dependencies

* use the following steps for your platform

### Android

Run the following command while the simulator is open or a device is connected via adb.

``` 
yarn android
```

### iOS

Run the following commands to install pods and run the app on iPhone 6 simulator (device can be changed via `package.json` scripts)

``` 
yarn cocoapods
yarn ios
```

## <a name="Updates"></a> Updates

The boilerplate will follow latest React Native releases as soon as libraries and tools used here are compatible. I will personally try update this as I use this boilerplate in production :smile:

## <a name="KnownIssues"></a> Known Issues:

**Cocoapods install fails**

`yarn cocoapods` might fail for some users, if this happens then try deleting `Podlock.file` and re-running the `yarn cocoapods` command :smile:

If the error persists then please check your cocoapods version using `pod --version` . It should be `>= 1.7.5` . If not then please run `sudo gem install cocoapods` :smiley: 


## <a name="Troubleshooting"></a> Troubleshooting:

Please follow this guidelines when reporting bugs and feature requests:

1. Use [GitHub Issues](https://github.com/tak-bro/ts-react-native-redux-saga/issues) board to report bugs and feature requests (not our email address)
2. Please **always** write steps to reproduce the error. That way we can focus on fixing the bug, not scratching our heads trying to reproduce it.

Thanks for understanding!

## <a name="Author"></a> Author:

- [Hyungtak Jin](https://env-tak.github.io/)

## <a name="License"></a> License:

The MIT License (see the [LICENSE](https://github.com/tak-bro/ts-react-native-redux-saga/blob/main/LICENSE) file for the full text)
