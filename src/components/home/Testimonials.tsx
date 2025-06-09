import { testomoinaldata } from '../../utlis/constants'
import StarRating from '../ui/StarRating'
import { IoCheckmarkOutline } from "react-icons/io5";

const Testimonials = () => {
  return (
    <>
           {testomoinaldata.map((testmonial) => (
            <div key={testmonial.id} className="w-full sm:max-w-[350px] max-w-[300px] sm:h-[200px] h-[160px] shrink-0 border border-gray-300 rounded-lg sm:gap-y-2 p-4 hover:scale-105 hover:-translate-y-4 hover:z-10 bg-white transition-scale duration-300 hover:shadow-xl">
              <StarRating rating={testmonial.rating} />
              <p className="font-semibold flex gap-x-2 items-center font-roboto py-2">{testmonial.name} 
                <span className="rounded-full bg-green-400 text-white p-0.5"><IoCheckmarkOutline /></span></p>
              <p className="sm:line-clamp-5 line-clamp-4 text-gray-600 sm:text-md text-sm">{testmonial.message}</p>
            </div>
          ))}
    </>
  )
}

export default Testimonials