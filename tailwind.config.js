module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}'
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            poppins: ['Poppins', 'sans-serif']
        },
        extend: {
            screens: {
                fhd: '1920px'
            },
            colors: {
                'deep-blue': '#3b49df'
            },
            borderWidth: {
                10: '10px'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
