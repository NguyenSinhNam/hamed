;
(function($) {

  'use strict'

    var CheckboxShowHideAll = function(){
        $('#e-chckHead').click(function () {
            var checkboxes = $('.e-chcktbl');     
                if (this.checked) {
                    for (var i = 0; i < checkboxes.length; i++) { 
                       checkboxes[i].checked = true;
                    }
                } else {
                    for (var i = 0; i < checkboxes.length; i++) {
                        checkboxes[i].checked = false;
                    }
            }
        });

        $('#f-chckHead').click(function () {
            var checkboxes = $('.f-chcktbl');
             
            if (this.checked) {
                for (var i = 0; i < checkboxes.length; i++) { 
                    checkboxes[i].checked = true;
                }
            } else {
                for (var i = 0; i < checkboxes.length; i++) {
                    checkboxes[i].checked = false;
                }
            }
        });

    }


    var switch_show_hide = function() {
        $('.create-logistic-container').each(function() {
            $('.select-contract').on('change', function(){
                var select_contract = $(this).val();
                if ( select_contract == 'kh' || select_contract == 'tkh' ) {
                    $(this).closest('.create-logistic-container').find('.show-or-hide').hide();
                } else {
                    $(this).closest('.create-logistic-container').find('.show-or-hide').show();
                }
            })
        });        
    }

    // Dom Ready
    $(function() {
        CheckboxShowHideAll();
        switch_show_hide();
    });

})(jQuery);
 