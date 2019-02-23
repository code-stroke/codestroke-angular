export const environment = {
    production: true,
    server_url: "https://codefactor.pythonanywhere.com",
    default_user: "",
    onesignal_init: {
        appId: "8805e48a-f3e3-4d26-9ce4-0288165c7a72",
        autoRegister: true,
        notifyButton: {
          enable: false,
        },
        path: '/codestroke-angular/',
        notificationClickHandlerMatch: 'origin',
        notificationClickHandlerAction: 'focus'
    },
    onesignal_service_worker_param: '/codestroke-angular/',
};
