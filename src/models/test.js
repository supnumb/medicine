var member = require('../modles/member');

member.showMemberList(function(err, db) {

    if (err) {
        console.log(err);
    }

    console.log(db);

});