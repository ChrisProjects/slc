$(document).ready(function () {
    var prepareToHireUsers = navigator.userAgent.toLowerCase();
    console.log(prepareToHireUsers.search("android") == -1);
    console.log(prepareToHireUsers.search("iphone") == -1);
    console.log(prepareToHireUsers.search("symbian") == -1);
    console.log(prepareToHireUsers.search("blackberry") == -1);
    if (prepareToHireUsers.search("android") == -1
        && prepareToHireUsers.search("iphone") == -1
        && prepareToHireUsers.search("symbian") == -1
        && prepareToHireUsers.search("blackberry") == -1
        ) {

        document.getElementById("notice").style.display = "block";
    }
    else{
        document.getElementById("notice").style.display = "none";
    }
});

/* by Shengxing Chi 2/26/2013 */