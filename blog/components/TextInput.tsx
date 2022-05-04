import { HiSearch } from "react-icons/hi"


interface Props {
  searchValue: string,
  handleChange?: any
}

export default function TextInput({ searchValue, handleChange }: Props) {
  return (
    <div className="flex items-center p-3 border-2 rounded-3xl border-gray-500 mt-20 w-80 h-10 lg:w-[500px] ">
      <HiSearch className="text-xl " />
      <input
        className='p-1 px-4 w-80 lg:w-[500px]  outline-none shadow-sm bg-gray-50'
        type="search"
        onChange={handleChange}
        value={searchValue}
        placeholder="Pesquisar"
      />
    </div>
  )
}
