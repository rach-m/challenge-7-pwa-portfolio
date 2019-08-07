const cacheName = 'cache-v1';
const precacheResources = [
    '/',
    'index.html',
    'css/freelancer.css',
    'css/freelancer.min.css',
    'favicon.ico',
    'img/profile.png',
    'img/portfolio/cabin.png',
    'img/portfolio/cake.png',
    'img/portfolio/circus.png',
    'img/portfolio/game.png',
    'img/portfolio/safe.png',
    'img/portfolio/submarine.png',
    'js/contact_me.js',
    'js/freelancer.min.js',
    'js/jqBootstrapValidation.js',
    'mail/contact_me.php',
    'scss/_bootstrap-overrides.scss',
    'scss/_contact.scss',
    'scss/_footer.scss',
    'scss/_global.scss',
    'scss/_masthead.scss',
    'scss/_mixins.scss',
    'scss/_navbar.scss',
    'scss/_portfolio.scss',
    'scss/_variables.scss',
    'scss/freelancer.scss',
    'gulpfile.js',
    'vendor/bootstrap/css/bootstrap-grid.min.css',
    'vendor/bootstrap/css/bootstrap-reboot.min.css',
    'vendor/bootstrap/css/bootstrap.css',
    'vendor/bootstrap/css/bootstrap.css.map',
    'vendor/bootstrap/css/bootstrap.min.css',
    'vendor/bootstrap/js/bootstrap.bundle.min.js',
    'vendor/bootstrap/js/bootstrap.bundle.min.js.map',
    'vendor/bootstrap/js/bootstrap.min.js',
    'vendor/bootstrap/js/bootstrap.min.js.map',
    'vendor/font-awesome/css/font-awesome.css',
    'vendor/font-awesome/css/font-awesome.min.css',
    'vendor/font-awesome/css/font-awesome.css.map',
    'vendor/font-awesome/fonts/fontawesome-webfont.eot',
    'vendor/font-awesome/fonts/fontawesome-webfont.svg',
    new Request('vendor/font-awesome/fonts/fontawesome-webfont.ttf'),
    new Request('vendor/font-awesome/fonts/fontawesome-webfont.woff'),
    new Request('vendor/font-awesome/fonts/fontawesome-webfont.woff2'),
    'vendor/font-awesome/fonts/FontAwesome.otf',
    'vendor/font-awesome/less/animated.less',
    'vendor/font-awesome/less/bordered-pulled.less',
    'vendor/font-awesome/less/core.less',
    'vendor/font-awesome/less/fixed-width.less',
    'vendor/font-awesome/less/font-awesome.less',
    'vendor/font-awesome/less/icons.less',
    'vendor/font-awesome/less/larger.less',
    'vendor/font-awesome/less/list.less',
    'vendor/font-awesome/less/mixins.less',
    'vendor/font-awesome/less/path.less',
    'vendor/font-awesome/less/rotated-flipped.less',
    'vendor/font-awesome/less/screen-reader.less',
    'vendor/font-awesome/less/stacked.less',
    'vendor/font-awesome/less/variables.less',
    'vendor/font-awesome/scss/_animated.scss',
    'vendor/font-awesome/scss/_bordered-pulled.scss',
    'vendor/font-awesome/scss/_core.scss',
    'vendor/font-awesome/scss/_fixed-width.scss',
    'vendor/font-awesome/scss/font-awesome.scss',
    'vendor/font-awesome/scss/_icons.scss',
    'vendor/font-awesome/scss/_larger.scss',
    'vendor/font-awesome/scss/_list.scss',
    'vendor/font-awesome/scss/_mixins.scss',
    'vendor/font-awesome/scss/_path.scss',
    'vendor/font-awesome/scss/_rotated-flipped.scss',
    'vendor/font-awesome/scss/_screen-reader.scss',
    'vendor/font-awesome/scss/_stacked.scss',
    'vendor/font-awesome/scss/_variables.scss',
    'vendor/jquery/jquery.js',
    'vendor/jquery/jquery.min.js',
    'vendor/jquery/jquery.min.map',
    'vendor/jquery/jquery.slim.js',
    'vendor/jquery/jquery.slim.min.js',
    'vendor/jquery/jquery.slim.min.map',
    'vendor/jquery-easing/jquery.easing.compatibility.js',
    'vendor/jquery-easing/jquery.easing.js',
    'vendor/jquery-easing/jquery.easing.min.js',
    'vendor/magnific-popup/jquery.magnific-popup.js',
    'vendor/magnific-popup/jquery.magnific-popup.min.js',
    'vendor/magnific-popup/magnific-popup.css',

];

self.addEventListener('install', event => {
    console.log('Service worker install event!');
    event.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            return cache.addAll(precacheResources);
        }).catch(err => console.log(err))
    );
});

self.addEventListener('activate', event => {
    console.log('Service worker activate event!');
});

self.addEventListener('fetch', event => {
    console.log('Fetch intercepted for:', event.request.url);
    event.respondWith(caches.match(event.request, { 'ignoreSearch': true })
        .then(cachedResponse => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request, { 'ignoreSearch': true });
        })
    );
});
''
