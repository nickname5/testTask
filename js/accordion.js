$('.toggle').click(function(e) {
  	e.preventDefault();

    var $this = $(this);
    var active = $('.bar__categories').find('.category_active');
    active.removeClass('category_active');

    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
        $this.addClass('category_active');
    }
});
