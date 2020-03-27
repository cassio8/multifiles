/*
 * Preferences MultiFiles
 *
 * text      : box text
 * button    : button text
 * file_name : input file name
 * url_name  : input url name to send to back-end
 *
 * @author Cássio Henrique <cassiohenriquecahe@gmail.com>
 * 
 */

(function($){
    $.fn.multifiles = function(prefer) {
        var box_content    = '';
        var button_content = '';

        prefer.button    = (prefer.button) ? prefer.button : 'Adicionar';
        prefer.text      = (prefer.text) ? prefer.text : 'Faça o upload'; 
        prefer.file_name = (prefer.file_name) ? prefer.file_name : 'file'; 
        prefer.url_name  = (prefer.url_name) ? prefer.url_name : 'url'; 

        box_content = `
            <div class="multifiles-box">
                <input type="file" name="${ prefer.file_name }" id="file" class="multifiles-file">
                <label for="file">${ prefer.text }</label>
                <input type="hidden" name="${ prefer.url_name }[]">
                <a href="#" class="multifiles-remove">x</a>
            </div>
        `;

        button_content = `
            <a href="#" class="multifiles-button Button">${ prefer.button_text }</a>
        `;

        $(this).append(box_content + button_content);

        $(document).on('click', '.multifiles-button', function(event) {
            event.preventDefault();
            
            $(this).before(box_content);
        });

        $(document).on('click', '.multifiles-remove', function(event) {
            event.preventDefault();
            
            $(this).parent().remove();
        });
    }; 
})(jQuery);