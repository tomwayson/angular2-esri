# angular2-esri-example
This is an example app using [ArcGIS API for JavaScript] **v3** in an [Angular 2] app.
The purpose is to explore ways that [Angular 2] components and services can communicate
with a map, legend, search, etc.

![screenshot](https://raw.github.com/tomwayson/angular2-esri-example/master/sreenshot.png)

[Try it out!](http://tomwayson.github.io/angular2-esri-example/)

## Quick Start
After downloading, run the following at the command line to run the app:
```bash
npm install
npm start
```

## Status
The patterns for communicating between components, services, and ArcGIS maps and data have been established. I'm no longer actively maintaining this repository (i.e. not adding new features, nor keeping it up to date with new releases of Angular 2 nor the ArcGIS API for JavaScript). Pull requests to demonstrate more up to date patterns, or update versions of dependencies will be gladly accepted.

## Resources
* [Using the ArcGIS API for JavaScript in Applications built with webpack](http://tomwayson.com/2016/11/27/using-the-arcgis-api-for-javascript-in-applications-built-with-webpack/)
* [Example of how to get the ArcGIS API for JavaScript working with webpack and TypeScript](https://github.com/lobsteropteryx/esri-webpack-typescript) by [@lobsteropteryx](https://github.com/lobsteropteryx/)
* [Angular 2 introduction to webpack](https://angular.io/docs/ts/latest/guide/webpack.html)
* [Example of how to use the ArcGIS API for JavaScript in an angular-cli application](https://github.com/tomwayson/esri-angular-cli-example)
* [Fork of the Angular Class webpack starter using use the ArcGIS API for JavaScript](https://github.com/hassanqaiser/angular2_webpack2_esri) by [@hassanqaiser](https://github.com/hassanqaiser)

While writing this app, I found the following resources very helpful, though at this point they may be a bit out of date:
* [Angular 2 Component Interaction](https://angular.io/docs/ts/latest/cookbook/component-communication.html)
* [Dependency Injection in Angular 1 and Angular 2](http://victorsavkin.com/post/126514197956/dependency-injection-in-angular-1-and-angular-2)

Built with:
* [ArcGIS API for JavaScript]
* [Angular 2]
* [TypeScript]
* [webpack](http://webpack.github.io/)

[ArcGIS API for JavaScript]:https://developers.arcgis.com/javascript/
[Angular 2]:https://angular.io/
[TypeScript]:http://www.typescriptlang.org/
