import { IoClose } from 'react-icons/io5'
export default function ButtonDelete() {
  return (
    <button className="bg-red-300 hover:bg-red-400  items-center justify-center">
      <IoClose size={25} color="white" />
    </button>
  )
}
