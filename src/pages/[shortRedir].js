//import { useParams } from 'next/navigation'
import { redirect } from "next/dist/server/api-utils";

export default function redir() {
    return (<div></div>)
}

export async function getServerSideProps({params}){
    const { shortRedir } = params;
   
    let destUrl;
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/short/get-public-short/${shortRedir}`)
    .then((response) => response.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => {
        destUrl = response.url ? response.url : null
    });

    if(destUrl)
        return {redirect: {destination: destUrl} };

    return {redirect: {destination: "/"} };
}