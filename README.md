compararDatas():
Esta função é chamada quando o botão é clicado.
Ela obtém as datas dos campos de entrada do HTML.
Em seguida, utiliza a função DiaSeguinte() para adicionar um dia a cada data.
Calcula a maior data entre as duas utilizando a função maiorEntre().
Calcula o intervalo em dias entre as duas datas usando a função calcularIntervalo().
Obtém a data atual utilizando a função DataAtual().
Com base no intervalo, determina a mensagem a ser exibida.
Por fim, atualiza o conteúdo do elemento HTML com o resultado.

maiorEntre(date1, date2):
Esta função recebe duas datas como parâmetros.
Compara as datas e retorna a maior delas.

formatarData(date):
Recebe uma data como parâmetro.
Formata essa data para uma string no formato "dia de mês de ano".

DiaSeguinte(date):
Recebe uma data como parâmetro.
Cria uma nova data que representa o dia seguinte à data fornecida.

calcularIntervalo(date1, date2):
Recebe duas datas como parâmetros.
Calcula a diferença em milissegundos entre as duas datas.
Converte essa diferença para dias e retorna o resultado.

DataAtual():
Obtém a data e hora atuais.
Formata essa informação para uma string no formato "hora:minuto - dia/mês/ano".

formatarNumero(numero):
Recebe um número como parâmetro.
Verifica se o número é menor que 10.
Se for, adiciona um zero à frente do número como caractere.
Retorna o número formatado.
