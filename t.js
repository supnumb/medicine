let phantom = require("phantom");


phantom.create().then(function (ph) {
    ph.createPage().then(function (page) {
        console.log("Download Started!");

        page.on("onResourceRequested", function (requestData) {
            console.log({ requestData });
        });

        page.open("http://127.0.0.1:3000/order/view_ticket?orderid=227").then(function (status) {

            if (status !== "success") {
                console.log(status);

            } else {

                page.property("plainText").then(function (header) {

                    let isJ = isJson(header);
                    if (isJ) {
                        console.log(json.message);
                    } else {
                        page.property('viewportSize', { width: 120, height: 500 });
                        page.render('./oracle10000.pdf').then(function () {
                            console.log('Page Rendered');
                            ph.exit();
                        })
                    }
                })
            }
        })
    })
}).catch(err => {
    console.log(err);
    ph.exit();
})

console.log("Process Started!");


