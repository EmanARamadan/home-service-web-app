"use client"
import GlobalApi from '@/app/_services/GlobalApi';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function CategorySideBar() {
    const [categoryList,setCategoryList]=useState([]);
  useEffect(()=>{
    getCategoryList();
  }, [])

  const getCategoryList=()=>{
    GlobalApi.getCategory().then(resp=>{
        console.log(resp)
      setCategoryList(resp.categories);
      console.log(categoryList)
    })
  }
  return (
    <div>
        <h2 className='font-bold mb-3 text-lg text-primary'>Categories</h2>
        <div>
            {categoryList.map((category,index)=>(
                <Link href={'/search/'+category.name} key={index} className='flex gap-2 p-3 border rounded-lg mb-3 md:mr-10 cursor-pointer hover:bg-purple-200 hover:shadow-md hover:text-primary hover:border-primary'>
                    <div className='flex-shrink-0'>
                        <img src={category.icon.url}
                         alt='icon'
                         width={30}
                         height={30}/>
                         <h2>{category.name}</h2>
                    </div>
                </Link>
            ))}
            <div>

            </div>
        </div>
        </div>
  )
}

export default CategorySideBar