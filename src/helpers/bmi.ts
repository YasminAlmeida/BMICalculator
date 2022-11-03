export type Level = {
    title: string
    color: string
    icon: 'down' | 'up'
    bmi: number[]
    yourbmi?: number
}
export const levels: Level[] = [
    { title: 'Magreza', color: '#96A3AB', icon: 'down', bmi: [0, 18.5] },
    { title: 'Normal', color: '#0EAD69', icon: 'up', bmi: [18.5, 24.9] },
    { title: 'Sobrepeso', color: '#E2B039', icon: 'down', bmi: [25, 30] },
    { title: 'Obesidade', color: '#C3423F', icon: 'down', bmi: [30.1, 99] },
]

export const calculateBmi = (height: number, weight: number) => {
    const bmi = weight / (height * height)
    for (let i in levels) {
        if (bmi >= levels[i].bmi[0] && bmi < levels[i].bmi[1]) {
            levels[i].yourbmi = parseFloat(bmi.toFixed(2))
            return levels[i]
        }
    }
    return null
}
