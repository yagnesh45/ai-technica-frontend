var i = 0, moneyContent;

moneyContent = document.getElementsByClassName("money-daily");
for (i = 0; i < moneyContent.length; i++) {
    moneyContent[i].style.display = "block";
}
function showMoney(evt, moneyID) {
    var i, moneyContent, tripsContent, tabLinks, activeMoney;

    moneyContent = document.getElementsByClassName("money-div");
    for (i = 0; i < moneyContent.length; i++) {
        moneyContent[i].style.display = "none";
    }

    tripsContent = document.getElementsByClassName("trips-digits");
    for (i = 0; i < moneyContent.length; i++) {
        tripsContent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("calendar-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", " inactive");
    }

    activeMoney = document.getElementsByClassName(moneyID);
    for (i = 0; i < activeMoney.length; i++) {
        activeMoney[i].style.display = "block";
    }

    evt.currentTarget.className += " active";
}