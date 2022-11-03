import React, { useState } from 'react'
import * as S from './style'
import { GridItem } from '../galery'
import { levels, calculateBmi, Level } from '../../helpers/bmi'
import Arrow from '../../assets/leftarrow.png'
function Calculator() {
    const [heightField, setHeightField] = useState<number>(0)
    const [weightField, setWeightField] = useState<number>(0)
    const [show, setShow] = useState<Level | null>(null)

    const handleCalculatorBtn = () => {
        if (heightField && weightField) {
            setShow(calculateBmi(heightField, weightField))
        } else {
            alert('Digite todos os campos')
        }
    }
    const handleBackButton = () => {
        setShow(null)
        setHeightField(0)
        setWeightField(0)
    }
    return (
        <S.ContainerCalculator>
            <S.LeftContainer>
                <S.Title>Calcule o seu IMC.</S.Title>
                <S.Information>
                    IMC é a sigla para Indice de Massa Corpórea, parâmetro
                    adotado pela Organização Mundiaç de Súde para calcular o
                    peso ideal de cada pessoa
                </S.Information>
                <S.Input
                    type="number"
                    placeholder="Digite a sua altura. Ex: 1.5 (em métros)"
                    value={heightField > 0 ? heightField : ''}
                    onChange={(e) => setHeightField(parseFloat(e.target.value))}
                />
                <S.Input
                    type="number"
                    placeholder="Digite o seu peso. Ex: 75.3 (em kg)"
                    value={weightField > 0 ? weightField : ''}
                    onChange={(e) => setWeightField(parseFloat(e.target.value))}
                />
                <S.Btn onClick={handleCalculatorBtn}>Calcular</S.Btn>
            </S.LeftContainer>
            <S.RightContainer>
                {!show ? (
                    <S.ContainerImagens>
                        {levels.map((item, key) => (
                            <GridItem key={key} item={item} />
                        ))}
                    </S.ContainerImagens>
                ) : (
                    <S.BigImage>
                        <S.ArrowImage
                            src={Arrow}
                            alt="Seta para retornar"
                            onClick={handleBackButton}
                        />
                        <GridItem item={show} />
                    </S.BigImage>
                )}
            </S.RightContainer>
        </S.ContainerCalculator>
    )
}
export default Calculator
