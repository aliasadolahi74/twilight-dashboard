import getConfig from 'next/config'

export default function Home() {

    const {serverRuntimeConfig, publicRuntimeConfig } = getConfig();
    const baseurl = serverRuntimeConfig.BACKEND_BASE_URL;
    const baseurlClient = publicRuntimeConfig.CLIENT_BACKEND_BASE_URL;
    console.log("baseURL", baseurl)
    console.log("baseurlClient", baseurlClient)

    return (
        <div
            className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <span>{baseurl}</span>
            <span>{baseurlClient}</span>
        </div>
    );
}
