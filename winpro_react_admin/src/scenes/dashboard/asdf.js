const config = {
    namef: null,
    darkMode: null,
    theme: null,
    disabled: false
}

function createConfig(config) {
    config.namef = config.namef || 'hello',
        darkMode = config.darkMode || 'dark',
        theme = config.theme || 'light',
        disabled = true
}

createConfig(config)

console.log(config)