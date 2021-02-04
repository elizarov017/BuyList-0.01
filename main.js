$(function() {
    let itemList = $(".itemList");
    let itemTemplate = $(".row").html();
    let badgeList = $(".buy-list");
    let badgeTemplate = $(".one-badge").html();


    $(window).load(function() {
        addItem("Огірки");
        addItem("Помідори");
        addItem("Шимер");
    });

    $(".add").click(function() {
        let title = $(".area").val();
        if (title) addItem(title);
        $(".area").val("");
    });
    

function addItem(title)	{
    let node = $(itemTemplate);
    let badge = $(badgeTemplate);
    let count = 1;

    node.find(".bl-product").text(title);	
    badge.find(".b-name").text(title);
    node.find(".bl-label").text(count);
    badge.find(".labela").text(count);

    node.find(".delete").click(function(){
        node.slideUp(500, function() {
            node.remove();
        });
        badge.remove();
    });

    node.find(".bl-minus").click(function() {
        node.find(".bl-label").text(--count);
        badge.find(".labela").text(count);
        if (count == 1) node.find(".bl-minus").attr('disabled', 'disabled');
    });

    node.find(".bl-plus").click(function() {
        node.find(".bl-label").text(++count);
        badge.find(".labela").text(count);
        if (count > 1) node.find(".bl-minus").removeAttr('disabled');
    });





    itemList.append(node);
    badgeList.append(badge);
    node.animate({
            height: "65px"
    });
};})



