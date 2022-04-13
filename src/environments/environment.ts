// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'reciepes-project',
    appId: '1:188140086503:web:b929eaa62a83615f992e42',
    databaseURL: 'https://reciepes-project-default-rtdb.firebaseio.com',
    storageBucket: 'reciepes-project.appspot.com',
    apiKey: 'AIzaSyDQY1M_op3dnd73EPOzbnKb7VBX5czfpjM',
    authDomain: 'reciepes-project.firebaseapp.com',
    messagingSenderId: '188140086503',
    measurementId: 'G-9VHYTZ7S7F',
  },
  production: false,
};

export const databasePath = 'https://reciepes-project-default-rtdb.firebaseio.com/recipes'

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
