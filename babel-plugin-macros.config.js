// babel-config-macros.config.js
module.exports = {
    // tailwind: {
    //     styled: "styled-components/macro",
    //     config: "./src/tailwind.config.js",
    //     format: "auto",
    //     debug: true,
    //     plugins: ["macros", require("@tailwindcss/custom-forms")]
    // },
    twin: {
        styled: "styled-components/macro",
        config: "./src/tailwind.config.js",
        format: "auto",
        debug: true,
        plugins: ["macros"]
    },
    styledComponents: {
        pure: true
    }
}
