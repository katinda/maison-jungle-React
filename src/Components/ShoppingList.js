import {plantList} from './plantList'
import '../styles.css/ShoppingList.css'
import CareScale from '../Components/CareScale'
import PlantItem from './PlantItem'

function ShoppingList() {
    const categories = plantList.reduce(
		(acc, index) =>
			acc.includes(index.category) ? acc : acc.concat(index.category),
		[]
	)
    return (
        <div>
        <ul>
            {categories.map((cat) => (
                <li key={cat}>{cat}</li>
            ))}
        </ul>
        <ul className='lmj-plant-list'>
            {plantList.map(({ id, cover, name, water, light }) => (
                <PlantItem
                    id={id}
                    cover={cover}
                    name={name}
                    water={water}
                    light={light}
                />
            ))}
        </ul>
    </div>
    )
}

export default ShoppingList