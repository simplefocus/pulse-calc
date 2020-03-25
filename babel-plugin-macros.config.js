module.exports = {
    twin: {
        styled: "styled-components/macro",
        config: "./src/tailwind.config.js",
        format: "auto",
        debug: false,
        plugins: ["macros"]
    },
    styledComponents: {
        pure: true
    }
}
