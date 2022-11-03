import React from "react";
import { Level } from "../../helpers/bmi";
import UpImage from '../../assets/up.png'
import DownImage from '../../assets/down.png'
import * as S from './style'

type Props = {
  item: Level
}

export const GridItem = ({item}: Props)=>{
  return(
    <S.BoxImg style={{backgroundColor: item.color}}>
      <S.ContainerHand>
        <img src={item.icon === 'up' ? UpImage : DownImage} alt="" width={30}/>
      </S.ContainerHand>
      <h3>{item.title}</h3>
      {item.yourbmi&&
      <div>
        <p>Seu IMC é de {item.yourbmi}</p>
      </div>
      }
      <p>IMC está entre <b>{item.bmi[0]}</b> e <b>{item.bmi[1]}</b></p>
    </S.BoxImg>
  )
}