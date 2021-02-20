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
            backgroundImage: (theme) => ({
                'hero-pattern': 'url(/assets/images/hero-pattern.jpg)',
                'line-bg': 'url(/assets/images/line-bg.png)',
                'banner-bg': 'url(/assets/images/banner-bg.jpg)'
            }),
            colors: {
                'deep-blue': '#3b49df',
                'dark-teal': '#3C8080',
                'dull-blue': '#223645'
            },
            height: {
                100: '30rem',
                105: '35rem',
                110: '40rem'
            },
            fontSize: {
                '4.5xl': '2.75rem'
            },
            borderWidth: {
                10: '10px'
            },
            gridTemplateRows: {
                // header-body type grid
                'with-header': '25% auto'
            }
        }
    },
    variants: {
        extend: {
            borderWidth: ['hover', 'focus']
        }
    },
    plugins: []
};
