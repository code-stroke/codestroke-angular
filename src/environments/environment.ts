import { PathLocationStrategy, HashLocationStrategy } from "@angular/common";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    envName: 'dev',
    production: false,

    server_url: "http://codefactor.pythonanywhere.com",
    default_user: "test_user:password",

    location_strategy: PathLocationStrategy,

    onesignal_init: {
        appId: "8805e48a-f3e3-4d26-9ce4-0288165c7a72",
        autoRegister: true,
        notifyButton: {
            enable: false,
        },
        allowLocalhostAsSecureOrigin: true,
        notificationClickHandlerMatch: 'origin',
        notificationClickHandlerAction: 'focus'
    },
    onesignal_service_worker_param: '/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
