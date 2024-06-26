import { NavLink } from "react-router-dom"
import { MabetIcon } from "../MabetIcons"



type Iprops = {
    toLink: string,
    icon: string,
    title: string,
    text: string

}

export const TextualButton = ({ icon, toLink, title, text }: Iprops) => {


    return <>
        <NavLink
            to={toLink}
            className='send-to flex justify-between items-center p-1.5 hover:cursor-pointer box-content '
        >
            <MabetIcon type={`${icon}`} classValues='text-black h-10 w-10' />
            <div className='send-to-text text-black '>
                <p className='font-light '>{text}</p>
                <p className='font-semibold '>{title}</p>
            </div>
        </NavLink>

    </>



}