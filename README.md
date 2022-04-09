npTrackplay
=====

Small ionic app that keeps track of players and scores for games.

Demo: https://npafterwork.github.io/npTrackplay/

Release in dist folder (apk-file)

TODO
=====
* update via service close sliding utems
* test

IOS (need a mac for this... dayum)
====
add ios platform

ionic cordova platforms add ios
 
ionic cordova build --release ios 
(fails with "xcodebuild was not found. Please install version 9.0.0 or greater from App Store")

could install vm with macos and xcode
ionic has a package service but account needed (not free??) 
 
Android
=======

Add android platform
--------
ionic cordova platforms add android

Create KeyStore for NP
---------
1. Generate .keystore
`
keytool -genkey -v -keystore np-release.keystore -alias leto -keyalg RSA -keysize 2048 -validity 10000
`
2. Migrate key
`
keytool -importkeystore -srckeystore np-release.keystore -destkeystore np-release.keystore -deststoretype pkcs12
`

Create .apk File (Windows)
--------

1. Build unsigned apk
`
ionic cordova build --release android
`
2. Sign apk
`
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore np-release.keystore -storepass 1234root5678 platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk leto 

`
3. Optimize apk
`
zipalign -v 4 platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk .\np-trackplay.apk
`

