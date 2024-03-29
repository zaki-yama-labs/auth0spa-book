const config = {
  /*
   ** Headers of the page
   */
  head: {
    title: "auth0spa-book",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
      },
      {
        rel: "stylesheet",
        href: "//cdnjs.cloudflare.com/ajax/libs/bulma/0.6.1/css/bulma.min.css",
      },
    ],
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
    },
  },
  mode: "spa",
  plugins: ["~/plugins/auth0.js"],
  auth0: {
    domain: "zaki-yama-nuxt-auth0.jp.auth0.com",
    clientID: "kjxqGZWtKlu0nMJ0cXhFSVquOXONhgAY",
  },
  generate: {
    dir: "../public",
  },
  modules: ["@nuxtjs/axios", "@nuxtjs/proxy"],
  axios: {
    baseURL: "/",
  },
};

if (process.env.NODE_ENV === "development") {
  config.proxy = {
    "/api": "http://localhost:3000",
  };
}

module.exports = config;
