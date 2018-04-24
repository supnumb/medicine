var require = {
    //baseUrl:根目录,相对于谁定位
    baseUrl: './javascripts',

    paths: {
        'jQuery': '/libs/jquery-3.2.1.min',
        'bootstrap': '/libs/bootstrap/js/bootstrap.min'
    },

    shim: {
        'jQuery': {
            'exports': 'jQuery'
        },
        'bootstrap': {
            deps: ['jQuery'],
            'exports': 'bootstrap'
        }
    }
};