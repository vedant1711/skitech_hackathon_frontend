import BlogPost from "@/components/blog/BlogPost";
import Layout from "@/components/layout/Layout";
// import { Description } from "@headlessui/react/dist/components/description/description";
import Link from "next/link";
import Carousel from '../../components/carousel';

export default async function Category() {
  const cropData = {
    type: ["Kharif", "Rabi"],
    varieties: ["Kalyan Sona", "Sonalika", "Heera"],
    temperature: "17-20 °C",
    rainfall: "20-100 cm (ideal ~75 cm)",
    soilType: ["Clay loam", "Sandy loam"],
    highestProducer: "Uttar Pradesh",
    highestPerHectareYield: "Punjab",
    researchCentre: "Karnal, Haryana",
    highestProducingCountry: "China",
    image: "/assets/imgs/pages/wheat.jpg",
    description: "It is the 2nd most important food crop in India. It is a Rabi crop. India stands second in production of wheat worldwide. It is more flexible in terms of climactic and other conditions of growth."
  };

  return (
    <>
      <Layout>
        <div className="header-bg absolute top-0 left-0 right-0 -z-50 w-full h-[1100px] bg-gradient-to-b from-primary-light-950/15 to-transparent max-h-[1100px] overflow-hidden"></div>
        <div>
          {/* <section className="relative py-20 lg:py-12"> */}
            <div className="container px-4">
              <div className="flex flex-col gap-8 items-center justify-center text-center">
                {/* breadcrumb */}
                <div className="hidden md:flex gap-2.5 justify-start items-center h-12 px-7 py-3.5 bg-neutral-0 dark:bg-neutral-dark-0 rounded-3xl border border-neutral-300 dark:border-neutral-dark-300">
                  <Link
                    href="/"
                    className="text-neutral-700 dark:text-neutral-dark-700 text-base font-medium leading-normal"
                  >
                    Home
                  </Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={8}
                    height={12}
                    viewBox="0 0 8 12"
                    className="fill-neutral-700 dark:fill-neutral-dark-700"
                  >
                    <path d="M1.52344 11.9961C1.24219 11.9961 0.992188 11.9023 0.804688 11.7148C0.398438 11.3398 0.398438 10.6836 0.804688 10.3086L5.08594 5.99609L0.804688 1.71484C0.398438 1.33984 0.398438 0.683594 0.804688 0.308594C1.17969 -0.0976562 1.83594 -0.0976562 2.21094 0.308594L7.21094 5.30859C7.61719 5.68359 7.61719 6.33984 7.21094 6.71484L2.21094 11.7148C2.02344 11.9023 1.77344 11.9961 1.52344 11.9961Z" />
                  </svg>
                  <Link
                    href="/category"
                    className="text-neutral-700 dark:text-neutral-dark-700 text-base font-medium leading-normal"
                  >
                    Blog
                  </Link>
                </div>
                <h1 className="heading-1 mb-0">
                  Crop <span className="font-light">Description</span>
                </h1>
              </div>
            </div>
          {/* </section> */}
          {/* Category 1 Section 2 */}
          {/* <section className="relative py-4 lg:py-12"> */}
            <div className="container px-4">
              <h1 className="heading-3 font-family: Times N text-black dark:text-white">WHEAT</h1>

              <div className="grid grid-cols-2 lg:grid-cols-2 gap-[30px]">
                {/* Left col */}
                <div className="flex-col justify-start items-start gap-5 inline-flex hover-up">
                  <Link href="/single" className="rounded-3xl overflow-hidden max-h-[370px]">
                    <img src={cropData.image} />
                  </Link>
                  <div className="flex-col justify-start items-start gap-3.5 flex">
                    <div className="justify-start items-center gap-2 flex">
                      <Link href="/author">
                        <img
                          className="w-9 h-9 rounded-3xl"
                          src="/assets/imgs/avatar/avatar-01.png"
                        />
                      </Link>
                      <div className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700">
                        <Link href="/author">Alida</Link> - June 8, 2024
                      </div>
                    </div>
                    <h3 className="text-neutral-950 dark:text-neutral-dark-950 text-2xl font-bold leading-snug ">
                      Wheat: Second most important food crop in India.
                    </h3>
                    <p className="text-neutral-700 text-sm md:text-base font-medium leading-relaxed dark:text-neutral-dark-600">
                      {cropData.description}
                    </p>
                  </div>
                </div>
                {/* Right col */}
                <div className="flex flex-col gap-[30px]">
                  <table className="min-w-full bg-white rounded-2xl  border-collapse border-2 dark:text-white border-gray-200">
                  {/* <div class=" flex flex-col gap-[30px] relative overflow-x-auto  sm:rounded-xl">
                    <table class="min-w-full text-left rtl:text-right text-gray-500 dark:text-gray-400"> */}

                        {/* <div class="flex flex-col relative rounded-xl border-2  bg-white shadow-xl dark:bg-neutral-800">
                        <table class="min-w-full text-left text-gray-700 dark:text-white"> */}
                    <tbody>
                      <tr className="odd:bg-green-200 even:bg-white dark:odd:bg-green-900 dark:even:bg-neutral-800">
                        <th className=" bg-neutral-300 py-2 px-4 even:bg-gray-50 border-b-2 border-r-2 border-gray-400 text-left">
                          Type of Crop
                        </th>
                        <th className=" bg-neutral-300  py-2 px-4 border-b-2 even:bg-gray-50 border-gray-400 text-left">
                          {cropData.type.join(", ")}
                        </th>
                      </tr>
                      <tr>
                        <td className=" py-2 px-4 border-b-2 border-r-2 border-gray-400 text-left">
                          Varieties
                        </td>
                        <td className="py-2 px-4 border-b-2 border-gray-400 text-left">
                          {cropData.varieties.join(", ")}
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-neutral-300  py-2 px-4 border-b-2 border-r-2 border-gray-400 text-left">
                          Temperature
                        </td>
                        <td className="bg-neutral-300 py-2 px-4 border-b-2 border-gray-400 text-left">
                          {cropData.temperature}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b-2 border-r-2 border-gray-400 text-left">
                          Rainfall
                        </td>
                        <td className="py-2 px-4 border-b-2 border-gray-400 text-left">
                          {cropData.rainfall}
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-neutral-300  py-2 px-4 border-b-2 border-r-2 border-gray-400 text-left">
                          Soil type
                        </td>
                        <td className="bg-neutral-300 py-2 px-4 border-b-2 border-gray-400 text-left">
                          {cropData.soilType.join(", ")}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b-2 border-r-2 border-gray-400 text-left">
                          Highest Producer
                        </td>
                        <td className="py-2 px-4 border-b-2 border-gray-400 text-left">
                          {cropData.highestProducer}
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-neutral-300 py-2 px-4 border-b-2 border-r-2 border-gray-400 text-left">
                          Highest per Hectare Yield
                        </td>
                        <td className="bg-neutral-300 py-2 px-4 border-b-2 border-gray-400 text-left">
                          {cropData.highestPerHectareYield}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b-2 border-r-2 border-gray-400 text-left">
                          Research Centre
                        </td>
                        <td className="py-2 px-4 border-b-2 border-gray-400 text-left">
                          {cropData.researchCentre}
                        </td>
                      </tr>
                      <tr>
                        <td className="bg-neutral-300 py-2 px-4 border-r-2 border-gray-400 text-left">
                          Highest Producing Country
                        </td>
                        <td className="bg-neutral-300 py-2 px-4 border-gray-400 text-left">
                          {cropData.highestProducingCountry}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          {/* </section> */}
          {/* Additional sections can be added below */}
          <div>
      
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl p-5 font-bold mb-4">Process for Plantation</h1>
        <Carousel />
      </main>
    </div>
        </div>
      </Layout>
    </>
  );
}
