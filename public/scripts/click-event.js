$(function() {
  $('body').on('click', '.track-name', function() {
    const _this = $(this);
    const id = _this.data('id');

    const results = $.ajax({
      url: `/track/${id}`
    });
  })
})
