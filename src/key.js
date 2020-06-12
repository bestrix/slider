import {countPlus,countMinus,beginCount} from './count'
import { createElements}  from './massive.js'

export default function getKey(e){
    console.log(e.keyCode)
    if(e.keyCode == '32'){setInterval(createElements(countMinus()),1000)}
}

