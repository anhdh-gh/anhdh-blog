(function (timer) {
    // window.addEventListener('load', function () {
        window.addEventListener('scroll', function() {
            document.body.classList.add('show-scrollbar');
            clearTimeout(timer);
            timer = setTimeout(function () {
                document.body.classList.remove('show-scrollbar');
            }, 5000);
        });
    // })
})();