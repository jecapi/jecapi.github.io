function jsonEncode(data) {
    return JSON.stringify(data);
}

function jsonDecode(data) {
    return JSON.parse(data);
}

function getCookie(name) {
    try {
        return jsonDecode($.cookie(name));
    }
    catch (e) {
        return $.cookie(name);
    }
}

function setCookie(name, data) {
    if (typeof data === "string") {
        $.cookie(name, data);
    } else {
        $.cookie(name, jsonEncode(data));
    }
}

function canVote(cardID) {
    let cards = getCookie(COOKIE_CARDS);
    if (!(cardID in cards)) {
        throw TEXT_UNKNOWN_CARD;
    }
    else if (cards[cardID]) {
        throw TEXT_ALREADY_VOTED;
    } else {
        return true;
    }
}

function showInfobox(type, text) {
    $("#infobox").removeClass(["hidden", ALERT_FAIL, ALERT_WARN, ALERT_OK, ALERT_INFO]);
    $("#infobox").addClass("fadeout " + type).html(text);
    setTimeout(function () {
        $('#infobox').addClass("hidden");
    }, 5800);
}

function addVote(card, candidate) {
    console.log(card, candidate);
    if (!getCookie(COOKIE_CANDIDATES)) {
        var array = {};
        $(".candidate").each(function () {
            let name = $(this).data("candidate");
            array[name] = 0;
        });
        var json_str = jsonEncode(array);
        setCookie(COOKIE_CANDIDATES, json_str);
    }
    let candidates = getCookie(COOKIE_CANDIDATES);
    candidates[candidate]++;
    setCookie(COOKIE_CANDIDATES, jsonEncode(candidates));
    let cards = getCookie(COOKIE_CARDS);
    cards[card] = true;
    setCookie(COOKIE_CARDS, cards);
    showInfobox(ALERT_OK, TEXT_VOTE);
    $("#cardID").val("");
}

function showStats() {
    $("#count").html(strFill(TEXT_VOTED_COUNT, {
        votedcount: votedcount,
        notvotedcount: notvotedcount
    }));
}

function addCard(cardID, voted) {
    let color = voted ? BG_VOTED : BG_NOT_VOTED;
    let element = $("<li>").addClass("delete " + color + " card-" + cardID).html(cardID).attr("data-cardID", cardID);
    $("#cardlist").prepend(element);
}

function strFill(text, replace) {
    jQuery.each(replace, function (label, data) {
        text = text.replace("{" + label + "}", data);
    });
    return text;

}