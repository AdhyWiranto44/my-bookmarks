import Navbar from '../components/navbar'
import Searchbar from '../components/Searchbar'

export default function Home() {
  return (
    <div className='bg-gray-100'>
      <Navbar headingText="My Bookmarks" />
      <div className="px-4 lg:w-6/12 mx-auto mt-8 mb-4">
        <div className="text-center mb-3">
          <p className='font-bold text-3xl'>Find Now</p>
          <p className='font-semibold text-lg'><span className='text-gray-400'>in</span> My Bookmarks</p>
        </div>
        <Searchbar placeholder="Find by description" />
      </div>
    </div>
  )
}
