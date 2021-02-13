let cacheData = 'appV1';

this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css',
                'https://code.jquery.com/jquery-3.3.1.slim.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
                'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js',
                '/static/js/bundle.js',
                '/static/js/vendors~main.chunk.js',
                'static/js/vendors~main.chunk.js.map',
                '/static/js/main.chunk.js',
                '/manifest.json',
                '/logo192.png',
                'sw.js',
                '/',
                '/about',
                '/contact',
                '/users'
            ])
        }).catch((err) => {
            console.log('err: ', err)
        })
    )
})
this.addEventListener('fetch', (event) => {
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((result) => {
                if (result) {
                    return result
                }
            })
        )
    }
})