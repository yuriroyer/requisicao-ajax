$(document).ready(function () {
        $('#ajax_form').validate({
            //informa caracteristicas aos atributos
            rules: {
                nome: {required: true}
               
            },
            // seta mensagens de erro de acordo com a caracteristica
            messages: {
                nome: {required: 'Campo obrigatório'}
                


            },
            submitHandler: function (form) {
                //passa todos os dados do formulario para a variavel dados
                var dados = $(form).serialize();

                $.ajax({
                    type: "POST",
                    url: 'service.php',
                    data: dados,
                    success: function (data) {
                        //limpa dados da div resultados
                        $("#resultado").empty();
                        //mostra resultado caputurado na div resultados
                        $("#resultado").append(data);
                       
                    }
                });

                return false;
            }
        });
});