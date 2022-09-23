import './categoriesMenu.styles.scss'
import CategoryItem from '../CategoryItem/category-item.component'

const CategoriesMenu = ({categories}) => {
    return (
         <div className='categories-container'>
      {categories.map((category) => {
        return (
          <CategoryItem key={category.id} category={category} />
          )
      })}
    </div>
    )
}

export default CategoriesMenu