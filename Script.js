var numSort = []
var numEsco = []
let sort
let cont

function sortearNumeros()
{
  numSort = []

  for (var i=0; i<6; i++)
  {
    do
    {
      sort = Math.ceil(Math.random() * 60)
      sort = (sort == 0) ? 1 : sort


    }
    while (numSort.includes(sort))

    numSort.push(sort)
  }

}

function addToList(num, pos)
{
  if(num.length == 2)
  {
    if (numEsco.includes(num))
    {
        alert("Não deve repetir os números")
    }

    else if (parseInt(num) <= 0|| parseInt(num) > 60)
    {
      alert("O Número digitado deve ser de 1 a 60")
    }

        else
        {
            numEsco[pos-1] = num
        }
  }
}

function verificarAcertos()
{
    sortearNumeros()

    let cont = 0
    if (numEsco.length !== 6)
      {
      alert("Preencha os espaços com 6 Numeros\n Digite 6 números de 01 a 60")
      }

      else
      {
          for (var i=0; i<6; i++)
          {
              if (numSort.includes(parseInt(numEsco[i])))
              {
                  cont++
              }
          }
          printNumSort()
          document.getElementById('totalAcertos').innerHTML = "Você consegiu acertar: " + cont
      }
}

function printNumSort()
{
    document.getElementById('numSort').innerHTML = ""
    for (var i=0; i<numSort.length; i++)
    {
        let li = document.createElement("li")
        li.append(numSort[i])
        document.getElementById('numSort').append(li)
    }
}
