import Layout from "@/components/Layout"
import Carrousel from "@/components/Carrousel"
import Image from "next/image"
import LinkButton from "@/components/LinkButton"
import ServiceCard from "@/components/ServiceCard"

export default function Home() {
  return (
    <Layout>
      <Carrousel images={[
        'https://alfabetajuega.com/hero/2020/10/zoro-one.jpg?width=768&aspect_ratio=16:9&format=nowebp',
        'https://www.egames.news/__export/1658007104962/sites/debate/img/2022/07/16/one_piece_nos_revela_el_gran_poder_de_enmax_la_espada_de_roronoa_zoro.jpg_759710130.jpg'
      ]} />

      <div className="max-w-[1200px] mx-auto my-8 px-2">
        <h1
          className={`
            text-center
            font-light
            text-4xl
            my-6
            rounded-[0%100%49%51%/0%0%100%100%]
            bg-[#af9f9e]
            py-4
            text-white
          `}
        >Eleva la belleza de tu piel con Hera</h1>
        <div className={`
          flex
          flex-row
          items-center
        `}>
          <div className="flex justify-center w-1/2 p-4">
            <div className="h-[350px] w-full relative mb-10 rounded-md overflow-hidden">
              <Image
                src='https://scontent.fmex30-1.fna.fbcdn.net/v/t39.30808-6/277247527_106545288676788_3458251995238257787_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=J4VQwx7UR5gAX9Gbp2C&_nc_ht=scontent.fmex30-1.fna&oh=00_AfA8gc4lwq7hYAmblOmP-5wyUM5CrJcl5ng-kt4bC9b73w&oe=63F05436'
                alt='logo.png'
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-1/2 p-4">
            <h2
              className={`
            font-light
            text-2xl
            my-4
          `}
            >¿Por que Hera?</h2>
            <p
              className={`
              font-light
              text-lg
              my-4
            `}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet ipsum rhoncus ipsum sodales hendrerit. Morbi pellentesque mauris lorem, id scelerisque libero eleifend sed. In id vehicula neque. Nulla iaculis non leo sed mattis. Mauris vehicula ac felis ac hendrerit. Donec sed lacus imperdiet, mollis felis in, viverra augue. In ut varius quam, nec fermentum tellus. Integer in leo pellentesque, convallis tellus vitae, auctor erat.
            </p>
            <p
              className={`
              font-light
              text-lg
              my-4
            `}
            >Nulla molestie orci et tortor ultrices, eu mattis ligula scelerisque. Ut tincidunt varius purus tempor hendrerit. Sed pellentesque sapien ex, sodales finibus lacus dignissim vel. Proin laoreet risus et sem dapibus, ornare laoreet sapien placerat. Sed sed lorem at turpis hendrerit vestibulum ac a lacus. Nulla venenatis dolor in lorem congue, ut vehicula eros suscipit. Nulla sagittis vitae urna bibendum elementum.</p>
          </div>
        </div>

        <div className="flex justify-end">
          <LinkButton
            classes={`
              py-2
              px-4
              mt-4
              text-white
              bg-[#748C7C]
            `}
            text='Saber mas'
            route={'/'}
          />
        </div>
        <div>
          <div className="flex flex-row flex-wrap">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
          <div className="flex flex-row justify-end">
            <LinkButton
              classes={`
                py-2
                px-4
                mt-4
                text-white
                bg-[#748C7C]
              `}
              route={'/'}
              text="Ver todos los servicios"
            />
          </div>
        </div>

      </div>
    </Layout>
  )
}
