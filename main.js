$(function() {
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
    let LIST = $(".itemList");
let itemTemplate = $(".row").html();


function addItem(title)	{
    let node = $(itemTemplate);
    node.find(".bl-product").text(title);	

    node.find(".delete").click(function(){
    node.remove();
    });

    LIST.append(node);
    };

});


