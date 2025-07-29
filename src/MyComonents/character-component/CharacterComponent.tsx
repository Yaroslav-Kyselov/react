import type {ICharacter} from "../../models/ICharacter.tsx";
import './CharacterComponent.css'

interface CharacterComponentProps {
    item: ICharacter,
    children: React.ReactNode,
}

export const CharacterComponent = ({item, children}: CharacterComponentProps) => {
    return (
        <div className='my-10 border-2'>
            <h3 className='text-2xl'>{item.name} {item.surname}</h3>
            <img src={item.photo} alt={item.name} />
            <p> {children}</p>
        </div>
    );
};