
;
(function($) {

  var ShowPopup = function() {

    // Create Accountant
    var popupAccountant = $('.create-accountant');
    var popupAccountantClose = $('.box-create-accountant .title .delete');
    var popupAccountantClose_2 = $('.box-create-accountant .btn-submit-form .close-form');
    popupAccountant.on('click',function(e) {
        e.stopPropagation();
        e.preventDefault();
        $(this).closest('.boxed').children('.box-create-accountant').addClass('open');
        $('body').append('<div class="modal-backdrop fade show"></div>');
    });
    popupAccountantClose.on('click', function(){
        $(this).closest('.boxed').children('.box-create-accountant').removeClass('open');
        $('.modal-backdrop.fade.show').remove();
    });
    popupAccountantClose_2.on('click', function(){
        $(this).closest('.boxed').children('.box-create-accountant').removeClass('open');
        $('.modal-backdrop.fade.show').remove();
    });
    $('.box-create-accountant').on('click', function(e){
        e.stopPropagation();
    });
    $('body').on('click', function(){
        $('.boxed').children('.box-create-accountant').removeClass('open');
        $('.modal-backdrop.fade.show').remove();
    });
    
  };



  // Dom Ready
  $(function() {
    ShowPopup();
  });

})(jQuery);
 