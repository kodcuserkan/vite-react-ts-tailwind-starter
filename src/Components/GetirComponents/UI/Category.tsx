import React from 'react'

type CategoryProps = {
  id: number
  title: string
  image: string
}

const Category = ({ id, image, title }: CategoryProps) => {
  return (
    <a href="#" className="col-span-6 sm:col-span-4 md:col-span-2 lg:col-span-1 text-color-text-dark hover:text-primary-brand-color hover:bg-primary-light-color transition transition-all" key={id}>
      <div className="flex flex-col items-center justify-center p-4 gap-y-2">
        <img src={image} alt={title} className="w-12 h-12 rounded-md border border-gray-200 object-cover " />
        <span className="text-[15px] text-inherit hover:text-inherit break-words font-semibold text-center tracking-tight transition-all">{title}</span>
      </div>
    </a>
  )
}

export default Category
