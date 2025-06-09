import React from 'react'
import TopNav from '../../ui/TopNav'
import Footer from '../../Footer'

const CategoryLoadingState = () => {
  return (
    <div>
    <TopNav />
    <div className="max-w-[1240px] py-8 mx-auto  flex gap-x-4 w-full">
        {/* filter */}
        <div className="w-[350px] sm:flex sm:min-w-[300px] min-w-[250px] hidden flex-1 animate-pulse h-[600px] rounded-lg bg-slate-200">
        </div>
        <div className="grid lg:grid-cols-[1fr_1fr_1fr] mx-4 grid-cols-[1fr_1fr] w-full gap-4">
            {Array.from([1,2,3,4,5,6,7,8,9]).map( index => (
                <div key={index} 
                    className="bg-slate-200 rounded-lg aspect-square  animate-pulse"></div>
            ))}
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default CategoryLoadingState