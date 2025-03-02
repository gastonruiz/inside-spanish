import Perfil from "../Assets/perfMarian.jpeg"



const Content = () => {
  return (
    <section className="mt-38 p-10 py-9 ">

      <div className="grid grid-cols-1 md:grid-cols-2">

        <div className="text-2xl bg-gray/70 backdrop-blur-md py-9 rounded-xl md:mt-38 md:mx-12 md:px-10">
<p>Aprende a hablar español de una manera rápida y eficaz.
   Con mi método aprenderás a hablar español 
  ya sea que vayas de vacaciones o viajes por trabajo 
  a un país donde se hable español. </p>
        </div>

        <div className="flex justify-center py-6">
          <img src={Perfil} alt="Professor pic" className="h-50 w-50 rounded-full md:mt-38 md:mx-12" />
        </div>

      </div>
    </section>
  )
}

export default Content