import * as Tools from 'NP_AnalysisTools1.js'
import * as Tools2 from 'NP_AnalysisTools2.js'
import * as Arch from 'NP_ReadArchive.js'
import * as NY from 'NP_NYData.js'

const gen = document.getElementById = ;
gen.map((x) => x.weight = 1.00); 

const game = document.getElementById("Select-Game");

function LoadData(){
  
        const drawing = (game.value == '3' ? Arch.NY3_Drawings: game.value == '4' ? Arch.NY4_Drawings : isNaN())
        const date = (game.value == '3' || game.value == '4' ? this._GetDates(drawing[0], game.value) : isNaN());
        const data = (game.value == '3' || game.value == '4' ? drawing[1].map((x, i) => [date[i], x, Tools.Box_C(x)]) : isNaN())

  console.log("DATA: " + data) 
}

LoadData._GetDates = (x, y){return x.filter((x) => x[(y == 3 ? 'evening_daily':'evening_win_4')] !== undefined).map((x) => x[(y == 3 ? 'midday_daily':'midday_win_4')] !== undefined? [[new Date(x['draw_date']), 'Evening'], [new Date(x['draw_date']), 'Midday']] : [[new Date(x['draw_date']), 'Evening']]).flat().map((x) => [x[0].toLocaleDateString('en-US', options), x[1]])
}


function AddWeights(y){
  gen.map((x, i) => x.weight = y[i])
  console.log("Gen Ready For Cycle")
}

function Cycle(){
  const pv = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


  let distrubtion = [""].map((x, i) => x.repeat(weights[i] * 100).split('')).flat(2);
    let rand = Math.floor((distrubtion.length - 1) * Math.random());
      return distrubtion[rand]
  
  results = pool[Math.random()]
}

function User(weights){
  
}

const Weight = {
  "User" : {
    "0" : 0.1 * total,
    "1" : 0.1 * total,
    "2" : 0.1 * total,
    "3" : 0.1 * total,
    "4" : 0.1 * total,
    "5" : 0.1 * total,
    "6" : 0.1 * total,
    "7" : 0.1 * total,
    "8" : 0.1 * total,
    "9" : 0.1 * total,
  },

  "Random" : {
    "0" : total / 10,
    "1" : total / 10,
    "2" : total / 10,
    "3" : total / 10,
    "4" : total / 10,
    "5" : total / 10,
    "6" : total / 10,
    "7" : total / 10,
    "8" : total / 10,
    "9" : total / 10,
  },
      
  "FA" : {
    "0" : 0.1 * total,
    "1" : 0.1 * total,
    "2" : 0.1 * total,
    "3" : 0.1 * total,
    "4" : 0.1 * total,
    "5" : 0.1 * total,
    "6" : 0.1 * total,
    "7" : 0.1 * total,
    "8" : 0.1 * total,
    "9" : 0.1 * total,
  }
}

    

Windows.onload = 
  LoadData()
  
