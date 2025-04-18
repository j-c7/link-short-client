import localFont from "next/font/local";
import Layout from "@/components/Layout";
import { useState } from "react";
import Spinner from "@/components/spinner/Spinner";

/*
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});*/
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  const [inUrl, setInUrl] = useState("");
  const [shorterUrl, setShorterUrl] = useState("");
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (ev) => {
    ev.preventDefault()

    setLoading(true);
    if (inUrl === "") {
      console.log("NO HAY URL");
      setLoading(false);
      return;
    }

    let data = { url: inUrl }
    let jsonbody = JSON.stringify(data);
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/short/create-public-short/`, {
      method: "POST",
      body: jsonbody,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        const createdUser = response.data.createdUser;
        const { shortUrl } = createdUser;
        const finalUrl = `${process.env.NEXT_PUBLIC_PAGE_URL}/${shortUrl}`;
        setShorterUrl(finalUrl);
      });

    setLoading(false);
  }

  return (
    <div className={geistMono.className}>
      <Layout pagina="home">
        <h1 className="text-[2.25rem] lg:text-[4rem] font-bold text-center bg-gradient-to-r 
          from-green-500 to-sky-500 bg-clip-text text-transparent" id="pepito">
          Shork Url
        </h1>

        <h1 className="text-center text-3xl lg:text-4xl mt-3">
          Acorta tus enlaces aquí
        </h1>

        <div className="w-[20rem] xl:w-[60rem] mx-auto mt-10">
          <label className={`block text-2xl text-center font-bold mt-5 bg-gradient-to-r 
          from-green-500 to-sky-500 bg-clip-text text-transparent`}>
            Ingresa Link
          </label>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Ingresa Url para acortar"
              className='w-full p-3 mt-5 rounded-xl border focus:outline-double
                    bg-opacity-25 hover:bg-opacity-100 active:bg-opacity-100
                    bg-zinc-900 
                    border-emerald-500 
                    focus:border-emerald-400 
                    text-emerald-200
                '
              onChange={e => setInUrl(e.target.value)}
            />
            <input
              name="Acortar"
              type="submit"
              className='w-full py-2 px-10 mt-5 rounded-md 
                uppercase font-bold
                hover:cursor-pointer
                text-white bg-emerald-600 
                active:bg-emerald-300 hover:bg-emerald-500
              '
            />
          </form>

          {loading ?
            <>
              <Spinner />
            </>
            : <div></div>}

          {shorterUrl && !loading ?
            <>
              <input className="flex w-full p-3 mt-5 rounded-xl border focus:outline-double
                      bg-opacity-25 hover:bg-opacity-100 active:bg-opacity-100
                      bg-zinc-900 
                      border-emerald-500 
                      focus:border-emerald-400 
                      text-emerald-200"
                value={shorterUrl}
                type="text"
                readOnly
              />
              <div className="text-md lg:text-xl text-start py-3 text-orange-200">
                <p className="font-bold mb-3">Esta url se borrará de la base de datos en 2 minutos.</p>
              </div>
            </>
            : <div></div>}
        </div>
      </Layout>
    </div>
  );
}

