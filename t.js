let page = require("phantom");

page.create().then(function (ph) {

    ph.createPage().then(function (pg) {

        pg.open("http://127.0.0.1:3000/order/view_ticket").then(function (status) {

            if (status !== "success") {

            } else {
                pg.property('viewportSize', { width: 120, height: 500 });
                pg.render('./oracle10000.pdf').then(function () {
                    console.log('Page Rendered');
                    ph.exit();
                })
            }
        })
    })
})


