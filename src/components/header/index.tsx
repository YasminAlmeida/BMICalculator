import React from "react"
import Logo from '../../assets/powered.png'
import * as S from './style'
function Header(){
  return(
    <S.Header>
      <img src={Logo} alt="logo" width={150} />
    </S.Header>
  )
}
export default Header