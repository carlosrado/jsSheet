const id = 1

const ID_NAME = {
	1: 'Juan',
	2: 'Pedro',
	3: 'Carmen'
}
const NAME_DEFAULT = 'default'

const getName = (id) => ID_NAME[id] || NAME_DEFAULT

console.log(getName(1))
