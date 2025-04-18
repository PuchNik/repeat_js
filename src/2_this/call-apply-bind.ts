// bind, call и apply выполняют одну и ту же функцию - привязывают контекст к какой-либо функции
interface Hero {
    fullName: string
    health: number
    strength: number
}

const mainHero: Hero = {
    fullName: 'hero',
    health: 65,
    strength: 5
}

const badHero: Hero = {
    fullName: 'bad hero',
    health: 55,
    strength: 15
}

function printHeroInfo(this: Hero, extraInfo?: string): void {
    console.log('this', this)
    console.log(`Имя: ${this.fullName}, Здоровье: ${this.health}, Сила: ${this.strength}`)

    if (extraInfo) {
        console.log(`Дополнительная информация: ${extraInfo}`)
    }
}

// В .call дополнительные параметры передаются через запятую
printHeroInfo.call(mainHero)
printHeroInfo.call(mainHero, 'Это мой главный герой!')

// В .apply дополнительные параметры передаются через массив
printHeroInfo.apply(mainHero)
printHeroInfo.apply(mainHero, ['Это мой главный герой!'])

// Указываем тип для возвращаемой функции
const newPrintHeroInfo: (this: Hero, extraInfo?: string) => void = printHeroInfo.bind(badHero)
newPrintHeroInfo.call(badHero)

const newPrintHeroInfo2: (this: Hero, extraInfo?: string) => void = printHeroInfo.bind(mainHero, 'Это мой главный герой!')
newPrintHeroInfo2.call(mainHero)
