$(function() {
    let LIST = $(".itemList");
    let itemTemplate = $(".row").html();

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
    node.find(".bl-product").text(title);	

    node.find(".delete").click(function(){
        // disappear(node);
        node.slideUp(500, function() {
            node.remove();
        });
        
    });
    
    LIST.append(node);
    
    // node.addClass("ovr-hid");

    node.animate({
            height: "65px"
    });


};})

function disappear(node) {
    node.animate({
        height: "0px"
    });
}

