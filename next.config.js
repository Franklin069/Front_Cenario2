/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  exportPathMap: async function (defaultPathMap) {
    return {
      "/": { page: "/" },
    };
  },
};

module.exports = nextConfig;

//Arquivo usado para configurar o comportamento do Next.js
//Modulo regular do Node.js
