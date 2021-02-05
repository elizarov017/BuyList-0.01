$(function() {
    let itemList = $(".itemList");
    let itemTemplate = $(".row").html();
    let badgeList = $(".buy-list");
    let boughtList = $(".bought-list");
    let badgeTemplate = $(".one-badge").html();


    $(window).load(function() {
        addItem("Огірки");
        addItem("Помідори");
        addItem("Шимер");
    });

    $(".add").click(function() {
        let title = $(".area").val();
        if (title) addItem(title);
        $(".area").val("").focus();
    });

    $(".area").keydown(function(e) {
        if(e.keyCode === 13) {
            let title = $(".area").val();
            if (title) addItem(title);
            $(".area").val("");
        }
    });
    

function addItem(title)	{
    let node = $(itemTemplate);
    let badge = $(badgeTemplate);
    let nBadge = $(badgeTemplate);
    let count = 1;

    nBadge.addClass("hidden").find(".b-name").addClass("line-through");
    nBadge.find(".labela").addClass("line-through");

    node.find(".bl-product").text(title);	
    badge.find(".b-name").text(title);
    nBadge.find(".b-name").text(title);
    // node.find(".ch-name").val(title);

    node.find(".bl-label").text(count);
    badge.find(".labela").text(count);
    nBadge.find(".labela").text(count);

    node.find(".delete").click(function(){
        node.slideUp(500, function() {
            node.remove();
        });
        badge.remove();
    });

    node.find(".bl-minus").click(function() {
        --count
        if (count == 1) node.find(".bl-minus").attr('disabled', 'disabled');
        node.find(".bl-label").text(count);
        badge.find(".labela").text(count);
        nBadge.find(".labela").text(count);
    });

    node.find(".bl-plus").click(function() {
        count++;
        if (count > 1) node.find(".bl-minus").removeAttr('disabled');
        node.find(".bl-label").text(count);
        badge.find(".labela").text(count);
        nBadge.find(".labela").text(count);
        
    });

    node.find(".bought").click(function() {
        node.fadeOut(250, function() {
        node.find(".bought").addClass("hidden");
        node.find(".delete").addClass("hidden");
        node.find(".n-bought").removeClass("hidden");
        node.find(".bl-plus").addClass("hidden");
        node.find(".bl-minus").addClass("hidden");

        node.find(".bl-product").addClass("line-through");
        badge.addClass("hidden");
        nBadge.removeClass("hidden");
        node.fadeIn(250);
        });
    })

    node.find(".n-bought").click(function() {
        node.fadeOut(250, function() {
            node.find(".bought").removeClass("hidden");
            node.find(".delete").removeClass("hidden");
            node.find(".n-bought").addClass("hidden");
            node.find(".bl-plus").removeClass("hidden");
            node.find(".bl-minus").removeClass("hidden");
            node.fadeIn(250);
        });
        

        node.find(".bl-product").removeClass("line-through");
        badge.removeClass("hidden");
        nBadge.addClass("hidden");
    })

    node.find(".bl-product").click(function() {
        if (!node.find(".bl-product").hasClass("line-through")) {
        node.find(".bl-product").addClass("hidden");
        node.find(".ch-name").val(node.find(".bl-product").text())
        node.find(".ch-name").removeClass("hidden");
        node.find(".ch-name").focus();
        }
    });

    node.find(".ch-name").blur(function() {
        node.find(".bl-product").text(node.find(".ch-name").val());
        badge.find(".b-name").text(node.find(".ch-name").val());
        nBadge.find(".b-name").text(node.find(".ch-name").val());
        node.find(".bl-product").removeClass("hidden");
        node.find(".ch-name").addClass("hidden");
    });

    itemList.append(node);
    badgeList.append(badge);
    boughtList.append(nBadge);
    node.animate({
            height: "65px"
    });
};})



