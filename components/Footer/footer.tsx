import Image from "next/image";
import Link from "next/link";
import {
    ChevronRight,
    EmailIcon,
    FaceBookIcon,
    InstragamIcon,
    PhoneIcon,
    LocationIcon
} from "../icons";

const Footer = () => {
    return (
        <div className="bg-[#748C7C] ">
            <div className="flex flex-row items-start max-w-[1300px] mx-auto p-4">
                <div className="flex justify-center flex-col items-center w-1/3 px-4">
                    <h3 className="text-white mt-4 text-center w-full border-y-2 border-white py-1 font-light text-lg mb-4">Quienes somos?</h3>
                    <Image
                        src={'https://scontent.fmex30-1.fna.fbcdn.net/v/t39.30808-6/277224165_106544882010162_4701846377767430980_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=__pT-QgnvbgAX85gPyT&_nc_ht=scontent.fmex30-1.fna&oh=00_AfBkr70WuGN89hsHGgFz-I5DpKugp3NzHS3ZZDlSqIUVZQ&oe=63F03A9D'} alt='logo'
                        width={200}
                        height={300}
                    />
                    <p className="text-white border-t border-t-white pt-4 mt-4 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin tempor lectus eget odio lobortis vehicula
                    </p>
                </div>
                <div className="w-1/3 text-white flex flex-col">
                    <h3 className="text-white mt-4 text-center w-full border-y-2 border-white py-1 font-light text-lg">Tratamientos mas destacados</h3>
                    <div className="mt-4">
                        <Link href={'/'}>
                            <p className="flex flex-row items-center">
                                Service 1
                                <ChevronRight className="h-4 ml-2" />
                            </p>
                        </Link>
                        <Link href={'/'}>
                            <p className="flex flex-row items-center">
                                Service 2
                                <ChevronRight className="h-4 ml-2" />
                            </p>
                        </Link>
                        <Link href={'/'}>
                            <p className="flex flex-row items-center">
                                Service 3
                                <ChevronRight className="h-4 ml-2" />
                            </p>
                        </Link>
                        <Link href={'/'}>
                            <p className="flex flex-row items-center">
                                Service 4
                                <ChevronRight className="h-4 ml-2" />
                            </p>
                        </Link>
                        <Link href={'/'}>
                            <p className="flex flex-row items-center">
                                Service 5
                                <ChevronRight className="h-4 ml-2" />
                            </p>
                        </Link>
                    </div>
                </div>
                <div className="w-1/3">
                    <div className="p-4">
                        <p className="text-center font-light text-white text-lg w-full border-y-2 border-white py-1">Siguenos en nuestra redes socilaes</p>
                        <div className="flex justify-around mt-4">
                            <Link href={'/'}>
                                <EmailIcon className="w-8 stroke-slate-50 fill-white" />
                            </Link>
                            <Link href={'/'}>
                                <FaceBookIcon className="w-8 fill-white" />
                            </Link>
                            <Link href={'/'}>
                                <InstragamIcon className="w-8 fill-white" />
                            </Link>
                        </div>
                        <div>
                            <p className="text-white mt-4 text-center w-full border-y-2 border-white py-1 font-light text-lg">Telefonos:</p>
                            <p className="flex flex-row text-white my-4"> <span className="mr-4"><PhoneIcon className="w-6 fill-white" /></span> +66 5151541541 +66 5151541541 </p>
                        </div>
                        <div>
                            <p className="text-white mt-4 text-center w-full border-y-2 border-white py-1 font-light text-lg">Dirección</p>
                            <p className="flex flex-col items-center text-white my-4">
                                <span className="mb-2"><LocationIcon className="w-6" /></span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet ipsum rhoncus ipsum sodales hendrerit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;