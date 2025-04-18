// this - ссылка на объект в котором он находится

const user: {
    name: string,
    age: number,
    getName: () => string,
    getAllInfo: () => void
} = {
    name: 'Nik',
    age: 23,
    getName(): string {
        return this.name
    },
    getAllInfo: function (): void {
        console.log(`Имя: ${this.name}, возраст: ${this.age}`)
    }
}

console.log(user.getName())
user.getAllInfo()
