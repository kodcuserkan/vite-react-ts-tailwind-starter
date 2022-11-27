import { useQuery } from '@tanstack/react-query' // For future reference
import { useEffect, useState } from 'react'
import dummyData from './api/categories'
import Category from './UI/Category'
type Props = {}

type Category = {
  id: number
  title: string
  image: string
}

const Catetories = (props: Props) => {
  // For future reference
  // const { isLoading, error, data } = useQuery(['categories'], () =>
  //   fetch('https something').then(
  //     (res) => res
  //   )
  // )
  // if (isLoading) return 'Loading...'
  // if (error) return 'An error has occurred: ' + error.message
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    dummyData.then((res) => setCategories(res.data))
  }, [dummyData])

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto">
        <h3 className="text-sm font-semibold mb-2 ">Kategoriler</h3>
        <div className="grid grid-cols-12">
          {categories?.length > 0 ? (
            categories.map((category) => (
              <Category
                key={category.id}
                id={category.id}
                title={category.title}
                image={category.image}
              />
            ))
          ) : (
            <div>
              <h4>Loading...</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Catetories
