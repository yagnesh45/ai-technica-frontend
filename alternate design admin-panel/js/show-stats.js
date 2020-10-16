var i = 0, moneyContent;

moneyContent = document.getElementsByClassName("money-daily");
for (i = 0; i < moneyContent.length; i++) {
    moneyContent[i].style.display = "block";
}

function showMoney(evt, moneyClassName) {
    var i, moneyContent, tripsContent, tabLinks, activeMoney;

    moneyContent = document.getElementsByClassName("money-div");
    for (i = 0; i < moneyContent.length; i++) {
        moneyContent[i].style.display = "none";
    }

    tripsContent = document.getElementsByClassName("trips-digits");
    if(tripsContent.length!=0){
        for (i = 0; i < tripsContent.length; i++) {
            tripsContent[i].style.display = "none";
        }
    }

    tabLinks = document.getElementsByClassName("calendar-link");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", " inactive");
    }

    activeMoney = document.getElementsByClassName(moneyClassName);
    for (i = 0; i < activeMoney.length; i++) {
        activeMoney[i].style.display = "block";
    }

    evt.currentTarget.className += " active";
}