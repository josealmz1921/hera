import Image from "next/image";
import Link from "next/link";
import { MenuIcon, UserIcon } from '../icons';

const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="">
                <div className="imageHeader">
                    <Image
                        src={'https://scontent.fmex30-1.fna.fbcdn.net/v/t39.30808-6/277224165_106544882010162_4701846377767430980_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=__pT-QgnvbgAX85gPyT&_nc_ht=scontent.fmex30-1.fna&oh=00_AfBkr70WuGN89hsHGgFz-I5DpKugp3NzHS3ZZDlSqIUVZQ&oe=63F03A9D'} alt='logo'
                        width={80}
                        height={30}
                    />
                </div>
            </div>
            <div className="flex justify-end  w-2/3">
                <Link className="linkHeader" href={'/'}>Inicio</Link>
                <Link className="linkHeader" href={'/'}>Nosotros</Link>
                <Link className="linkHeader" href={'/'}>Servicios</Link>
                <Link className="linkHeader" href={'/'}>Contacto</Link>
                <button className="buttonHeader"><MenuIcon className='iconHeader' /></button>
                <button className="buttonHeader"><UserIcon className='iconHeader' /></button>
            </div>
        </div>
    );
}

export default Header;