import { BsArrowDownCircle } from "react-icons/bs";

interface Props {
    onClick?: () => void
    disabled: boolean,
}

export default function Button({ onClick, disabled = false }: Props) {
    return (
        <button onClick={onClick} disabled={disabled}>
            <button className='animate-bounce text-[40px] pt-12' aria-label='carregar mais'><BsArrowDownCircle /></button>
        </button>
    )
}
