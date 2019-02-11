// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    server_url: "http://codefactor.pythonanywhere.com",
    default_user: "test_user:password",
    onesignal_init: {
        appId: "a704a88e-9e37-41f6-99b8-6ded41926c03",
        autoRegister: true,
        notifyButton: {
            enable: false,
        },
        allowLocalhostAsSecureOrigin: true,
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
