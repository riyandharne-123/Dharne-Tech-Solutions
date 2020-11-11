$('#contac_form').submit(function(e){
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "contact_mail.php",
        dataType: "json",
        data: this.formData,
        success : function(data){
            swal(data);
        },
        error: function(data){
            swal(data);
        },
    });


  });