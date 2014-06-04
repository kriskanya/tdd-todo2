/* exported ajax */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#renderRegisterPage').click(renderRegisterPage);
    $('#content-container').on('click', '#submitNewUser', register);
  }

  function renderRegisterPage(){
    ajax('/register', 'get', null, res=>{
      $('#content-container').empty().append(res);
    });
  }

  function register(event){
    var data = $('#register').serialize();

    ajax('/register', 'post', data, res=>{
      console.log('res------');
      console.log(res);
      $('#content-container').empty().append(res);
    });

    event.preventDefault();
  }

})();

function ajax(url, type, data={}, success=r=>console.log(r), dataType='html'){
  'use strict';
  $.ajax({
    url: url,
    type: type,
    dataType: dataType,
    data: data,
    success: success
  });
}
