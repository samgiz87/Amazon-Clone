import React from 'react'
import { categoryInfos } from './FullInfo'
import CategoryCard from './CategoryCard'
import classes from './category.module.css'


function Category() {
  return (
    <section className={classes.category_container}>
      {
        categoryInfos.map((infos)=>(
            <CategoryCard data ={infos}/>
        ))
      }
    </section>
  )
}

export default Category
