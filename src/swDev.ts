export const swDev = () => {
    function urlBase64ToUint8Array(base64String: any) {
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
            .replace(/-/g, '+')
            .replace(/_/g, '/');

        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);

        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    }

    function determineAppServerKey() {
        var vapidPublicKey = 'BM5xWB-CPdSk6Xv7tdYogC-R9QIePW1_LCzyNQIuwussHGbjELkrYI95X5ZPj8K9h0Pvo9fxCE14yr6Ho9WcJfg';
        return urlBase64ToUint8Array(vapidPublicKey);
    }


    let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
    navigator.serviceWorker.register(swUrl).then((res) => {
        console.warn('response: ', res)
        return res.pushManager.getSubscription()
            .then(function (subscription) {
                return res.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: determineAppServerKey()
                })
            })

    })
}


