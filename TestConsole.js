import * as Tools from 'NP_AnalysisTools1.js'
import * as Tools2 from 'NP_AnalysisTools2.js'
import * as Arch from 'NP_ReadArchive.js'
import * as NY from 'NP_NYData.js'

function LoadData(){
  const game = document.getElementById("Select-Game");
        const drawing = (game.value == '3' ? Arch.NY3_Drawings: game.value == '4' ? Arch.NY4_Drawings : isNaN())
        const date = (game.value == '3' || game.value == '4' ? this._GetDates(drawing[0], game.value) : isNaN());
        const data = (game.value == '3' || game.value == '4' ? drawing[1].map((x, i) => [date[i], x, Tools.Box_C(x)]) : isNaN())

  console.log("DATA: " + data) 
}
LoadData._GetDates = (x, y){return x.filter((x) => x[(y == 3 ? 'evening_daily':'evening_win_4')] !== undefined).map((x) => x[(y == 3 ? 'midday_daily':'midday_win_4')] !== undefined? [[new Date(x['draw_date']), 'Evening'], [new Date(x['draw_date']), 'Midday']] : [[new Date(x['draw_date']), 'Evening']]).flat().map((x) => [x[0].toLocaleDateString('en-US', options), x[1]])
}

Windows.onload = 
  LoadData()
