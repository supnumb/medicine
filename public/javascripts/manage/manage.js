define(['jQuery', 'bootstrap'], function($, bootstrap) {

    var isLoadWidth = true;

    $(window.parent.document).find("#manageIframe").load(function() {
        var ifm = document.getElementById("manageIframe");
        var subWeb = document.frames ? document.frames["manageIframe"].document : ifm.contentDocument;
        if (ifm != null && subWeb != null) {
            ifm.height = 0;
            ifm.height = subWeb.body.scrollHeight + 20;
        }
    });

    $.ajax({
        type: "POST",
        url: "/getSonMenu",
        data: "",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        beforeSend: function() {

        },
        success: function(data) {

            if (data.status != "1") {
                return;
            }

            var db = data.data;

            for (var i = 0; i < db.length; i++) {

                var $obj = $("#collapse" + db[i].pid + " ul");
                var li = window.document.createElement("li");
                if (db[i].mcontroller) {
                    $(li).append("<a class='manageSonMenu valid' href='" + db[i].mcontroller + "' target='manageIframe'>" + db[i].menuname + "</a>");
                } else {
                    $(li).append("<a class='manageSonMenu valid' href='/pms/common' target='manageIframe'>" + db[i].menuname + "</a>");
                }
                $obj.append(li);
            }

            return;
        },
        error: function(data) {

            return;
        },
        complete: function(data) {

        }
    });

    $("#accordion").on("click", ".valid", function() {

        var $obj = $(this).parent().parent().parent().parent().prev();


        var title = $obj.find("a")[0].textContent;

        var href = $obj.find("a")[0].hash;


        var text = $(this)[0].textContent;

        var $nav = $(".manageModelRight .nav");
        var navChild = $nav[0].children;

        if (navChild.length == 2) {
            $nav.append("<span>/　" + text + "</span>");
            return;
        }

        if (navChild.length == 3) {
            navChild[1].textContent = title;
            navChild[1].href = href;
            navChild[2].textContent = "/　" + text;
            return;
        }

    });

});