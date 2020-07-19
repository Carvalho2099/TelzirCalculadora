function validacao(origem, destino, tempo, plano){
    if (origem == 'selecione'){
        alert('Favor informar a Origem.')
        return false
    }
    if (destino == 'selecione'){
        alert('Favor informar o Destino.')
        return false
    }
    if (tempo == ''){
        alert('Favor informar os Minutos.')
        return false
    }
    if(Number(tempo) < 0){
        alert('Favor informar valor positivo para os Minutos.')
        return false
    }
    if (plano == 'selecione'){
        alert('Favor informar o Plano.')
        return false
    }
    return true
}

function calcular(){
    let origem = document.getElementById('origem').value.toString()
    let destino = document.getElementById('destino').value.toString()
    let tempo = document.getElementById('tempo').value.toString()
    let plano = document.getElementById('plano').value.toString()
    if(validacao(origem, destino, tempo, plano)){

        const valorComPlano = comPlano(origem, destino, tempo, plano)
        const valorSemPlano = semPlano(origem, destino, tempo)
       
        document.getElementById('cValor').value = valorComPlano.toFixed(2)
        document.getElementById('sValor').value = valorSemPlano.toFixed(2)
    }
}

function comPlano(origem, destino, tempo, plano){
    let valorMinC = 0.0
    let valorFinalC = 0.0
    if(origem == '011' && destino == '016'){
        valorMinC = 1.90
    }
    if(origem == '011' && destino == '017'){
        valorMinC = 1.70
    }
    if(origem == '011' && (destino == '018' || destino == '011')){
        valorMinC = 0.90
    }
    if(origem == '016' && (destino == '011' || destino == '016' || destino == '017' || destino == '018')){
        valorMinC = 2.90
    }
    if(origem == '017' && (destino == '011' || destino == '016' || destino == '017' || destino == '018')){
        valorMinC = 2.70
    }
    if(origem == '018' && (destino == '011' || destino == '016' || destino == '017' || destino == '018')){
        valorMinC = 1.90
    }
    if(Number(tempo) > Number(plano)){
        let novoTempo = Number(tempo) - Number(plano)
        valorFinalC = novoTempo * (valorMinC + (valorMinC * 10)/100)
    }

    return valorFinalC
}
function semPlano(origem, destino, tempo){
    let valorMinS = 0.0
    let valorFinalS = 0.0
    if(origem == '011' && destino == '016'){
        valorMinS = 1.90
    }
    if(origem == '011' && destino == '017'){
        valorMinS = 1.70
    }
    if(origem == '011' && (destino == '018' || destino == '011')){
        valorMinS = 0.90
    }
    if(origem == '016' && (destino == '011' || destino == '016' || destino == '017' || destino == '018')){
        valorMinS = 2.90
    }
    if(origem == '017' && (destino == '011' || destino == '016' || destino == '017' || destino == '018')){
        valorMinS = 2.70
    }
    if(origem == '018' && (destino == '011' || destino == '016' || destino == '017' || destino == '018')){
        valorMinS = 1.90
    }

    valorFinalS = Number(tempo) * valorMinS

    return valorFinalS 
}