import Image from "next/image";
import LinkButton from "../LinkButton";

const ServiceCard = () => {

    return (
        <div className="basis-[calc(33.33%-1rem)] shadowCard bg-white p-2 mt-8 ml-4">
            <div>
                <div className="h-[300px] w-full bg-slate-500 relative mb-10 rounded-md overflow-hidden">
                    <Image
                        src={'https://alfabetajuega.com/hero/2020/10/zoro-one.jpg?width=768&aspect_ratio=16:9&format=nowebp'}
                        alt='logo.png'
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            <div>
                <p className="font-semibold my-2">Titulo</p>
                <p className="font-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet ipsum rhoncus ipsum sodales hendrerit. Morbi pellentesque mauris lorem, id scelerisque libero eleifend sed. In id vehicula neque. Nulla iaculis non leo sed mattis.
                </p>
                <div className="flex flex-row justify-between mt-5">
                    <div className="w-1/2 text-center border-2  py-1">
                        <p className="line-through">$ 150.00</p>
                    </div>
                    <div className="w-1/2 text-center border-2  py-1">
                        <p> $ 180.00 </p>
                    </div>
                </div>
                <LinkButton
                    classes={`
                        w-full
                        px-4
                        py-2
                        text-white
                        bg-[#748C7C]
                    `}
                    route={'/'}
                    text='Agendar Cita'
                />
            </div>
        </div>
    );
}

export default ServiceCard;