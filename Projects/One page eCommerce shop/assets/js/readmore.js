$(".read-more").click(function () {
    $(".content").slideToggle("fast");
    const $this = $(this);
    $this.toggleClass("open");

    if ($this.hasClass("open")) {
        $this.html("Виж по-малко >");
    } else {
        $this.html("Виж повече >");
    }
});