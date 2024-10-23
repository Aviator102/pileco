@charset "UTF-8";.slick-slider {
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    touch-action: pan-y;
    -webkit-user-select: none;
    user-select: none;
    -khtml-user-select: none
}

.slick-list,.slick-slider {
    display: block;
    position: relative
}

.slick-list {
    margin: 0;
    overflow: hidden;
    padding: 0
}

.slick-list:focus {
    outline: none
}

.slick-list.dragging {
    cursor: pointer;
    cursor: hand
}

.slick-slider .slick-list,.slick-slider .slick-track {
    transform: translateZ(0)
}

.slick-track {
    display: block;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    top: 0
}

.slick-track:after,.slick-track:before {
    content: "";
    display: table
}

.slick-track:after {
    clear: both
}

.slick-loading .slick-track {
    visibility: hidden
}

.slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px
}

[dir=rtl] .slick-slide {
    float: right
}

.slick-slide img {
    display: block
}

.slick-slide.slick-loading img {
    display: none
}

.slick-slide.dragging img {
    pointer-events: none
}

.slick-initialized .slick-slide {
    display: block
}

.slick-loading .slick-slide {
    visibility: hidden
}

.slick-vertical .slick-slide {
    border: 1px solid #0000;
    display: block;
    height: auto
}

.slick-arrow.slick-hidden {
    display: none
}

.slick-loading .slick-list {
    background: #fff url(data:image/gif;base64,R0lGODlhIAAgAPUAAP///wAAAPr6+sTExOjo6PDw8NDQ0H5+fpqamvb29ubm5vz8/JKSkoaGhuLi4ri4uKCgoOzs7K6urtzc3D4+PlZWVmBgYHx8fKioqO7u7kpKSmxsbAwMDAAAAM7OzsjIyNjY2CwsLF5eXh4eHkxMTLCwsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH+GkNyZWF0ZWQgd2l0aCBhamF4bG9hZC5pbmZvACH5BAAKAAAAIf8LTkVUU0NBUEUyLjADAQAAACwAAAAAIAAgAAAG/0CAcEgkFjgcR3HJJE4SxEGnMygKmkwJxRKdVocFBRRLfFAoj6GUOhQoFAVysULRjNdfQFghLxrODEJ4Qm5ifUUXZwQAgwBvEXIGBkUEZxuMXgAJb1dECWMABAcHDEpDEGcTBQMDBQtvcW0RbwuECKMHELEJF5NFCxm1AAt7cH4NuAOdcsURy0QCD7gYfcWgTQUQB6Zkr66HoeDCSwIF5ucFz3IC7O0CC6zx8YuHhW/3CvLyfPX4+OXozKnDssBdu3G/xIHTpGAgOUPrZimAJCfDPYfDin2TQ+xeBnWbHi37SC4YIYkQhdy7FvLdpwWvjA0JyU/ISyIx4xS6sgfkNS4me2rtVKkgw0JCb8YMZdjwqMQ2nIY8BbcUQNVCP7G4MQq1KRivR7tiDEuEFrggACH5BAAKAAEALAAAAAAgACAAAAb/QIBwSCQmNBpCcckkEgREA4ViKA6azM8BEZ1Wh6LOBls0HA5fgJQ6HHQ6InKRcWhA1d5hqMMpyIkOZw9Ca18Qbwd/RRhnfoUABRwdI3IESkQFZxB4bAdvV0YJQwkDAx9+bWcECQYGCQ5vFEQCEQoKC0ILHqUDBncCGA5LBiHCAAsFtgqoQwS8Aw64f8m2EXdFCxO8INPKomQCBgPMWAvL0n/ff+jYAu7vAuxy8O/myvfX8/f7/Arq+v0W0HMnr9zAeE0KJlQkJIGCfE0E+PtDq9qfDMogDkGmrIBCbNQUZIDosNq1kUsEZJBW0dY/b0ZsLViQIMFMW+RKKgjFzp4fNokPIdki+Y8JNVxA79jKwHAI0G9JGw5tCqDWTiFRhVhtmhVA16cMJTJ1OnVIMo1cy1KVI5NhEAAh+QQACgACACwAAAAAIAAgAAAG/0CAcEgkChqNQnHJJCYWRMfh4CgamkzFwBOdVocNCgNbJAwGhKGUOjRQKA1y8XOGAtZfgIWiSciJBWcTQnhCD28Qf0UgZwJ3XgAJGhQVcgKORmdXhRBvV0QMY0ILCgoRmIRnCQIODgIEbxtEJSMdHZ8AGaUKBXYLIEpFExZpAG62HRRFArsKfn8FIsgjiUwJu8FkJLYcB9lMCwUKqFgGHSJ5cnZ/uEULl/CX63/x8KTNu+RkzPj9zc/0/Cl4V0/APDIE6x0csrBJwybX9DFhBhCLgAilIvzRVUriKHGlev0JtyuDvmsZUZlcIiCDnYu7KsZ0UmrBggRP7n1DqcDJEzciOgHwcwTyZEUmIKEMFVIqgyIjpZ4tjdTxqRCMPYVMBYDV6tavUZ8yczpkKwBxHsVWtaqo5tMgACH5BAAKAAMALAAAAAAgACAAAAb/QIBwSCQuBgNBcck0FgvIQtHRZCYUGSJ0IB2WDo9qUaBQKIXbLsBxOJTExUh5mB4iDo0zXEhWJNBRQgZtA3tPZQsAdQINBwxwAnpCC2VSdQNtVEQSEkOUChGSVwoLCwUFpm0QRAMVFBQTQxllCqh0kkIECF0TG68UG2O0foYJDb8VYVa0alUXrxoQf1WmZnsTFA0EhgCJhrFMC5Hjkd57W0jpDsPDuFUDHfHyHRzstNN78PPxHOLk5dwcpBuoaYk5OAfhXHG3hAy+KgLkgNozqwzDbgWYJQyXsUwGXKNA6fnYMIO3iPeIpBwyqlSCBKUqEQk5E6YRmX2UdAT5kEnHKkQ5hXjkNqTPtKAARl1sIrGoxSFNuSEFMNWoVCxEpiqyRlQY165wEHELAgAh+QQACgAEACwAAAAAIAAgAAAG/0CAcEgsKhSLonJJTBIFR0GxwFwmFJlnlAgaTKpFqEIqFJMBhcEABC5GjkPz0KN2tsvHBH4sJKgdd1NHSXILah9tAmdCC0dUcg5qVEQfiIxHEYtXSACKnWoGXAwHBwRDGUcKBXYFi0IJHmQEEKQHEGGpCnp3AiW1DKFWqZNgGKQNA65FCwV8bQQHJcRtds9MC4rZitVgCQbf4AYEubnKTAYU6eoUGuSpu3fo6+ka2NrbgQAE4eCmS9xVAOW7Yq7IgA4Hpi0R8EZBhDshOnTgcOtfM0cAlTigILFDiAFFNjk8k0GZgAxOBozouIHIOyKbFixIkECmIyIHOEiEWbPJTTQ5FxcVOMCgzUVCWwAcyZJvzy45ADYVZNIwTlIAVfNB7XRVDLxEWLQ4E9JsKq+rTdsMyhcEACH5BAAKAAUALAAAAAAgACAAAAb/QIBwSCwqFIuicklMEgVHQVHKVCYUmWeUWFAkqtOtEKqgAsgFcDFyHJLNmbZa6x2Lyd8595h8C48RagJmQgtHaX5XZUYKQ4YKEYSKfVKPaUMZHwMDeQBxh04ABYSFGU4JBpsDBmFHdXMLIKofBEyKCpdgspsOoUsLXaRLCQMgwky+YJ1FC4POg8lVAg7U1Q5drtnHSw4H3t8HDdnZy2Dd4N4Nzc/QeqLW1bnM7rXuV9tEBhQQ5UoCbJDmWKBAQcMDZNhwRVNCYANBChZYEbkVCZOwASEcCDFQ4SEDIq6WTVqQIMECBx06iCACQQPBiSabHDqzRUTKARMhSFCDrc+WNQIcOoRw5+ZIHj8ADqSEQBQAwKKLhIzowEEeGKQ0owIYkPKjHihZoBKi0KFE01b4zg7h4y4IACH5BAAKAAYALAAAAAAgACAAAAb/QIBwSCwqFIuicklMEgVHQVHKVCYUmWeUWFAkqtOtEKqgAsgFcDFyHJLNmbZa6x2Lyd8595h8C48RagJmQgtHaX5XZUUJeQCGChGEin1SkGlubEhDcYdOAAWEhRlOC12HYUd1eqeRokOKCphgrY5MpotqhgWfunqPt4PCg71gpgXIyWSqqq9MBQPR0tHMzM5L0NPSC8PCxVUCyeLX38+/AFfXRA4HA+pjmoFqCAcHDQa3rbxzBRD1BwgcMFIlidMrAxYICHHA4N8DIqpsUWJ3wAEBChQaEBnQoB6RRr0uARjQocMAAA0w4nMz4IOaU0lImkSngYKFc3ZWyTwJAALGK4fnNA3ZOaQCBQ22wPgRQlSIAYwSfkHJMrQkTyEbKFzFydQq15ccOAjUEwQAIfkEAAoABwAsAAAAACAAIAAABv9AgHBILCoUi6JySUwSBUdBUcpUJhSZZ5RYUCSq060QqqACyAVwMXIcks2ZtlrrHYvJ3zn3mHwLjxFqAmZCC0dpfldlRQl5AIYKEYSKfVKQaW5sSENxh04ABYSFGU4LXYdhR3V6p5GiQ4oKmGCtjkymi2qGBZ+6eo+3g8KDvYLDxKrJuXNkys6qr0zNygvHxL/V1sVD29K/AFfRRQUDDt1PmoFqHgPtBLetvMwG7QMes0KxkkIFIQNKDhBgKvCh3gQiqmxt6NDBAAEIEAgUOHCgBBEH9Yg06uWAIQUABihQMACgBEUHTRwoUEOBIcqQI880OIDgm5ABDA8IgUkSwAAyij1/jejAARPPIQwONBCnBAJDCEOOCnFA8cOvEh1CEJEqBMIBEDaLcA3LJIEGDe/0BAEAIfkEAAoACAAsAAAAACAAIAAABv9AgHBILCoUi6JySUwSBUdBUcpUJhSZZ5RYUCSq060QqqACyAVwMXIcks2ZtlrrHYvJ3zn3mHwLjxFqAmZCC0dpfldlRQl5AIYKEYSKfVKQaW5sSENxh04ABYSFGU4LXYdhR3V6p5GiQ4oKmGCtjkymi2qGBZ+6eo+3g8KDvYLDxKrJuXNkys6qr0zNygvHxL/V1sVDDti/BQccA8yrYBAjHR0jc53LRQYU6R0UBnO4RxmiG/IjJUIJFuoVKeCBigBN5QCk43BgFgMKFCYUGDAgFEUQRGIRYbCh2xACEDcAcHDgQDcQFGf9s7VkA0QCI0t2W0DRw68h8ChAEELSJE8xijBvVqCgIU9PjwA+UNzG5AHEB9xkDpk4QMGvARQsEDlKxMCALDeLcA0rqEEDlWCCAAAh+QQACgAJACwAAAAAIAAgAAAG/0CAcEgsKhSLonJJTBIFR0FRylQmFJlnlFhQJKrTrRCqoALIBXAxchySzZm2Wusdi8nfOfeYfAuPEWoCZkILR2l+V2VFCXkAhgoRhIp9UpBpbmxIQ3GHTgAFhIUZTgtdh2FHdXqnkaJDigqYYK2OTKaLaoYFn7p6j0wOA8PEAw6/Z4PKUhwdzs8dEL9kqqrN0M7SetTVCsLFw8d6C8vKvUQEv+dVCRAaBnNQtkwPFRQUFXOduUoTG/cUNkyYg+tIBlEMAFYYMAaBuCekxmhaJeSeBgiOHhw4QECAAwcCLhGJRUQCg3RDCmyUVmBYmlOiGqmBsPGlyz9YkAlxsJEhqCubABS9AsPgQAMqLQfM0oTMwEZ4QpLOwvMLxAEEXIBG5aczqtaut4YNXRIEACH5BAAKAAoALAAAAAAgACAAAAb/QIBwSCwqFIuicklMEgVHQVHKVCYUmWeUWFAkqtOtEKqgAsgFcDFyHJLNmbZa6x2Lyd8595h8C48RahAQRQtHaX5XZUUJeQAGHR0jA0SKfVKGCmlubEhCBSGRHSQOQwVmQwsZTgtdh0UQHKIHm2quChGophuiJHO3jkwOFB2UaoYFTnMGegDKRQQG0tMGBM1nAtnaABoU3t8UD81kR+UK3eDe4nrk5grR1NLWegva9s9czfhVAgMNpWqgBGNigMGBAwzmxBGjhACEgwcgzAPTqlwGXQ8gMgAhZIGHWm5WjelUZ8jBBgPMTBgwIMGCRgsygVSkgMiHByD7DWDmx5WuMkZqDLCU4gfAq2sACrAEWFSRLjUfWDopCqDTNQIsJ1LF0yzDAA90UHV5eo0qUjB8mgUBACH5BAAKAAsALAAAAAAgACAAAAb/QIBwSCwqFIuickk0FIiCo6A4ZSoZnRBUSiwoEtYipNOBDKOKKgD9DBNHHU4brc4c3cUBeSOk949geEQUZA5rXABHEW4PD0UOZBSHaQAJiEMJgQATFBQVBkQHZKACUwtHbX0RR0mVFp0UFwRCBSQDSgsZrQteqEUPGrAQmmG9ChFqRAkMsBd4xsRLBBsUoG6nBa14E4IA2kUFDuLjDql4peilAA0H7e4H1udH8/Ps7+3xbmj0qOTj5mEWpEP3DUq3glYWOBgAcEmUaNI+DBjwAY+dS0USGJg4wABEXMYyJNvE8UOGISKVCNClah4xjg60WUKyINOCUwrMzVRARMGENWQ4n/jpNTKTm15J/CTK2e0MoD+UKmHEs4onVDVVmyqdpAbNR4cKTjqNSots07EjzzJh1S0IADsAAAAAAAAAAAA=) 50% no-repeat
}

@font-face {
    font-family: slick;
    font-style: normal;
    font-weight: 400;
    src: url(/static/media/slick.a4e97f5a2a64f0ab1323.eot);
    src: url(/static/media/slick.a4e97f5a2a64f0ab1323.eot?#iefix) format("embedded-opentype"),url(/static/media/slick.295183786cd8a1389865.woff) format("woff"),url(/static/media/slick.c94f7671dcc99dce43e2.ttf) format("truetype"),url(/static/media/slick.2630a3e3eab21c607e21.svg#slick) format("svg")
}

.slick-next,.slick-prev {
    border: none;
    cursor: pointer;
    display: block;
    font-size: 0;
    height: 20px;
    line-height: 0;
    padding: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 20px
}

.slick-next,.slick-next:focus,.slick-next:hover,.slick-prev,.slick-prev:focus,.slick-prev:hover {
    background: #0000;
    color: #0000;
    outline: none
}

.slick-next:focus:before,.slick-next:hover:before,.slick-prev:focus:before,.slick-prev:hover:before {
    opacity: 1
}

.slick-next.slick-disabled:before,.slick-prev.slick-disabled:before {
    opacity: .25
}

.slick-next:before,.slick-prev:before {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
    font-family: slick;
    font-size: 20px;
    line-height: 1;
    opacity: .75
}

.slick-prev {
    left: -25px
}

[dir=rtl] .slick-prev {
    left: auto;
    right: -25px
}

.slick-prev:before {
    content: "←"
}

[dir=rtl] .slick-prev:before {
    content: "→"
}

.slick-next {
    right: -25px
}

[dir=rtl] .slick-next {
    left: -25px;
    right: auto
}

.slick-next:before {
    content: "→"
}

[dir=rtl] .slick-next:before {
    content: "←"
}

.slick-dotted.slick-slider {
    margin-bottom: 30px
}

.slick-dots {
    bottom: -25px;
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    text-align: center;
    width: 100%
}

.slick-dots li {
    display: inline-block;
    margin: 0 5px;
    padding: 0;
    position: relative
}

.slick-dots li,.slick-dots li button {
    cursor: pointer;
    height: 20px;
    width: 20px
}

.slick-dots li button {
    background: #0000;
    border: 0;
    color: #0000;
    display: block;
    font-size: 0;
    line-height: 0;
    outline: none;
    padding: 5px
}

.slick-dots li button:focus,.slick-dots li button:hover {
    outline: none
}

.slick-dots li button:focus:before,.slick-dots li button:hover:before {
    opacity: 1
}

.slick-dots li button:before {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000;
    content: "•";
    font-family: slick;
    font-size: 6px;
    height: 20px;
    left: 0;
    line-height: 20px;
    opacity: .25;
    position: absolute;
    text-align: center;
    top: 0;
    width: 20px
}

.slick-dots li.slick-active button:before {
    color: #000;
    opacity: .75
}

:root {
    --blue: #5e72e4;
    --indigo: #5603ad;
    --purple: #8965e0;
    --pink: #f3a4b5;
    --red: #f5365c;
    --orange: #fb6340;
    --yellow: #ffd600;
    --green: #2dce89;
    --teal: #11cdef;
    --cyan: #2bffc6;
    --gray: #6c757d;
    --gray-dark: #32325d;
    --light: #ced4da;
    --lighter: #e9ecef;
    --primary: #e14eca;
    --secondary: #f4f5f7;
    --success: #00f2c3;
    --info: #1d8cf8;
    --warning: #ff8d72;
    --danger: #fd5d93;
    --light: #adb5bd;
    --dark: #212529;
    --default: #344675;
    --white: #fff;
    --neutral: #fff;
    --darker: #000;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace
}

*,:after,:before {
    box-sizing: border-box
}

html {
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(34,42,66,0);
    font-family: sans-serif;
    line-height: 1.15
}

article,aside,figcaption,figure,footer,header,hgroup,main,nav,section {
    display: block
}

body {
    background-color: #1e1e2f;
    color: #525f7f;
    font-family: Poppins,sans-serif;
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
    text-align: left
}

[tabindex="-1"]:focus:not(:focus-visible) {
    outline: 0!important
}

hr {
    box-sizing: initial;
    height: 0;
    overflow: visible
}

h1,h2,h3,h4,h5,h6 {
    margin-bottom: .5rem;
    margin-top: 0
}

p {
    margin-bottom: 1rem;
    margin-top: 0
}

abbr[data-original-title],abbr[title] {
    border-bottom: 0;
    cursor: help;
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
    -webkit-text-decoration-skip-ink: none;
    text-decoration-skip-ink: none
}

address {
    font-style: normal;
    line-height: inherit
}

address,dl,ol,ul {
    margin-bottom: 1rem
}

dl,ol,ul {
    margin-top: 0
}

ol ol,ol ul,ul ol,ul ul {
    margin-bottom: 0
}

dt {
    font-weight: 600
}

dd {
    margin-bottom: .5rem;
    margin-left: 0
}

blockquote {
    margin: 0 0 1rem
}

b,strong {
    font-weight: bolder
}

small {
    font-size: 80%
}

sub,sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: initial
}

sub {
    bottom: -.25em
}

sup {
    top: -.5em
}

a {
    background-color: #0000;
    color: #e14eca
}

a,a:hover {
    text-decoration: none
}

a:hover {
    color: #c221a9
}

a:not([href]):not([class]),a:not([href]):not([class]):hover {
    color: inherit;
    text-decoration: none
}

code,kbd,pre,samp {
    font-family: SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;
    font-size: 1em
}

pre {
    -ms-overflow-style: scrollbar;
    margin-bottom: 1rem;
    margin-top: 0;
    overflow: auto
}

figure {
    margin: 0 0 1rem
}

img {
    border-style: none
}

img,svg {
    vertical-align: middle
}

svg {
    overflow: hidden
}

table {
    border-collapse: collapse
}

caption {
    caption-side: bottom;
    color: #6c757d;
    padding-bottom: 1rem;
    padding-top: 1rem;
    text-align: left
}

th {
    text-align: inherit;
    text-align: -webkit-match-parent
}

label {
    display: inline-block;
    margin-bottom: .5rem
}

button {
    border-radius: 0
}

button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color
}

button,input,optgroup,select,textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    margin: 0
}

button,input {
    overflow: visible
}

button,select {
    text-transform: none
}

[role=button] {
    cursor: pointer
}

select {
    word-wrap: normal
}

[type=button],[type=reset],[type=submit],button {
    -webkit-appearance: button
}

[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled) {
    cursor: pointer
}

[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner {
    border-style: none;
    padding: 0
}

input[type=checkbox],input[type=radio] {
    box-sizing: border-box;
    padding: 0
}

textarea {
    overflow: auto;
    resize: vertical
}

fieldset {
    border: 0;
    margin: 0;
    min-width: 0;
    padding: 0
}

legend {
    color: inherit;
    display: block;
    font-size: 1.5rem;
    line-height: inherit;
    margin-bottom: .5rem;
    max-width: 100%;
    padding: 0;
    white-space: normal;
    width: 100%
}

progress {
    vertical-align: initial
}

[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button {
    height: auto
}

[type=search] {
    -webkit-appearance: none;
    outline-offset: -2px
}

[type=search]::-webkit-search-decoration {
    -webkit-appearance: none
}

::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit
}

output {
    display: inline-block
}

summary {
    cursor: pointer;
    display: list-item
}

template {
    display: none
}

[hidden] {
    display: none!important
}

.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6 {
    color: #32325d;
    font-family: inherit;
    font-weight: 400;
    margin-bottom: .5rem
}

.h1,h1 {
    font-size: 2.0624999938rem
}

.h2,h2 {
    font-size: 1.687499975rem
}

.h3,h3 {
    font-size: 1.437499875rem
}

.h4,h4 {
    font-size: 1.0624999875rem
}

.h5,h5 {
    font-size: .812499975rem
}

.h6,h6 {
    font-size: .74999995rem
}

.lead {
    font-size: .78125rem;
    font-weight: 300
}

.display-1 {
    font-size: 3.3rem
}

.display-1,.display-2 {
    font-weight: 600;
    line-height: 1.2
}

.display-2 {
    font-size: 2.75rem
}

.display-3 {
    font-size: 2.1875rem
}

.display-3,.display-4 {
    font-weight: 600;
    line-height: 1.2
}

.display-4 {
    font-size: 1.6275rem
}

hr {
    border: 0;
    border-top: .0625rem solid #222a421a;
    margin-bottom: 2rem;
    margin-top: 2rem
}

.small,small {
    font-size: 80%;
    font-weight: 400
}

.mark,mark {
    background-color: #fcf8e3;
    padding: .2em
}

.list-inline,.list-unstyled {
    list-style: none;
    padding-left: 0
}

.list-inline-item {
    display: inline-block
}

.list-inline-item:not(:last-child) {
    margin-right: .5rem
}

.initialism {
    font-size: 90%;
    text-transform: uppercase
}

.blockquote {
    margin-bottom: 1rem
}

.blockquote-footer {
    color: #6c757d;
    display: block;
    font-size: 80%
}

.blockquote-footer:before {
    content: "— "
}

.img-fluid,.img-thumbnail {
    height: auto;
    max-width: 100%
}

.img-thumbnail {
    background-color: #1e1e2f;
    border: .0625rem solid #e3e3e3;
    border-radius: .25rem;
    box-shadow: 0 1px 2px rgba(34,42,66,.075);
    padding: .25rem
}

.figure {
    display: inline-block
}

.figure-img {
    line-height: 1;
    margin-bottom: .5rem
}

.figure-caption {
    color: #6c757d;
    font-size: 90%
}

code {
    word-wrap: break-word;
    font-size: 87.5%
}

a>code {
    color: inherit
}

kbd {
    background-color: #212529;
    border-radius: .2857rem;
    box-shadow: inset 0 -.1rem 0 #222a4240;
    color: #fff;
    font-size: 87.5%;
    padding: .2rem .4rem
}

kbd kbd {
    box-shadow: none;
    font-size: 100%;
    font-weight: 600;
    padding: 0
}

pre {
    color: #212529;
    display: block;
    font-size: 87.5%
}

pre code {
    color: inherit;
    font-size: inherit;
    word-break: normal
}

.pre-scrollable {
    max-height: 340px;
    overflow-y: scroll
}

.container,.container-fluid,.container-lg,.container-md,.container-sm,.container-xl {
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    width: 100%
}

@media(min-width: 576px) {
    .container,.container-sm {
        max-width:540px
    }
}

@media(min-width: 768px) {
    .container,.container-md,.container-sm {
        max-width:720px
    }
}

@media(min-width: 992px) {
    .container,.container-lg,.container-md,.container-sm {
        max-width:960px
    }
}

@media(min-width: 1200px) {
    .container,.container-lg,.container-md,.container-sm,.container-xl {
        max-width:1140px
    }
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px
}

.no-gutters {
    margin-left: 0;
    margin-right: 0
}

.no-gutters>.col,.no-gutters>[class*=col-] {
    padding-left: 0;
    padding-right: 0
}

.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-auto,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-auto,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-auto,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-auto {
    padding-left: 15px;
    padding-right: 15px;
    position: relative;
    width: 100%
}

.col {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%
}

.row-cols-1>* {
    flex: 0 0 100%;
    max-width: 100%
}

.row-cols-2>* {
    flex: 0 0 50%;
    max-width: 50%
}

.row-cols-3>* {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%
}

.row-cols-4>* {
    flex: 0 0 25%;
    max-width: 25%
}

.row-cols-5>* {
    flex: 0 0 20%;
    max-width: 20%
}

.row-cols-6>* {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%
}

.col-auto {
    flex: 0 0 auto;
    max-width: 100%;
    width: auto
}

.col-1 {
    flex: 0 0 8.3333333333%;
    max-width: 8.3333333333%
}

.col-2 {
    flex: 0 0 16.6666666667%;
    max-width: 16.6666666667%
}

.col-3 {
    flex: 0 0 25%;
    max-width: 25%
}

.col-4 {
    flex: 0 0 33.3333333333%;
    max-width: 33.3333333333%
}

.col-5 {
    flex: 0 0 41.6666666667%;
    max-width: 41.6666666667%
}

.col-6 {
    flex: 0 0 50%;
    max-width: 50%
}

.col-7 {
    flex: 0 0 58.3333333333%;
    max-width: 58.3333333333%
}

.col-8 {
    flex: 0 0 66.6666666667%;
    max-width: 66.6666666667%
}

.col-9 {
    flex: 0 0 75%;
    max-width: 75%
}

.col-10 {
    flex: 0 0 83.3333333333%;
    max-width: 83.3333333333%
}

.col-11 {
    flex: 0 0 91.6666666667%;
    max-width: 91.6666666667%
}

.col-12 {
    flex: 0 0 100%;
    max-width: 100%
}

.order-first {
    order: -1
}

.order-last {
    order: 13
}

.order-0 {
    order: 0
}

.order-1 {
    order: 1
}

.order-2 {
    order: 2
}

.order-3 {
    order: 3
}

.order-4 {
    order: 4
}

.order-5 {
    order: 5
}

.order-6 {
    order: 6
}

.order-7 {
    order: 7
}

.order-8 {
    order: 8
}

.order-9 {
    order: 9
}

.order-10 {
    order: 10
}

.order-11 {
    order: 11
}

.order-12 {
    order: 12
}

.offset-1 {
    margin-left: 8.3333333333%
}

.offset-2 {
    margin-left: 16.6666666667%
}

.offset-3 {
    margin-left: 25%
}

.offset-4 {
    margin-left: 33.3333333333%
}

.offset-5 {
    margin-left: 41.6666666667%
}

.offset-6 {
    margin-left: 50%
}

.offset-7 {
    margin-left: 58.3333333333%
}

.offset-8 {
    margin-left: 66.6666666667%
}

.offset-9 {
    margin-left: 75%
}

.offset-10 {
    margin-left: 83.3333333333%
}

.offset-11 {
    margin-left: 91.6666666667%
}

@media(min-width: 576px) {
    .col-sm {
        flex-basis:0;
        flex-grow: 1;
        max-width: 100%
    }

    .row-cols-sm-1>* {
        flex: 0 0 100%;
        max-width: 100%
    }

    .row-cols-sm-2>* {
        flex: 0 0 50%;
        max-width: 50%
    }

    .row-cols-sm-3>* {
        flex: 0 0 33.3333333333%;
        max-width: 33.3333333333%
    }

    .row-cols-sm-4>* {
        flex: 0 0 25%;
        max-width: 25%
    }

    .row-cols-sm-5>* {
        flex: 0 0 20%;
        max-width: 20%
    }

    .row-cols-sm-6>* {
        flex: 0 0 16.6666666667%;
        max-width: 16.6666666667%
    }

    .col-sm-auto {
        flex: 0 0 auto;
        max-width: 100%;
        width: auto
    }

    .col-sm-1 {
        flex: 0 0 8.3333333333%;
        max-width: 8.3333333333%
    }

    .col-sm-2 {
        flex: 0 0 16.6666666667%;
        max-width: 16.6666666667%
    }

    .col-sm-3 {
        flex: 0 0 25%;
        max-width: 25%
    }

    .col-sm-4 {
        flex: 0 0 33.3333333333%;
        max-width: 33.3333333333%
    }

    .col-sm-5 {
        flex: 0 0 41.6666666667%;
        max-width: 41.6666666667%
    }

    .col-sm-6 {
        flex: 0 0 50%;
        max-width: 50%
    }

    .col-sm-7 {
        flex: 0 0 58.3333333333%;
        max-width: 58.3333333333%
    }

    .col-sm-8 {
        flex: 0 0 66.6666666667%;
        max-width: 66.6666666667%
    }

    .col-sm-9 {
        flex: 0 0 75%;
        max-width: 75%
    }

    .col-sm-10 {
        flex: 0 0 83.3333333333%;
        max-width: 83.3333333333%
    }

    .col-sm-11 {
        flex: 0 0 91.6666666667%;
        max-width: 91.6666666667%
    }

    .col-sm-12 {
        flex: 0 0 100%;
        max-width: 100%
    }

    .order-sm-first {
        order: -1
    }

    .order-sm-last {
        order: 13
    }

    .order-sm-0 {
        order: 0
    }

    .order-sm-1 {
        order: 1
    }

    .order-sm-2 {
        order: 2
    }

    .order-sm-3 {
        order: 3
    }

    .order-sm-4 {
        order: 4
    }

    .order-sm-5 {
        order: 5
    }

    .order-sm-6 {
        order: 6
    }

    .order-sm-7 {
        order: 7
    }

    .order-sm-8 {
        order: 8
    }

    .order-sm-9 {
        order: 9
    }

    .order-sm-10 {
        order: 10
    }

    .order-sm-11 {
        order: 11
    }

    .order-sm-12 {
        order: 12
    }

    .offset-sm-0 {
        margin-left: 0
    }

    .offset-sm-1 {
        margin-left: 8.3333333333%
    }

    .offset-sm-2 {
        margin-left: 16.6666666667%
    }

    .offset-sm-3 {
        margin-left: 25%
    }

    .offset-sm-4 {
        margin-left: 33.3333333333%
    }

    .offset-sm-5 {
        margin-left: 41.6666666667%
    }

    .offset-sm-6 {
        margin-left: 50%
    }

    .offset-sm-7 {
        margin-left: 58.3333333333%
    }

    .offset-sm-8 {
        margin-left: 66.6666666667%
    }

    .offset-sm-9 {
        margin-left: 75%
    }

    .offset-sm-10 {
        margin-left: 83.3333333333%
    }

    .offset-sm-11 {
        margin-left: 91.6666666667%
    }
}

@media(min-width: 768px) {
    .col-md {
        flex-basis:0;
        flex-grow: 1;
        max-width: 100%
    }

    .row-cols-md-1>* {
        flex: 0 0 100%;
        max-width: 100%
    }

    .row-cols-md-2>* {
        flex: 0 0 50%;
        max-width: 50%
    }

    .row-cols-md-3>* {
        flex: 0 0 33.3333333333%;
        max-width: 33.3333333333%
    }

    .row-cols-md-4>* {
        flex: 0 0 25%;
        max-width: 25%
    }

    .row-cols-md-5>* {
        flex: 0 0 20%;
        max-width: 20%
    }

    .row-cols-md-6>* {
        flex: 0 0 16.6666666667%;
        max-width: 16.6666666667%
    }

    .col-md-auto {
        flex: 0 0 auto;
        max-width: 100%;
        width: auto
    }

    .col-md-1 {
        flex: 0 0 8.3333333333%;
        max-width: 8.3333333333%
    }

    .col-md-2 {
        flex: 0 0 16.6666666667%;
        max-width: 16.6666666667%
    }

    .col-md-3 {
        flex: 0 0 25%;
        max-width: 25%
    }

    .col-md-4 {
        flex: 0 0 33.3333333333%;
        max-width: 33.3333333333%
    }

    .col-md-5 {
        flex: 0 0 41.6666666667%;
        max-width: 41.6666666667%
    }

    .col-md-6 {
        flex: 0 0 50%;
        max-width: 50%
    }

    .col-md-7 {
        flex: 0 0 58.3333333333%;
        max-width: 58.3333333333%
    }

    .col-md-8 {
        flex: 0 0 66.6666666667%;
        max-width: 66.6666666667%
    }

    .col-md-9 {
        flex: 0 0 75%;
        max-width: 75%
    }

    .col-md-10 {
        flex: 0 0 83.3333333333%;
        max-width: 83.3333333333%
    }

    .col-md-11 {
        flex: 0 0 91.6666666667%;
        max-width: 91.6666666667%
    }

    .col-md-12 {
        flex: 0 0 100%;
        max-width: 100%
    }

    .order-md-first {
        order: -1
    }

    .order-md-last {
        order: 13
    }

    .order-md-0 {
        order: 0
    }

    .order-md-1 {
        order: 1
    }

    .order-md-2 {
        order: 2
    }

    .order-md-3 {
        order: 3
    }

    .order-md-4 {
        order: 4
    }

    .order-md-5 {
        order: 5
    }

    .order-md-6 {
        order: 6
    }

    .order-md-7 {
        order: 7
    }

    .order-md-8 {
        order: 8
    }

    .order-md-9 {
        order: 9
    }

    .order-md-10 {
        order: 10
    }

    .order-md-11 {
        order: 11
    }

    .order-md-12 {
        order: 12
    }

    .offset-md-0 {
        margin-left: 0
    }

    .offset-md-1 {
        margin-left: 8.3333333333%
    }

    .offset-md-2 {
        margin-left: 16.6666666667%
    }

    .offset-md-3 {
        margin-left: 25%
    }

    .offset-md-4 {
        margin-left: 33.3333333333%
    }

    .offset-md-5 {
        margin-left: 41.6666666667%
    }

    .offset-md-6 {
        margin-left: 50%
    }

    .offset-md-7 {
        margin-left: 58.3333333333%
    }

    .offset-md-8 {
        margin-left: 66.6666666667%
    }

    .offset-md-9 {
        margin-left: 75%
    }

    .offset-md-10 {
        margin-left: 83.3333333333%
    }

    .offset-md-11 {
        margin-left: 91.6666666667%
    }
}

@media(min-width: 992px) {
    .col-lg {
        flex-basis:0;
        flex-grow: 1;
        max-width: 100%
    }

    .row-cols-lg-1>* {
        flex: 0 0 100%;
        max-width: 100%
    }

    .row-cols-lg-2>* {
        flex: 0 0 50%;
        max-width: 50%
    }

    .row-cols-lg-3>* {
        flex: 0 0 33.3333333333%;
        max-width: 33.3333333333%
    }

    .row-cols-lg-4>* {
        flex: 0 0 25%;
        max-width: 25%
    }

    .row-cols-lg-5>* {
        flex: 0 0 20%;
        max-width: 20%
    }

    .row-cols-lg-6>* {
        flex: 0 0 16.6666666667%;
        max-width: 16.6666666667%
    }

    .col-lg-auto {
        flex: 0 0 auto;
        max-width: 100%;
        width: auto
    }

    .col-lg-1 {
        flex: 0 0 8.3333333333%;
        max-width: 8.3333333333%
    }

    .col-lg-2 {
        flex: 0 0 16.6666666667%;
        max-width: 16.6666666667%
    }

    .col-lg-3 {
        flex: 0 0 25%;
        max-width: 25%
    }

    .col-lg-4 {
        flex: 0 0 33.3333333333%;
        max-width: 33.3333333333%
    }

    .col-lg-5 {
        flex: 0 0 41.6666666667%;
        max-width: 41.6666666667%
    }

    .col-lg-6 {
        flex: 0 0 50%;
        max-width: 50%
    }

    .col-lg-7 {
        flex: 0 0 58.3333333333%;
        max-width: 58.3333333333%
    }

    .col-lg-8 {
        flex: 0 0 66.6666666667%;
        max-width: 66.6666666667%
    }

    .col-lg-9 {
        flex: 0 0 75%;
        max-width: 75%
    }

    .col-lg-10 {
        flex: 0 0 83.3333333333%;
        max-width: 83.3333333333%
    }

    .col-lg-11 {
        flex: 0 0 91.6666666667%;
        max-width: 91.6666666667%
    }

    .col-lg-12 {
        flex: 0 0 100%;
        max-width: 100%
    }

    .order-lg-first {
        order: -1
    }

    .order-lg-last {
        order: 13
    }

    .order-lg-0 {
        order: 0
    }

    .order-lg-1 {
        order: 1
    }

    .order-lg-2 {
        order: 2
    }

    .order-lg-3 {
        order: 3
    }

    .order-lg-4 {
        order: 4
    }

    .order-lg-5 {
        order: 5
    }

    .order-lg-6 {
        order: 6
    }

    .order-lg-7 {
        order: 7
    }

    .order-lg-8 {
        order: 8
    }

    .order-lg-9 {
        order: 9
    }

    .order-lg-10 {
        order: 10
    }

    .order-lg-11 {
        order: 11
    }

    .order-lg-12 {
        order: 12
    }

    .offset-lg-0 {
        margin-left: 0
    }

    .offset-lg-1 {
        margin-left: 8.3333333333%
    }

    .offset-lg-2 {
        margin-left: 16.6666666667%
    }

    .offset-lg-3 {
        margin-left: 25%
    }

    .offset-lg-4 {
        margin-left: 33.3333333333%
    }

    .offset-lg-5 {
        margin-left: 41.6666666667%
    }

    .offset-lg-6 {
        margin-left: 50%
    }

    .offset-lg-7 {
        margin-left: 58.3333333333%
    }

    .offset-lg-8 {
        margin-left: 66.6666666667%
    }

    .offset-lg-9 {
        margin-left: 75%
    }

    .offset-lg-10 {
        margin-left: 83.3333333333%
    }

    .offset-lg-11 {
        margin-left: 91.6666666667%
    }
}

@media(min-width: 1200px) {
    .col-xl {
        flex-basis:0;
        flex-grow: 1;
        max-width: 100%
    }

    .row-cols-xl-1>* {
        flex: 0 0 100%;
        max-width: 100%
    }

    .row-cols-xl-2>* {
        flex: 0 0 50%;
        max-width: 50%
    }

    .row-cols-xl-3>* {
        flex: 0 0 33.3333333333%;
        max-width: 33.3333333333%
    }

    .row-cols-xl-4>* {
        flex: 0 0 25%;
        max-width: 25%
    }

    .row-cols-xl-5>* {
        flex: 0 0 20%;
        max-width: 20%
    }

    .row-cols-xl-6>* {
        flex: 0 0 16.6666666667%;
        max-width: 16.6666666667%
    }

    .col-xl-auto {
        flex: 0 0 auto;
        max-width: 100%;
        width: auto
    }

    .col-xl-1 {
        flex: 0 0 8.3333333333%;
        max-width: 8.3333333333%
    }

    .col-xl-2 {
        flex: 0 0 16.6666666667%;
        max-width: 16.6666666667%
    }

    .col-xl-3 {
        flex: 0 0 25%;
        max-width: 25%
    }

    .col-xl-4 {
        flex: 0 0 33.3333333333%;
        max-width: 33.3333333333%
    }

    .col-xl-5 {
        flex: 0 0 41.6666666667%;
        max-width: 41.6666666667%
    }

    .col-xl-6 {
        flex: 0 0 50%;
        max-width: 50%
    }

    .col-xl-7 {
        flex: 0 0 58.3333333333%;
        max-width: 58.3333333333%
    }

    .col-xl-8 {
        flex: 0 0 66.6666666667%;
        max-width: 66.6666666667%
    }

    .col-xl-9 {
        flex: 0 0 75%;
        max-width: 75%
    }

    .col-xl-10 {
        flex: 0 0 83.3333333333%;
        max-width: 83.3333333333%
    }

    .col-xl-11 {
        flex: 0 0 91.6666666667%;
        max-width: 91.6666666667%
    }

    .col-xl-12 {
        flex: 0 0 100%;
        max-width: 100%
    }

    .order-xl-first {
        order: -1
    }

    .order-xl-last {
        order: 13
    }

    .order-xl-0 {
        order: 0
    }

    .order-xl-1 {
        order: 1
    }

    .order-xl-2 {
        order: 2
    }

    .order-xl-3 {
        order: 3
    }

    .order-xl-4 {
        order: 4
    }

    .order-xl-5 {
        order: 5
    }

    .order-xl-6 {
        order: 6
    }

    .order-xl-7 {
        order: 7
    }

    .order-xl-8 {
        order: 8
    }

    .order-xl-9 {
        order: 9
    }

    .order-xl-10 {
        order: 10
    }

    .order-xl-11 {
        order: 11
    }

    .order-xl-12 {
        order: 12
    }

    .offset-xl-0 {
        margin-left: 0
    }

    .offset-xl-1 {
        margin-left: 8.3333333333%
    }

    .offset-xl-2 {
        margin-left: 16.6666666667%
    }

    .offset-xl-3 {
        margin-left: 25%
    }

    .offset-xl-4 {
        margin-left: 33.3333333333%
    }

    .offset-xl-5 {
        margin-left: 41.6666666667%
    }

    .offset-xl-6 {
        margin-left: 50%
    }

    .offset-xl-7 {
        margin-left: 58.3333333333%
    }

    .offset-xl-8 {
        margin-left: 66.6666666667%
    }

    .offset-xl-9 {
        margin-left: 75%
    }

    .offset-xl-10 {
        margin-left: 83.3333333333%
    }

    .offset-xl-11 {
        margin-left: 91.6666666667%
    }
}

.table {
    background-color: #0000;
    color: #525f7f;
    margin-bottom: 1rem;
    width: 100%
}

.table td,.table th {
    border-top: .0625rem solid #e3e3e3;
    padding: 1rem;
    vertical-align: top
}

.table thead th {
    border-bottom: .125rem solid #e3e3e3;
    vertical-align: bottom
}

.table tbody+tbody {
    border-top: .125rem solid #e3e3e3
}

.table-sm td,.table-sm th {
    padding: .3rem
}

.table-bordered,.table-bordered td,.table-bordered th {
    border: .0625rem solid #e3e3e3
}

.table-bordered thead td,.table-bordered thead th {
    border-bottom-width: .125rem
}

.table-borderless tbody+tbody,.table-borderless td,.table-borderless th,.table-borderless thead th {
    border: 0
}

.table-striped tbody tr:nth-of-type(odd) {
    background-color: #222a420d
}

.table-hover tbody tr:hover {
    background-color: rgba(34,42,66,.075);
    color: #525f7f
}

.table-primary,.table-primary>td,.table-primary>th {
    background-color: #f7cdf0
}

.table-primary tbody+tbody,.table-primary td,.table-primary th,.table-primary thead th {
    border-color: #efa3e3
}

.table-hover .table-primary:hover,.table-hover .table-primary:hover>td,.table-hover .table-primary:hover>th {
    background-color: #f3b7e9
}

.table-secondary,.table-secondary>td,.table-secondary>th {
    background-color: #fcfcfd
}

.table-secondary tbody+tbody,.table-secondary td,.table-secondary th,.table-secondary thead th {
    border-color: #f9fafb
}

.table-hover .table-secondary:hover,.table-hover .table-secondary:hover>td,.table-hover .table-secondary:hover>th {
    background-color: #ededf3
}

.table-success,.table-success>td,.table-success>th {
    background-color: #b8fbee
}

.table-success tbody+tbody,.table-success td,.table-success th,.table-success thead th {
    border-color: #7af8e0
}

.table-hover .table-success:hover,.table-hover .table-success:hover>td,.table-hover .table-success:hover>th {
    background-color: #a0fae8
}

.table-info,.table-info>td,.table-info>th {
    background-color: #c0dffd
}

.table-info tbody+tbody,.table-info td,.table-info th,.table-info thead th {
    border-color: #89c3fb
}

.table-hover .table-info:hover,.table-hover .table-info:hover>td,.table-hover .table-info:hover>th {
    background-color: #a7d2fc
}

.table-warning,.table-warning>td,.table-warning>th {
    background-color: #ffdfd8
}

.table-warning tbody+tbody,.table-warning td,.table-warning th,.table-warning thead th {
    border-color: #ffc4b6
}

.table-hover .table-warning:hover,.table-hover .table-warning:hover>td,.table-hover .table-warning:hover>th {
    background-color: #ffcabf
}

.table-danger,.table-danger>td,.table-danger>th {
    background-color: #fed2e1
}

.table-danger tbody+tbody,.table-danger td,.table-danger th,.table-danger thead th {
    border-color: #feabc7
}

.table-hover .table-danger:hover,.table-hover .table-danger:hover>td,.table-hover .table-danger:hover>th {
    background-color: #fdb9d0
}

.table-light,.table-light>td,.table-light>th {
    background-color: #e8eaed
}

.table-light tbody+tbody,.table-light td,.table-light th,.table-light thead th {
    border-color: #d4d9dd
}

.table-hover .table-light:hover,.table-hover .table-light:hover>td,.table-hover .table-light:hover>th {
    background-color: #dadde2
}

.table-dark,.table-dark>td,.table-dark>th {
    background-color: #c1c2c3
}

.table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th {
    border-color: #8c8e90
}

.table-hover .table-dark:hover,.table-hover .table-dark:hover>td,.table-hover .table-dark:hover>th {
    background-color: #b4b5b6
}

.table-default,.table-default>td,.table-default>th {
    background-color: #c6cbd8
}

.table-default tbody+tbody,.table-default td,.table-default th,.table-default thead th {
    border-color: #959fb7
}

.table-hover .table-default:hover,.table-hover .table-default:hover>td,.table-hover .table-default:hover>th {
    background-color: #b7bdce
}

.table-white,.table-white>td,.table-white>th {
    background-color: #fff
}

.table-white tbody+tbody,.table-white td,.table-white th,.table-white thead th {
    border-color: #fff
}

.table-hover .table-white:hover,.table-hover .table-white:hover>td,.table-hover .table-white:hover>th {
    background-color: #f2f2f2
}

.table-neutral,.table-neutral>td,.table-neutral>th {
    background-color: #fff
}

.table-neutral tbody+tbody,.table-neutral td,.table-neutral th,.table-neutral thead th {
    border-color: #fff
}

.table-hover .table-neutral:hover,.table-hover .table-neutral:hover>td,.table-hover .table-neutral:hover>th {
    background-color: #f2f2f2
}

.table-darker,.table-darker>td,.table-darker>th {
    background-color: #b8b8b8
}

.table-darker tbody+tbody,.table-darker td,.table-darker th,.table-darker thead th {
    border-color: #7a7a7a
}

.table-hover .table-darker:hover,.table-hover .table-darker:hover>td,.table-hover .table-darker:hover>th {
    background-color: #ababab
}

.table-active,.table-active>td,.table-active>th {
    background-color: rgba(34,42,66,.075)
}

.table-hover .table-active:hover,.table-hover .table-active:hover>td,.table-hover .table-active:hover>th {
    background-color: rgba(25,31,49,.075)
}

.table .thead-dark th {
    background-color: #212529;
    border-color: #32383e;
    color: #1e1e2f
}

.table .thead-light th {
    background-color: #e9ecef;
    border-color: #e3e3e3;
    color: #525f7f
}

.table-dark {
    background-color: #212529;
    color: #1e1e2f
}

.table-dark td,.table-dark th,.table-dark thead th {
    border-color: #32383e
}

.table-dark.table-bordered {
    border: 0
}

.table-dark.table-striped tbody tr:nth-of-type(odd) {
    background-color: #ffffff0d
}

.table-dark.table-hover tbody tr:hover {
    background-color: hsla(0,0%,100%,.075);
    color: #1e1e2f
}

@media(max-width: 575.98px) {
    .table-responsive-sm {
        -webkit-overflow-scrolling:touch;
        display: block;
        overflow-x: auto;
        width: 100%
    }

    .table-responsive-sm>.table-bordered {
        border: 0
    }
}

@media(max-width: 767.98px) {
    .table-responsive-md {
        -webkit-overflow-scrolling:touch;
        display: block;
        overflow-x: auto;
        width: 100%
    }

    .table-responsive-md>.table-bordered {
        border: 0
    }
}

@media(max-width: 991.98px) {
    .table-responsive-lg {
        -webkit-overflow-scrolling:touch;
        display: block;
        overflow-x: auto;
        width: 100%
    }

    .table-responsive-lg>.table-bordered {
        border: 0
    }
}

@media(max-width: 1199.98px) {
    .table-responsive-xl {
        -webkit-overflow-scrolling:touch;
        display: block;
        overflow-x: auto;
        width: 100%
    }

    .table-responsive-xl>.table-bordered {
        border: 0
    }
}

.table-responsive {
    -webkit-overflow-scrolling: touch;
    display: block;
    overflow-x: auto;
    width: 100%
}

.table-responsive>.table-bordered {
    border: 0
}

.form-control {
    background-clip: padding-box;
    background-color: #0000;
    border: 1px solid #cad1d7;
    border-radius: .25rem;
    box-shadow: none;
    color: #fffc;
    display: block;
    font-size: .875rem;
    font-weight: 400;
    height: calc(2.25rem + 2px);
    line-height: 1.428571;
    padding: .5rem .7rem;
    transition: all .2s cubic-bezier(.68,-.55,.265,1.55);
    width: 100%
}

@media(prefers-reduced-motion:reduce) {
    .form-control {
        transition: none
    }
}

.form-control::-ms-expand {
    background-color: #0000;
    border: 0
}

.form-control:-moz-focusring {
    color: #0000;
    text-shadow: 0 0 0 #fffc
}

.form-control:focus {
    background-color: #fff;
    border-color: #3297d340;
    color: #fffc;
    outline: 0
}

.form-control::placeholder {
    color: #adb5bd;
    opacity: 1
}

.form-control:disabled,.form-control[readonly] {
    background-color: #e9ecef;
    opacity: 1
}

input[type=date].form-control,input[type=datetime-local].form-control,input[type=month].form-control,input[type=time].form-control {
    -webkit-appearance: none;
    appearance: none
}

select.form-control:focus::-ms-value {
    background-color: #0000;
    color: #fffc
}

.form-control-file,.form-control-range {
    display: block;
    width: 100%
}

.col-form-label {
    font-size: inherit;
    line-height: 1.428571;
    margin-bottom: 0;
    padding-bottom: calc(.5rem + 1px);
    padding-top: calc(.5rem + 1px)
}

.col-form-label-lg {
    font-size: .875rem;
    line-height: 1.35;
    padding-bottom: calc(.875rem + 1px);
    padding-top: calc(.875rem + 1px)
}

.col-form-label-sm {
    font-size: .75rem;
    line-height: 1.35;
    padding-bottom: calc(.25rem + 1px);
    padding-top: calc(.25rem + 1px)
}

.form-control-plaintext {
    background-color: #0000;
    border: solid #0000;
    border-width: 1px 0;
    color: #525f7f;
    display: block;
    font-size: .875rem;
    line-height: 1.428571;
    margin-bottom: 0;
    padding: .5rem 0;
    width: 100%
}

.form-control-plaintext.form-control-lg,.form-control-plaintext.form-control-sm {
    padding-left: 0;
    padding-right: 0
}

.form-control-sm {
    border-radius: .2857rem;
    font-size: .75rem;
    height: calc(1.35em + .5rem + 2px);
    line-height: 1.35;
    padding: .25rem .5rem
}

.form-control-lg {
    border-radius: .4285rem;
    font-size: .875rem;
    height: calc(1.35em + 1.75rem + 2px);
    line-height: 1.35;
    padding: .875rem 1rem
}

select.form-control[multiple],select.form-control[size],textarea.form-control {
    height: auto
}

.form-group {
    margin-bottom: 1rem
}

.form-text {
    display: block;
    margin-top: .25rem
}

.form-row {
    display: flex;
    flex-wrap: wrap;
    margin-left: -5px;
    margin-right: -5px
}

.form-row>.col,.form-row>[class*=col-] {
    padding-left: 5px;
    padding-right: 5px
}

.form-check {
    display: block;
    padding-left: 1.25rem;
    position: relative
}

.form-check-input {
    margin-left: -1.25rem;
    margin-top: .3rem;
    position: absolute
}

.form-check-input:disabled~.form-check-label,.form-check-input[disabled]~.form-check-label {
    color: #6c757d
}

.form-check-label {
    margin-bottom: 0
}

.form-check-inline {
    align-items: center;
    display: inline-flex;
    margin-right: .75rem;
    padding-left: 0
}

.form-check-inline .form-check-input {
    margin-left: 0;
    margin-right: .3125rem;
    margin-top: 0;
    position: static
}

.valid-feedback {
    color: #00f2c3;
    display: none;
    font-size: 80%;
    margin-top: .25rem;
    width: 100%
}

.valid-tooltip {
    background-color: #00f2c3e6;
    border-radius: .25rem;
    color: #fff;
    display: none;
    font-size: .7500000025rem;
    left: 0;
    line-height: 1.5;
    margin-top: .1rem;
    max-width: 100%;
    padding: .25rem .5rem;
    position: absolute;
    top: 100%;
    z-index: 5
}

.is-valid~.valid-feedback,.is-valid~.valid-tooltip,.was-validated :valid~.valid-feedback,.was-validated :valid~.valid-tooltip {
    display: block
}

.form-control.is-valid,.was-validated .form-control:valid {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath fill='%2300f2c3' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E");
    background-position: right calc(.35714em + .25rem) center;
    background-repeat: no-repeat;
    background-size: calc(.71429em + .5rem) calc(.71429em + .5rem);
    border-color: #00f2c3;
    padding-right: 2.249999625rem
}

.form-control.is-valid:focus,.was-validated .form-control:valid:focus {
    border-color: #00f2c3;
    box-shadow: 0 0 0 0 #00f2c340
}

.was-validated textarea.form-control:valid,textarea.form-control.is-valid {
    background-position: top calc(.35714em + .25rem) right calc(.35714em + .25rem);
    padding-right: 2.249999625rem
}

.custom-select.is-valid,.was-validated .custom-select:valid {
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%2332325d' d='M2 0 0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right .7rem center/8px 10px,url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath fill='%2300f2c3' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E") #0000 no-repeat center right 1.7rem/calc(.71429em + .5rem) calc(.71429em + .5rem);
    border-color: #00f2c3;
    padding-right: calc(.75em + 2.45rem)
}

.custom-select.is-valid:focus,.was-validated .custom-select:valid:focus {
    border-color: #00f2c3;
    box-shadow: 0 0 0 0 #00f2c340
}

.form-check-input.is-valid~.form-check-label,.was-validated .form-check-input:valid~.form-check-label {
    color: #00f2c3
}

.form-check-input.is-valid~.valid-feedback,.form-check-input.is-valid~.valid-tooltip,.was-validated .form-check-input:valid~.valid-feedback,.was-validated .form-check-input:valid~.valid-tooltip {
    display: block
}

.custom-control-input.is-valid~.custom-control-label,.was-validated .custom-control-input:valid~.custom-control-label {
    color: #00f2c3
}

.custom-control-input.is-valid~.custom-control-label:before,.was-validated .custom-control-input:valid~.custom-control-label:before {
    border-color: #00f2c3
}

.custom-control-input.is-valid:checked~.custom-control-label:before,.was-validated .custom-control-input:valid:checked~.custom-control-label:before {
    background-color: #26ffd5;
    border-color: #26ffd5
}

.custom-control-input.is-valid:focus~.custom-control-label:before,.was-validated .custom-control-input:valid:focus~.custom-control-label:before {
    box-shadow: 0 0 0 0 #00f2c340
}

.custom-control-input.is-valid:focus:not(:checked)~.custom-control-label:before,.custom-file-input.is-valid~.custom-file-label,.was-validated .custom-control-input:valid:focus:not(:checked)~.custom-control-label:before,.was-validated .custom-file-input:valid~.custom-file-label {
    border-color: #00f2c3
}

.custom-file-input.is-valid:focus~.custom-file-label,.was-validated .custom-file-input:valid:focus~.custom-file-label {
    border-color: #00f2c3;
    box-shadow: 0 0 0 0 #00f2c340
}

.invalid-feedback {
    color: #ff8d72;
    display: none;
    font-size: 80%;
    margin-top: .25rem;
    width: 100%
}

.invalid-tooltip {
    background-color: #ff8d72e6;
    border-radius: .25rem;
    color: #fff;
    display: none;
    font-size: .7500000025rem;
    left: 0;
    line-height: 1.5;
    margin-top: .1rem;
    max-width: 100%;
    padding: .25rem .5rem;
    position: absolute;
    top: 100%;
    z-index: 5
}

.is-invalid~.invalid-feedback,.is-invalid~.invalid-tooltip,.was-validated :invalid~.invalid-feedback,.was-validated :invalid~.invalid-tooltip {
    display: block
}

.form-control.is-invalid,.was-validated .form-control:invalid {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23ff8d72'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23ff8d72' stroke='none'/%3E%3C/svg%3E");
    background-position: right calc(.35714em + .25rem) center;
    background-repeat: no-repeat;
    background-size: calc(.71429em + .5rem) calc(.71429em + .5rem);
    border-color: #ff8d72;
    padding-right: 2.249999625rem
}

.form-control.is-invalid:focus,.was-validated .form-control:invalid:focus {
    border-color: #ff8d72;
    box-shadow: 0 0 0 0 #ff8d7240
}

.was-validated textarea.form-control:invalid,textarea.form-control.is-invalid {
    background-position: top calc(.35714em + .25rem) right calc(.35714em + .25rem);
    padding-right: 2.249999625rem
}

.custom-select.is-invalid,.was-validated .custom-select:invalid {
    background: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%2332325d' d='M2 0 0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right .7rem center/8px 10px,url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23ff8d72'%3E%3Ccircle cx='6' cy='6' r='4.5'/%3E%3Cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3E%3Ccircle cx='6' cy='8.2' r='.6' fill='%23ff8d72' stroke='none'/%3E%3C/svg%3E") #0000 no-repeat center right 1.7rem/calc(.71429em + .5rem) calc(.71429em + .5rem);
    border-color: #ff8d72;
    padding-right: calc(.75em + 2.45rem)
}

.custom-select.is-invalid:focus,.was-validated .custom-select:invalid:focus {
    border-color: #ff8d72;
    box-shadow: 0 0 0 0 #ff8d7240
}

.form-check-input.is-invalid~.form-check-label,.was-validated .form-check-input:invalid~.form-check-label {
    color: #ff8d72
}

.form-check-input.is-invalid~.invalid-feedback,.form-check-input.is-invalid~.invalid-tooltip,.was-validated .form-check-input:invalid~.invalid-feedback,.was-validated .form-check-input:invalid~.invalid-tooltip {
    display: block
}

.custom-control-input.is-invalid~.custom-control-label,.was-validated .custom-control-input:invalid~.custom-control-label {
    color: #ff8d72
}

.custom-control-input.is-invalid~.custom-control-label:before,.was-validated .custom-control-input:invalid~.custom-control-label:before {
    border-color: #ff8d72
}

.custom-control-input.is-invalid:checked~.custom-control-label:before,.was-validated .custom-control-input:invalid:checked~.custom-control-label:before {
    background-color: #ffb6a5;
    border-color: #ffb6a5
}

.custom-control-input.is-invalid:focus~.custom-control-label:before,.was-validated .custom-control-input:invalid:focus~.custom-control-label:before {
    box-shadow: 0 0 0 0 #ff8d7240
}

.custom-control-input.is-invalid:focus:not(:checked)~.custom-control-label:before,.custom-file-input.is-invalid~.custom-file-label,.was-validated .custom-control-input:invalid:focus:not(:checked)~.custom-control-label:before,.was-validated .custom-file-input:invalid~.custom-file-label {
    border-color: #ff8d72
}

.custom-file-input.is-invalid:focus~.custom-file-label,.was-validated .custom-file-input:invalid:focus~.custom-file-label {
    border-color: #ff8d72;
    box-shadow: 0 0 0 0 #ff8d7240
}

.form-inline {
    align-items: center;
    display: flex;
    flex-flow: row wrap
}

.form-inline .form-check {
    width: 100%
}

@media(min-width: 576px) {
    .form-inline label {
        justify-content:center
    }

    .form-inline .form-group,.form-inline label {
        align-items: center;
        display: flex;
        margin-bottom: 0
    }

    .form-inline .form-group {
        flex: 0 0 auto;
        flex-flow: row wrap
    }

    .form-inline .form-control {
        display: inline-block;
        vertical-align: middle;
        width: auto
    }

    .form-inline .form-control-plaintext {
        display: inline-block
    }

    .form-inline .custom-select,.form-inline .input-group {
        width: auto
    }

    .form-inline .form-check {
        align-items: center;
        display: flex;
        justify-content: center;
        padding-left: 0;
        width: auto
    }

    .form-inline .form-check-input {
        flex-shrink: 0;
        margin-left: 0;
        margin-right: .25rem;
        margin-top: 0;
        position: relative
    }

    .form-inline .custom-control {
        align-items: center;
        justify-content: center
    }

    .form-inline .custom-control-label {
        margin-bottom: 0
    }
}

.btn {
    background-color: #0000;
    border: 1px solid #0000;
    border-radius: .25rem;
    color: #525f7f;
    display: inline-block;
    font-size: .875rem;
    font-weight: 600;
    line-height: 1.35em;
    padding: 11px 40px;
    text-align: center;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    -webkit-user-select: none;
    user-select: none;
    vertical-align: middle
}

@media(prefers-reduced-motion:reduce) {
    .btn {
        transition: none
    }
}

.btn:hover {
    color: #525f7f;
    text-decoration: none
}

.btn.focus,.btn:focus {
    box-shadow: 0 7px 14px #32325d1a,0 3px 6px #00000014;
    outline: 0
}

.btn.disabled,.btn:disabled {
    box-shadow: none;
    opacity: .65
}

.btn:not(:disabled):not(.disabled) {
    cursor: pointer
}

.btn:not(:disabled):not(.disabled).active,.btn:not(:disabled):not(.disabled):active {
    box-shadow: none
}

.btn:not(:disabled):not(.disabled).active:focus,.btn:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 7px 14px #32325d1a,0 3px 6px #00000014
}

a.btn.disabled,fieldset:disabled a.btn {
    pointer-events: none
}

.btn-primary {
    border-color: #e14eca;
    box-shadow: 0 4px 6px #32325d1c,0 1px 3px #00000014
}

.btn-primary.focus,.btn-primary:focus,.btn-primary:hover {
    background-color: #db2dc0;
    border-color: #d725bb;
    color: #fff
}

.btn-primary.focus,.btn-primary:focus {
    box-shadow: 0 4px 6px #32325d1c,0 1px 3px #00000014,0 0 0 0 #e669d280
}

.btn-primary.disabled,.btn-primary:disabled {
    background-color: #e14eca;
    border-color: #e14eca;
    color: #fff
}

.btn-primary:not(:disabled):not(.disabled).active,.btn-primary:not(:disabled):not(.disabled):active,.show>.btn-primary.dropdown-toggle {
    background-color: #d725bb;
    border-color: #cd23b2;
    color: #fff
}

.btn-primary:not(:disabled):not(.disabled).active:focus,.btn-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-primary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0 #e669d280
}

.btn-secondary {
    background-color: #f4f5f7;
    border-color: #f4f5f7;
    box-shadow: 0 4px 6px #32325d1c,0 1px 3px #00000014;
    color: #212529
}

.btn-secondary.focus,.btn-secondary:focus,.btn-secondary:hover {
    background-color: #dee1e7;
    border-color: #d6dae2;
    color: #212529
}

.btn-secondary.focus,.btn-secondary:focus {
    box-shadow: 0 4px 6px #32325d1c,0 1px 3px #00000014,0 0 0 0 #d4d6d880
}

.btn-secondary.disabled,.btn-secondary:disabled {
    background-color: #f4f5f7;
    border-color: #f4f5f7;
    color: #212529
}

.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle {
    background-color: #d6dae2;
    border-color: #cfd3dc;
    color: #212529
}

.btn-secondary:not(:disabled):not(.disabled).active:focus,.btn-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-secondary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0 #d4d6d880
}

.btn-success {
    border-color: #00f2c3;
    box-shadow: 0 4px 6px #32325d1c,0 1px 3px #00000014
}

.btn-success.focus,.btn-success:focus,.btn-success:hover {
    background-color: #00cca4;
    border-color: #00bf9a;
    color: #fff
}

.btn-success.focus,.btn-success:focus {
    box-shadow: 0 4px 6px #32325d1c,0 1px 3px #00000014,0 0 0 0 #26f4cc80
}

.btn-success.disabled,.btn-success:disabled {
    background-color: #00f2c3;
    border-color: #00f2c3;
    color: #fff
}

.btn-success:not(:disabled):not(.disabled).active,.btn-success:not(:disabled):not(.disabled):active,.show>.btn-success.dropdown-toggle {
    background-color: #00bf9a;
    border-color: #00b290;
    color: #fff
}

.btn-success:not(:disabled):not(.disabled).active:focus,.btn-success:not(:disabled):not(.disabled):active:focus,.show>.btn-success.dropdown-toggle:focus {
    box-shadow: 0 0 0 0 #26f4cc80
}

.btn-info {
    border-color: #1d8cf8;
    box-shadow: 0 4px 6px #32325d1c,0 1px 3px #00000014
}

.btn-info.focus,.btn-info:focus,.btn-info:hover {
    background-color: #0779e8;
    border-color: #0772db;
    color: #fff
}

.btn-info.focus,.btn-info:focus {
    box-shadow: 0 4px 6px #32325d1c,0 1px 3px #00000014,0 0 0 0 #3f9df980
}

.btn-info.disabled,.btn-info:disabled {
    background-color: #1d8cf8;
    border-color: #1d8cf8;
    color: #fff
}

.btn-info:not(:disabled):not(.disabled).active,.btn-info:not(:disabled):not(.disabled):active,.show>.btn-info.dropdown-toggle {
    background-color: #0772db;
    border-color: #066ccf;
    color: #fff
}

.btn-info:not(:disabled):not(.disabled).active:focus,.btn-info:not(:disabled):not(.disabled):active:focus,.show>.btn-info.dropdown-toggle:focus {
    box-shadow: 0 0 0 0 #3f9df980
}

.btn-warning {
    border-color: #ff8d72;
    box-shadow: 0 4px 6px #32325d1c,0 1px 3px #00000014
}

.btn-warning.focus,.btn-warning:focus,.btn-warning:hover {
    background-color: #ff6e4c;
    border-color: #ff643f;
    color: #fff
}

.btn-warning.focus,.btn-warning:focus {
    box-shadow: 0 4px 6px #32325d1c,0 1px 3px #00000014,0 0 0 0 #ff9e8780
}

.btn-warning.disabled,.btn-warning:disabled {
    background-color: #ff8d72;
    border-color: #ff8d72;
    color: #fff
}

.btn-warning:not(:disabled):not(.disabled).active,.btn-warning:not(:disabled):not(.disabled):active,.show>.btn-warning.dropdown-toggle {
    background-color: #ff643f;
    border-color: #ff5932;
    color: #fff
}

.btn-warning:not(:disabled):not(.disabled).active:focus,.btn-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-warning.dropdown-toggle:focus {
    box-shadow: 0 0 0 0 #ff9e8780
}

.btn-danger {
    border-color: #fd5d93;
    box-shadow: 0 4px 6px #32325d1c,0 1px 3px #00000014
}

.btn-danger.focus,.btn-danger:focus,.btn-danger:hover {
    background-color: #fd377a;
    border-color: #fc2b71;
    color: #fff
}

.btn-danger.focus,.btn-danger:focus {
    box-shadow: 0 4px 6px #32325d1c,0 1px 3px #00000014,0 0 0 0 #fd75a380
}

.btn-danger.disabled,.btn-danger:disabled {
    background-color: #fd5d93;
    border-color: #fd5d93;
    color: #fff
}

.btn-danger:not(:disabled):not(.disabled).active,.btn-danger:not(:disabled):not(.disabled):active,.show>.btn-danger.dropdown-toggle {
    background-color: #fc2b71;
    border-color: #fc1e69;
    color: #fff
}

.btn-danger:not(:disabled):not(.disabled).active:focus,.btn-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-danger.dropdown-toggle:focus {
    box-shadow: 0 0 0 0 #fd75a380
}

.btn-light {
    background-color: #adb5bd;
    border-color: #adb5bd;
    box-shadow: 0 4px 6px #32325d1c,0 1px 3px #00000014;
    color: #fff
}

.btn-light.focus,.btn-light:focus,.btn-light:hover {
    background-color: #98a2ac;
    border-color: #919ca6;
    color: #fff
}

.btn-light.focus,.btn-light:focus {
    box-shadow: 0 4px 6px #32325d1c,0 1px 3px #00000014,0 0 0 0 #b9c0c780
}

.btn-light.disabled,.btn-light:disabled {
    background-color: #adb5bd;
    border-color: #adb5bd;
    color: #fff
}

.btn-light:not(:disabled):not(.disabled).active,.btn-light:not(:disabled):not(.disabled):active,.show>.btn-light.dropdown-toggle {
    background-color: #919ca6;
    border-color: #8a95a1;
    color: #fff
}

.btn-light:not(:disabled):not(.disabled).active:focus,.btn-light:not(:disabled):not(.disabled):active:focus,.show>.btn-light.dropdown-toggle:focus {
    box-shadow: 0 0 0 0 #b9c0c780
}

.btn-dark {
    background-color: #212529;
    border-color: #212529;
    box-shadow: 0 4px 6px #32325d1c,0 1px 3px #00000014;
    color: #fff
}

.btn-dark.focus,.btn-dark:focus,.btn-dark:hover {
    background-color: #101214;
    border-color: #0a0c0d;
    color: #fff
}

.btn-dark.focus,.btn-dark:focus {
    box-shadow: 0 4px 6px #32325d1c,0 1px 3px #00000014,0 0 0 0 #42464980
}

.btn-dark.disabled,.btn-dark:disabled {
    background-color: #212529;
    border-color: #212529;
    color: #fff
}

.btn-dark:not(:disabled):not(.disabled).active,.btn-dark:not(:disabled):not(.disabled):active,.show>.btn-dark.dropdown-toggle {
    background-color: #0a0c0d;
    border-color: #050506;
    color: #fff
}

.btn-dark:not(:disabled):not(.disabled).active:focus,.btn-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-dark.dropdown-toggle:focus {
    box-shadow: 0 0 0 0 #42464980
}

.btn-default {
    background-color: #344675;
    border-color: #344675;
    box-shadow: 0 4px 6px #32325d1c,0 1px 3px #00000014;
    color: #fff
}

.btn-default.focus,.btn-default:focus,.btn-default:hover {
    background-color: #28365b;
    border-color: #243152;
    color: #fff
}

.btn-default.focus,.btn-default:focus {
    box-shadow: 0 4px 6px #32325d1c,0 1px 3px #00000014,0 0 0 0 #52628a80
}

.btn-default.disabled,.btn-default:disabled {
    background-color: #344675;
    border-color: #344675;
    color: #fff
}

.btn-default:not(:disabled):not(.disabled).active,.btn-default:not(:disabled):not(.disabled):active,.show>.btn-default.dropdown-toggle {
    background-color: #243152;
    border-color: #202c49;
    color: #fff
}

.btn-default:not(:disabled):not(.disabled).active:focus,.btn-default:not(:disabled):not(.disabled):active:focus,.show>.btn-default.dropdown-toggle:focus {
    box-shadow: 0 0 0 0 #52628a80
}

.btn-white {
    background-color: #fff;
    border-color: #fff;
    box-shadow: 0 4px 6px #32325d1c,0 1px 3px #00000014;
    color: #212529
}

.btn-white.focus,.btn-white:focus,.btn-white:hover {
    background-color: #ececec;
    border-color: #e6e6e6;
    color: #212529
}

.btn-white.focus,.btn-white:focus {
    box-shadow: 0 4px 6px #32325d1c,0 1px 3px #00000014,0 0 0 0 #dededf80
}

.btn-white.disabled,.btn-white:disabled {
    background-color: #fff;
    border-color: #fff;
    color: #212529
}

.btn-white:not(:disabled):not(.disabled).active,.btn-white:not(:disabled):not(.disabled):active,.show>.btn-white.dropdown-toggle {
    background-color: #e6e6e6;
    border-color: #dfdfdf;
    color: #212529
}

.btn-white:not(:disabled):not(.disabled).active:focus,.btn-white:not(:disabled):not(.disabled):active:focus,.show>.btn-white.dropdown-toggle:focus {
    box-shadow: 0 0 0 0 #dededf80
}

.btn-neutral {
    border-color: #fff;
    box-shadow: 0 4px 6px #32325d1c,0 1px 3px #00000014;
    color: #212529
}

.btn-neutral.focus,.btn-neutral:focus,.btn-neutral:hover {
    background-color: #ececec;
    border-color: #e6e6e6;
    color: #212529
}

.btn-neutral.focus,.btn-neutral:focus {
    box-shadow: 0 4px 6px #32325d1c,0 1px 3px #00000014,0 0 0 0 #dededf80
}

.btn-neutral.disabled,.btn-neutral:disabled {
    background-color: #fff;
    border-color: #fff;
    color: #212529
}

.btn-neutral:not(:disabled):not(.disabled).active,.btn-neutral:not(:disabled):not(.disabled):active,.show>.btn-neutral.dropdown-toggle {
    background-color: #e6e6e6;
    border-color: #dfdfdf;
    color: #212529
}

.btn-neutral:not(:disabled):not(.disabled).active:focus,.btn-neutral:not(:disabled):not(.disabled):active:focus,.show>.btn-neutral.dropdown-toggle:focus {
    box-shadow: 0 0 0 0 #dededf80
}

.btn-darker {
    box-shadow: 0 4px 6px #32325d1c,0 1px 3px #00000014
}

.btn-darker,.btn-darker.focus,.btn-darker:focus,.btn-darker:hover {
    background-color: #000;
    border-color: #000;
    color: #fff
}

.btn-darker.focus,.btn-darker:focus {
    box-shadow: 0 4px 6px #32325d1c,0 1px 3px #00000014,0 0 0 0 #26262680
}

.btn-darker.disabled,.btn-darker:disabled,.btn-darker:not(:disabled):not(.disabled).active,.btn-darker:not(:disabled):not(.disabled):active,.show>.btn-darker.dropdown-toggle {
    background-color: #000;
    border-color: #000;
    color: #fff
}

.btn-darker:not(:disabled):not(.disabled).active:focus,.btn-darker:not(:disabled):not(.disabled):active:focus,.show>.btn-darker.dropdown-toggle:focus {
    box-shadow: 0 0 0 0 #26262680
}

.btn-outline-primary {
    border-color: #e14eca;
    color: #e14eca
}

.btn-outline-primary:hover {
    background-color: #e14eca;
    border-color: #e14eca;
    color: #fff
}

.btn-outline-primary.focus,.btn-outline-primary:focus {
    box-shadow: 0 0 0 0 #e14eca80
}

.btn-outline-primary.disabled,.btn-outline-primary:disabled {
    background-color: #0000;
    color: #e14eca
}

.btn-outline-primary:not(:disabled):not(.disabled).active,.btn-outline-primary:not(:disabled):not(.disabled):active,.show>.btn-outline-primary.dropdown-toggle {
    background-color: #e14eca;
    border-color: #e14eca;
    color: #fff
}

.btn-outline-primary:not(:disabled):not(.disabled).active:focus,.btn-outline-primary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-primary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0 #e14eca80
}

.btn-outline-secondary {
    border-color: #f4f5f7;
    color: #f4f5f7
}

.btn-outline-secondary:hover {
    background-color: #f4f5f7;
    border-color: #f4f5f7;
    color: #212529
}

.btn-outline-secondary.focus,.btn-outline-secondary:focus {
    box-shadow: 0 0 0 0 #f4f5f780
}

.btn-outline-secondary.disabled,.btn-outline-secondary:disabled {
    background-color: #0000;
    color: #f4f5f7
}

.btn-outline-secondary:not(:disabled):not(.disabled).active,.btn-outline-secondary:not(:disabled):not(.disabled):active,.show>.btn-outline-secondary.dropdown-toggle {
    background-color: #f4f5f7;
    border-color: #f4f5f7;
    color: #212529
}

.btn-outline-secondary:not(:disabled):not(.disabled).active:focus,.btn-outline-secondary:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-secondary.dropdown-toggle:focus {
    box-shadow: 0 0 0 0 #f4f5f780
}

.btn-outline-success {
    border-color: #00f2c3;
    color: #00f2c3
}

.btn-outline-success:hover {
    background-color: #00f2c3;
    border-color: #00f2c3;
    color: #fff
}

.btn-outline-success.focus,.btn-outline-success:focus {
    box-shadow: 0 0 0 0 #00f2c380
}

.btn-outline-success.disabled,.btn-outline-success:disabled {
    background-color: #0000;
    color: #00f2c3
}

.btn-outline-success:not(:disabled):not(.disabled).active,.btn-outline-success:not(:disabled):not(.disabled):active,.show>.btn-outline-success.dropdown-toggle {
    background-color: #00f2c3;
    border-color: #00f2c3;
    color: #fff
}

.btn-outline-success:not(:disabled):not(.disabled).active:focus,.btn-outline-success:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-success.dropdown-toggle:focus {
    box-shadow: 0 0 0 0 #00f2c380
}

.btn-outline-info {
    border-color: #1d8cf8;
    color: #1d8cf8
}

.btn-outline-info:hover {
    background-color: #1d8cf8;
    border-color: #1d8cf8;
    color: #fff
}

.btn-outline-info.focus,.btn-outline-info:focus {
    box-shadow: 0 0 0 0 #1d8cf880
}

.btn-outline-info.disabled,.btn-outline-info:disabled {
    background-color: #0000;
    color: #1d8cf8
}

.btn-outline-info:not(:disabled):not(.disabled).active,.btn-outline-info:not(:disabled):not(.disabled):active,.show>.btn-outline-info.dropdown-toggle {
    background-color: #1d8cf8;
    border-color: #1d8cf8;
    color: #fff
}

.btn-outline-info:not(:disabled):not(.disabled).active:focus,.btn-outline-info:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-info.dropdown-toggle:focus {
    box-shadow: 0 0 0 0 #1d8cf880
}

.btn-outline-warning {
    border-color: #ff8d72;
    color: #ff8d72
}

.btn-outline-warning:hover {
    background-color: #ff8d72;
    border-color: #ff8d72;
    color: #fff
}

.btn-outline-warning.focus,.btn-outline-warning:focus {
    box-shadow: 0 0 0 0 #ff8d7280
}

.btn-outline-warning.disabled,.btn-outline-warning:disabled {
    background-color: #0000;
    color: #ff8d72
}

.btn-outline-warning:not(:disabled):not(.disabled).active,.btn-outline-warning:not(:disabled):not(.disabled):active,.show>.btn-outline-warning.dropdown-toggle {
    background-color: #ff8d72;
    border-color: #ff8d72;
    color: #fff
}

.btn-outline-warning:not(:disabled):not(.disabled).active:focus,.btn-outline-warning:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-warning.dropdown-toggle:focus {
    box-shadow: 0 0 0 0 #ff8d7280
}

.btn-outline-danger {
    border-color: #fd5d93;
    color: #fd5d93
}

.btn-outline-danger:hover {
    background-color: #fd5d93;
    border-color: #fd5d93;
    color: #fff
}

.btn-outline-danger.focus,.btn-outline-danger:focus {
    box-shadow: 0 0 0 0 #fd5d9380
}

.btn-outline-danger.disabled,.btn-outline-danger:disabled {
    background-color: #0000;
    color: #fd5d93
}

.btn-outline-danger:not(:disabled):not(.disabled).active,.btn-outline-danger:not(:disabled):not(.disabled):active,.show>.btn-outline-danger.dropdown-toggle {
    background-color: #fd5d93;
    border-color: #fd5d93;
    color: #fff
}

.btn-outline-danger:not(:disabled):not(.disabled).active:focus,.btn-outline-danger:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-danger.dropdown-toggle:focus {
    box-shadow: 0 0 0 0 #fd5d9380
}

.btn-outline-light {
    border-color: #adb5bd;
    color: #adb5bd
}

.btn-outline-light:hover {
    background-color: #adb5bd;
    border-color: #adb5bd;
    color: #fff
}

.btn-outline-light.focus,.btn-outline-light:focus {
    box-shadow: 0 0 0 0 #adb5bd80
}

.btn-outline-light.disabled,.btn-outline-light:disabled {
    background-color: #0000;
    color: #adb5bd
}

.btn-outline-light:not(:disabled):not(.disabled).active,.btn-outline-light:not(:disabled):not(.disabled):active,.show>.btn-outline-light.dropdown-toggle {
    background-color: #adb5bd;
    border-color: #adb5bd;
    color: #fff
}

.btn-outline-light:not(:disabled):not(.disabled).active:focus,.btn-outline-light:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-light.dropdown-toggle:focus {
    box-shadow: 0 0 0 0 #adb5bd80
}

.btn-outline-dark {
    border-color: #212529;
    color: #212529
}

.btn-outline-dark:hover {
    background-color: #212529;
    border-color: #212529;
    color: #fff
}

.btn-outline-dark.focus,.btn-outline-dark:focus {
    box-shadow: 0 0 0 0 #21252980
}

.btn-outline-dark.disabled,.btn-outline-dark:disabled {
    background-color: #0000;
    color: #212529
}

.btn-outline-dark:not(:disabled):not(.disabled).active,.btn-outline-dark:not(:disabled):not(.disabled):active,.show>.btn-outline-dark.dropdown-toggle {
    background-color: #212529;
    border-color: #212529;
    color: #fff
}

.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-dark.dropdown-toggle:focus {
    box-shadow: 0 0 0 0 #21252980
}

.btn-outline-default {
    border-color: #344675;
    color: #344675
}

.btn-outline-default:hover {
    background-color: #344675;
    border-color: #344675;
    color: #fff
}

.btn-outline-default.focus,.btn-outline-default:focus {
    box-shadow: 0 0 0 0 #34467580
}

.btn-outline-default.disabled,.btn-outline-default:disabled {
    background-color: #0000;
    color: #344675
}

.btn-outline-default:not(:disabled):not(.disabled).active,.btn-outline-default:not(:disabled):not(.disabled):active,.show>.btn-outline-default.dropdown-toggle {
    background-color: #344675;
    border-color: #344675;
    color: #fff
}

.btn-outline-default:not(:disabled):not(.disabled).active:focus,.btn-outline-default:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-default.dropdown-toggle:focus {
    box-shadow: 0 0 0 0 #34467580
}

.btn-outline-white {
    border-color: #fff;
    color: #fff
}

.btn-outline-white:hover {
    background-color: #fff;
    border-color: #fff;
    color: #212529
}

.btn-outline-white.focus,.btn-outline-white:focus {
    box-shadow: 0 0 0 0 #ffffff80
}

.btn-outline-white.disabled,.btn-outline-white:disabled {
    background-color: #0000;
    color: #fff
}

.btn-outline-white:not(:disabled):not(.disabled).active,.btn-outline-white:not(:disabled):not(.disabled):active,.show>.btn-outline-white.dropdown-toggle {
    background-color: #fff;
    border-color: #fff;
    color: #212529
}

.btn-outline-white:not(:disabled):not(.disabled).active:focus,.btn-outline-white:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-white.dropdown-toggle:focus {
    box-shadow: 0 0 0 0 #ffffff80
}

.btn-outline-neutral {
    border-color: #fff;
    color: #fff
}

.btn-outline-neutral:hover {
    background-color: #fff;
    border-color: #fff;
    color: #212529
}

.btn-outline-neutral.focus,.btn-outline-neutral:focus {
    box-shadow: 0 0 0 0 #ffffff80
}

.btn-outline-neutral.disabled,.btn-outline-neutral:disabled {
    background-color: #0000;
    color: #fff
}

.btn-outline-neutral:not(:disabled):not(.disabled).active,.btn-outline-neutral:not(:disabled):not(.disabled):active,.show>.btn-outline-neutral.dropdown-toggle {
    background-color: #fff;
    border-color: #fff;
    color: #212529
}

.btn-outline-neutral:not(:disabled):not(.disabled).active:focus,.btn-outline-neutral:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-neutral.dropdown-toggle:focus {
    box-shadow: 0 0 0 0 #ffffff80
}

.btn-outline-darker {
    border-color: #000;
    color: #000
}

.btn-outline-darker:hover {
    background-color: #000;
    border-color: #000;
    color: #fff
}

.btn-outline-darker.focus,.btn-outline-darker:focus {
    box-shadow: 0 0 0 0 #00000080
}

.btn-outline-darker.disabled,.btn-outline-darker:disabled {
    background-color: #0000;
    color: #000
}

.btn-outline-darker:not(:disabled):not(.disabled).active,.btn-outline-darker:not(:disabled):not(.disabled):active,.show>.btn-outline-darker.dropdown-toggle {
    background-color: #000;
    border-color: #000;
    color: #fff
}

.btn-outline-darker:not(:disabled):not(.disabled).active:focus,.btn-outline-darker:not(:disabled):not(.disabled):active:focus,.show>.btn-outline-darker.dropdown-toggle:focus {
    box-shadow: 0 0 0 0 #00000080
}

.btn-link {
    color: #e14eca;
    font-weight: 400;
    text-decoration: none
}

.btn-link:hover {
    color: #c221a9
}

.btn-link.focus,.btn-link:focus,.btn-link:hover {
    text-decoration: none
}

.btn-link.disabled,.btn-link:disabled {
    color: #6c757d;
    pointer-events: none
}

.btn-group-lg>.btn,.btn-lg {
    font-size: 1em;
    line-height: 1.35
}

.btn-group-sm>.btn,.btn-sm {
    border-radius: .25rem;
    font-size: .75rem;
    line-height: 1.35
}

.btn-block {
    display: block;
    width: 100%
}

.btn-block+.btn-block {
    margin-top: .5rem
}

input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block {
    width: 100%
}

.fade {
    transition: opacity .15s linear
}

@media(prefers-reduced-motion:reduce) {
    .fade {
        transition: none
    }
}

.fade:not(.show) {
    opacity: 0
}

.collapse:not(.show) {
    display: none
}

.collapsing {
    height: 0;
    overflow: hidden;
    position: relative;
    transition: height .35s ease
}

@media(prefers-reduced-motion:reduce) {
    .collapsing {
        transition: none
    }
}

.dropdown,.dropleft,.dropright,.dropup {
    position: relative
}

.dropdown-toggle {
    white-space: nowrap
}

.dropdown-toggle:after {
    border-bottom: 0;
    border-left: .3em solid #0000;
    border-right: .3em solid #0000;
    border-top: .3em solid;
    content: "";
    display: inline-block;
    margin-left: .255em;
    vertical-align: .255em
}

.dropdown-toggle:empty:after {
    margin-left: 0
}

.dropdown-menu {
    background-clip: padding-box;
    background-color: #fff;
    border: 0 solid #222a4226;
    box-shadow: 0 50px 100px #32325d1a,0 15px 35px #32325d26,0 5px 15px #0000001a;
    color: #525f7f;
    display: none;
    float: left;
    font-size: .875rem;
    left: 0;
    list-style: none;
    margin: .125rem 0 0;
    min-width: 10rem;
    padding: .5rem 0;
    position: absolute;
    text-align: left;
    top: 100%;
    z-index: 1000
}

.dropdown-menu-left {
    left: 0;
    right: auto
}

.dropdown-menu-right {
    left: auto;
    right: 0
}

@media(min-width: 576px) {
    .dropdown-menu-sm-left {
        left:0;
        right: auto
    }

    .dropdown-menu-sm-right {
        left: auto;
        right: 0
    }
}

@media(min-width: 768px) {
    .dropdown-menu-md-left {
        left:0;
        right: auto
    }

    .dropdown-menu-md-right {
        left: auto;
        right: 0
    }
}

@media(min-width: 992px) {
    .dropdown-menu-lg-left {
        left:0;
        right: auto
    }

    .dropdown-menu-lg-right {
        left: auto;
        right: 0
    }
}

@media(min-width: 1200px) {
    .dropdown-menu-xl-left {
        left:0;
        right: auto
    }

    .dropdown-menu-xl-right {
        left: auto;
        right: 0
    }
}

.dropup .dropdown-menu {
    bottom: 100%;
    margin-bottom: .125rem;
    margin-top: 0;
    top: auto
}

.dropup .dropdown-toggle:after {
    border-bottom: .3em solid;
    border-left: .3em solid #0000;
    border-right: .3em solid #0000;
    border-top: 0;
    content: "";
    display: inline-block;
    margin-left: .255em;
    vertical-align: .255em
}

.dropup .dropdown-toggle:empty:after {
    margin-left: 0
}

.dropright .dropdown-menu {
    left: 100%;
    margin-left: .125rem;
    margin-top: 0;
    right: auto;
    top: 0
}

.dropright .dropdown-toggle:after {
    border-bottom: .3em solid #0000;
    border-left: .3em solid;
    border-right: 0;
    border-top: .3em solid #0000;
    content: "";
    display: inline-block;
    margin-left: .255em;
    vertical-align: .255em
}

.dropright .dropdown-toggle:empty:after {
    margin-left: 0
}

.dropright .dropdown-toggle:after {
    vertical-align: 0
}

.dropleft .dropdown-menu {
    left: auto;
    margin-right: .125rem;
    margin-top: 0;
    right: 100%;
    top: 0
}

.dropleft .dropdown-toggle:after {
    content: "";
    display: inline-block;
    display: none;
    margin-left: .255em;
    vertical-align: .255em
}

.dropleft .dropdown-toggle:before {
    border-bottom: .3em solid #0000;
    border-right: .3em solid;
    border-top: .3em solid #0000;
    content: "";
    display: inline-block;
    margin-right: .255em;
    vertical-align: .255em
}

.dropleft .dropdown-toggle:empty:after {
    margin-left: 0
}

.dropleft .dropdown-toggle:before {
    vertical-align: 0
}

.dropdown-menu[x-placement^=bottom],.dropdown-menu[x-placement^=left],.dropdown-menu[x-placement^=right],.dropdown-menu[x-placement^=top] {
    bottom: auto;
    right: auto
}

.dropdown-divider {
    border-top: 1px solid #e9ecef;
    height: 0;
    margin: .5rem 0;
    overflow: hidden
}

.dropdown-item {
    background-color: #0000;
    border: 0;
    clear: both;
    color: #212529;
    display: block;
    font-weight: 400;
    padding: .25rem 1.5rem;
    text-align: inherit;
    white-space: nowrap;
    width: 100%
}

.dropdown-item:focus,.dropdown-item:hover {
    background-color: #f6f9fc;
    color: #16181b;
    text-decoration: none
}

.dropdown-item.active,.dropdown-item:active {
    background-color: #e14eca;
    color: #fff;
    text-decoration: none
}

.dropdown-item.disabled,.dropdown-item:disabled {
    background-color: #0000;
    color: #6c757d;
    pointer-events: none
}

.dropdown-menu.show {
    display: block
}

.dropdown-header {
    color: #6c757d;
    display: block;
    font-size: .7500000025rem;
    margin-bottom: 0;
    padding: .5rem 1.5rem;
    white-space: nowrap
}

.dropdown-item-text {
    color: #212529;
    display: block;
    padding: .25rem 1.5rem
}

.btn-group,.btn-group-vertical {
    display: inline-flex;
    position: relative;
    vertical-align: middle
}

.btn-group-vertical>.btn,.btn-group>.btn {
    flex: 1 1 auto;
    position: relative
}

.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover {
    z-index: 1
}

.btn-toolbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start
}

.btn-toolbar .input-group {
    width: auto
}

.btn-group>.btn-group:not(:first-child),.btn-group>.btn:not(:first-child) {
    margin-left: -1px
}

.btn-group>.btn-group:not(:last-child)>.btn,.btn-group>.btn:not(:last-child):not(.dropdown-toggle) {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0
}

.btn-group>.btn-group:not(:first-child)>.btn,.btn-group>.btn:not(:first-child) {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0
}

.dropdown-toggle-split {
    padding-left: 30px;
    padding-right: 30px
}

.dropdown-toggle-split:after,.dropright .dropdown-toggle-split:after,.dropup .dropdown-toggle-split:after {
    margin-left: 0
}

.dropleft .dropdown-toggle-split:before {
    margin-right: 0
}

.btn-group-sm>.btn+.dropdown-toggle-split,.btn-sm+.dropdown-toggle-split {
    padding-left: 11.25px;
    padding-right: 11.25px
}

.btn-group-lg>.btn+.dropdown-toggle-split,.btn-lg+.dropdown-toggle-split {
    padding-left: 36px;
    padding-right: 36px
}

.btn-group.show .dropdown-toggle,.btn-group.show .dropdown-toggle.btn-link {
    box-shadow: none
}

.btn-group-vertical {
    align-items: flex-start;
    flex-direction: column;
    justify-content: center
}

.btn-group-vertical>.btn,.btn-group-vertical>.btn-group {
    width: 100%
}

.btn-group-vertical>.btn-group:not(:first-child),.btn-group-vertical>.btn:not(:first-child) {
    margin-top: -1px
}

.btn-group-vertical>.btn-group:not(:last-child)>.btn,.btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0
}

.btn-group-vertical>.btn-group:not(:first-child)>.btn,.btn-group-vertical>.btn:not(:first-child) {
    border-top-left-radius: 0;
    border-top-right-radius: 0
}

.btn-group-toggle>.btn,.btn-group-toggle>.btn-group>.btn {
    margin-bottom: 0
}

.btn-group-toggle>.btn input[type=checkbox],.btn-group-toggle>.btn input[type=radio],.btn-group-toggle>.btn-group>.btn input[type=checkbox],.btn-group-toggle>.btn-group>.btn input[type=radio] {
    clip: rect(0,0,0,0);
    pointer-events: none;
    position: absolute
}

.input-group {
    align-items: stretch;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    width: 100%
}

.input-group>.custom-file,.input-group>.custom-select,.input-group>.form-control,.input-group>.form-control-plaintext {
    flex: 1 1 auto;
    margin-bottom: 0;
    min-width: 0;
    position: relative;
    width: 1%
}

.input-group>.custom-file+.custom-file,.input-group>.custom-file+.custom-select,.input-group>.custom-file+.form-control,.input-group>.custom-select+.custom-file,.input-group>.custom-select+.custom-select,.input-group>.custom-select+.form-control,.input-group>.form-control+.custom-file,.input-group>.form-control+.custom-select,.input-group>.form-control+.form-control,.input-group>.form-control-plaintext+.custom-file,.input-group>.form-control-plaintext+.custom-select,.input-group>.form-control-plaintext+.form-control {
    margin-left: -1px
}

.input-group>.custom-file .custom-file-input:focus~.custom-file-label,.input-group>.custom-select:focus,.input-group>.form-control:focus {
    z-index: 3
}

.input-group>.custom-file .custom-file-input:focus {
    z-index: 4
}

.input-group>.custom-select:not(:last-child),.input-group>.form-control:not(:last-child) {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0
}

.input-group>.custom-select:not(:first-child),.input-group>.form-control:not(:first-child) {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0
}

.input-group>.custom-file {
    align-items: center;
    display: flex
}

.input-group>.custom-file:not(:last-child) .custom-file-label,.input-group>.custom-file:not(:last-child) .custom-file-label:after {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0
}

.input-group>.custom-file:not(:first-child) .custom-file-label {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0
}

.input-group-append,.input-group-prepend {
    display: flex
}

.input-group-append .btn,.input-group-prepend .btn {
    position: relative;
    z-index: 2
}

.input-group-append .btn:focus,.input-group-prepend .btn:focus {
    z-index: 3
}

.input-group-append .btn+.btn,.input-group-append .btn+.input-group-text,.input-group-append .input-group-text+.btn,.input-group-append .input-group-text+.input-group-text,.input-group-prepend .btn+.btn,.input-group-prepend .btn+.input-group-text,.input-group-prepend .input-group-text+.btn,.input-group-prepend .input-group-text+.input-group-text {
    margin-left: -1px
}

.input-group-prepend {
    margin-right: -1px
}

.input-group-append {
    margin-left: -1px
}

.input-group-text {
    align-items: center;
    background-color: #0000;
    border: 1px solid #cad1d7;
    border-radius: .25rem;
    color: #adb5bd;
    display: flex;
    font-size: .875rem;
    font-weight: 400;
    line-height: 1.428571;
    margin-bottom: 0;
    padding: .5rem .7rem;
    text-align: center;
    white-space: nowrap
}

.input-group-text input[type=checkbox],.input-group-text input[type=radio] {
    margin-top: 0
}

.input-group-lg>.custom-select,.input-group-lg>.form-control:not(textarea) {
    height: calc(1.35em + 1.75rem + 2px)
}

.input-group-lg>.custom-select,.input-group-lg>.form-control,.input-group-lg>.input-group-append>.btn,.input-group-lg>.input-group-append>.input-group-text,.input-group-lg>.input-group-prepend>.btn,.input-group-lg>.input-group-prepend>.input-group-text {
    border-radius: .4285rem;
    font-size: .875rem;
    line-height: 1.35;
    padding: .875rem 1rem
}

.input-group-sm>.custom-select,.input-group-sm>.form-control:not(textarea) {
    height: calc(1.35em + .5rem + 2px)
}

.input-group-sm>.custom-select,.input-group-sm>.form-control,.input-group-sm>.input-group-append>.btn,.input-group-sm>.input-group-append>.input-group-text,.input-group-sm>.input-group-prepend>.btn,.input-group-sm>.input-group-prepend>.input-group-text {
    border-radius: .2857rem;
    font-size: .75rem;
    line-height: 1.35;
    padding: .25rem .5rem
}

.input-group-lg>.custom-select,.input-group-sm>.custom-select {
    padding-right: 1.7rem
}

.input-group>.input-group-append:last-child>.btn:not(:last-child):not(.dropdown-toggle),.input-group>.input-group-append:last-child>.input-group-text:not(:last-child),.input-group>.input-group-append:not(:last-child)>.btn,.input-group>.input-group-append:not(:last-child)>.input-group-text,.input-group>.input-group-prepend>.btn,.input-group>.input-group-prepend>.input-group-text {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0
}

.input-group>.input-group-append>.btn,.input-group>.input-group-append>.input-group-text,.input-group>.input-group-prepend:first-child>.btn:not(:first-child),.input-group>.input-group-prepend:first-child>.input-group-text:not(:first-child),.input-group>.input-group-prepend:not(:first-child)>.btn,.input-group>.input-group-prepend:not(:first-child)>.input-group-text {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0
}

.custom-control {
    color-adjust: exact;
    display: block;
    min-height: 1.3125rem;
    padding-left: 3rem;
    position: relative;
    -webkit-print-color-adjust: exact;
    z-index: 1
}

.custom-control-inline {
    display: inline-flex;
    margin-right: 1rem
}

.custom-control-input {
    height: 1.28125rem;
    left: 0;
    opacity: 0;
    position: absolute;
    width: 1.25rem;
    z-index: -1
}

.custom-control-input:checked~.custom-control-label:before {
    background-color: #e14eca;
    border-color: #e14eca;
    box-shadow: none;
    color: #fff
}

.custom-control-input:focus~.custom-control-label:before {
    box-shadow: none,none
}

.custom-control-input:focus:not(:checked)~.custom-control-label:before {
    border-color: #3297d340
}

.custom-control-input:not(:disabled):active~.custom-control-label:before {
    background-color: #e14eca;
    border-color: #e14eca;
    box-shadow: none;
    color: #fff
}

.custom-control-input:disabled~.custom-control-label,.custom-control-input[disabled]~.custom-control-label {
    color: #6c757d
}

.custom-control-input:disabled~.custom-control-label:before,.custom-control-input[disabled]~.custom-control-label:before {
    background-color: #e9ecef
}

.custom-control-label {
    margin-bottom: 0;
    position: relative;
    vertical-align: top
}

.custom-control-label:before {
    background-color: #0000;
    border: 1px solid #cad1d7;
    box-shadow: none;
    pointer-events: none
}

.custom-control-label:after,.custom-control-label:before {
    content: "";
    display: block;
    height: 1.25rem;
    left: -3rem;
    position: absolute;
    top: .03125rem;
    width: 1.25rem
}

.custom-control-label:after {
    background: no-repeat 50%/50% 50%
}

.custom-checkbox .custom-control-label:before {
    border-radius: .2857rem
}

.custom-checkbox .custom-control-input:checked~.custom-control-label:after {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath fill='%23fff' d='m6.564.75-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3E%3C/svg%3E")
}

.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:before {
    background-color: #e14eca;
    border-color: #e14eca
}

.custom-checkbox .custom-control-input:indeterminate~.custom-control-label:after {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E")
}

.custom-checkbox .custom-control-input:disabled:checked~.custom-control-label:before,.custom-checkbox .custom-control-input:disabled:indeterminate~.custom-control-label:before {
    background-color: #e14eca80
}

.custom-radio .custom-control-label:before {
    border-radius: 50%
}

.custom-radio .custom-control-input:checked~.custom-control-label:after {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E")
}

.custom-radio .custom-control-input:disabled:checked~.custom-control-label:before {
    background-color: #e14eca80
}

.custom-switch {
    padding-left: 3.9375rem
}

.custom-switch .custom-control-label:before {
    border-radius: .625rem;
    left: -3.9375rem;
    pointer-events: all;
    width: 2.1875rem
}

.custom-switch .custom-control-label:after {
    background-color: #cad1d7;
    border-radius: .625rem;
    height: calc(1.25rem - 4px);
    left: calc(-3.9375rem + 2px);
    top: calc(.03125rem + 2px);
    transition: transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    width: calc(1.25rem - 4px)
}

@media(prefers-reduced-motion:reduce) {
    .custom-switch .custom-control-label:after {
        transition: none
    }
}

.custom-switch .custom-control-input:checked~.custom-control-label:after {
    background-color: #0000;
    transform: translateX(.9375rem)
}

.custom-switch .custom-control-input:disabled:checked~.custom-control-label:before {
    background-color: #e14eca80
}

.custom-select {
    -webkit-appearance: none;
    appearance: none;
    background: #0000 url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5'%3E%3Cpath fill='%2332325d' d='M2 0 0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right .7rem center/8px 10px;
    border: 1px solid #cad1d7;
    border-radius: .25rem;
    box-shadow: inset 0 1px 2px rgba(34,42,66,.075);
    color: #fffc;
    display: inline-block;
    font-size: .875rem;
    font-weight: 400;
    height: calc(2.25rem + 2px);
    line-height: 1.428571;
    padding: .5rem 1.7rem .5rem .7rem;
    vertical-align: middle;
    width: 100%
}

.custom-select:focus {
    border-color: #3297d340;
    box-shadow: inset 0 1px 2px rgba(34,42,66,.075),0 0 0 0 #e14eca;
    outline: 0
}

.custom-select:focus::-ms-value {
    background-color: #0000;
    color: #fffc
}

.custom-select[multiple],.custom-select[size]:not([size="1"]) {
    background-image: none;
    height: auto;
    padding-right: .7rem
}

.custom-select:disabled {
    background-color: #e9ecef;
    color: #6c757d
}

.custom-select::-ms-expand {
    display: none
}

.custom-select:-moz-focusring {
    color: #0000;
    text-shadow: 0 0 0 #fffc
}

.custom-select-sm {
    font-size: .75rem;
    height: calc(1.35em + .5rem + 2px);
    padding-bottom: .25rem;
    padding-left: .5rem;
    padding-top: .25rem
}

.custom-select-lg {
    font-size: .875rem;
    height: calc(1.35em + 1.75rem + 2px);
    padding-bottom: .875rem;
    padding-left: 1rem;
    padding-top: .875rem
}

.custom-file {
    display: inline-block;
    margin-bottom: 0
}

.custom-file,.custom-file-input {
    height: calc(2.25rem + 2px);
    position: relative;
    width: 100%
}

.custom-file-input {
    margin: 0;
    opacity: 0;
    z-index: 2
}

.custom-file-input:focus~.custom-file-label {
    border-color: #3297d340;
    box-shadow: none
}

.custom-file-input:disabled~.custom-file-label,.custom-file-input[disabled]~.custom-file-label {
    background-color: #e9ecef
}

.custom-file-input:lang(en)~.custom-file-label:after {
    content: "Browse"
}

.custom-file-input~.custom-file-label[data-browse]:after {
    content: attr(data-browse)
}

.custom-file-label {
    border: 1px solid #cad1d7;
    border-radius: .25rem;
    box-shadow: none;
    font-weight: 400;
    height: calc(2.25rem + 2px);
    left: 0;
    z-index: 1
}

.custom-file-label,.custom-file-label:after {
    background-color: #0000;
    color: #fffc;
    line-height: 1.428571;
    padding: .5rem .7rem;
    position: absolute;
    right: 0;
    top: 0
}

.custom-file-label:after {
    border-left: inherit;
    border-radius: 0 .25rem .25rem 0;
    bottom: 0;
    content: "Browse";
    display: block;
    height: 2.249999625rem;
    z-index: 3
}

.custom-range {
    -webkit-appearance: none;
    appearance: none;
    background-color: #0000;
    height: 1rem;
    padding: 0;
    width: 100%
}

.custom-range:focus {
    outline: none
}

.custom-range:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 1px #1e1e2f,none
}

.custom-range:focus::-moz-range-thumb {
    box-shadow: 0 0 0 1px #1e1e2f,none
}

.custom-range:focus::-ms-thumb {
    box-shadow: 0 0 0 1px #1e1e2f,none
}

.custom-range::-moz-focus-outer {
    border: 0
}

.custom-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    background-color: #e14eca;
    border: 0;
    border-radius: 1rem;
    box-shadow: 0 .1rem .25rem #222a421a;
    height: 1rem;
    margin-top: -.25rem;
    -webkit-transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    width: 1rem
}

@media(prefers-reduced-motion:reduce) {
    .custom-range::-webkit-slider-thumb {
        -webkit-transition: none;
        transition: none
    }
}

.custom-range::-webkit-slider-thumb:active {
    background-color: #fbe7f8
}

.custom-range::-webkit-slider-runnable-track {
    background-color: #e3e3e3;
    border-color: #0000;
    border-radius: 1rem;
    box-shadow: inset 0 .25rem .25rem #222a421a;
    color: #0000;
    cursor: pointer;
    height: .5rem;
    width: 100%
}

.custom-range::-moz-range-thumb {
    appearance: none;
    background-color: #e14eca;
    border: 0;
    border-radius: 1rem;
    box-shadow: 0 .1rem .25rem #222a421a;
    height: 1rem;
    -moz-transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    width: 1rem
}

@media(prefers-reduced-motion:reduce) {
    .custom-range::-moz-range-thumb {
        -moz-transition: none;
        transition: none
    }
}

.custom-range::-moz-range-thumb:active {
    background-color: #fbe7f8
}

.custom-range::-moz-range-track {
    background-color: #e3e3e3;
    border-color: #0000;
    border-radius: 1rem;
    box-shadow: inset 0 .25rem .25rem #222a421a;
    color: #0000;
    cursor: pointer;
    height: .5rem;
    width: 100%
}

.custom-range::-ms-thumb {
    appearance: none;
    background-color: #e14eca;
    border: 0;
    border-radius: 1rem;
    box-shadow: 0 .1rem .25rem #222a421a;
    height: 1rem;
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    -ms-transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    width: 1rem
}

@media(prefers-reduced-motion:reduce) {
    .custom-range::-ms-thumb {
        -ms-transition: none;
        transition: none
    }
}

.custom-range::-ms-thumb:active {
    background-color: #fbe7f8
}

.custom-range::-ms-track {
    background-color: #0000;
    border-color: #0000;
    border-width: .5rem;
    box-shadow: inset 0 .25rem .25rem #222a421a;
    color: #0000;
    cursor: pointer;
    height: .5rem;
    width: 100%
}

.custom-range::-ms-fill-lower,.custom-range::-ms-fill-upper {
    background-color: #e3e3e3;
    border-radius: 1rem
}

.custom-range::-ms-fill-upper {
    margin-right: 15px
}

.custom-range:disabled::-webkit-slider-thumb {
    background-color: #adb5bd
}

.custom-range:disabled::-webkit-slider-runnable-track {
    cursor: default
}

.custom-range:disabled::-moz-range-thumb {
    background-color: #adb5bd
}

.custom-range:disabled::-moz-range-track {
    cursor: default
}

.custom-range:disabled::-ms-thumb {
    background-color: #adb5bd
}

.custom-control-label:before,.custom-file-label,.custom-select {
    transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out
}

@media(prefers-reduced-motion:reduce) {
    .custom-control-label:before,.custom-file-label,.custom-select {
        transition: none
    }
}

.nav {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin-bottom: 0;
    padding-left: 0
}

.nav-link {
    display: block;
    padding: .5rem 1rem
}

.nav-link:focus,.nav-link:hover {
    text-decoration: none
}

.nav-link.disabled {
    color: #6c757d;
    cursor: default;
    pointer-events: none
}

.nav-tabs {
    border-bottom: .0625rem solid #e3e3e3
}

.nav-tabs .nav-item {
    margin-bottom: -.0625rem
}

.nav-tabs .nav-link {
    border: .0625rem solid #0000;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem
}

.nav-tabs .nav-link:focus,.nav-tabs .nav-link:hover {
    border-color: #e9ecef #e9ecef #e3e3e3
}

.nav-tabs .nav-link.disabled {
    background-color: #0000;
    border-color: #0000;
    color: #6c757d
}

.nav-tabs .nav-item.show .nav-link,.nav-tabs .nav-link.active {
    background-color: #1e1e2f;
    border-color: #e3e3e3 #e3e3e3 #1e1e2f;
    color: #525f7f
}

.nav-tabs .dropdown-menu {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    margin-top: -.0625rem
}

.nav-pills .nav-link {
    border-radius: .25rem
}

.nav-pills .nav-link.active,.nav-pills .show>.nav-link {
    background-color: #e14eca;
    color: #fff
}

.nav-fill .nav-item,.nav-fill>.nav-link {
    flex: 1 1 auto;
    text-align: center
}

.nav-justified .nav-item,.nav-justified>.nav-link {
    flex-basis: 0;
    flex-grow: 1;
    text-align: center
}

.tab-content>.tab-pane {
    display: none
}

.tab-content>.active {
    display: block
}

.navbar {
    padding: .625rem .9375rem;
    position: relative
}

.navbar,.navbar .container,.navbar .container-fluid,.navbar .container-lg,.navbar .container-md,.navbar .container-sm,.navbar .container-xl {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between
}

.navbar-brand {
    display: inline-block;
    font-size: .99925rem;
    line-height: inherit;
    margin-right: .9375rem;
    padding-bottom: .4068125rem;
    padding-top: .4068125rem;
    white-space: nowrap
}

.navbar-brand:focus,.navbar-brand:hover {
    text-decoration: none
}

.navbar-nav {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-bottom: 0;
    padding-left: 0
}

.navbar-nav .nav-link {
    padding-left: 0;
    padding-right: 0
}

.navbar-nav .dropdown-menu {
    float: none;
    position: static
}

.navbar-text {
    display: inline-block;
    padding-bottom: .5rem;
    padding-top: .5rem
}

.navbar-collapse {
    align-items: center;
    flex-basis: 100%;
    flex-grow: 1
}

.navbar-toggler {
    background-color: #0000;
    border: .0625rem solid #0000;
    border-radius: .25rem;
    font-size: .99925rem;
    line-height: 1;
    padding: .25rem .75rem
}

.navbar-toggler:focus,.navbar-toggler:hover {
    text-decoration: none
}

.navbar-toggler-icon {
    background: no-repeat 50%;
    background-size: 100% 100%;
    content: "";
    display: inline-block;
    height: 1.5em;
    vertical-align: middle;
    width: 1.5em
}

@media(max-width: 575.98px) {
    .navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-xl {
        padding-left:0;
        padding-right: 0
    }
}

@media(min-width: 576px) {
    .navbar-expand-sm {
        flex-flow:row nowrap;
        justify-content: flex-start
    }

    .navbar-expand-sm .navbar-nav {
        flex-direction: row
    }

    .navbar-expand-sm .navbar-nav .dropdown-menu {
        position: absolute
    }

    .navbar-expand-sm .navbar-nav .nav-link {
        padding-left: 1rem;
        padding-right: 1rem
    }

    .navbar-expand-sm>.container,.navbar-expand-sm>.container-fluid,.navbar-expand-sm>.container-lg,.navbar-expand-sm>.container-md,.navbar-expand-sm>.container-sm,.navbar-expand-sm>.container-xl {
        flex-wrap: nowrap
    }

    .navbar-expand-sm .navbar-collapse {
        display: flex!important;
        flex-basis: auto
    }

    .navbar-expand-sm .navbar-toggler {
        display: none
    }
}

@media(max-width: 767.98px) {
    .navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-md,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-xl {
        padding-left:0;
        padding-right: 0
    }
}

@media(min-width: 768px) {
    .navbar-expand-md {
        flex-flow:row nowrap;
        justify-content: flex-start
    }

    .navbar-expand-md .navbar-nav {
        flex-direction: row
    }

    .navbar-expand-md .navbar-nav .dropdown-menu {
        position: absolute
    }

    .navbar-expand-md .navbar-nav .nav-link {
        padding-left: 1rem;
        padding-right: 1rem
    }

    .navbar-expand-md>.container,.navbar-expand-md>.container-fluid,.navbar-expand-md>.container-lg,.navbar-expand-md>.container-md,.navbar-expand-md>.container-sm,.navbar-expand-md>.container-xl {
        flex-wrap: nowrap
    }

    .navbar-expand-md .navbar-collapse {
        display: flex!important;
        flex-basis: auto
    }

    .navbar-expand-md .navbar-toggler {
        display: none
    }
}

@media(max-width: 991.98px) {
    .navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-xl {
        padding-left:0;
        padding-right: 0
    }
}

@media(min-width: 992px) {
    .navbar-expand-lg {
        flex-flow:row nowrap;
        justify-content: flex-start
    }

    .navbar-expand-lg .navbar-nav {
        flex-direction: row
    }

    .navbar-expand-lg .navbar-nav .dropdown-menu {
        position: absolute
    }

    .navbar-expand-lg .navbar-nav .nav-link {
        padding-left: 1rem;
        padding-right: 1rem
    }

    .navbar-expand-lg>.container,.navbar-expand-lg>.container-fluid,.navbar-expand-lg>.container-lg,.navbar-expand-lg>.container-md,.navbar-expand-lg>.container-sm,.navbar-expand-lg>.container-xl {
        flex-wrap: nowrap
    }

    .navbar-expand-lg .navbar-collapse {
        display: flex!important;
        flex-basis: auto
    }

    .navbar-expand-lg .navbar-toggler {
        display: none
    }
}

@media(max-width: 1199.98px) {
    .navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-xl {
        padding-left:0;
        padding-right: 0
    }
}

@media(min-width: 1200px) {
    .navbar-expand-xl {
        flex-flow:row nowrap;
        justify-content: flex-start
    }

    .navbar-expand-xl .navbar-nav {
        flex-direction: row
    }

    .navbar-expand-xl .navbar-nav .dropdown-menu {
        position: absolute
    }

    .navbar-expand-xl .navbar-nav .nav-link {
        padding-left: 1rem;
        padding-right: 1rem
    }

    .navbar-expand-xl>.container,.navbar-expand-xl>.container-fluid,.navbar-expand-xl>.container-lg,.navbar-expand-xl>.container-md,.navbar-expand-xl>.container-sm,.navbar-expand-xl>.container-xl {
        flex-wrap: nowrap
    }

    .navbar-expand-xl .navbar-collapse {
        display: flex!important;
        flex-basis: auto
    }

    .navbar-expand-xl .navbar-toggler {
        display: none
    }
}

.navbar-expand {
    flex-flow: row nowrap;
    justify-content: flex-start
}

.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-lg,.navbar-expand>.container-md,.navbar-expand>.container-sm,.navbar-expand>.container-xl {
    padding-left: 0;
    padding-right: 0
}

.navbar-expand .navbar-nav {
    flex-direction: row
}

.navbar-expand .navbar-nav .dropdown-menu {
    position: absolute
}

.navbar-expand .navbar-nav .nav-link {
    padding-left: 1rem;
    padding-right: 1rem
}

.navbar-expand>.container,.navbar-expand>.container-fluid,.navbar-expand>.container-lg,.navbar-expand>.container-md,.navbar-expand>.container-sm,.navbar-expand>.container-xl {
    flex-wrap: nowrap
}

.navbar-expand .navbar-collapse {
    display: flex!important;
    flex-basis: auto
}

.navbar-expand .navbar-toggler {
    display: none
}

.navbar-light .navbar-brand,.navbar-light .navbar-brand:focus,.navbar-light .navbar-brand:hover {
    color: #222a42e6
}

.navbar-light .navbar-nav .nav-link {
    color: #222a4280
}

.navbar-light .navbar-nav .nav-link:focus,.navbar-light .navbar-nav .nav-link:hover {
    color: #222a42b3
}

.navbar-light .navbar-nav .nav-link.disabled {
    color: #222a424d
}

.navbar-light .navbar-nav .active>.nav-link,.navbar-light .navbar-nav .nav-link.active,.navbar-light .navbar-nav .nav-link.show,.navbar-light .navbar-nav .show>.nav-link {
    color: #222a42e6
}

.navbar-light .navbar-toggler {
    border-color: #0000;
    color: #222a4280
}

.navbar-light .navbar-toggler-icon {
    background-image: url("data:image/svg+xml %21default;charset=utf8,%3Csvg viewBox=%270 0 30 30%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath stroke=%27rgba%2834, 42, 66, 0.5%29%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-miterlimit=%2710%27 d=%27M4 7h22M4 15h22M4 23h22%27/%3E%3C/svg%3E")
}

.navbar-light .navbar-text {
    color: #222a4280
}

.navbar-light .navbar-text a,.navbar-light .navbar-text a:focus,.navbar-light .navbar-text a:hover {
    color: #222a42e6
}

.navbar-dark .navbar-brand,.navbar-dark .navbar-brand:focus,.navbar-dark .navbar-brand:hover {
    color: #ffffffa6
}

.navbar-dark .navbar-nav .nav-link {
    color: #fffffff2
}

.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover {
    color: #ffffffa6
}

.navbar-dark .navbar-nav .nav-link.disabled {
    color: #ffffff40
}

.navbar-dark .navbar-nav .active>.nav-link,.navbar-dark .navbar-nav .nav-link.active,.navbar-dark .navbar-nav .nav-link.show,.navbar-dark .navbar-nav .show>.nav-link {
    color: #ffffffa6
}

.navbar-dark .navbar-toggler {
    border-color: #0000;
    color: #fffffff2
}

.navbar-dark .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30'%3E%3Cpath stroke='rgba(255, 255, 255, 0.95)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E")
}

.navbar-dark .navbar-text {
    color: #fffffff2
}

.navbar-dark .navbar-text a,.navbar-dark .navbar-text a:focus,.navbar-dark .navbar-text a:hover {
    color: #ffffffa6
}

.card {
    word-wrap: break-word;
    background-clip: initial;
    background-color: #fff;
    border: .0625rem solid #222a420d;
    border-radius: .2857rem;
    display: flex;
    flex-direction: column;
    min-width: 0
}

.card>hr {
    margin-left: 0;
    margin-right: 0
}

.card>.list-group {
    border-bottom: inherit;
    border-top: inherit
}

.card>.list-group:first-child {
    border-top-left-radius: .2232rem;
    border-top-right-radius: .2232rem;
    border-top-width: 0
}

.card>.list-group:last-child {
    border-bottom-left-radius: .2232rem;
    border-bottom-right-radius: .2232rem;
    border-bottom-width: 0
}

.card>.card-header+.list-group,.card>.list-group+.card-footer {
    border-top: 0
}

.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.5rem
}

.card-title {
    margin-bottom: 1.25rem
}

.card-subtitle {
    margin-top: -.625rem
}

.card-subtitle,.card-text:last-child {
    margin-bottom: 0
}

.card-link:hover {
    text-decoration: none
}

.card-link+.card-link {
    margin-left: 1.5rem
}

.card-header {
    background-color: #f6f9fc;
    border-bottom: .0625rem solid #222a420d;
    margin-bottom: 0;
    padding: 1.25rem 1.5rem
}

.card-header:first-child {
    border-radius: .2232rem .2232rem 0 0
}

.card-footer {
    background-color: #f6f9fc;
    border-top: .0625rem solid #222a420d;
    padding: 1.25rem 1.5rem
}

.card-footer:last-child {
    border-radius: 0 0 .2232rem .2232rem
}

.card-header-tabs {
    border-bottom: 0;
    margin-bottom: -1.25rem
}

.card-header-pills,.card-header-tabs {
    margin-left: -.75rem;
    margin-right: -.75rem
}

.card-img-overlay {
    border-radius: .2232rem;
    bottom: 0;
    left: 0;
    padding: 1.25rem;
    position: absolute;
    right: 0;
    top: 0
}

.card-img,.card-img-bottom,.card-img-top {
    flex-shrink: 0;
    width: 100%
}

.card-img,.card-img-top {
    border-top-left-radius: .2232rem;
    border-top-right-radius: .2232rem
}

.card-img,.card-img-bottom {
    border-bottom-left-radius: .2232rem;
    border-bottom-right-radius: .2232rem
}

.card-deck .card {
    margin-bottom: 15px
}

@media(min-width: 576px) {
    .card-deck {
        display:flex;
        flex-flow: row wrap;
        margin-left: -15px;
        margin-right: -15px
    }

    .card-deck .card {
        flex: 1 0;
        margin-bottom: 0;
        margin-left: 15px;
        margin-right: 15px
    }
}

.card-group>.card {
    margin-bottom: 15px
}

@media(min-width: 576px) {
    .card-group {
        display:flex;
        flex-flow: row wrap
    }

    .card-group>.card {
        flex: 1 0;
        margin-bottom: 0
    }

    .card-group>.card+.card {
        border-left: 0;
        margin-left: 0
    }

    .card-group>.card:not(:last-child) {
        border-bottom-right-radius: 0;
        border-top-right-radius: 0
    }

    .card-group>.card:not(:last-child) .card-header,.card-group>.card:not(:last-child) .card-img-top {
        border-top-right-radius: 0
    }

    .card-group>.card:not(:last-child) .card-footer,.card-group>.card:not(:last-child) .card-img-bottom {
        border-bottom-right-radius: 0
    }

    .card-group>.card:not(:first-child) {
        border-bottom-left-radius: 0;
        border-top-left-radius: 0
    }

    .card-group>.card:not(:first-child) .card-header,.card-group>.card:not(:first-child) .card-img-top {
        border-top-left-radius: 0
    }

    .card-group>.card:not(:first-child) .card-footer,.card-group>.card:not(:first-child) .card-img-bottom {
        border-bottom-left-radius: 0
    }
}

.card-columns .card {
    margin-bottom: 1.25rem
}

@media(min-width: 576px) {
    .card-columns {
        column-count:3;
        column-gap: 1.25rem;
        orphans: 1;
        widows: 1
    }

    .card-columns .card {
        display: inline-block;
        width: 100%
    }
}

.accordion {
    overflow-anchor: none
}

.accordion>.card {
    overflow: hidden
}

.accordion>.card:not(:last-of-type) {
    border-bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0
}

.accordion>.card:not(:first-of-type) {
    border-top-left-radius: 0;
    border-top-right-radius: 0
}

.accordion>.card>.card-header {
    border-radius: 0;
    margin-bottom: -.0625rem
}

.breadcrumb {
    background-color: #1d253b;
    border-radius: .25rem;
    flex-wrap: wrap;
    list-style: none;
    margin-bottom: 1rem;
    padding: .75rem 1rem
}

.breadcrumb,.breadcrumb-item {
    display: flex
}

.breadcrumb-item+.breadcrumb-item {
    padding-left: .5rem
}

.breadcrumb-item+.breadcrumb-item:before {
    color: #fff;
    content: "/";
    display: inline-block;
    padding-right: .5rem
}

.breadcrumb-item+.breadcrumb-item:hover:before {
    text-decoration: underline;
    text-decoration: none
}

.breadcrumb-item.active {
    color: #fff
}

.pagination {
    border-radius: .25rem;
    display: flex;
    list-style: none;
    padding-left: 0
}

.page-link {
    background-color: #0000;
    border: .0625rem solid #e3e3e3;
    color: #fff;
    display: block;
    line-height: 1.25;
    margin-left: -.0625rem;
    padding: 0 .6875rem;
    position: relative
}

.page-link:hover {
    background-color: #e3e3e3;
    border-color: #e3e3e3;
    color: #6c757d;
    text-decoration: none;
    z-index: 2
}

.page-link:focus {
    box-shadow: none;
    outline: 0;
    z-index: 3
}

.page-item:first-child .page-link {
    border-bottom-left-radius: .25rem;
    border-top-left-radius: .25rem;
    margin-left: 0
}

.page-item:last-child .page-link {
    border-bottom-right-radius: .25rem;
    border-top-right-radius: .25rem
}

.page-item.active .page-link {
    background-color: #e14eca;
    border-color: #e14eca;
    color: #fff;
    z-index: 3
}

.page-item.disabled .page-link {
    background-color: #0000;
    border-color: #e3e3e3;
    color: #6c757d;
    cursor: auto;
    pointer-events: none
}

.pagination-lg .page-link {
    font-size: .99925rem;
    line-height: 1.625rem;
    padding: .75rem 1.5rem
}

.pagination-lg .page-item:first-child .page-link {
    border-bottom-left-radius: .4285rem;
    border-top-left-radius: .4285rem
}

.pagination-lg .page-item:last-child .page-link {
    border-bottom-right-radius: .4285rem;
    border-top-right-radius: .4285rem
}

.pagination-sm .page-link {
    font-size: .7500000025rem;
    line-height: 1.5;
    padding: .25rem .5rem
}

.pagination-sm .page-item:first-child .page-link {
    border-bottom-left-radius: .2857rem;
    border-top-left-radius: .2857rem
}

.pagination-sm .page-item:last-child .page-link {
    border-bottom-right-radius: .2857rem;
    border-top-right-radius: .2857rem
}

.badge {
    border-radius: .25rem;
    display: inline-block;
    font-size: .7500000025rem;
    font-weight: 700;
    line-height: 1;
    padding: .25rem .5rem;
    text-align: center;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    vertical-align: initial;
    white-space: nowrap
}

@media(prefers-reduced-motion:reduce) {
    .badge {
        transition: none
    }
}

a.badge:focus,a.badge:hover {
    text-decoration: none
}

.badge:empty {
    display: none
}

.btn .badge {
    position: relative;
    top: -1px
}

.badge-pill {
    border-radius: .875rem;
    padding-left: .875em;
    padding-right: .875em
}

.badge-primary {
    background-color: #e14eca;
    color: #fff
}

a.badge-primary:focus,a.badge-primary:hover {
    background-color: #d725bb;
    color: #fff
}

a.badge-primary.focus,a.badge-primary:focus {
    box-shadow: 0 0 0 0 #e14eca80;
    outline: 0
}

.badge-secondary {
    background-color: #f4f5f7;
    color: #212529
}

a.badge-secondary:focus,a.badge-secondary:hover {
    background-color: #d6dae2;
    color: #212529
}

a.badge-secondary.focus,a.badge-secondary:focus {
    box-shadow: 0 0 0 0 #f4f5f780;
    outline: 0
}

.badge-success {
    background-color: #00f2c3;
    color: #fff
}

a.badge-success:focus,a.badge-success:hover {
    background-color: #00bf9a;
    color: #fff
}

a.badge-success.focus,a.badge-success:focus {
    box-shadow: 0 0 0 0 #00f2c380;
    outline: 0
}

.badge-info {
    background-color: #1d8cf8;
    color: #fff
}

a.badge-info:focus,a.badge-info:hover {
    background-color: #0772db;
    color: #fff
}

a.badge-info.focus,a.badge-info:focus {
    box-shadow: 0 0 0 0 #1d8cf880;
    outline: 0
}

.badge-warning {
    background-color: #ff8d72;
    color: #fff
}

a.badge-warning:focus,a.badge-warning:hover {
    background-color: #ff643f;
    color: #fff
}

a.badge-warning.focus,a.badge-warning:focus {
    box-shadow: 0 0 0 0 #ff8d7280;
    outline: 0
}

.badge-danger {
    background-color: #fd5d93;
    color: #fff
}

a.badge-danger:focus,a.badge-danger:hover {
    background-color: #fc2b71;
    color: #fff
}

a.badge-danger.focus,a.badge-danger:focus {
    box-shadow: 0 0 0 0 #fd5d9380;
    outline: 0
}

.badge-light {
    background-color: #adb5bd;
    color: #fff
}

a.badge-light:focus,a.badge-light:hover {
    background-color: #919ca6;
    color: #fff
}

a.badge-light.focus,a.badge-light:focus {
    box-shadow: 0 0 0 0 #adb5bd80;
    outline: 0
}

.badge-dark {
    background-color: #212529;
    color: #fff
}

a.badge-dark:focus,a.badge-dark:hover {
    background-color: #0a0c0d;
    color: #fff
}

a.badge-dark.focus,a.badge-dark:focus {
    box-shadow: 0 0 0 0 #21252980;
    outline: 0
}

.badge-default {
    background-color: #344675;
    color: #fff
}

a.badge-default:focus,a.badge-default:hover {
    background-color: #243152;
    color: #fff
}

a.badge-default.focus,a.badge-default:focus {
    box-shadow: 0 0 0 0 #34467580;
    outline: 0
}

.badge-white {
    background-color: #fff;
    color: #212529
}

a.badge-white:focus,a.badge-white:hover {
    background-color: #e6e6e6;
    color: #212529
}

a.badge-white.focus,a.badge-white:focus {
    box-shadow: 0 0 0 0 #ffffff80;
    outline: 0
}

.badge-neutral {
    background-color: #fff;
    color: #212529
}

a.badge-neutral:focus,a.badge-neutral:hover {
    background-color: #e6e6e6;
    color: #212529
}

a.badge-neutral.focus,a.badge-neutral:focus {
    box-shadow: 0 0 0 0 #ffffff80;
    outline: 0
}

.badge-darker,a.badge-darker:focus,a.badge-darker:hover {
    background-color: #000;
    color: #fff
}

a.badge-darker.focus,a.badge-darker:focus {
    box-shadow: 0 0 0 0 #00000080;
    outline: 0
}

.jumbotron {
    background-color: #e9ecef;
    border-radius: .4285rem;
    margin-bottom: 2rem;
    padding: 2rem 1rem
}

@media(min-width: 576px) {
    .jumbotron {
        padding:4rem 2rem
    }
}

.jumbotron-fluid {
    border-radius: 0;
    padding-left: 0;
    padding-right: 0
}

.alert {
    border: .0625rem solid #0000;
    border-radius: .2857rem;
    margin-bottom: 1rem;
    padding: .9rem 1.25rem;
    position: relative
}

.alert-heading {
    color: inherit
}

.alert-link {
    font-weight: 600
}

.alert-dismissible {
    padding-right: 3.8125rem
}

.alert-dismissible .close {
    color: inherit;
    padding: .9rem 1.25rem;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 2
}

.alert-primary {
    background-color: #e66ad2;
    border-color: #e66ad2;
    color: #e14eca
}

.alert-primary hr {
    border-top-color: #e254cb
}

.alert-primary .alert-link {
    color: #d725bb
}

.alert-secondary {
    background-color: #f6f7f8;
    border-color: #f6f7f8;
    color: #f4f5f7
}

.alert-secondary hr {
    border-top-color: #e8eaed
}

.alert-secondary .alert-link {
    color: #d6dae2
}

.alert-success {
    background-color: #29f4cd;
    border-color: #29f4cd;
    color: #00f2c3
}

.alert-success hr {
    border-top-color: #11f3c7
}

.alert-success .alert-link {
    color: #00bf9a
}

.alert-info {
    background-color: #419ef9;
    border-color: #419ef9;
    color: #1d8cf8
}

.alert-info hr {
    border-top-color: #2891f8
}

.alert-info .alert-link {
    color: #0772db
}

.alert-warning {
    background-color: #ff9f89;
    border-color: #ff9f89;
    color: #ff8d72
}

.alert-warning hr {
    border-top-color: #ff8a70
}

.alert-warning .alert-link {
    color: #ff643f
}

.alert-danger {
    background-color: #fd77a4;
    border-color: #fd77a4;
    color: #fd5d93
}

.alert-danger hr {
    border-top-color: #fd5e93
}

.alert-danger .alert-link {
    color: #fc2b71
}

.alert-light {
    background-color: #bac1c8;
    border-color: #bac1c8;
    color: #adb5bd
}

.alert-light hr {
    border-top-color: #acb4bd
}

.alert-light .alert-link {
    color: #919ca6
}

.alert-dark {
    background-color: #45484b;
    border-color: #45484b;
    color: #212529
}

.alert-dark hr {
    border-top-color: #393b3e
}

.alert-dark .alert-link {
    color: #0a0c0d
}

.alert-default {
    background-color: #54648b;
    border-color: #54648b;
    color: #344675
}

.alert-default hr {
    border-top-color: #4a597b
}

.alert-default .alert-link {
    color: #243152
}

.alert-white {
    background-color: #fff;
    border-color: #fff;
    color: #fff
}

.alert-white hr {
    border-top-color: #f2f2f2
}

.alert-white .alert-link {
    color: #e6e6e6
}

.alert-neutral {
    background-color: #fff;
    border-color: #fff;
    color: #fff
}

.alert-neutral hr {
    border-top-color: #f2f2f2
}

.alert-neutral .alert-link {
    color: #e6e6e6
}

.alert-darker {
    background-color: #292929;
    border-color: #292929;
    color: #000
}

.alert-darker hr {
    border-top-color: #1c1c1c
}

.alert-darker .alert-link {
    color: #000
}

@keyframes progress-bar-stripes {
    0% {
        background-position: .5rem 0
    }

    to {
        background-position: 0 0
    }
}

.progress {
    background-color: #0000004d;
    border-radius: .875rem;
    box-shadow: 0 0 0 3px #0000004d;
    font-size: .65625rem;
    height: .5rem;
    line-height: 0
}

.progress,.progress-bar {
    display: flex;
    overflow: hidden
}

.progress-bar {
    background-color: #e14eca;
    color: #fff;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    transition: width .6s ease;
    white-space: nowrap
}

@media(prefers-reduced-motion:reduce) {
    .progress-bar {
        transition: none
    }
}

.progress-bar-striped {
    background-image: linear-gradient(45deg,#ffffff26 25%,#0000 0,#0000 50%,#ffffff26 0,#ffffff26 75%,#0000 0,#0000);
    background-size: .5rem .5rem
}

.progress-bar-animated {
    animation: progress-bar-stripes 1s linear infinite
}

@media(prefers-reduced-motion:reduce) {
    .progress-bar-animated {
        animation: none
    }
}

.media {
    align-items: flex-start;
    display: flex
}

.media-body {
    flex: 1 1
}

.list-group {
    border-radius: .25rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    padding-left: 0
}

.list-group-item-action {
    color: #525f7f;
    text-align: inherit;
    width: 100%
}

.list-group-item-action:focus,.list-group-item-action:hover {
    background-color: #f6f9fc;
    color: #525f7f;
    text-decoration: none;
    z-index: 1
}

.list-group-item-action:active {
    background-color: #e9ecef;
    color: #525f7f
}

.list-group-item {
    background-color: #fff;
    border: .0625rem solid #e9ecef;
    display: block;
    padding: 1rem;
    position: relative
}

.list-group-item:first-child {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit
}

.list-group-item:last-child {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit
}

.list-group-item.disabled,.list-group-item:disabled {
    background-color: #fff;
    color: #6c757d;
    pointer-events: none
}

.list-group-item.active {
    background-color: #e14eca;
    border-color: #e14eca;
    color: #fff;
    z-index: 2
}

.list-group-item+.list-group-item {
    border-top-width: 0
}

.list-group-item+.list-group-item.active {
    border-top-width: .0625rem;
    margin-top: -.0625rem
}

.list-group-horizontal {
    flex-direction: row
}

.list-group-horizontal>.list-group-item:first-child {
    border-bottom-left-radius: .25rem;
    border-top-right-radius: 0
}

.list-group-horizontal>.list-group-item:last-child {
    border-bottom-left-radius: 0;
    border-top-right-radius: .25rem
}

.list-group-horizontal>.list-group-item.active {
    margin-top: 0
}

.list-group-horizontal>.list-group-item+.list-group-item {
    border-left-width: 0;
    border-top-width: .0625rem
}

.list-group-horizontal>.list-group-item+.list-group-item.active {
    border-left-width: .0625rem;
    margin-left: -.0625rem
}

@media(min-width: 576px) {
    .list-group-horizontal-sm {
        flex-direction:row
    }

    .list-group-horizontal-sm>.list-group-item:first-child {
        border-bottom-left-radius: .25rem;
        border-top-right-radius: 0
    }

    .list-group-horizontal-sm>.list-group-item:last-child {
        border-bottom-left-radius: 0;
        border-top-right-radius: .25rem
    }

    .list-group-horizontal-sm>.list-group-item.active {
        margin-top: 0
    }

    .list-group-horizontal-sm>.list-group-item+.list-group-item {
        border-left-width: 0;
        border-top-width: .0625rem
    }

    .list-group-horizontal-sm>.list-group-item+.list-group-item.active {
        border-left-width: .0625rem;
        margin-left: -.0625rem
    }
}

@media(min-width: 768px) {
    .list-group-horizontal-md {
        flex-direction:row
    }

    .list-group-horizontal-md>.list-group-item:first-child {
        border-bottom-left-radius: .25rem;
        border-top-right-radius: 0
    }

    .list-group-horizontal-md>.list-group-item:last-child {
        border-bottom-left-radius: 0;
        border-top-right-radius: .25rem
    }

    .list-group-horizontal-md>.list-group-item.active {
        margin-top: 0
    }

    .list-group-horizontal-md>.list-group-item+.list-group-item {
        border-left-width: 0;
        border-top-width: .0625rem
    }

    .list-group-horizontal-md>.list-group-item+.list-group-item.active {
        border-left-width: .0625rem;
        margin-left: -.0625rem
    }
}

@media(min-width: 992px) {
    .list-group-horizontal-lg {
        flex-direction:row
    }

    .list-group-horizontal-lg>.list-group-item:first-child {
        border-bottom-left-radius: .25rem;
        border-top-right-radius: 0
    }

    .list-group-horizontal-lg>.list-group-item:last-child {
        border-bottom-left-radius: 0;
        border-top-right-radius: .25rem
    }

    .list-group-horizontal-lg>.list-group-item.active {
        margin-top: 0
    }

    .list-group-horizontal-lg>.list-group-item+.list-group-item {
        border-left-width: 0;
        border-top-width: .0625rem
    }

    .list-group-horizontal-lg>.list-group-item+.list-group-item.active {
        border-left-width: .0625rem;
        margin-left: -.0625rem
    }
}

@media(min-width: 1200px) {
    .list-group-horizontal-xl {
        flex-direction:row
    }

    .list-group-horizontal-xl>.list-group-item:first-child {
        border-bottom-left-radius: .25rem;
        border-top-right-radius: 0
    }

    .list-group-horizontal-xl>.list-group-item:last-child {
        border-bottom-left-radius: 0;
        border-top-right-radius: .25rem
    }

    .list-group-horizontal-xl>.list-group-item.active {
        margin-top: 0
    }

    .list-group-horizontal-xl>.list-group-item+.list-group-item {
        border-left-width: 0;
        border-top-width: .0625rem
    }

    .list-group-horizontal-xl>.list-group-item+.list-group-item.active {
        border-left-width: .0625rem;
        margin-left: -.0625rem
    }
}

.list-group-flush {
    border-radius: 0
}

.list-group-flush>.list-group-item {
    border-width: 0 0 .0625rem
}

.list-group-flush>.list-group-item:last-child {
    border-bottom-width: 0
}

.list-group-item-primary {
    background-color: #f7cdf0;
    color: #853d89
}

.list-group-item-primary.list-group-item-action:focus,.list-group-item-primary.list-group-item-action:hover {
    background-color: #f3b7e9;
    color: #853d89
}

.list-group-item-primary.list-group-item-action.active {
    background-color: #853d89;
    border-color: #853d89;
    color: #fff
}

.list-group-item-secondary {
    background-color: #fcfcfd;
    color: #8f94a0
}

.list-group-item-secondary.list-group-item-action:focus,.list-group-item-secondary.list-group-item-action:hover {
    background-color: #ededf3;
    color: #8f94a0
}

.list-group-item-secondary.list-group-item-action.active {
    background-color: #8f94a0;
    border-color: #8f94a0;
    color: #fff
}

.list-group-item-success {
    background-color: #b8fbee;
    color: #109285
}

.list-group-item-success.list-group-item-action:focus,.list-group-item-success.list-group-item-action:hover {
    background-color: #a0fae8;
    color: #109285
}

.list-group-item-success.list-group-item-action.active {
    background-color: #109285;
    border-color: #109285;
    color: #fff
}

.list-group-item-info {
    background-color: #c0dffd;
    color: #1f5da1
}

.list-group-item-info.list-group-item-action:focus,.list-group-item-info.list-group-item-action:hover {
    background-color: #a7d2fc;
    color: #1f5da1
}

.list-group-item-info.list-group-item-action.active {
    background-color: #1f5da1;
    border-color: #1f5da1;
    color: #fff
}

.list-group-item-warning {
    background-color: #ffdfd8;
    color: #955d5b
}

.list-group-item-warning.list-group-item-action:focus,.list-group-item-warning.list-group-item-action:hover {
    background-color: #ffcabf;
    color: #955d5b
}

.list-group-item-warning.list-group-item-action.active {
    background-color: #955d5b;
    border-color: #955d5b;
    color: #fff
}

.list-group-item-danger {
    background-color: #fed2e1;
    color: #94456c
}

.list-group-item-danger.list-group-item-action:focus,.list-group-item-danger.list-group-item-action:hover {
    background-color: #fdb9d0;
    color: #94456c
}

.list-group-item-danger.list-group-item-action.active {
    background-color: #94456c;
    border-color: #94456c;
    color: #fff
}

.list-group-item-light {
    background-color: #e8eaed;
    color: #6a7282
}

.list-group-item-light.list-group-item-action:focus,.list-group-item-light.list-group-item-action:hover {
    background-color: #dadde2;
    color: #6a7282
}

.list-group-item-light.list-group-item-action.active {
    background-color: #6a7282;
    border-color: #6a7282;
    color: #fff
}

.list-group-item-dark {
    background-color: #c1c2c3;
    color: #212735
}

.list-group-item-dark.list-group-item-action:focus,.list-group-item-dark.list-group-item-action:hover {
    background-color: #b4b5b6;
    color: #212735
}

.list-group-item-dark.list-group-item-action.active {
    background-color: #212735;
    border-color: #212735;
    color: #fff
}

.list-group-item-default {
    background-color: #c6cbd8;
    color: #2b395d
}

.list-group-item-default.list-group-item-action:focus,.list-group-item-default.list-group-item-action:hover {
    background-color: #b7bdce;
    color: #2b395d
}

.list-group-item-default.list-group-item-action.active {
    background-color: #2b395d;
    border-color: #2b395d;
    color: #fff
}

.list-group-item-white {
    background-color: #fff;
    color: #9599a4
}

.list-group-item-white.list-group-item-action:focus,.list-group-item-white.list-group-item-action:hover {
    background-color: #f2f2f2;
    color: #9599a4
}

.list-group-item-white.list-group-item-action.active {
    background-color: #9599a4;
    border-color: #9599a4;
    color: #fff
}

.list-group-item-neutral {
    background-color: #fff;
    color: #9599a4
}

.list-group-item-neutral.list-group-item-action:focus,.list-group-item-neutral.list-group-item-action:hover {
    background-color: #f2f2f2;
    color: #9599a4
}

.list-group-item-neutral.list-group-item-action.active {
    background-color: #9599a4;
    border-color: #9599a4;
    color: #fff
}

.list-group-item-darker {
    background-color: #b8b8b8;
    color: #101420
}

.list-group-item-darker.list-group-item-action:focus,.list-group-item-darker.list-group-item-action:hover {
    background-color: #ababab;
    color: #101420
}

.list-group-item-darker.list-group-item-action.active {
    background-color: #101420;
    border-color: #101420;
    color: #fff
}

.close {
    color: #0009;
    float: right;
    font-size: 1.3125rem;
    font-weight: 600;
    line-height: 1;
    opacity: .5;
    text-shadow: none
}

.close:hover {
    color: #0009;
    text-decoration: none
}

.close:not(:disabled):not(.disabled):focus,.close:not(:disabled):not(.disabled):hover {
    opacity: .75
}

button.close {
    background-color: #0000;
    border: 0;
    padding: 0
}

a.close.disabled {
    pointer-events: none
}

.modal-open {
    overflow: hidden
}

.modal-open .modal {
    overflow-x: hidden;
    overflow-y: auto
}

.modal {
    display: none;
    height: 100%;
    left: 0;
    outline: 0;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1050
}

.modal-dialog {
    margin: .5rem;
    pointer-events: none;
    position: relative;
    width: auto
}

.modal.fade .modal-dialog {
    transform: translateY(-50px);
    transition: transform .3s ease-out
}

@media(prefers-reduced-motion:reduce) {
    .modal.fade .modal-dialog {
        transition: none
    }
}

.modal.show .modal-dialog {
    transform: none
}

.modal.modal-static .modal-dialog {
    transform: scale(1.02)
}

.modal-dialog-scrollable {
    display: flex;
    max-height: calc(100% - 1rem)
}

.modal-dialog-scrollable .modal-content {
    max-height: calc(100vh - 1rem);
    overflow: hidden
}

.modal-dialog-scrollable .modal-footer,.modal-dialog-scrollable .modal-header {
    flex-shrink: 0
}

.modal-dialog-scrollable .modal-body {
    overflow-y: auto
}

.modal-dialog-centered {
    align-items: center;
    display: flex;
    min-height: calc(100% - 1rem)
}

.modal-dialog-centered:before {
    content: "";
    display: block;
    height: calc(100vh - 1rem);
    height: -webkit-min-content;
    height: min-content
}

.modal-dialog-centered.modal-dialog-scrollable {
    flex-direction: column;
    height: 100%;
    justify-content: center
}

.modal-dialog-centered.modal-dialog-scrollable .modal-content {
    max-height: none
}

.modal-dialog-centered.modal-dialog-scrollable:before {
    content: none
}

.modal-content {
    background-clip: padding-box;
    background-color: #fff;
    border: 1px solid #222a4233;
    border-radius: .2857rem;
    box-shadow: 0 10px 50px 0 #00000080;
    display: flex;
    flex-direction: column;
    outline: 0;
    pointer-events: auto;
    position: relative;
    width: 100%
}

.modal-backdrop {
    background-color: #222a42;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 1040
}

.modal-backdrop.fade {
    opacity: 0
}

.modal-backdrop.show {
    opacity: .16
}

.modal-header {
    align-items: flex-start;
    border-bottom: 1px solid #e9ecef;
    border-top-left-radius: calc(.2857rem - 1px);
    border-top-right-radius: calc(.2857rem - 1px);
    display: flex;
    justify-content: space-between;
    padding: 24px 24px 0
}

.modal-header .close {
    margin: -1rem -1rem -1rem auto;
    padding: 24px 24px 0
}

.modal-title {
    line-height: 1.1;
    margin-bottom: 0
}

.modal-body {
    flex: 1 1 auto;
    padding: 24px 24px 16px;
    position: relative
}

.modal-footer {
    align-items: center;
    border-bottom-left-radius: calc(.2857rem - 1px);
    border-bottom-right-radius: calc(.2857rem - 1px);
    border-top: 1px solid #e9ecef;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    padding: 24px 24px 16px 24px-0.25rem
}

.modal-footer>* {
    margin: .25rem
}

.modal-scrollbar-measure {
    height: 50px;
    overflow: scroll;
    position: absolute;
    top: -9999px;
    width: 50px
}

@media(min-width: 576px) {
    .modal-dialog {
        margin:1.75rem auto;
        max-width: 500px
    }

    .modal-dialog-scrollable {
        max-height: calc(100% - 3.5rem)
    }

    .modal-dialog-scrollable .modal-content {
        max-height: calc(100vh - 3.5rem)
    }

    .modal-dialog-centered {
        min-height: calc(100% - 3.5rem)
    }

    .modal-dialog-centered:before {
        height: calc(100vh - 3.5rem);
        height: -webkit-min-content;
        height: min-content
    }

    .modal-content {
        box-shadow: 0 15px 35px #32325d33,0 5px 15px #0000002b
    }

    .modal-sm {
        max-width: 380px
    }
}

@media(min-width: 992px) {
    .modal-lg,.modal-xl {
        max-width:800px
    }
}

@media(min-width: 1200px) {
    .modal-xl {
        max-width:1140px
    }
}

.tooltip {
    word-wrap: break-word;
    display: block;
    font-family: Poppins,sans-serif;
    font-size: .7500000025rem;
    font-style: normal;
    font-weight: 400;
    letter-spacing: normal;
    line-break: auto;
    line-height: 1.5;
    margin: 0;
    opacity: 0;
    position: absolute;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    white-space: normal;
    word-break: normal;
    word-spacing: normal;
    z-index: 1070
}

.tooltip.show {
    opacity: .9
}

.tooltip .arrow {
    display: block;
    height: .4rem;
    position: absolute;
    width: .8rem
}

.tooltip .arrow:before {
    border-color: #0000;
    border-style: solid;
    content: "";
    position: absolute
}

.bs-tooltip-auto[x-placement^=top],.bs-tooltip-top {
    padding: .4rem 0
}

.bs-tooltip-auto[x-placement^=top] .arrow,.bs-tooltip-top .arrow {
    bottom: 0
}

.bs-tooltip-auto[x-placement^=top] .arrow:before,.bs-tooltip-top .arrow:before {
    border-top-color: #fff;
    border-width: .4rem .4rem 0;
    top: 0
}

.bs-tooltip-auto[x-placement^=right],.bs-tooltip-right {
    padding: 0 .4rem
}

.bs-tooltip-auto[x-placement^=right] .arrow,.bs-tooltip-right .arrow {
    height: .8rem;
    left: 0;
    width: .4rem
}

.bs-tooltip-auto[x-placement^=right] .arrow:before,.bs-tooltip-right .arrow:before {
    border-right-color: #fff;
    border-width: .4rem .4rem .4rem 0;
    right: 0
}

.bs-tooltip-auto[x-placement^=bottom],.bs-tooltip-bottom {
    padding: .4rem 0
}

.bs-tooltip-auto[x-placement^=bottom] .arrow,.bs-tooltip-bottom .arrow {
    top: 0
}

.bs-tooltip-auto[x-placement^=bottom] .arrow:before,.bs-tooltip-bottom .arrow:before {
    border-bottom-color: #fff;
    border-width: 0 .4rem .4rem;
    bottom: 0
}

.bs-tooltip-auto[x-placement^=left],.bs-tooltip-left {
    padding: 0 .4rem
}

.bs-tooltip-auto[x-placement^=left] .arrow,.bs-tooltip-left .arrow {
    height: .8rem;
    right: 0;
    width: .4rem
}

.bs-tooltip-auto[x-placement^=left] .arrow:before,.bs-tooltip-left .arrow:before {
    border-left-color: #fff;
    border-width: .4rem 0 .4rem .4rem;
    left: 0
}

.tooltip-inner {
    background-color: #fff;
    border-radius: .25rem;
    color: #222a42;
    max-width: 200px;
    padding: .25rem .5rem;
    text-align: center
}

.popover {
    word-wrap: break-word;
    background-clip: padding-box;
    background-color: #fff;
    border: 1px solid #222a420d;
    border-radius: .4285rem;
    box-shadow: 0 .5rem 2rem 0 #222a4233;
    font-family: Poppins,sans-serif;
    font-size: .7500000025rem;
    font-style: normal;
    font-weight: 400;
    left: 0;
    letter-spacing: normal;
    line-break: auto;
    line-height: 1.5;
    max-width: 276px;
    text-align: left;
    text-align: start;
    text-decoration: none;
    text-shadow: none;
    text-transform: none;
    top: 0;
    white-space: normal;
    word-break: normal;
    word-spacing: normal;
    z-index: 1060
}

.popover,.popover .arrow {
    display: block;
    position: absolute
}

.popover .arrow {
    height: .75rem;
    margin: 0 .4285rem;
    width: 1.5rem
}

.popover .arrow:after,.popover .arrow:before {
    border-color: #0000;
    border-style: solid;
    content: "";
    display: block;
    position: absolute
}

.bs-popover-auto[x-placement^=top],.bs-popover-top {
    margin-bottom: .75rem
}

.bs-popover-auto[x-placement^=top]>.arrow,.bs-popover-top>.arrow {
    bottom: calc(-.75rem - 1px)
}

.bs-popover-auto[x-placement^=top]>.arrow:before,.bs-popover-top>.arrow:before {
    border-top-color: #0000;
    border-width: .75rem .75rem 0;
    bottom: 0
}

.bs-popover-auto[x-placement^=top]>.arrow:after,.bs-popover-top>.arrow:after {
    border-top-color: #fff;
    border-width: .75rem .75rem 0;
    bottom: 1px
}

.bs-popover-auto[x-placement^=right],.bs-popover-right {
    margin-left: .75rem
}

.bs-popover-auto[x-placement^=right]>.arrow,.bs-popover-right>.arrow {
    height: 1.5rem;
    left: calc(-.75rem - 1px);
    margin: .4285rem 0;
    width: .75rem
}

.bs-popover-auto[x-placement^=right]>.arrow:before,.bs-popover-right>.arrow:before {
    border-right-color: #0000;
    border-width: .75rem .75rem .75rem 0;
    left: 0
}

.bs-popover-auto[x-placement^=right]>.arrow:after,.bs-popover-right>.arrow:after {
    border-right-color: #fff;
    border-width: .75rem .75rem .75rem 0;
    left: 1px
}

.bs-popover-auto[x-placement^=bottom],.bs-popover-bottom {
    margin-top: .75rem
}

.bs-popover-auto[x-placement^=bottom]>.arrow,.bs-popover-bottom>.arrow {
    top: calc(-.75rem - 1px)
}

.bs-popover-auto[x-placement^=bottom]>.arrow:before,.bs-popover-bottom>.arrow:before {
    border-bottom-color: #0000;
    border-width: 0 .75rem .75rem;
    top: 0
}

.bs-popover-auto[x-placement^=bottom]>.arrow:after,.bs-popover-bottom>.arrow:after {
    border-bottom-color: #fff;
    border-width: 0 .75rem .75rem;
    top: 1px
}

.bs-popover-auto[x-placement^=bottom] .popover-header:before,.bs-popover-bottom .popover-header:before {
    border-bottom: 1px solid #fff;
    content: "";
    display: block;
    left: 50%;
    margin-left: -.75rem;
    position: absolute;
    top: 0;
    width: 1.5rem
}

.bs-popover-auto[x-placement^=left],.bs-popover-left {
    margin-right: .75rem
}

.bs-popover-auto[x-placement^=left]>.arrow,.bs-popover-left>.arrow {
    height: 1.5rem;
    margin: .4285rem 0;
    right: calc(-.75rem - 1px);
    width: .75rem
}

.bs-popover-auto[x-placement^=left]>.arrow:before,.bs-popover-left>.arrow:before {
    border-left-color: #0000;
    border-width: .75rem 0 .75rem .75rem;
    right: 0
}

.bs-popover-auto[x-placement^=left]>.arrow:after,.bs-popover-left>.arrow:after {
    border-left-color: #fff;
    border-width: .75rem 0 .75rem .75rem;
    right: 1px
}

.popover-header {
    background-color: #fff;
    border-bottom: 1px solid #f2f2f2;
    border-top-left-radius: calc(.4285rem - 1px);
    border-top-right-radius: calc(.4285rem - 1px);
    color: #32325d;
    font-size: .875rem;
    margin-bottom: 0;
    padding: .75rem
}

.popover-header:empty {
    display: none
}

.popover-body {
    color: #525f7f;
    padding: .75rem
}

.carousel {
    position: relative
}

.carousel.pointer-event {
    touch-action: pan-y
}

.carousel-inner {
    overflow: hidden;
    position: relative;
    width: 100%
}

.carousel-inner:after {
    clear: both;
    content: "";
    display: block
}

.carousel-item {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: none;
    float: left;
    margin-right: -100%;
    position: relative;
    transition: transform .6s ease-in-out;
    width: 100%
}

@media(prefers-reduced-motion:reduce) {
    .carousel-item {
        transition: none
    }
}

.carousel-item-next,.carousel-item-prev,.carousel-item.active {
    display: block
}

.active.carousel-item-right,.carousel-item-next:not(.carousel-item-left) {
    transform: translateX(100%)
}

.active.carousel-item-left,.carousel-item-prev:not(.carousel-item-right) {
    transform: translateX(-100%)
}

.carousel-fade .carousel-item {
    opacity: 0;
    transform: none;
    transition-property: opacity
}

.carousel-fade .carousel-item-next.carousel-item-left,.carousel-fade .carousel-item-prev.carousel-item-right,.carousel-fade .carousel-item.active {
    opacity: 1;
    z-index: 1
}

.carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right {
    opacity: 0;
    transition: opacity 0s .6s;
    z-index: 0
}

@media(prefers-reduced-motion:reduce) {
    .carousel-fade .active.carousel-item-left,.carousel-fade .active.carousel-item-right {
        transition: none
    }
}

.carousel-control-next,.carousel-control-prev {
    align-items: center;
    bottom: 0;
    color: #fff;
    display: flex;
    justify-content: center;
    opacity: .5;
    position: absolute;
    text-align: center;
    top: 0;
    transition: opacity .15s ease;
    width: 15%;
    z-index: 1
}

@media(prefers-reduced-motion:reduce) {
    .carousel-control-next,.carousel-control-prev {
        transition: none
    }
}

.carousel-control-next:focus,.carousel-control-next:hover,.carousel-control-prev:focus,.carousel-control-prev:hover {
    color: #fff;
    opacity: .9;
    outline: 0;
    text-decoration: none
}

.carousel-control-prev {
    left: 0
}

.carousel-control-next {
    right: 0
}

.carousel-control-next-icon,.carousel-control-prev-icon {
    background: no-repeat 50%/100% 100%;
    display: inline-block;
    height: 20px;
    width: 20px
}

.carousel-control-prev-icon {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8'%3E%3Cpath d='m5.25 0-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3E%3C/svg%3E")
}

.carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8'%3E%3Cpath d='m2.75 0-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3E%3C/svg%3E")
}

.carousel-indicators {
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    list-style: none;
    margin-left: 15%;
    margin-right: 15%;
    padding-left: 0;
    position: absolute;
    right: 0;
    z-index: 15
}

.carousel-indicators li {
    background-clip: padding-box;
    background-color: #fff;
    border-bottom: 10px solid #0000;
    border-top: 10px solid #0000;
    box-sizing: initial;
    cursor: pointer;
    flex: 0 1 auto;
    height: 3px;
    margin-left: 3px;
    margin-right: 3px;
    opacity: .5;
    text-indent: -999px;
    transition: opacity .6s ease;
    width: 30px
}

@media(prefers-reduced-motion:reduce) {
    .carousel-indicators li {
        transition: none
    }
}

.carousel-indicators .active {
    opacity: 1
}

.carousel-caption {
    bottom: 20px;
    color: #fff;
    left: 15%;
    padding-bottom: 20px;
    padding-top: 20px;
    position: absolute;
    right: 15%;
    text-align: center;
    z-index: 10
}

.align-baseline {
    vertical-align: initial!important
}

.align-top {
    vertical-align: top!important
}

.align-middle {
    vertical-align: middle!important
}

.align-bottom {
    vertical-align: bottom!important
}

.align-text-bottom {
    vertical-align: text-bottom!important
}

.align-text-top {
    vertical-align: text-top!important
}

.bg-primary {
    background-color: #e14eca!important
}

a.bg-primary:focus,a.bg-primary:hover,button.bg-primary:focus,button.bg-primary:hover {
    background-color: #d725bb!important
}

.bg-secondary {
    background-color: #f4f5f7!important
}

a.bg-secondary:focus,a.bg-secondary:hover,button.bg-secondary:focus,button.bg-secondary:hover {
    background-color: #d6dae2!important
}

.bg-success {
    background-color: #00f2c3!important
}

a.bg-success:focus,a.bg-success:hover,button.bg-success:focus,button.bg-success:hover {
    background-color: #00bf9a!important
}

.bg-info {
    background-color: #1d8cf8!important
}

a.bg-info:focus,a.bg-info:hover,button.bg-info:focus,button.bg-info:hover {
    background-color: #0772db!important
}

.bg-warning {
    background-color: #ff8d72!important
}

a.bg-warning:focus,a.bg-warning:hover,button.bg-warning:focus,button.bg-warning:hover {
    background-color: #ff643f!important
}

.bg-danger {
    background-color: #fd5d93!important
}

a.bg-danger:focus,a.bg-danger:hover,button.bg-danger:focus,button.bg-danger:hover {
    background-color: #fc2b71!important
}

.bg-light {
    background-color: #adb5bd!important
}

a.bg-light:focus,a.bg-light:hover,button.bg-light:focus,button.bg-light:hover {
    background-color: #919ca6!important
}

.bg-dark {
    background-color: #212529!important
}

a.bg-dark:focus,a.bg-dark:hover,button.bg-dark:focus,button.bg-dark:hover {
    background-color: #0a0c0d!important
}

.bg-default {
    background-color: #344675!important
}

a.bg-default:focus,a.bg-default:hover,button.bg-default:focus,button.bg-default:hover {
    background-color: #243152!important
}

a.bg-white:focus,a.bg-white:hover,button.bg-white:focus,button.bg-white:hover {
    background-color: #e6e6e6!important
}

.bg-neutral {
    background-color: #fff!important
}

a.bg-neutral:focus,a.bg-neutral:hover,button.bg-neutral:focus,button.bg-neutral:hover {
    background-color: #e6e6e6!important
}

.bg-darker,a.bg-darker:focus,a.bg-darker:hover,button.bg-darker:focus,button.bg-darker:hover {
    background-color: #000!important
}

.bg-white {
    background-color: #fff!important
}

.bg-transparent {
    background-color: #0000!important
}

.border {
    border: .0625rem solid #e9ecef!important
}

.border-top {
    border-top: .0625rem solid #e9ecef!important
}

.border-right {
    border-right: .0625rem solid #e9ecef!important
}

.border-bottom {
    border-bottom: .0625rem solid #e9ecef!important
}

.border-left {
    border-left: .0625rem solid #e9ecef!important
}

.border-0 {
    border: 0!important
}

.border-top-0 {
    border-top: 0!important
}

.border-right-0 {
    border-right: 0!important
}

.border-bottom-0 {
    border-bottom: 0!important
}

.border-left-0 {
    border-left: 0!important
}

.border-primary {
    border-color: #e14eca!important
}

.border-secondary {
    border-color: #f4f5f7!important
}

.border-success {
    border-color: #00f2c3!important
}

.border-info {
    border-color: #1d8cf8!important
}

.border-warning {
    border-color: #ff8d72!important
}

.border-danger {
    border-color: #fd5d93!important
}

.border-light {
    border-color: #adb5bd!important
}

.border-dark {
    border-color: #212529!important
}

.border-default {
    border-color: #344675!important
}

.border-neutral {
    border-color: #fff!important
}

.border-darker {
    border-color: #000!important
}

.border-white {
    border-color: #fff!important
}

.rounded-sm {
    border-radius: .2857rem!important
}

.rounded {
    border-radius: .25rem!important
}

.rounded-top {
    border-top-left-radius: .25rem!important
}

.rounded-right,.rounded-top {
    border-top-right-radius: .25rem!important
}

.rounded-bottom,.rounded-right {
    border-bottom-right-radius: .25rem!important
}

.rounded-bottom,.rounded-left {
    border-bottom-left-radius: .25rem!important
}

.rounded-left {
    border-top-left-radius: .25rem!important
}

.rounded-lg {
    border-radius: .4285rem!important
}

.rounded-circle {
    border-radius: 50%!important
}

.rounded-pill {
    border-radius: 50rem!important
}

.rounded-0 {
    border-radius: 0!important
}

.clearfix:after {
    clear: both;
    content: "";
    display: block
}

.d-none {
    display: none!important
}

.d-inline {
    display: inline!important
}

.d-inline-block {
    display: inline-block!important
}

.d-block {
    display: block!important
}

.d-table {
    display: table!important
}

.d-table-row {
    display: table-row!important
}

.d-table-cell {
    display: table-cell!important
}

.d-flex {
    display: flex!important
}

.d-inline-flex {
    display: inline-flex!important
}

@media(min-width: 576px) {
    .d-sm-none {
        display:none!important
    }

    .d-sm-inline {
        display: inline!important
    }

    .d-sm-inline-block {
        display: inline-block!important
    }

    .d-sm-block {
        display: block!important
    }

    .d-sm-table {
        display: table!important
    }

    .d-sm-table-row {
        display: table-row!important
    }

    .d-sm-table-cell {
        display: table-cell!important
    }

    .d-sm-flex {
        display: flex!important
    }

    .d-sm-inline-flex {
        display: inline-flex!important
    }
}

@media(min-width: 768px) {
    .d-md-none {
        display:none!important
    }

    .d-md-inline {
        display: inline!important
    }

    .d-md-inline-block {
        display: inline-block!important
    }

    .d-md-block {
        display: block!important
    }

    .d-md-table {
        display: table!important
    }

    .d-md-table-row {
        display: table-row!important
    }

    .d-md-table-cell {
        display: table-cell!important
    }

    .d-md-flex {
        display: flex!important
    }

    .d-md-inline-flex {
        display: inline-flex!important
    }
}

@media(min-width: 992px) {
    .d-lg-none {
        display:none!important
    }

    .d-lg-inline {
        display: inline!important
    }

    .d-lg-inline-block {
        display: inline-block!important
    }

    .d-lg-block {
        display: block!important
    }

    .d-lg-table {
        display: table!important
    }

    .d-lg-table-row {
        display: table-row!important
    }

    .d-lg-table-cell {
        display: table-cell!important
    }

    .d-lg-flex {
        display: flex!important
    }

    .d-lg-inline-flex {
        display: inline-flex!important
    }
}

@media(min-width: 1200px) {
    .d-xl-none {
        display:none!important
    }

    .d-xl-inline {
        display: inline!important
    }

    .d-xl-inline-block {
        display: inline-block!important
    }

    .d-xl-block {
        display: block!important
    }

    .d-xl-table {
        display: table!important
    }

    .d-xl-table-row {
        display: table-row!important
    }

    .d-xl-table-cell {
        display: table-cell!important
    }

    .d-xl-flex {
        display: flex!important
    }

    .d-xl-inline-flex {
        display: inline-flex!important
    }
}

@media print {
    .d-print-none {
        display: none!important
    }

    .d-print-inline {
        display: inline!important
    }

    .d-print-inline-block {
        display: inline-block!important
    }

    .d-print-block {
        display: block!important
    }

    .d-print-table {
        display: table!important
    }

    .d-print-table-row {
        display: table-row!important
    }

    .d-print-table-cell {
        display: table-cell!important
    }

    .d-print-flex {
        display: flex!important
    }

    .d-print-inline-flex {
        display: inline-flex!important
    }
}

.embed-responsive {
    display: block;
    overflow: hidden;
    padding: 0;
    position: relative;
    width: 100%
}

.embed-responsive:before {
    content: "";
    display: block
}

.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video {
    border: 0;
    bottom: 0;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%
}

.embed-responsive-21by9:before {
    padding-top: 42.8571428571%
}

.embed-responsive-16by9:before {
    padding-top: 56.25%
}

.embed-responsive-4by3:before {
    padding-top: 75%
}

.embed-responsive-1by1:before {
    padding-top: 100%
}

.flex-row {
    flex-direction: row!important
}

.flex-column {
    flex-direction: column!important
}

.flex-row-reverse {
    flex-direction: row-reverse!important
}

.flex-column-reverse {
    flex-direction: column-reverse!important
}

.flex-wrap {
    flex-wrap: wrap!important
}

.flex-nowrap {
    flex-wrap: nowrap!important
}

.flex-wrap-reverse {
    flex-wrap: wrap-reverse!important
}

.flex-fill {
    flex: 1 1 auto!important
}

.flex-grow-0 {
    flex-grow: 0!important
}

.flex-grow-1 {
    flex-grow: 1!important
}

.flex-shrink-0 {
    flex-shrink: 0!important
}

.flex-shrink-1 {
    flex-shrink: 1!important
}

.justify-content-start {
    justify-content: flex-start!important
}

.justify-content-end {
    justify-content: flex-end!important
}

.justify-content-center {
    justify-content: center!important
}

.justify-content-between {
    justify-content: space-between!important
}

.justify-content-around {
    justify-content: space-around!important
}

.align-items-start {
    align-items: flex-start!important
}

.align-items-end {
    align-items: flex-end!important
}

.align-items-center {
    align-items: center!important
}

.align-items-baseline {
    align-items: baseline!important
}

.align-items-stretch {
    align-items: stretch!important
}

.align-content-start {
    align-content: flex-start!important
}

.align-content-end {
    align-content: flex-end!important
}

.align-content-center {
    align-content: center!important
}

.align-content-between {
    align-content: space-between!important
}

.align-content-around {
    align-content: space-around!important
}

.align-content-stretch {
    align-content: stretch!important
}

.align-self-auto {
    align-self: auto!important
}

.align-self-start {
    align-self: flex-start!important
}

.align-self-end {
    align-self: flex-end!important
}

.align-self-center {
    align-self: center!important
}

.align-self-baseline {
    align-self: baseline!important
}

.align-self-stretch {
    align-self: stretch!important
}

@media(min-width: 576px) {
    .flex-sm-row {
        flex-direction:row!important
    }

    .flex-sm-column {
        flex-direction: column!important
    }

    .flex-sm-row-reverse {
        flex-direction: row-reverse!important
    }

    .flex-sm-column-reverse {
        flex-direction: column-reverse!important
    }

    .flex-sm-wrap {
        flex-wrap: wrap!important
    }

    .flex-sm-nowrap {
        flex-wrap: nowrap!important
    }

    .flex-sm-wrap-reverse {
        flex-wrap: wrap-reverse!important
    }

    .flex-sm-fill {
        flex: 1 1 auto!important
    }

    .flex-sm-grow-0 {
        flex-grow: 0!important
    }

    .flex-sm-grow-1 {
        flex-grow: 1!important
    }

    .flex-sm-shrink-0 {
        flex-shrink: 0!important
    }

    .flex-sm-shrink-1 {
        flex-shrink: 1!important
    }

    .justify-content-sm-start {
        justify-content: flex-start!important
    }

    .justify-content-sm-end {
        justify-content: flex-end!important
    }

    .justify-content-sm-center {
        justify-content: center!important
    }

    .justify-content-sm-between {
        justify-content: space-between!important
    }

    .justify-content-sm-around {
        justify-content: space-around!important
    }

    .align-items-sm-start {
        align-items: flex-start!important
    }

    .align-items-sm-end {
        align-items: flex-end!important
    }

    .align-items-sm-center {
        align-items: center!important
    }

    .align-items-sm-baseline {
        align-items: baseline!important
    }

    .align-items-sm-stretch {
        align-items: stretch!important
    }

    .align-content-sm-start {
        align-content: flex-start!important
    }

    .align-content-sm-end {
        align-content: flex-end!important
    }

    .align-content-sm-center {
        align-content: center!important
    }

    .align-content-sm-between {
        align-content: space-between!important
    }

    .align-content-sm-around {
        align-content: space-around!important
    }

    .align-content-sm-stretch {
        align-content: stretch!important
    }

    .align-self-sm-auto {
        align-self: auto!important
    }

    .align-self-sm-start {
        align-self: flex-start!important
    }

    .align-self-sm-end {
        align-self: flex-end!important
    }

    .align-self-sm-center {
        align-self: center!important
    }

    .align-self-sm-baseline {
        align-self: baseline!important
    }

    .align-self-sm-stretch {
        align-self: stretch!important
    }
}

@media(min-width: 768px) {
    .flex-md-row {
        flex-direction:row!important
    }

    .flex-md-column {
        flex-direction: column!important
    }

    .flex-md-row-reverse {
        flex-direction: row-reverse!important
    }

    .flex-md-column-reverse {
        flex-direction: column-reverse!important
    }

    .flex-md-wrap {
        flex-wrap: wrap!important
    }

    .flex-md-nowrap {
        flex-wrap: nowrap!important
    }

    .flex-md-wrap-reverse {
        flex-wrap: wrap-reverse!important
    }

    .flex-md-fill {
        flex: 1 1 auto!important
    }

    .flex-md-grow-0 {
        flex-grow: 0!important
    }

    .flex-md-grow-1 {
        flex-grow: 1!important
    }

    .flex-md-shrink-0 {
        flex-shrink: 0!important
    }

    .flex-md-shrink-1 {
        flex-shrink: 1!important
    }

    .justify-content-md-start {
        justify-content: flex-start!important
    }

    .justify-content-md-end {
        justify-content: flex-end!important
    }

    .justify-content-md-center {
        justify-content: center!important
    }

    .justify-content-md-between {
        justify-content: space-between!important
    }

    .justify-content-md-around {
        justify-content: space-around!important
    }

    .align-items-md-start {
        align-items: flex-start!important
    }

    .align-items-md-end {
        align-items: flex-end!important
    }

    .align-items-md-center {
        align-items: center!important
    }

    .align-items-md-baseline {
        align-items: baseline!important
    }

    .align-items-md-stretch {
        align-items: stretch!important
    }

    .align-content-md-start {
        align-content: flex-start!important
    }

    .align-content-md-end {
        align-content: flex-end!important
    }

    .align-content-md-center {
        align-content: center!important
    }

    .align-content-md-between {
        align-content: space-between!important
    }

    .align-content-md-around {
        align-content: space-around!important
    }

    .align-content-md-stretch {
        align-content: stretch!important
    }

    .align-self-md-auto {
        align-self: auto!important
    }

    .align-self-md-start {
        align-self: flex-start!important
    }

    .align-self-md-end {
        align-self: flex-end!important
    }

    .align-self-md-center {
        align-self: center!important
    }

    .align-self-md-baseline {
        align-self: baseline!important
    }

    .align-self-md-stretch {
        align-self: stretch!important
    }
}

@media(min-width: 992px) {
    .flex-lg-row {
        flex-direction:row!important
    }

    .flex-lg-column {
        flex-direction: column!important
    }

    .flex-lg-row-reverse {
        flex-direction: row-reverse!important
    }

    .flex-lg-column-reverse {
        flex-direction: column-reverse!important
    }

    .flex-lg-wrap {
        flex-wrap: wrap!important
    }

    .flex-lg-nowrap {
        flex-wrap: nowrap!important
    }

    .flex-lg-wrap-reverse {
        flex-wrap: wrap-reverse!important
    }

    .flex-lg-fill {
        flex: 1 1 auto!important
    }

    .flex-lg-grow-0 {
        flex-grow: 0!important
    }

    .flex-lg-grow-1 {
        flex-grow: 1!important
    }

    .flex-lg-shrink-0 {
        flex-shrink: 0!important
    }

    .flex-lg-shrink-1 {
        flex-shrink: 1!important
    }

    .justify-content-lg-start {
        justify-content: flex-start!important
    }

    .justify-content-lg-end {
        justify-content: flex-end!important
    }

    .justify-content-lg-center {
        justify-content: center!important
    }

    .justify-content-lg-between {
        justify-content: space-between!important
    }

    .justify-content-lg-around {
        justify-content: space-around!important
    }

    .align-items-lg-start {
        align-items: flex-start!important
    }

    .align-items-lg-end {
        align-items: flex-end!important
    }

    .align-items-lg-center {
        align-items: center!important
    }

    .align-items-lg-baseline {
        align-items: baseline!important
    }

    .align-items-lg-stretch {
        align-items: stretch!important
    }

    .align-content-lg-start {
        align-content: flex-start!important
    }

    .align-content-lg-end {
        align-content: flex-end!important
    }

    .align-content-lg-center {
        align-content: center!important
    }

    .align-content-lg-between {
        align-content: space-between!important
    }

    .align-content-lg-around {
        align-content: space-around!important
    }

    .align-content-lg-stretch {
        align-content: stretch!important
    }

    .align-self-lg-auto {
        align-self: auto!important
    }

    .align-self-lg-start {
        align-self: flex-start!important
    }

    .align-self-lg-end {
        align-self: flex-end!important
    }

    .align-self-lg-center {
        align-self: center!important
    }

    .align-self-lg-baseline {
        align-self: baseline!important
    }

    .align-self-lg-stretch {
        align-self: stretch!important
    }
}

@media(min-width: 1200px) {
    .flex-xl-row {
        flex-direction:row!important
    }

    .flex-xl-column {
        flex-direction: column!important
    }

    .flex-xl-row-reverse {
        flex-direction: row-reverse!important
    }

    .flex-xl-column-reverse {
        flex-direction: column-reverse!important
    }

    .flex-xl-wrap {
        flex-wrap: wrap!important
    }

    .flex-xl-nowrap {
        flex-wrap: nowrap!important
    }

    .flex-xl-wrap-reverse {
        flex-wrap: wrap-reverse!important
    }

    .flex-xl-fill {
        flex: 1 1 auto!important
    }

    .flex-xl-grow-0 {
        flex-grow: 0!important
    }

    .flex-xl-grow-1 {
        flex-grow: 1!important
    }

    .flex-xl-shrink-0 {
        flex-shrink: 0!important
    }

    .flex-xl-shrink-1 {
        flex-shrink: 1!important
    }

    .justify-content-xl-start {
        justify-content: flex-start!important
    }

    .justify-content-xl-end {
        justify-content: flex-end!important
    }

    .justify-content-xl-center {
        justify-content: center!important
    }

    .justify-content-xl-between {
        justify-content: space-between!important
    }

    .justify-content-xl-around {
        justify-content: space-around!important
    }

    .align-items-xl-start {
        align-items: flex-start!important
    }

    .align-items-xl-end {
        align-items: flex-end!important
    }

    .align-items-xl-center {
        align-items: center!important
    }

    .align-items-xl-baseline {
        align-items: baseline!important
    }

    .align-items-xl-stretch {
        align-items: stretch!important
    }

    .align-content-xl-start {
        align-content: flex-start!important
    }

    .align-content-xl-end {
        align-content: flex-end!important
    }

    .align-content-xl-center {
        align-content: center!important
    }

    .align-content-xl-between {
        align-content: space-between!important
    }

    .align-content-xl-around {
        align-content: space-around!important
    }

    .align-content-xl-stretch {
        align-content: stretch!important
    }

    .align-self-xl-auto {
        align-self: auto!important
    }

    .align-self-xl-start {
        align-self: flex-start!important
    }

    .align-self-xl-end {
        align-self: flex-end!important
    }

    .align-self-xl-center {
        align-self: center!important
    }

    .align-self-xl-baseline {
        align-self: baseline!important
    }

    .align-self-xl-stretch {
        align-self: stretch!important
    }
}

.float-left {
    float: left!important
}

.float-right {
    float: right!important
}

.float-none {
    float: none!important
}

@media(min-width: 576px) {
    .float-sm-left {
        float:left!important
    }

    .float-sm-right {
        float: right!important
    }

    .float-sm-none {
        float: none!important
    }
}

@media(min-width: 768px) {
    .float-md-left {
        float:left!important
    }

    .float-md-right {
        float: right!important
    }

    .float-md-none {
        float: none!important
    }
}

@media(min-width: 992px) {
    .float-lg-left {
        float:left!important
    }

    .float-lg-right {
        float: right!important
    }

    .float-lg-none {
        float: none!important
    }
}

@media(min-width: 1200px) {
    .float-xl-left {
        float:left!important
    }

    .float-xl-right {
        float: right!important
    }

    .float-xl-none {
        float: none!important
    }
}

.user-select-all {
    -webkit-user-select: all!important;
    user-select: all!important
}

.user-select-auto {
    -webkit-user-select: auto!important;
    user-select: auto!important
}

.user-select-none {
    -webkit-user-select: none!important;
    user-select: none!important
}

.overflow-auto {
    overflow: auto!important
}

.overflow-hidden {
    overflow: hidden!important
}

.position-static {
    position: static!important
}

.position-relative {
    position: relative!important
}

.position-absolute {
    position: absolute!important
}

.position-fixed {
    position: fixed!important
}

.position-sticky {
    position: -webkit-sticky!important;
    position: sticky!important
}

.fixed-top {
    top: 0
}

.fixed-bottom,.fixed-top {
    left: 0;
    position: fixed;
    right: 0;
    z-index: 1030
}

.fixed-bottom {
    bottom: 0
}

@supports((position: -webkit-sticky) or (position:sticky)) {
    .sticky-top {
        position:-webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 1020
    }
}

.sr-only {
    clip: rect(0,0,0,0);
    border: 0;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px
}

.sr-only-focusable:active,.sr-only-focusable:focus {
    clip: auto;
    height: auto;
    overflow: visible;
    position: static;
    white-space: normal;
    width: auto
}

.shadow-sm {
    box-shadow: 0 .125rem .25rem rgba(34,42,66,.075)!important
}

.shadow {
    box-shadow: 0 1px 20px 0 #0000001a!important
}

.shadow-lg {
    box-shadow: 0 1rem 3rem rgba(34,42,66,.175)!important
}

.shadow-none {
    box-shadow: none!important
}

.w-25 {
    width: 25%!important
}

.w-50 {
    width: 50%!important
}

.w-75 {
    width: 75%!important
}

.w-100 {
    width: 100%!important
}

.w-auto {
    width: auto!important
}

.h-25 {
    height: 25%!important
}

.h-50 {
    height: 50%!important
}

.h-75 {
    height: 75%!important
}

.h-100 {
    height: 100%!important
}

.h-auto {
    height: auto!important
}

.mw-100 {
    max-width: 100%!important
}

.mh-100 {
    max-height: 100%!important
}

.min-vw-100 {
    min-width: 100vw!important
}

.min-vh-100 {
    min-height: 100vh!important
}

.vw-100 {
    width: 100vw!important
}

.vh-100 {
    height: 100vh!important
}

.m-0 {
    margin: 0!important
}

.mt-0,.my-0 {
    margin-top: 0!important
}

.mr-0,.mx-0 {
    margin-right: 0!important
}

.mb-0,.my-0 {
    margin-bottom: 0!important
}

.ml-0,.mx-0 {
    margin-left: 0!important
}

.m-1 {
    margin: .25rem!important
}

.mt-1,.my-1 {
    margin-top: .25rem!important
}

.mr-1,.mx-1 {
    margin-right: .25rem!important
}

.mb-1,.my-1 {
    margin-bottom: .25rem!important
}

.ml-1,.mx-1 {
    margin-left: .25rem!important
}

.m-2 {
    margin: .5rem!important
}

.mt-2,.my-2 {
    margin-top: .5rem!important
}

.mr-2,.mx-2 {
    margin-right: .5rem!important
}

.mb-2,.my-2 {
    margin-bottom: .5rem!important
}

.ml-2,.mx-2 {
    margin-left: .5rem!important
}

.m-3 {
    margin: 1rem!important
}

.mt-3,.my-3 {
    margin-top: 1rem!important
}

.mr-3,.mx-3 {
    margin-right: 1rem!important
}

.mb-3,.my-3 {
    margin-bottom: 1rem!important
}

.ml-3,.mx-3 {
    margin-left: 1rem!important
}

.m-4 {
    margin: 1.5rem!important
}

.mt-4,.my-4 {
    margin-top: 1.5rem!important
}

.mr-4,.mx-4 {
    margin-right: 1.5rem!important
}

.mb-4,.my-4 {
    margin-bottom: 1.5rem!important
}

.ml-4,.mx-4 {
    margin-left: 1.5rem!important
}

.m-5 {
    margin: 3rem!important
}

.mt-5,.my-5 {
    margin-top: 3rem!important
}

.mr-5,.mx-5 {
    margin-right: 3rem!important
}

.mb-5,.my-5 {
    margin-bottom: 3rem!important
}

.ml-5,.mx-5 {
    margin-left: 3rem!important
}

.m-sm {
    margin: 2rem!important
}

.mt-sm,.my-sm {
    margin-top: 2rem!important
}

.mr-sm,.mx-sm {
    margin-right: 2rem!important
}

.mb-sm,.my-sm {
    margin-bottom: 2rem!important
}

.ml-sm,.mx-sm {
    margin-left: 2rem!important
}

.m-md {
    margin: 4rem!important
}

.mt-md,.my-md {
    margin-top: 4rem!important
}

.mr-md,.mx-md {
    margin-right: 4rem!important
}

.mb-md,.my-md {
    margin-bottom: 4rem!important
}

.ml-md,.mx-md {
    margin-left: 4rem!important
}

.m-lg {
    margin: 6rem!important
}

.mt-lg,.my-lg {
    margin-top: 6rem!important
}

.mr-lg,.mx-lg {
    margin-right: 6rem!important
}

.mb-lg,.my-lg {
    margin-bottom: 6rem!important
}

.ml-lg,.mx-lg {
    margin-left: 6rem!important
}

.m-xl {
    margin: 8rem!important
}

.mt-xl,.my-xl {
    margin-top: 8rem!important
}

.mr-xl,.mx-xl {
    margin-right: 8rem!important
}

.mb-xl,.my-xl {
    margin-bottom: 8rem!important
}

.ml-xl,.mx-xl {
    margin-left: 8rem!important
}

.p-0 {
    padding: 0!important
}

.pt-0,.py-0 {
    padding-top: 0!important
}

.pr-0,.px-0 {
    padding-right: 0!important
}

.pb-0,.py-0 {
    padding-bottom: 0!important
}

.pl-0,.px-0 {
    padding-left: 0!important
}

.p-1 {
    padding: .25rem!important
}

.pt-1,.py-1 {
    padding-top: .25rem!important
}

.pr-1,.px-1 {
    padding-right: .25rem!important
}

.pb-1,.py-1 {
    padding-bottom: .25rem!important
}

.pl-1,.px-1 {
    padding-left: .25rem!important
}

.p-2 {
    padding: .5rem!important
}

.pt-2,.py-2 {
    padding-top: .5rem!important
}

.pr-2,.px-2 {
    padding-right: .5rem!important
}

.pb-2,.py-2 {
    padding-bottom: .5rem!important
}

.pl-2,.px-2 {
    padding-left: .5rem!important
}

.p-3 {
    padding: 1rem!important
}

.pt-3,.py-3 {
    padding-top: 1rem!important
}

.pr-3,.px-3 {
    padding-right: 1rem!important
}

.pb-3,.py-3 {
    padding-bottom: 1rem!important
}

.pl-3,.px-3 {
    padding-left: 1rem!important
}

.p-4 {
    padding: 1.5rem!important
}

.pt-4,.py-4 {
    padding-top: 1.5rem!important
}

.pr-4,.px-4 {
    padding-right: 1.5rem!important
}

.pb-4,.py-4 {
    padding-bottom: 1.5rem!important
}

.pl-4,.px-4 {
    padding-left: 1.5rem!important
}

.p-5 {
    padding: 3rem!important
}

.pt-5,.py-5 {
    padding-top: 3rem!important
}

.pr-5,.px-5 {
    padding-right: 3rem!important
}

.pb-5,.py-5 {
    padding-bottom: 3rem!important
}

.pl-5,.px-5 {
    padding-left: 3rem!important
}

.p-sm {
    padding: 2rem!important
}

.pt-sm,.py-sm {
    padding-top: 2rem!important
}

.pr-sm,.px-sm {
    padding-right: 2rem!important
}

.pb-sm,.py-sm {
    padding-bottom: 2rem!important
}

.pl-sm,.px-sm {
    padding-left: 2rem!important
}

.p-md {
    padding: 4rem!important
}

.pt-md,.py-md {
    padding-top: 4rem!important
}

.pr-md,.px-md {
    padding-right: 4rem!important
}

.pb-md,.py-md {
    padding-bottom: 4rem!important
}

.pl-md,.px-md {
    padding-left: 4rem!important
}

.p-lg {
    padding: 6rem!important
}

.pt-lg,.py-lg {
    padding-top: 6rem!important
}

.pr-lg,.px-lg {
    padding-right: 6rem!important
}

.pb-lg,.py-lg {
    padding-bottom: 6rem!important
}

.pl-lg,.px-lg {
    padding-left: 6rem!important
}

.p-xl {
    padding: 8rem!important
}

.pt-xl,.py-xl {
    padding-top: 8rem!important
}

.pr-xl,.px-xl {
    padding-right: 8rem!important
}

.pb-xl,.py-xl {
    padding-bottom: 8rem!important
}

.pl-xl,.px-xl {
    padding-left: 8rem!important
}

.m-n1 {
    margin: -.25rem!important
}

.mt-n1,.my-n1 {
    margin-top: -.25rem!important
}

.mr-n1,.mx-n1 {
    margin-right: -.25rem!important
}

.mb-n1,.my-n1 {
    margin-bottom: -.25rem!important
}

.ml-n1,.mx-n1 {
    margin-left: -.25rem!important
}

.m-n2 {
    margin: -.5rem!important
}

.mt-n2,.my-n2 {
    margin-top: -.5rem!important
}

.mr-n2,.mx-n2 {
    margin-right: -.5rem!important
}

.mb-n2,.my-n2 {
    margin-bottom: -.5rem!important
}

.ml-n2,.mx-n2 {
    margin-left: -.5rem!important
}

.m-n3 {
    margin: -1rem!important
}

.mt-n3,.my-n3 {
    margin-top: -1rem!important
}

.mr-n3,.mx-n3 {
    margin-right: -1rem!important
}

.mb-n3,.my-n3 {
    margin-bottom: -1rem!important
}

.ml-n3,.mx-n3 {
    margin-left: -1rem!important
}

.m-n4 {
    margin: -1.5rem!important
}

.mt-n4,.my-n4 {
    margin-top: -1.5rem!important
}

.mr-n4,.mx-n4 {
    margin-right: -1.5rem!important
}

.mb-n4,.my-n4 {
    margin-bottom: -1.5rem!important
}

.ml-n4,.mx-n4 {
    margin-left: -1.5rem!important
}

.m-n5 {
    margin: -3rem!important
}

.mt-n5,.my-n5 {
    margin-top: -3rem!important
}

.mr-n5,.mx-n5 {
    margin-right: -3rem!important
}

.mb-n5,.my-n5 {
    margin-bottom: -3rem!important
}

.ml-n5,.mx-n5 {
    margin-left: -3rem!important
}

.m-nsm {
    margin: -2rem!important
}

.mt-nsm,.my-nsm {
    margin-top: -2rem!important
}

.mr-nsm,.mx-nsm {
    margin-right: -2rem!important
}

.mb-nsm,.my-nsm {
    margin-bottom: -2rem!important
}

.ml-nsm,.mx-nsm {
    margin-left: -2rem!important
}

.m-nmd {
    margin: -4rem!important
}

.mt-nmd,.my-nmd {
    margin-top: -4rem!important
}

.mr-nmd,.mx-nmd {
    margin-right: -4rem!important
}

.mb-nmd,.my-nmd {
    margin-bottom: -4rem!important
}

.ml-nmd,.mx-nmd {
    margin-left: -4rem!important
}

.m-nlg {
    margin: -6rem!important
}

.mt-nlg,.my-nlg {
    margin-top: -6rem!important
}

.mr-nlg,.mx-nlg {
    margin-right: -6rem!important
}

.mb-nlg,.my-nlg {
    margin-bottom: -6rem!important
}

.ml-nlg,.mx-nlg {
    margin-left: -6rem!important
}

.m-nxl {
    margin: -8rem!important
}

.mt-nxl,.my-nxl {
    margin-top: -8rem!important
}

.mr-nxl,.mx-nxl {
    margin-right: -8rem!important
}

.mb-nxl,.my-nxl {
    margin-bottom: -8rem!important
}

.ml-nxl,.mx-nxl {
    margin-left: -8rem!important
}

.m-auto {
    margin: auto!important
}

.mt-auto,.my-auto {
    margin-top: auto!important
}

.mr-auto,.mx-auto {
    margin-right: auto!important
}

.mb-auto,.my-auto {
    margin-bottom: auto!important
}

.ml-auto,.mx-auto {
    margin-left: auto!important
}

@media(min-width: 576px) {
    .m-sm-0 {
        margin:0!important
    }

    .mt-sm-0,.my-sm-0 {
        margin-top: 0!important
    }

    .mr-sm-0,.mx-sm-0 {
        margin-right: 0!important
    }

    .mb-sm-0,.my-sm-0 {
        margin-bottom: 0!important
    }

    .ml-sm-0,.mx-sm-0 {
        margin-left: 0!important
    }

    .m-sm-1 {
        margin: .25rem!important
    }

    .mt-sm-1,.my-sm-1 {
        margin-top: .25rem!important
    }

    .mr-sm-1,.mx-sm-1 {
        margin-right: .25rem!important
    }

    .mb-sm-1,.my-sm-1 {
        margin-bottom: .25rem!important
    }

    .ml-sm-1,.mx-sm-1 {
        margin-left: .25rem!important
    }

    .m-sm-2 {
        margin: .5rem!important
    }

    .mt-sm-2,.my-sm-2 {
        margin-top: .5rem!important
    }

    .mr-sm-2,.mx-sm-2 {
        margin-right: .5rem!important
    }

    .mb-sm-2,.my-sm-2 {
        margin-bottom: .5rem!important
    }

    .ml-sm-2,.mx-sm-2 {
        margin-left: .5rem!important
    }

    .m-sm-3 {
        margin: 1rem!important
    }

    .mt-sm-3,.my-sm-3 {
        margin-top: 1rem!important
    }

    .mr-sm-3,.mx-sm-3 {
        margin-right: 1rem!important
    }

    .mb-sm-3,.my-sm-3 {
        margin-bottom: 1rem!important
    }

    .ml-sm-3,.mx-sm-3 {
        margin-left: 1rem!important
    }

    .m-sm-4 {
        margin: 1.5rem!important
    }

    .mt-sm-4,.my-sm-4 {
        margin-top: 1.5rem!important
    }

    .mr-sm-4,.mx-sm-4 {
        margin-right: 1.5rem!important
    }

    .mb-sm-4,.my-sm-4 {
        margin-bottom: 1.5rem!important
    }

    .ml-sm-4,.mx-sm-4 {
        margin-left: 1.5rem!important
    }

    .m-sm-5 {
        margin: 3rem!important
    }

    .mt-sm-5,.my-sm-5 {
        margin-top: 3rem!important
    }

    .mr-sm-5,.mx-sm-5 {
        margin-right: 3rem!important
    }

    .mb-sm-5,.my-sm-5 {
        margin-bottom: 3rem!important
    }

    .ml-sm-5,.mx-sm-5 {
        margin-left: 3rem!important
    }

    .m-sm-sm {
        margin: 2rem!important
    }

    .mt-sm-sm,.my-sm-sm {
        margin-top: 2rem!important
    }

    .mr-sm-sm,.mx-sm-sm {
        margin-right: 2rem!important
    }

    .mb-sm-sm,.my-sm-sm {
        margin-bottom: 2rem!important
    }

    .ml-sm-sm,.mx-sm-sm {
        margin-left: 2rem!important
    }

    .m-sm-md {
        margin: 4rem!important
    }

    .mt-sm-md,.my-sm-md {
        margin-top: 4rem!important
    }

    .mr-sm-md,.mx-sm-md {
        margin-right: 4rem!important
    }

    .mb-sm-md,.my-sm-md {
        margin-bottom: 4rem!important
    }

    .ml-sm-md,.mx-sm-md {
        margin-left: 4rem!important
    }

    .m-sm-lg {
        margin: 6rem!important
    }

    .mt-sm-lg,.my-sm-lg {
        margin-top: 6rem!important
    }

    .mr-sm-lg,.mx-sm-lg {
        margin-right: 6rem!important
    }

    .mb-sm-lg,.my-sm-lg {
        margin-bottom: 6rem!important
    }

    .ml-sm-lg,.mx-sm-lg {
        margin-left: 6rem!important
    }

    .m-sm-xl {
        margin: 8rem!important
    }

    .mt-sm-xl,.my-sm-xl {
        margin-top: 8rem!important
    }

    .mr-sm-xl,.mx-sm-xl {
        margin-right: 8rem!important
    }

    .mb-sm-xl,.my-sm-xl {
        margin-bottom: 8rem!important
    }

    .ml-sm-xl,.mx-sm-xl {
        margin-left: 8rem!important
    }

    .p-sm-0 {
        padding: 0!important
    }

    .pt-sm-0,.py-sm-0 {
        padding-top: 0!important
    }

    .pr-sm-0,.px-sm-0 {
        padding-right: 0!important
    }

    .pb-sm-0,.py-sm-0 {
        padding-bottom: 0!important
    }

    .pl-sm-0,.px-sm-0 {
        padding-left: 0!important
    }

    .p-sm-1 {
        padding: .25rem!important
    }

    .pt-sm-1,.py-sm-1 {
        padding-top: .25rem!important
    }

    .pr-sm-1,.px-sm-1 {
        padding-right: .25rem!important
    }

    .pb-sm-1,.py-sm-1 {
        padding-bottom: .25rem!important
    }

    .pl-sm-1,.px-sm-1 {
        padding-left: .25rem!important
    }

    .p-sm-2 {
        padding: .5rem!important
    }

    .pt-sm-2,.py-sm-2 {
        padding-top: .5rem!important
    }

    .pr-sm-2,.px-sm-2 {
        padding-right: .5rem!important
    }

    .pb-sm-2,.py-sm-2 {
        padding-bottom: .5rem!important
    }

    .pl-sm-2,.px-sm-2 {
        padding-left: .5rem!important
    }

    .p-sm-3 {
        padding: 1rem!important
    }

    .pt-sm-3,.py-sm-3 {
        padding-top: 1rem!important
    }

    .pr-sm-3,.px-sm-3 {
        padding-right: 1rem!important
    }

    .pb-sm-3,.py-sm-3 {
        padding-bottom: 1rem!important
    }

    .pl-sm-3,.px-sm-3 {
        padding-left: 1rem!important
    }

    .p-sm-4 {
        padding: 1.5rem!important
    }

    .pt-sm-4,.py-sm-4 {
        padding-top: 1.5rem!important
    }

    .pr-sm-4,.px-sm-4 {
        padding-right: 1.5rem!important
    }

    .pb-sm-4,.py-sm-4 {
        padding-bottom: 1.5rem!important
    }

    .pl-sm-4,.px-sm-4 {
        padding-left: 1.5rem!important
    }

    .p-sm-5 {
        padding: 3rem!important
    }

    .pt-sm-5,.py-sm-5 {
        padding-top: 3rem!important
    }

    .pr-sm-5,.px-sm-5 {
        padding-right: 3rem!important
    }

    .pb-sm-5,.py-sm-5 {
        padding-bottom: 3rem!important
    }

    .pl-sm-5,.px-sm-5 {
        padding-left: 3rem!important
    }

    .p-sm-sm {
        padding: 2rem!important
    }

    .pt-sm-sm,.py-sm-sm {
        padding-top: 2rem!important
    }

    .pr-sm-sm,.px-sm-sm {
        padding-right: 2rem!important
    }

    .pb-sm-sm,.py-sm-sm {
        padding-bottom: 2rem!important
    }

    .pl-sm-sm,.px-sm-sm {
        padding-left: 2rem!important
    }

    .p-sm-md {
        padding: 4rem!important
    }

    .pt-sm-md,.py-sm-md {
        padding-top: 4rem!important
    }

    .pr-sm-md,.px-sm-md {
        padding-right: 4rem!important
    }

    .pb-sm-md,.py-sm-md {
        padding-bottom: 4rem!important
    }

    .pl-sm-md,.px-sm-md {
        padding-left: 4rem!important
    }

    .p-sm-lg {
        padding: 6rem!important
    }

    .pt-sm-lg,.py-sm-lg {
        padding-top: 6rem!important
    }

    .pr-sm-lg,.px-sm-lg {
        padding-right: 6rem!important
    }

    .pb-sm-lg,.py-sm-lg {
        padding-bottom: 6rem!important
    }

    .pl-sm-lg,.px-sm-lg {
        padding-left: 6rem!important
    }

    .p-sm-xl {
        padding: 8rem!important
    }

    .pt-sm-xl,.py-sm-xl {
        padding-top: 8rem!important
    }

    .pr-sm-xl,.px-sm-xl {
        padding-right: 8rem!important
    }

    .pb-sm-xl,.py-sm-xl {
        padding-bottom: 8rem!important
    }

    .pl-sm-xl,.px-sm-xl {
        padding-left: 8rem!important
    }

    .m-sm-n1 {
        margin: -.25rem!important
    }

    .mt-sm-n1,.my-sm-n1 {
        margin-top: -.25rem!important
    }

    .mr-sm-n1,.mx-sm-n1 {
        margin-right: -.25rem!important
    }

    .mb-sm-n1,.my-sm-n1 {
        margin-bottom: -.25rem!important
    }

    .ml-sm-n1,.mx-sm-n1 {
        margin-left: -.25rem!important
    }

    .m-sm-n2 {
        margin: -.5rem!important
    }

    .mt-sm-n2,.my-sm-n2 {
        margin-top: -.5rem!important
    }

    .mr-sm-n2,.mx-sm-n2 {
        margin-right: -.5rem!important
    }

    .mb-sm-n2,.my-sm-n2 {
        margin-bottom: -.5rem!important
    }

    .ml-sm-n2,.mx-sm-n2 {
        margin-left: -.5rem!important
    }

    .m-sm-n3 {
        margin: -1rem!important
    }

    .mt-sm-n3,.my-sm-n3 {
        margin-top: -1rem!important
    }

    .mr-sm-n3,.mx-sm-n3 {
        margin-right: -1rem!important
    }

    .mb-sm-n3,.my-sm-n3 {
        margin-bottom: -1rem!important
    }

    .ml-sm-n3,.mx-sm-n3 {
        margin-left: -1rem!important
    }

    .m-sm-n4 {
        margin: -1.5rem!important
    }

    .mt-sm-n4,.my-sm-n4 {
        margin-top: -1.5rem!important
    }

    .mr-sm-n4,.mx-sm-n4 {
        margin-right: -1.5rem!important
    }

    .mb-sm-n4,.my-sm-n4 {
        margin-bottom: -1.5rem!important
    }

    .ml-sm-n4,.mx-sm-n4 {
        margin-left: -1.5rem!important
    }

    .m-sm-n5 {
        margin: -3rem!important
    }

    .mt-sm-n5,.my-sm-n5 {
        margin-top: -3rem!important
    }

    .mr-sm-n5,.mx-sm-n5 {
        margin-right: -3rem!important
    }

    .mb-sm-n5,.my-sm-n5 {
        margin-bottom: -3rem!important
    }

    .ml-sm-n5,.mx-sm-n5 {
        margin-left: -3rem!important
    }

    .m-sm-nsm {
        margin: -2rem!important
    }

    .mt-sm-nsm,.my-sm-nsm {
        margin-top: -2rem!important
    }

    .mr-sm-nsm,.mx-sm-nsm {
        margin-right: -2rem!important
    }

    .mb-sm-nsm,.my-sm-nsm {
        margin-bottom: -2rem!important
    }

    .ml-sm-nsm,.mx-sm-nsm {
        margin-left: -2rem!important
    }

    .m-sm-nmd {
        margin: -4rem!important
    }

    .mt-sm-nmd,.my-sm-nmd {
        margin-top: -4rem!important
    }

    .mr-sm-nmd,.mx-sm-nmd {
        margin-right: -4rem!important
    }

    .mb-sm-nmd,.my-sm-nmd {
        margin-bottom: -4rem!important
    }

    .ml-sm-nmd,.mx-sm-nmd {
        margin-left: -4rem!important
    }

    .m-sm-nlg {
        margin: -6rem!important
    }

    .mt-sm-nlg,.my-sm-nlg {
        margin-top: -6rem!important
    }

    .mr-sm-nlg,.mx-sm-nlg {
        margin-right: -6rem!important
    }

    .mb-sm-nlg,.my-sm-nlg {
        margin-bottom: -6rem!important
    }

    .ml-sm-nlg,.mx-sm-nlg {
        margin-left: -6rem!important
    }

    .m-sm-nxl {
        margin: -8rem!important
    }

    .mt-sm-nxl,.my-sm-nxl {
        margin-top: -8rem!important
    }

    .mr-sm-nxl,.mx-sm-nxl {
        margin-right: -8rem!important
    }

    .mb-sm-nxl,.my-sm-nxl {
        margin-bottom: -8rem!important
    }

    .ml-sm-nxl,.mx-sm-nxl {
        margin-left: -8rem!important
    }

    .m-sm-auto {
        margin: auto!important
    }

    .mt-sm-auto,.my-sm-auto {
        margin-top: auto!important
    }

    .mr-sm-auto,.mx-sm-auto {
        margin-right: auto!important
    }

    .mb-sm-auto,.my-sm-auto {
        margin-bottom: auto!important
    }

    .ml-sm-auto,.mx-sm-auto {
        margin-left: auto!important
    }
}

@media(min-width: 768px) {
    .m-md-0 {
        margin:0!important
    }

    .mt-md-0,.my-md-0 {
        margin-top: 0!important
    }

    .mr-md-0,.mx-md-0 {
        margin-right: 0!important
    }

    .mb-md-0,.my-md-0 {
        margin-bottom: 0!important
    }

    .ml-md-0,.mx-md-0 {
        margin-left: 0!important
    }

    .m-md-1 {
        margin: .25rem!important
    }

    .mt-md-1,.my-md-1 {
        margin-top: .25rem!important
    }

    .mr-md-1,.mx-md-1 {
        margin-right: .25rem!important
    }

    .mb-md-1,.my-md-1 {
        margin-bottom: .25rem!important
    }

    .ml-md-1,.mx-md-1 {
        margin-left: .25rem!important
    }

    .m-md-2 {
        margin: .5rem!important
    }

    .mt-md-2,.my-md-2 {
        margin-top: .5rem!important
    }

    .mr-md-2,.mx-md-2 {
        margin-right: .5rem!important
    }

    .mb-md-2,.my-md-2 {
        margin-bottom: .5rem!important
    }

    .ml-md-2,.mx-md-2 {
        margin-left: .5rem!important
    }

    .m-md-3 {
        margin: 1rem!important
    }

    .mt-md-3,.my-md-3 {
        margin-top: 1rem!important
    }

    .mr-md-3,.mx-md-3 {
        margin-right: 1rem!important
    }

    .mb-md-3,.my-md-3 {
        margin-bottom: 1rem!important
    }

    .ml-md-3,.mx-md-3 {
        margin-left: 1rem!important
    }

    .m-md-4 {
        margin: 1.5rem!important
    }

    .mt-md-4,.my-md-4 {
        margin-top: 1.5rem!important
    }

    .mr-md-4,.mx-md-4 {
        margin-right: 1.5rem!important
    }

    .mb-md-4,.my-md-4 {
        margin-bottom: 1.5rem!important
    }

    .ml-md-4,.mx-md-4 {
        margin-left: 1.5rem!important
    }

    .m-md-5 {
        margin: 3rem!important
    }

    .mt-md-5,.my-md-5 {
        margin-top: 3rem!important
    }

    .mr-md-5,.mx-md-5 {
        margin-right: 3rem!important
    }

    .mb-md-5,.my-md-5 {
        margin-bottom: 3rem!important
    }

    .ml-md-5,.mx-md-5 {
        margin-left: 3rem!important
    }

    .m-md-sm {
        margin: 2rem!important
    }

    .mt-md-sm,.my-md-sm {
        margin-top: 2rem!important
    }

    .mr-md-sm,.mx-md-sm {
        margin-right: 2rem!important
    }

    .mb-md-sm,.my-md-sm {
        margin-bottom: 2rem!important
    }

    .ml-md-sm,.mx-md-sm {
        margin-left: 2rem!important
    }

    .m-md-md {
        margin: 4rem!important
    }

    .mt-md-md,.my-md-md {
        margin-top: 4rem!important
    }

    .mr-md-md,.mx-md-md {
        margin-right: 4rem!important
    }

    .mb-md-md,.my-md-md {
        margin-bottom: 4rem!important
    }

    .ml-md-md,.mx-md-md {
        margin-left: 4rem!important
    }

    .m-md-lg {
        margin: 6rem!important
    }

    .mt-md-lg,.my-md-lg {
        margin-top: 6rem!important
    }

    .mr-md-lg,.mx-md-lg {
        margin-right: 6rem!important
    }

    .mb-md-lg,.my-md-lg {
        margin-bottom: 6rem!important
    }

    .ml-md-lg,.mx-md-lg {
        margin-left: 6rem!important
    }

    .m-md-xl {
        margin: 8rem!important
    }

    .mt-md-xl,.my-md-xl {
        margin-top: 8rem!important
    }

    .mr-md-xl,.mx-md-xl {
        margin-right: 8rem!important
    }

    .mb-md-xl,.my-md-xl {
        margin-bottom: 8rem!important
    }

    .ml-md-xl,.mx-md-xl {
        margin-left: 8rem!important
    }

    .p-md-0 {
        padding: 0!important
    }

    .pt-md-0,.py-md-0 {
        padding-top: 0!important
    }

    .pr-md-0,.px-md-0 {
        padding-right: 0!important
    }

    .pb-md-0,.py-md-0 {
        padding-bottom: 0!important
    }

    .pl-md-0,.px-md-0 {
        padding-left: 0!important
    }

    .p-md-1 {
        padding: .25rem!important
    }

    .pt-md-1,.py-md-1 {
        padding-top: .25rem!important
    }

    .pr-md-1,.px-md-1 {
        padding-right: .25rem!important
    }

    .pb-md-1,.py-md-1 {
        padding-bottom: .25rem!important
    }

    .pl-md-1,.px-md-1 {
        padding-left: .25rem!important
    }

    .p-md-2 {
        padding: .5rem!important
    }

    .pt-md-2,.py-md-2 {
        padding-top: .5rem!important
    }

    .pr-md-2,.px-md-2 {
        padding-right: .5rem!important
    }

    .pb-md-2,.py-md-2 {
        padding-bottom: .5rem!important
    }

    .pl-md-2,.px-md-2 {
        padding-left: .5rem!important
    }

    .p-md-3 {
        padding: 1rem!important
    }

    .pt-md-3,.py-md-3 {
        padding-top: 1rem!important
    }

    .pr-md-3,.px-md-3 {
        padding-right: 1rem!important
    }

    .pb-md-3,.py-md-3 {
        padding-bottom: 1rem!important
    }

    .pl-md-3,.px-md-3 {
        padding-left: 1rem!important
    }

    .p-md-4 {
        padding: 1.5rem!important
    }

    .pt-md-4,.py-md-4 {
        padding-top: 1.5rem!important
    }

    .pr-md-4,.px-md-4 {
        padding-right: 1.5rem!important
    }

    .pb-md-4,.py-md-4 {
        padding-bottom: 1.5rem!important
    }

    .pl-md-4,.px-md-4 {
        padding-left: 1.5rem!important
    }

    .p-md-5 {
        padding: 3rem!important
    }

    .pt-md-5,.py-md-5 {
        padding-top: 3rem!important
    }

    .pr-md-5,.px-md-5 {
        padding-right: 3rem!important
    }

    .pb-md-5,.py-md-5 {
        padding-bottom: 3rem!important
    }

    .pl-md-5,.px-md-5 {
        padding-left: 3rem!important
    }

    .p-md-sm {
        padding: 2rem!important
    }

    .pt-md-sm,.py-md-sm {
        padding-top: 2rem!important
    }

    .pr-md-sm,.px-md-sm {
        padding-right: 2rem!important
    }

    .pb-md-sm,.py-md-sm {
        padding-bottom: 2rem!important
    }

    .pl-md-sm,.px-md-sm {
        padding-left: 2rem!important
    }

    .p-md-md {
        padding: 4rem!important
    }

    .pt-md-md,.py-md-md {
        padding-top: 4rem!important
    }

    .pr-md-md,.px-md-md {
        padding-right: 4rem!important
    }

    .pb-md-md,.py-md-md {
        padding-bottom: 4rem!important
    }

    .pl-md-md,.px-md-md {
        padding-left: 4rem!important
    }

    .p-md-lg {
        padding: 6rem!important
    }

    .pt-md-lg,.py-md-lg {
        padding-top: 6rem!important
    }

    .pr-md-lg,.px-md-lg {
        padding-right: 6rem!important
    }

    .pb-md-lg,.py-md-lg {
        padding-bottom: 6rem!important
    }

    .pl-md-lg,.px-md-lg {
        padding-left: 6rem!important
    }

    .p-md-xl {
        padding: 8rem!important
    }

    .pt-md-xl,.py-md-xl {
        padding-top: 8rem!important
    }

    .pr-md-xl,.px-md-xl {
        padding-right: 8rem!important
    }

    .pb-md-xl,.py-md-xl {
        padding-bottom: 8rem!important
    }

    .pl-md-xl,.px-md-xl {
        padding-left: 8rem!important
    }

    .m-md-n1 {
        margin: -.25rem!important
    }

    .mt-md-n1,.my-md-n1 {
        margin-top: -.25rem!important
    }

    .mr-md-n1,.mx-md-n1 {
        margin-right: -.25rem!important
    }

    .mb-md-n1,.my-md-n1 {
        margin-bottom: -.25rem!important
    }

    .ml-md-n1,.mx-md-n1 {
        margin-left: -.25rem!important
    }

    .m-md-n2 {
        margin: -.5rem!important
    }

    .mt-md-n2,.my-md-n2 {
        margin-top: -.5rem!important
    }

    .mr-md-n2,.mx-md-n2 {
        margin-right: -.5rem!important
    }

    .mb-md-n2,.my-md-n2 {
        margin-bottom: -.5rem!important
    }

    .ml-md-n2,.mx-md-n2 {
        margin-left: -.5rem!important
    }

    .m-md-n3 {
        margin: -1rem!important
    }

    .mt-md-n3,.my-md-n3 {
        margin-top: -1rem!important
    }

    .mr-md-n3,.mx-md-n3 {
        margin-right: -1rem!important
    }

    .mb-md-n3,.my-md-n3 {
        margin-bottom: -1rem!important
    }

    .ml-md-n3,.mx-md-n3 {
        margin-left: -1rem!important
    }

    .m-md-n4 {
        margin: -1.5rem!important
    }

    .mt-md-n4,.my-md-n4 {
        margin-top: -1.5rem!important
    }

    .mr-md-n4,.mx-md-n4 {
        margin-right: -1.5rem!important
    }

    .mb-md-n4,.my-md-n4 {
        margin-bottom: -1.5rem!important
    }

    .ml-md-n4,.mx-md-n4 {
        margin-left: -1.5rem!important
    }

    .m-md-n5 {
        margin: -3rem!important
    }

    .mt-md-n5,.my-md-n5 {
        margin-top: -3rem!important
    }

    .mr-md-n5,.mx-md-n5 {
        margin-right: -3rem!important
    }

    .mb-md-n5,.my-md-n5 {
        margin-bottom: -3rem!important
    }

    .ml-md-n5,.mx-md-n5 {
        margin-left: -3rem!important
    }

    .m-md-nsm {
        margin: -2rem!important
    }

    .mt-md-nsm,.my-md-nsm {
        margin-top: -2rem!important
    }

    .mr-md-nsm,.mx-md-nsm {
        margin-right: -2rem!important
    }

    .mb-md-nsm,.my-md-nsm {
        margin-bottom: -2rem!important
    }

    .ml-md-nsm,.mx-md-nsm {
        margin-left: -2rem!important
    }

    .m-md-nmd {
        margin: -4rem!important
    }

    .mt-md-nmd,.my-md-nmd {
        margin-top: -4rem!important
    }

    .mr-md-nmd,.mx-md-nmd {
        margin-right: -4rem!important
    }

    .mb-md-nmd,.my-md-nmd {
        margin-bottom: -4rem!important
    }

    .ml-md-nmd,.mx-md-nmd {
        margin-left: -4rem!important
    }

    .m-md-nlg {
        margin: -6rem!important
    }

    .mt-md-nlg,.my-md-nlg {
        margin-top: -6rem!important
    }

    .mr-md-nlg,.mx-md-nlg {
        margin-right: -6rem!important
    }

    .mb-md-nlg,.my-md-nlg {
        margin-bottom: -6rem!important
    }

    .ml-md-nlg,.mx-md-nlg {
        margin-left: -6rem!important
    }

    .m-md-nxl {
        margin: -8rem!important
    }

    .mt-md-nxl,.my-md-nxl {
        margin-top: -8rem!important
    }

    .mr-md-nxl,.mx-md-nxl {
        margin-right: -8rem!important
    }

    .mb-md-nxl,.my-md-nxl {
        margin-bottom: -8rem!important
    }

    .ml-md-nxl,.mx-md-nxl {
        margin-left: -8rem!important
    }

    .m-md-auto {
        margin: auto!important
    }

    .mt-md-auto,.my-md-auto {
        margin-top: auto!important
    }

    .mr-md-auto,.mx-md-auto {
        margin-right: auto!important
    }

    .mb-md-auto,.my-md-auto {
        margin-bottom: auto!important
    }

    .ml-md-auto,.mx-md-auto {
        margin-left: auto!important
    }
}

@media(min-width: 992px) {
    .m-lg-0 {
        margin:0!important
    }

    .mt-lg-0,.my-lg-0 {
        margin-top: 0!important
    }

    .mr-lg-0,.mx-lg-0 {
        margin-right: 0!important
    }

    .mb-lg-0,.my-lg-0 {
        margin-bottom: 0!important
    }

    .ml-lg-0,.mx-lg-0 {
        margin-left: 0!important
    }

    .m-lg-1 {
        margin: .25rem!important
    }

    .mt-lg-1,.my-lg-1 {
        margin-top: .25rem!important
    }

    .mr-lg-1,.mx-lg-1 {
        margin-right: .25rem!important
    }

    .mb-lg-1,.my-lg-1 {
        margin-bottom: .25rem!important
    }

    .ml-lg-1,.mx-lg-1 {
        margin-left: .25rem!important
    }

    .m-lg-2 {
        margin: .5rem!important
    }

    .mt-lg-2,.my-lg-2 {
        margin-top: .5rem!important
    }

    .mr-lg-2,.mx-lg-2 {
        margin-right: .5rem!important
    }

    .mb-lg-2,.my-lg-2 {
        margin-bottom: .5rem!important
    }

    .ml-lg-2,.mx-lg-2 {
        margin-left: .5rem!important
    }

    .m-lg-3 {
        margin: 1rem!important
    }

    .mt-lg-3,.my-lg-3 {
        margin-top: 1rem!important
    }

    .mr-lg-3,.mx-lg-3 {
        margin-right: 1rem!important
    }

    .mb-lg-3,.my-lg-3 {
        margin-bottom: 1rem!important
    }

    .ml-lg-3,.mx-lg-3 {
        margin-left: 1rem!important
    }

    .m-lg-4 {
        margin: 1.5rem!important
    }

    .mt-lg-4,.my-lg-4 {
        margin-top: 1.5rem!important
    }

    .mr-lg-4,.mx-lg-4 {
        margin-right: 1.5rem!important
    }

    .mb-lg-4,.my-lg-4 {
        margin-bottom: 1.5rem!important
    }

    .ml-lg-4,.mx-lg-4 {
        margin-left: 1.5rem!important
    }

    .m-lg-5 {
        margin: 3rem!important
    }

    .mt-lg-5,.my-lg-5 {
        margin-top: 3rem!important
    }

    .mr-lg-5,.mx-lg-5 {
        margin-right: 3rem!important
    }

    .mb-lg-5,.my-lg-5 {
        margin-bottom: 3rem!important
    }

    .ml-lg-5,.mx-lg-5 {
        margin-left: 3rem!important
    }

    .m-lg-sm {
        margin: 2rem!important
    }

    .mt-lg-sm,.my-lg-sm {
        margin-top: 2rem!important
    }

    .mr-lg-sm,.mx-lg-sm {
        margin-right: 2rem!important
    }

    .mb-lg-sm,.my-lg-sm {
        margin-bottom: 2rem!important
    }

    .ml-lg-sm,.mx-lg-sm {
        margin-left: 2rem!important
    }

    .m-lg-md {
        margin: 4rem!important
    }

    .mt-lg-md,.my-lg-md {
        margin-top: 4rem!important
    }

    .mr-lg-md,.mx-lg-md {
        margin-right: 4rem!important
    }

    .mb-lg-md,.my-lg-md {
        margin-bottom: 4rem!important
    }

    .ml-lg-md,.mx-lg-md {
        margin-left: 4rem!important
    }

    .m-lg-lg {
        margin: 6rem!important
    }

    .mt-lg-lg,.my-lg-lg {
        margin-top: 6rem!important
    }

    .mr-lg-lg,.mx-lg-lg {
        margin-right: 6rem!important
    }

    .mb-lg-lg,.my-lg-lg {
        margin-bottom: 6rem!important
    }

    .ml-lg-lg,.mx-lg-lg {
        margin-left: 6rem!important
    }

    .m-lg-xl {
        margin: 8rem!important
    }

    .mt-lg-xl,.my-lg-xl {
        margin-top: 8rem!important
    }

    .mr-lg-xl,.mx-lg-xl {
        margin-right: 8rem!important
    }

    .mb-lg-xl,.my-lg-xl {
        margin-bottom: 8rem!important
    }

    .ml-lg-xl,.mx-lg-xl {
        margin-left: 8rem!important
    }

    .p-lg-0 {
        padding: 0!important
    }

    .pt-lg-0,.py-lg-0 {
        padding-top: 0!important
    }

    .pr-lg-0,.px-lg-0 {
        padding-right: 0!important
    }

    .pb-lg-0,.py-lg-0 {
        padding-bottom: 0!important
    }

    .pl-lg-0,.px-lg-0 {
        padding-left: 0!important
    }

    .p-lg-1 {
        padding: .25rem!important
    }

    .pt-lg-1,.py-lg-1 {
        padding-top: .25rem!important
    }

    .pr-lg-1,.px-lg-1 {
        padding-right: .25rem!important
    }

    .pb-lg-1,.py-lg-1 {
        padding-bottom: .25rem!important
    }

    .pl-lg-1,.px-lg-1 {
        padding-left: .25rem!important
    }

    .p-lg-2 {
        padding: .5rem!important
    }

    .pt-lg-2,.py-lg-2 {
        padding-top: .5rem!important
    }

    .pr-lg-2,.px-lg-2 {
        padding-right: .5rem!important
    }

    .pb-lg-2,.py-lg-2 {
        padding-bottom: .5rem!important
    }

    .pl-lg-2,.px-lg-2 {
        padding-left: .5rem!important
    }

    .p-lg-3 {
        padding: 1rem!important
    }

    .pt-lg-3,.py-lg-3 {
        padding-top: 1rem!important
    }

    .pr-lg-3,.px-lg-3 {
        padding-right: 1rem!important
    }

    .pb-lg-3,.py-lg-3 {
        padding-bottom: 1rem!important
    }

    .pl-lg-3,.px-lg-3 {
        padding-left: 1rem!important
    }

    .p-lg-4 {
        padding: 1.5rem!important
    }

    .pt-lg-4,.py-lg-4 {
        padding-top: 1.5rem!important
    }

    .pr-lg-4,.px-lg-4 {
        padding-right: 1.5rem!important
    }

    .pb-lg-4,.py-lg-4 {
        padding-bottom: 1.5rem!important
    }

    .pl-lg-4,.px-lg-4 {
        padding-left: 1.5rem!important
    }

    .p-lg-5 {
        padding: 3rem!important
    }

    .pt-lg-5,.py-lg-5 {
        padding-top: 3rem!important
    }

    .pr-lg-5,.px-lg-5 {
        padding-right: 3rem!important
    }

    .pb-lg-5,.py-lg-5 {
        padding-bottom: 3rem!important
    }

    .pl-lg-5,.px-lg-5 {
        padding-left: 3rem!important
    }

    .p-lg-sm {
        padding: 2rem!important
    }

    .pt-lg-sm,.py-lg-sm {
        padding-top: 2rem!important
    }

    .pr-lg-sm,.px-lg-sm {
        padding-right: 2rem!important
    }

    .pb-lg-sm,.py-lg-sm {
        padding-bottom: 2rem!important
    }

    .pl-lg-sm,.px-lg-sm {
        padding-left: 2rem!important
    }

    .p-lg-md {
        padding: 4rem!important
    }

    .pt-lg-md,.py-lg-md {
        padding-top: 4rem!important
    }

    .pr-lg-md,.px-lg-md {
        padding-right: 4rem!important
    }

    .pb-lg-md,.py-lg-md {
        padding-bottom: 4rem!important
    }

    .pl-lg-md,.px-lg-md {
        padding-left: 4rem!important
    }

    .p-lg-lg {
        padding: 6rem!important
    }

    .pt-lg-lg,.py-lg-lg {
        padding-top: 6rem!important
    }

    .pr-lg-lg,.px-lg-lg {
        padding-right: 6rem!important
    }

    .pb-lg-lg,.py-lg-lg {
        padding-bottom: 6rem!important
    }

    .pl-lg-lg,.px-lg-lg {
        padding-left: 6rem!important
    }

    .p-lg-xl {
        padding: 8rem!important
    }

    .pt-lg-xl,.py-lg-xl {
        padding-top: 8rem!important
    }

    .pr-lg-xl,.px-lg-xl {
        padding-right: 8rem!important
    }

    .pb-lg-xl,.py-lg-xl {
        padding-bottom: 8rem!important
    }

    .pl-lg-xl,.px-lg-xl {
        padding-left: 8rem!important
    }

    .m-lg-n1 {
        margin: -.25rem!important
    }

    .mt-lg-n1,.my-lg-n1 {
        margin-top: -.25rem!important
    }

    .mr-lg-n1,.mx-lg-n1 {
        margin-right: -.25rem!important
    }

    .mb-lg-n1,.my-lg-n1 {
        margin-bottom: -.25rem!important
    }

    .ml-lg-n1,.mx-lg-n1 {
        margin-left: -.25rem!important
    }

    .m-lg-n2 {
        margin: -.5rem!important
    }

    .mt-lg-n2,.my-lg-n2 {
        margin-top: -.5rem!important
    }

    .mr-lg-n2,.mx-lg-n2 {
        margin-right: -.5rem!important
    }

    .mb-lg-n2,.my-lg-n2 {
        margin-bottom: -.5rem!important
    }

    .ml-lg-n2,.mx-lg-n2 {
        margin-left: -.5rem!important
    }

    .m-lg-n3 {
        margin: -1rem!important
    }

    .mt-lg-n3,.my-lg-n3 {
        margin-top: -1rem!important
    }

    .mr-lg-n3,.mx-lg-n3 {
        margin-right: -1rem!important
    }

    .mb-lg-n3,.my-lg-n3 {
        margin-bottom: -1rem!important
    }

    .ml-lg-n3,.mx-lg-n3 {
        margin-left: -1rem!important
    }

    .m-lg-n4 {
        margin: -1.5rem!important
    }

    .mt-lg-n4,.my-lg-n4 {
        margin-top: -1.5rem!important
    }

    .mr-lg-n4,.mx-lg-n4 {
        margin-right: -1.5rem!important
    }

    .mb-lg-n4,.my-lg-n4 {
        margin-bottom: -1.5rem!important
    }

    .ml-lg-n4,.mx-lg-n4 {
        margin-left: -1.5rem!important
    }

    .m-lg-n5 {
        margin: -3rem!important
    }

    .mt-lg-n5,.my-lg-n5 {
        margin-top: -3rem!important
    }

    .mr-lg-n5,.mx-lg-n5 {
        margin-right: -3rem!important
    }

    .mb-lg-n5,.my-lg-n5 {
        margin-bottom: -3rem!important
    }

    .ml-lg-n5,.mx-lg-n5 {
        margin-left: -3rem!important
    }

    .m-lg-nsm {
        margin: -2rem!important
    }

    .mt-lg-nsm,.my-lg-nsm {
        margin-top: -2rem!important
    }

    .mr-lg-nsm,.mx-lg-nsm {
        margin-right: -2rem!important
    }

    .mb-lg-nsm,.my-lg-nsm {
        margin-bottom: -2rem!important
    }

    .ml-lg-nsm,.mx-lg-nsm {
        margin-left: -2rem!important
    }

    .m-lg-nmd {
        margin: -4rem!important
    }

    .mt-lg-nmd,.my-lg-nmd {
        margin-top: -4rem!important
    }

    .mr-lg-nmd,.mx-lg-nmd {
        margin-right: -4rem!important
    }

    .mb-lg-nmd,.my-lg-nmd {
        margin-bottom: -4rem!important
    }

    .ml-lg-nmd,.mx-lg-nmd {
        margin-left: -4rem!important
    }

    .m-lg-nlg {
        margin: -6rem!important
    }

    .mt-lg-nlg,.my-lg-nlg {
        margin-top: -6rem!important
    }

    .mr-lg-nlg,.mx-lg-nlg {
        margin-right: -6rem!important
    }

    .mb-lg-nlg,.my-lg-nlg {
        margin-bottom: -6rem!important
    }

    .ml-lg-nlg,.mx-lg-nlg {
        margin-left: -6rem!important
    }

    .m-lg-nxl {
        margin: -8rem!important
    }

    .mt-lg-nxl,.my-lg-nxl {
        margin-top: -8rem!important
    }

    .mr-lg-nxl,.mx-lg-nxl {
        margin-right: -8rem!important
    }

    .mb-lg-nxl,.my-lg-nxl {
        margin-bottom: -8rem!important
    }

    .ml-lg-nxl,.mx-lg-nxl {
        margin-left: -8rem!important
    }

    .m-lg-auto {
        margin: auto!important
    }

    .mt-lg-auto,.my-lg-auto {
        margin-top: auto!important
    }

    .mr-lg-auto,.mx-lg-auto {
        margin-right: auto!important
    }

    .mb-lg-auto,.my-lg-auto {
        margin-bottom: auto!important
    }

    .ml-lg-auto,.mx-lg-auto {
        margin-left: auto!important
    }
}

@media(min-width: 1200px) {
    .m-xl-0 {
        margin:0!important
    }

    .mt-xl-0,.my-xl-0 {
        margin-top: 0!important
    }

    .mr-xl-0,.mx-xl-0 {
        margin-right: 0!important
    }

    .mb-xl-0,.my-xl-0 {
        margin-bottom: 0!important
    }

    .ml-xl-0,.mx-xl-0 {
        margin-left: 0!important
    }

    .m-xl-1 {
        margin: .25rem!important
    }

    .mt-xl-1,.my-xl-1 {
        margin-top: .25rem!important
    }

    .mr-xl-1,.mx-xl-1 {
        margin-right: .25rem!important
    }

    .mb-xl-1,.my-xl-1 {
        margin-bottom: .25rem!important
    }

    .ml-xl-1,.mx-xl-1 {
        margin-left: .25rem!important
    }

    .m-xl-2 {
        margin: .5rem!important
    }

    .mt-xl-2,.my-xl-2 {
        margin-top: .5rem!important
    }

    .mr-xl-2,.mx-xl-2 {
        margin-right: .5rem!important
    }

    .mb-xl-2,.my-xl-2 {
        margin-bottom: .5rem!important
    }

    .ml-xl-2,.mx-xl-2 {
        margin-left: .5rem!important
    }

    .m-xl-3 {
        margin: 1rem!important
    }

    .mt-xl-3,.my-xl-3 {
        margin-top: 1rem!important
    }

    .mr-xl-3,.mx-xl-3 {
        margin-right: 1rem!important
    }

    .mb-xl-3,.my-xl-3 {
        margin-bottom: 1rem!important
    }

    .ml-xl-3,.mx-xl-3 {
        margin-left: 1rem!important
    }

    .m-xl-4 {
        margin: 1.5rem!important
    }

    .mt-xl-4,.my-xl-4 {
        margin-top: 1.5rem!important
    }

    .mr-xl-4,.mx-xl-4 {
        margin-right: 1.5rem!important
    }

    .mb-xl-4,.my-xl-4 {
        margin-bottom: 1.5rem!important
    }

    .ml-xl-4,.mx-xl-4 {
        margin-left: 1.5rem!important
    }

    .m-xl-5 {
        margin: 3rem!important
    }

    .mt-xl-5,.my-xl-5 {
        margin-top: 3rem!important
    }

    .mr-xl-5,.mx-xl-5 {
        margin-right: 3rem!important
    }

    .mb-xl-5,.my-xl-5 {
        margin-bottom: 3rem!important
    }

    .ml-xl-5,.mx-xl-5 {
        margin-left: 3rem!important
    }

    .m-xl-sm {
        margin: 2rem!important
    }

    .mt-xl-sm,.my-xl-sm {
        margin-top: 2rem!important
    }

    .mr-xl-sm,.mx-xl-sm {
        margin-right: 2rem!important
    }

    .mb-xl-sm,.my-xl-sm {
        margin-bottom: 2rem!important
    }

    .ml-xl-sm,.mx-xl-sm {
        margin-left: 2rem!important
    }

    .m-xl-md {
        margin: 4rem!important
    }

    .mt-xl-md,.my-xl-md {
        margin-top: 4rem!important
    }

    .mr-xl-md,.mx-xl-md {
        margin-right: 4rem!important
    }

    .mb-xl-md,.my-xl-md {
        margin-bottom: 4rem!important
    }

    .ml-xl-md,.mx-xl-md {
        margin-left: 4rem!important
    }

    .m-xl-lg {
        margin: 6rem!important
    }

    .mt-xl-lg,.my-xl-lg {
        margin-top: 6rem!important
    }

    .mr-xl-lg,.mx-xl-lg {
        margin-right: 6rem!important
    }

    .mb-xl-lg,.my-xl-lg {
        margin-bottom: 6rem!important
    }

    .ml-xl-lg,.mx-xl-lg {
        margin-left: 6rem!important
    }

    .m-xl-xl {
        margin: 8rem!important
    }

    .mt-xl-xl,.my-xl-xl {
        margin-top: 8rem!important
    }

    .mr-xl-xl,.mx-xl-xl {
        margin-right: 8rem!important
    }

    .mb-xl-xl,.my-xl-xl {
        margin-bottom: 8rem!important
    }

    .ml-xl-xl,.mx-xl-xl {
        margin-left: 8rem!important
    }

    .p-xl-0 {
        padding: 0!important
    }

    .pt-xl-0,.py-xl-0 {
        padding-top: 0!important
    }

    .pr-xl-0,.px-xl-0 {
        padding-right: 0!important
    }

    .pb-xl-0,.py-xl-0 {
        padding-bottom: 0!important
    }

    .pl-xl-0,.px-xl-0 {
        padding-left: 0!important
    }

    .p-xl-1 {
        padding: .25rem!important
    }

    .pt-xl-1,.py-xl-1 {
        padding-top: .25rem!important
    }

    .pr-xl-1,.px-xl-1 {
        padding-right: .25rem!important
    }

    .pb-xl-1,.py-xl-1 {
        padding-bottom: .25rem!important
    }

    .pl-xl-1,.px-xl-1 {
        padding-left: .25rem!important
    }

    .p-xl-2 {
        padding: .5rem!important
    }

    .pt-xl-2,.py-xl-2 {
        padding-top: .5rem!important
    }

    .pr-xl-2,.px-xl-2 {
        padding-right: .5rem!important
    }

    .pb-xl-2,.py-xl-2 {
        padding-bottom: .5rem!important
    }

    .pl-xl-2,.px-xl-2 {
        padding-left: .5rem!important
    }

    .p-xl-3 {
        padding: 1rem!important
    }

    .pt-xl-3,.py-xl-3 {
        padding-top: 1rem!important
    }

    .pr-xl-3,.px-xl-3 {
        padding-right: 1rem!important
    }

    .pb-xl-3,.py-xl-3 {
        padding-bottom: 1rem!important
    }

    .pl-xl-3,.px-xl-3 {
        padding-left: 1rem!important
    }

    .p-xl-4 {
        padding: 1.5rem!important
    }

    .pt-xl-4,.py-xl-4 {
        padding-top: 1.5rem!important
    }

    .pr-xl-4,.px-xl-4 {
        padding-right: 1.5rem!important
    }

    .pb-xl-4,.py-xl-4 {
        padding-bottom: 1.5rem!important
    }

    .pl-xl-4,.px-xl-4 {
        padding-left: 1.5rem!important
    }

    .p-xl-5 {
        padding: 3rem!important
    }

    .pt-xl-5,.py-xl-5 {
        padding-top: 3rem!important
    }

    .pr-xl-5,.px-xl-5 {
        padding-right: 3rem!important
    }

    .pb-xl-5,.py-xl-5 {
        padding-bottom: 3rem!important
    }

    .pl-xl-5,.px-xl-5 {
        padding-left: 3rem!important
    }

    .p-xl-sm {
        padding: 2rem!important
    }

    .pt-xl-sm,.py-xl-sm {
        padding-top: 2rem!important
    }

    .pr-xl-sm,.px-xl-sm {
        padding-right: 2rem!important
    }

    .pb-xl-sm,.py-xl-sm {
        padding-bottom: 2rem!important
    }

    .pl-xl-sm,.px-xl-sm {
        padding-left: 2rem!important
    }

    .p-xl-md {
        padding: 4rem!important
    }

    .pt-xl-md,.py-xl-md {
        padding-top: 4rem!important
    }

    .pr-xl-md,.px-xl-md {
        padding-right: 4rem!important
    }

    .pb-xl-md,.py-xl-md {
        padding-bottom: 4rem!important
    }

    .pl-xl-md,.px-xl-md {
        padding-left: 4rem!important
    }

    .p-xl-lg {
        padding: 6rem!important
    }

    .pt-xl-lg,.py-xl-lg {
        padding-top: 6rem!important
    }

    .pr-xl-lg,.px-xl-lg {
        padding-right: 6rem!important
    }

    .pb-xl-lg,.py-xl-lg {
        padding-bottom: 6rem!important
    }

    .pl-xl-lg,.px-xl-lg {
        padding-left: 6rem!important
    }

    .p-xl-xl {
        padding: 8rem!important
    }

    .pt-xl-xl,.py-xl-xl {
        padding-top: 8rem!important
    }

    .pr-xl-xl,.px-xl-xl {
        padding-right: 8rem!important
    }

    .pb-xl-xl,.py-xl-xl {
        padding-bottom: 8rem!important
    }

    .pl-xl-xl,.px-xl-xl {
        padding-left: 8rem!important
    }

    .m-xl-n1 {
        margin: -.25rem!important
    }

    .mt-xl-n1,.my-xl-n1 {
        margin-top: -.25rem!important
    }

    .mr-xl-n1,.mx-xl-n1 {
        margin-right: -.25rem!important
    }

    .mb-xl-n1,.my-xl-n1 {
        margin-bottom: -.25rem!important
    }

    .ml-xl-n1,.mx-xl-n1 {
        margin-left: -.25rem!important
    }

    .m-xl-n2 {
        margin: -.5rem!important
    }

    .mt-xl-n2,.my-xl-n2 {
        margin-top: -.5rem!important
    }

    .mr-xl-n2,.mx-xl-n2 {
        margin-right: -.5rem!important
    }

    .mb-xl-n2,.my-xl-n2 {
        margin-bottom: -.5rem!important
    }

    .ml-xl-n2,.mx-xl-n2 {
        margin-left: -.5rem!important
    }

    .m-xl-n3 {
        margin: -1rem!important
    }

    .mt-xl-n3,.my-xl-n3 {
        margin-top: -1rem!important
    }

    .mr-xl-n3,.mx-xl-n3 {
        margin-right: -1rem!important
    }

    .mb-xl-n3,.my-xl-n3 {
        margin-bottom: -1rem!important
    }

    .ml-xl-n3,.mx-xl-n3 {
        margin-left: -1rem!important
    }

    .m-xl-n4 {
        margin: -1.5rem!important
    }

    .mt-xl-n4,.my-xl-n4 {
        margin-top: -1.5rem!important
    }

    .mr-xl-n4,.mx-xl-n4 {
        margin-right: -1.5rem!important
    }

    .mb-xl-n4,.my-xl-n4 {
        margin-bottom: -1.5rem!important
    }

    .ml-xl-n4,.mx-xl-n4 {
        margin-left: -1.5rem!important
    }

    .m-xl-n5 {
        margin: -3rem!important
    }

    .mt-xl-n5,.my-xl-n5 {
        margin-top: -3rem!important
    }

    .mr-xl-n5,.mx-xl-n5 {
        margin-right: -3rem!important
    }

    .mb-xl-n5,.my-xl-n5 {
        margin-bottom: -3rem!important
    }

    .ml-xl-n5,.mx-xl-n5 {
        margin-left: -3rem!important
    }

    .m-xl-nsm {
        margin: -2rem!important
    }

    .mt-xl-nsm,.my-xl-nsm {
        margin-top: -2rem!important
    }

    .mr-xl-nsm,.mx-xl-nsm {
        margin-right: -2rem!important
    }

    .mb-xl-nsm,.my-xl-nsm {
        margin-bottom: -2rem!important
    }

    .ml-xl-nsm,.mx-xl-nsm {
        margin-left: -2rem!important
    }

    .m-xl-nmd {
        margin: -4rem!important
    }

    .mt-xl-nmd,.my-xl-nmd {
        margin-top: -4rem!important
    }

    .mr-xl-nmd,.mx-xl-nmd {
        margin-right: -4rem!important
    }

    .mb-xl-nmd,.my-xl-nmd {
        margin-bottom: -4rem!important
    }

    .ml-xl-nmd,.mx-xl-nmd {
        margin-left: -4rem!important
    }

    .m-xl-nlg {
        margin: -6rem!important
    }

    .mt-xl-nlg,.my-xl-nlg {
        margin-top: -6rem!important
    }

    .mr-xl-nlg,.mx-xl-nlg {
        margin-right: -6rem!important
    }

    .mb-xl-nlg,.my-xl-nlg {
        margin-bottom: -6rem!important
    }

    .ml-xl-nlg,.mx-xl-nlg {
        margin-left: -6rem!important
    }

    .m-xl-nxl {
        margin: -8rem!important
    }

    .mt-xl-nxl,.my-xl-nxl {
        margin-top: -8rem!important
    }

    .mr-xl-nxl,.mx-xl-nxl {
        margin-right: -8rem!important
    }

    .mb-xl-nxl,.my-xl-nxl {
        margin-bottom: -8rem!important
    }

    .ml-xl-nxl,.mx-xl-nxl {
        margin-left: -8rem!important
    }

    .m-xl-auto {
        margin: auto!important
    }

    .mt-xl-auto,.my-xl-auto {
        margin-top: auto!important
    }

    .mr-xl-auto,.mx-xl-auto {
        margin-right: auto!important
    }

    .mb-xl-auto,.my-xl-auto {
        margin-bottom: auto!important
    }

    .ml-xl-auto,.mx-xl-auto {
        margin-left: auto!important
    }
}

.stretched-link:after {
    background-color: #0000;
    bottom: 0;
    content: "";
    left: 0;
    pointer-events: auto;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1
}

.text-monospace {
    font-family: SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace!important
}

.text-justify {
    text-align: justify!important
}

.text-wrap {
    white-space: normal!important
}

.text-nowrap {
    white-space: nowrap!important
}

.text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.text-left {
    text-align: left!important
}

.text-right {
    text-align: right!important
}

.text-center {
    text-align: center!important
}

@media(min-width: 576px) {
    .text-sm-left {
        text-align:left!important
    }

    .text-sm-right {
        text-align: right!important
    }

    .text-sm-center {
        text-align: center!important
    }
}

@media(min-width: 768px) {
    .text-md-left {
        text-align:left!important
    }

    .text-md-right {
        text-align: right!important
    }

    .text-md-center {
        text-align: center!important
    }
}

@media(min-width: 992px) {
    .text-lg-left {
        text-align:left!important
    }

    .text-lg-right {
        text-align: right!important
    }

    .text-lg-center {
        text-align: center!important
    }
}

@media(min-width: 1200px) {
    .text-xl-left {
        text-align:left!important
    }

    .text-xl-right {
        text-align: right!important
    }

    .text-xl-center {
        text-align: center!important
    }
}

.text-lowercase {
    text-transform: lowercase!important
}

.text-uppercase {
    text-transform: uppercase!important
}

.text-capitalize {
    text-transform: capitalize!important
}

.font-weight-light {
    font-weight: 300!important
}

.font-weight-lighter {
    font-weight: lighter!important
}

.font-weight-normal {
    font-weight: 400!important
}

.font-weight-bold {
    font-weight: 600!important
}

.font-weight-bolder {
    font-weight: bolder!important
}

.font-italic {
    font-style: italic!important
}

.text-primary {
    color: #e14eca!important
}

a.text-primary:focus,a.text-primary:hover {
    color: #c221a9!important
}

.text-secondary {
    color: #f4f5f7!important
}

a.text-secondary:focus,a.text-secondary:hover {
    color: #c8cdd7!important
}

.text-success {
    color: #00f2c3!important
}

a.text-success:focus,a.text-success:hover {
    color: #00a685!important
}

.text-info {
    color: #1d8cf8!important
}

a.text-info:focus,a.text-info:hover {
    color: #0666c2!important
}

.text-warning {
    color: #ff8d72!important
}

a.text-warning:focus,a.text-warning:hover {
    color: #ff4f26!important
}

.text-danger {
    color: #fd5d93!important
}

a.text-danger:focus,a.text-danger:hover {
    color: #fc1161!important
}

.text-light {
    color: #adb5bd!important
}

a.text-light:focus,a.text-light:hover {
    color: #838f9b!important
}

.text-dark {
    color: #212529!important
}

a.text-dark:focus,a.text-dark:hover {
    color: #000!important
}

.text-default {
    color: #344675!important
}

a.text-default:focus,a.text-default:hover {
    color: #1c2640!important
}

.text-white {
    color: #fff!important
}

a.text-white:focus,a.text-white:hover {
    color: #d9d9d9!important
}

.text-neutral {
    color: #fff!important
}

a.text-neutral:focus,a.text-neutral:hover {
    color: #d9d9d9!important
}

.text-darker,a.text-darker:focus,a.text-darker:hover {
    color: #000!important
}

.text-body {
    color: #525f7f!important
}

.text-muted {
    color: #6c757d!important
}

.text-black-50 {
    color: #222a4280!important
}

.text-white-50 {
    color: #ffffff80!important
}

.text-hide {
    background-color: #0000;
    border: 0;
    color: #0000;
    font: 0/0 a;
    text-shadow: none
}

.text-decoration-none {
    text-decoration: none!important
}

.text-break {
    word-wrap: break-word!important;
    word-break: break-word!important
}

.text-reset {
    color: inherit!important
}

.visible {
    visibility: visible!important
}

.invisible {
    visibility: hidden!important
}

@media print {
    *,:after,:before {
        box-shadow: none!important;
        text-shadow: none!important
    }

    a:not(.btn) {
        text-decoration: underline
    }

    abbr[title]:after {
        content: " (" attr(title) ")"
    }

    pre {
        white-space: pre-wrap!important
    }

    blockquote,pre {
        border: .0625rem solid #adb5bd;
        page-break-inside: avoid
    }

    thead {
        display: table-header-group
    }

    img,tr {
        page-break-inside: avoid
    }

    h2,h3,p {
        orphans: 3;
        widows: 3
    }

    h2,h3 {
        page-break-after: avoid
    }

    @page {
        size: a3
    }

    .container,body {
        min-width: 992px!important
    }

    .navbar {
        display: none
    }

    .badge {
        border: .0625rem solid #222a42
    }

    .table {
        border-collapse: collapse!important
    }

    .table td,.table th {
        background-color: #fff!important
    }

    .table-bordered td,.table-bordered th {
        border: 1px solid #e3e3e3!important
    }

    .table-dark {
        color: inherit
    }

    .table-dark tbody+tbody,.table-dark td,.table-dark th,.table-dark thead th {
        border-color: #e3e3e3
    }

    .table .thead-dark th {
        border-color: #e3e3e3;
        color: inherit
    }
}

.alert {
    border: 0
}

.alert,.alert .alert-link {
    color: #fff
}

.alert.alert-success {
    background-color: #00bf9a
}

.alert i.fa,.alert i.tim-icons {
    font-size: 1rem
}

.alert .close {
    color: #fff;
    line-height: 0;
    opacity: .9;
    outline: 0;
    text-shadow: none
}

.alert .close:after {
    speak: none;
    -webkit-font-smoothing: antialiased;
    content: "";
    display: inline-block;
    font: normal normal normal 1em/1 Nucleo;
    font-size: 1rem;
    text-transform: none;
    vertical-align: middle
}

.alert .close span {
    display: none!important
}

.alert span[data-notify=icon] {
    display: block;
    font-size: 22px;
    left: 19px;
    margin-top: -11px;
    position: absolute;
    top: 50%
}

.alert button.close {
    height: 25px;
    margin-top: -13px;
    padding: 3px;
    position: absolute;
    right: 15px;
    top: 50%;
    width: 25px
}

.alert .close~span {
    display: block;
    max-width: 89%
}

.alert.alert-with-icon {
    padding-left: 65px
}

.alert-dismissible {
    padding-right: 1.25rem
}

.alert-dismissible .close:focus,.alert-dismissible .close:hover {
    color: #ffffffe6;
    opacity: 1!important
}

@media(max-width: 575.98px) {
    .alert-dismissible .close {
        right:.5rem;
        top: 1rem
    }
}

.alert-dismissible .close>span:not(.sr-only) {
    background-color: #0000;
    color: #fff9;
    font-size: 1.5rem
}

.alert-dismissible .close:focus>span:not(.sr-only),.alert-dismissible .close:hover>span:not(.sr-only) {
    background-color: #0000;
    color: #ffffffe6
}

.alert-dismissible.animated {
    z-index: 9999
}

.alert-dismissible.animated .close {
    right: 10px
}

.badge+.badge {
    margin-left: 5px
}

.btn,.navbar .navbar-nav>a.btn {
    background: #344675;
    background-color: #344675;
    background-image: linear-gradient(to bottom left,#344675,#263148,#344675);
    background-position: 100% 0;
    background-size: 210% 210%;
    border: none;
    border-radius: .4285rem;
    box-shadow: none;
    color: #fff;
    cursor: pointer;
    margin: 4px 1px;
    overflow: hidden;
    position: relative;
    transition: all .15s ease
}

.btn.animation-on-hover:hover,.navbar .navbar-nav>a.btn.animation-on-hover:hover {
    background-position: 0 100%;
    transition: .3s ease-in-out
}

.btn.active,.btn.active:focus,.btn.active:hover,.btn:active,.btn:active:focus,.btn:active:hover,.btn:focus,.btn:hover,.navbar .navbar-nav>a.btn.active,.navbar .navbar-nav>a.btn.active:focus,.navbar .navbar-nav>a.btn.active:hover,.navbar .navbar-nav>a.btn:active,.navbar .navbar-nav>a.btn:active:focus,.navbar .navbar-nav>a.btn:active:hover,.navbar .navbar-nav>a.btn:focus,.navbar .navbar-nav>a.btn:hover {
    background-color: #263148!important;
    background-image: linear-gradient(to bottom left,#344675,#263148,#344675)!important;
    background-image: -moz-linear-gradient(to bottom left,#344675,#263148,#344675)!important;
    box-shadow: none;
    color: #fff
}

.btn:active,.navbar .navbar-nav>a.btn:active {
    box-shadow: none!important;
    transform: translateY(1px)!important;
    transition: all .15s ease
}

.btn:not([data-action]):hover,.navbar .navbar-nav>a.btn:not([data-action]):hover {
    box-shadow: 2px 2px 6px #0006;
    transform: translateY(-1px);
    -webkit-transform: translateY(-1px)
}

.btn.disabled,.btn.disabled.active,.btn.disabled.focus,.btn.disabled:active,.btn.disabled:focus,.btn.disabled:hover,.btn:disabled,.btn:disabled.active,.btn:disabled.focus,.btn:disabled:active,.btn:disabled:focus,.btn:disabled:hover,.btn[disabled],.btn[disabled].active,.btn[disabled].focus,.btn[disabled]:active,.btn[disabled]:focus,.btn[disabled]:hover,.navbar .navbar-nav>a.btn.disabled,.navbar .navbar-nav>a.btn.disabled.active,.navbar .navbar-nav>a.btn.disabled.focus,.navbar .navbar-nav>a.btn.disabled:active,.navbar .navbar-nav>a.btn.disabled:focus,.navbar .navbar-nav>a.btn.disabled:hover,.navbar .navbar-nav>a.btn:disabled,.navbar .navbar-nav>a.btn:disabled.active,.navbar .navbar-nav>a.btn:disabled.focus,.navbar .navbar-nav>a.btn:disabled:active,.navbar .navbar-nav>a.btn:disabled:focus,.navbar .navbar-nav>a.btn:disabled:hover,.navbar .navbar-nav>a.btn[disabled],.navbar .navbar-nav>a.btn[disabled].active,.navbar .navbar-nav>a.btn[disabled].focus,.navbar .navbar-nav>a.btn[disabled]:active,.navbar .navbar-nav>a.btn[disabled]:focus,.navbar .navbar-nav>a.btn[disabled]:hover,fieldset[disabled] .btn,fieldset[disabled] .btn.active,fieldset[disabled] .btn.focus,fieldset[disabled] .btn:active,fieldset[disabled] .btn:focus,fieldset[disabled] .btn:hover,fieldset[disabled] .navbar .navbar-nav>a.btn,fieldset[disabled] .navbar .navbar-nav>a.btn.active,fieldset[disabled] .navbar .navbar-nav>a.btn.focus,fieldset[disabled] .navbar .navbar-nav>a.btn:active,fieldset[disabled] .navbar .navbar-nav>a.btn:focus,fieldset[disabled] .navbar .navbar-nav>a.btn:hover {
    background-color: #344675;
    border-color: #344675
}

.btn.btn-simple,.navbar .navbar-nav>a.btn.btn-simple {
    background: #0000;
    border-color: #344675;
    color: #344675
}

.btn.btn-simple:active,.btn.btn-simple:focus,.btn.btn-simple:hover,.btn.btn-simple:not(:disabled):not(.disabled):active,.navbar .navbar-nav>a.btn.btn-simple:active,.navbar .navbar-nav>a.btn.btn-simple:focus,.navbar .navbar-nav>a.btn.btn-simple:hover,.navbar .navbar-nav>a.btn.btn-simple:not(:disabled):not(.disabled):active {
    background-color: #0000!important;
    background-image: none!important;
    border-color: #344675;
    box-shadow: none;
    color: #344675
}

.btn.btn-simple.active,.navbar .navbar-nav>a.btn.btn-simple.active {
    border-color: #344675!important
}

.btn.btn-simple.active:active,.btn.btn-simple.active:focus,.btn.btn-simple.active:hover,.btn.btn-simple.active:not(:disabled):not(.disabled):active,.navbar .navbar-nav>a.btn.btn-simple.active:active,.navbar .navbar-nav>a.btn.btn-simple.active:focus,.navbar .navbar-nav>a.btn.btn-simple.active:hover,.navbar .navbar-nav>a.btn.btn-simple.active:not(:disabled):not(.disabled):active {
    background-color: #263148!important;
    background-image: linear-gradient(to bottom left,#344675,#263148,#344675)!important;
    background-image: -moz-linear-gradient(to bottom left,#344675,#263148,#344675)!important;
    border-color: #344675;
    box-shadow: none;
    color: #fff
}

.btn.btn-link,.navbar .navbar-nav>a.btn.btn-link {
    color: #344675
}

.btn.btn-link:active,.btn.btn-link:focus,.btn.btn-link:hover,.navbar .navbar-nav>a.btn.btn-link:active,.navbar .navbar-nav>a.btn.btn-link:focus,.navbar .navbar-nav>a.btn.btn-link:hover {
    background-color: #0000!important;
    background-image: none!important;
    box-shadow: none;
    color: #fff!important;
    text-decoration: none
}

.btn:focus,.btn:hover,.navbar .navbar-nav>a.btn:focus,.navbar .navbar-nav>a.btn:hover {
    filter: alpha(opacity=100);
    opacity: 1;
    outline: 0!important
}

.btn.active,.btn:active,.navbar .navbar-nav>a.btn.active,.navbar .navbar-nav>a.btn:active,.open>.btn.dropdown-toggle,.open>.navbar .navbar-nav>a.btn.dropdown-toggle {
    box-shadow: none;
    outline: 0!important
}

.btn .badge,.navbar .navbar-nav>a.btn .badge {
    margin: 0
}

.btn.btn-icon,.navbar .navbar-nav>a.btn.btn-icon {
    font-size: .9375rem;
    height: 2.375rem;
    line-height: normal;
    min-width: 2.375rem;
    overflow: hidden;
    padding: 0;
    position: relative;
    width: 2.375rem
}

.btn.btn-icon.btn-simple,.navbar .navbar-nav>a.btn.btn-icon.btn-simple {
    padding: 0
}

.btn-group-sm>.btn.btn-icon,.btn.btn-icon.btn-sm,.navbar .btn-group-sm.navbar-nav>a.btn.btn-icon,.navbar .navbar-nav>a.btn.btn-icon.btn-sm {
    height: 1.875rem;
    min-width: 1.875rem;
    width: 1.875rem
}

.btn-group-sm>.btn.btn-icon .fa,.btn-group-sm>.btn.btn-icon .far,.btn-group-sm>.btn.btn-icon .fas,.btn-group-sm>.btn.btn-icon .tim-icons,.btn.btn-icon.btn-sm .fa,.btn.btn-icon.btn-sm .far,.btn.btn-icon.btn-sm .fas,.btn.btn-icon.btn-sm .tim-icons,.navbar .navbar-nav>a.btn.btn-icon.btn-sm .fa,.navbar .navbar-nav>a.btn.btn-icon.btn-sm .far,.navbar .navbar-nav>a.btn.btn-icon.btn-sm .fas,.navbar .navbar-nav>a.btn.btn-icon.btn-sm .tim-icons {
    font-size: .6875rem
}

.btn-group-lg>.btn.btn-icon,.btn.btn-icon.btn-lg,.navbar .btn-group-lg.navbar-nav>a.btn.btn-icon,.navbar .navbar-nav>a.btn.btn-icon.btn-lg {
    height: 3.6rem;
    min-width: 3.6rem;
    width: 3.6rem
}

.btn-group-lg>.btn.btn-icon .fa,.btn-group-lg>.btn.btn-icon .far,.btn-group-lg>.btn.btn-icon .fas,.btn-group-lg>.btn.btn-icon .tim-icons,.btn.btn-icon.btn-lg .fa,.btn.btn-icon.btn-lg .far,.btn.btn-icon.btn-lg .fas,.btn.btn-icon.btn-lg .tim-icons,.navbar .navbar-nav>a.btn.btn-icon.btn-lg .fa,.navbar .navbar-nav>a.btn.btn-icon.btn-lg .far,.navbar .navbar-nav>a.btn.btn-icon.btn-lg .fas,.navbar .navbar-nav>a.btn.btn-icon.btn-lg .tim-icons {
    font-size: 1.325rem
}

.btn.btn-icon:not(.btn-footer) .fa,.btn.btn-icon:not(.btn-footer) .far,.btn.btn-icon:not(.btn-footer) .fas,.btn.btn-icon:not(.btn-footer) .tim-icons,.navbar .navbar-nav>a.btn.btn-icon:not(.btn-footer) .fa,.navbar .navbar-nav>a.btn.btn-icon:not(.btn-footer) .far,.navbar .navbar-nav>a.btn.btn-icon:not(.btn-footer) .fas,.navbar .navbar-nav>a.btn.btn-icon:not(.btn-footer) .tim-icons {
    font-size: 1em;
    left: 50%;
    line-height: 1.5626rem;
    position: absolute;
    top: 50%;
    transform: translate(-12px,-12px);
    width: 24px
}

.btn:not(.btn-icon) .tim-icons,.navbar .navbar-nav>a.btn:not(.btn-icon) .tim-icons {
    position: relative;
    top: 1px
}

.btn span,.navbar .navbar-nav>a.btn span {
    display: block;
    position: relative
}

.btn.btn-link.dropdown-toggle,.navbar .navbar-nav>a.btn.btn-link.dropdown-toggle {
    color: #9a9a9a
}

.btn.dropdown-toggle:after,.navbar .navbar-nav>a.btn.dropdown-toggle:after {
    margin-left: 30px!important
}

.btn-primary {
    background: #e14eca;
    background-color: #e14eca;
    background-image: linear-gradient(to bottom left,#e14eca,#ba54f5,#e14eca);
    background-position: 100% 0;
    background-size: 210% 210%;
    box-shadow: none;
    color: #fff;
    transition: all .15s ease
}

.btn-primary.animation-on-hover:hover {
    background-position: 0 100%;
    transition: .3s ease-in-out
}

.btn-primary.active,.btn-primary.active:focus,.btn-primary.active:hover,.btn-primary:active,.btn-primary:active:focus,.btn-primary:active:hover,.btn-primary:focus,.btn-primary:hover {
    background-color: #ba54f5!important;
    background-image: linear-gradient(to bottom left,#e14eca,#ba54f5,#e14eca)!important;
    background-image: -moz-linear-gradient(to bottom left,#e14eca,#ba54f5,#e14eca)!important;
    box-shadow: none;
    color: #fff
}

.btn-primary:active {
    box-shadow: none!important;
    transform: translateY(1px)!important;
    transition: all .15s ease
}

.btn-primary:not([data-action]):hover {
    box-shadow: 2px 2px 6px #0006;
    transform: translateY(-1px);
    -webkit-transform: translateY(-1px)
}

.btn-primary.disabled,.btn-primary.disabled.active,.btn-primary.disabled.focus,.btn-primary.disabled:active,.btn-primary.disabled:focus,.btn-primary.disabled:hover,.btn-primary:disabled,.btn-primary:disabled.active,.btn-primary:disabled.focus,.btn-primary:disabled:active,.btn-primary:disabled:focus,.btn-primary:disabled:hover,.btn-primary[disabled],.btn-primary[disabled].active,.btn-primary[disabled].focus,.btn-primary[disabled]:active,.btn-primary[disabled]:focus,.btn-primary[disabled]:hover,fieldset[disabled] .btn-primary,fieldset[disabled] .btn-primary.active,fieldset[disabled] .btn-primary.focus,fieldset[disabled] .btn-primary:active,fieldset[disabled] .btn-primary:focus,fieldset[disabled] .btn-primary:hover {
    background-color: #e14eca;
    border-color: #e14eca
}

.btn-primary.btn-simple {
    background: #0000;
    border-color: #e14eca;
    color: #e14eca
}

.btn-primary.btn-simple:active,.btn-primary.btn-simple:focus,.btn-primary.btn-simple:hover,.btn-primary.btn-simple:not(:disabled):not(.disabled):active {
    background-color: #0000!important;
    background-image: none!important;
    border-color: #e14eca;
    box-shadow: none;
    color: #e14eca
}

.btn-primary.btn-simple.active {
    border-color: #e14eca!important
}

.btn-primary.btn-simple.active:active,.btn-primary.btn-simple.active:focus,.btn-primary.btn-simple.active:hover,.btn-primary.btn-simple.active:not(:disabled):not(.disabled):active {
    background-color: #ba54f5!important;
    background-image: linear-gradient(to bottom left,#e14eca,#ba54f5,#e14eca)!important;
    background-image: -moz-linear-gradient(to bottom left,#e14eca,#ba54f5,#e14eca)!important;
    border-color: #e14eca;
    box-shadow: none;
    color: #fff
}

.btn-primary.btn-link {
    color: #e14eca
}

.btn-primary.btn-link:active,.btn-primary.btn-link:focus,.btn-primary.btn-link:hover {
    background-color: #0000!important;
    background-image: none!important;
    box-shadow: none;
    color: #fff!important;
    text-decoration: none
}

.btn-success {
    background: #00f2c3;
    background-color: #00f2c3;
    background-image: linear-gradient(to bottom left,#00f2c3,#0098f0,#00f2c3);
    background-position: 100% 0;
    background-size: 210% 210%;
    box-shadow: none;
    color: #fff;
    transition: all .15s ease
}

.btn-success.animation-on-hover:hover {
    background-position: 0 100%;
    transition: .3s ease-in-out
}

.btn-success.active,.btn-success.active:focus,.btn-success.active:hover,.btn-success:active,.btn-success:active:focus,.btn-success:active:hover,.btn-success:focus,.btn-success:hover {
    background-color: #0098f0!important;
    background-image: linear-gradient(to bottom left,#00f2c3,#0098f0,#00f2c3)!important;
    background-image: -moz-linear-gradient(to bottom left,#00f2c3,#0098f0,#00f2c3)!important;
    box-shadow: none;
    color: #fff
}

.btn-success:active {
    box-shadow: none!important;
    transform: translateY(1px)!important;
    transition: all .15s ease
}

.btn-success:not([data-action]):hover {
    box-shadow: 2px 2px 6px #0006;
    transform: translateY(-1px);
    -webkit-transform: translateY(-1px)
}

.btn-success.disabled,.btn-success.disabled.active,.btn-success.disabled.focus,.btn-success.disabled:active,.btn-success.disabled:focus,.btn-success.disabled:hover,.btn-success:disabled,.btn-success:disabled.active,.btn-success:disabled.focus,.btn-success:disabled:active,.btn-success:disabled:focus,.btn-success:disabled:hover,.btn-success[disabled],.btn-success[disabled].active,.btn-success[disabled].focus,.btn-success[disabled]:active,.btn-success[disabled]:focus,.btn-success[disabled]:hover,fieldset[disabled] .btn-success,fieldset[disabled] .btn-success.active,fieldset[disabled] .btn-success.focus,fieldset[disabled] .btn-success:active,fieldset[disabled] .btn-success:focus,fieldset[disabled] .btn-success:hover {
    background-color: #00f2c3;
    border-color: #00f2c3
}

.btn-success.btn-simple {
    background: #0000;
    border-color: #00f2c3;
    color: #00f2c3
}

.btn-success.btn-simple:active,.btn-success.btn-simple:focus,.btn-success.btn-simple:hover,.btn-success.btn-simple:not(:disabled):not(.disabled):active {
    background-color: #0000!important;
    background-image: none!important;
    border-color: #00f2c3;
    box-shadow: none;
    color: #00f2c3
}

.btn-success.btn-simple.active {
    border-color: #00f2c3!important
}

.btn-success.btn-simple.active:active,.btn-success.btn-simple.active:focus,.btn-success.btn-simple.active:hover,.btn-success.btn-simple.active:not(:disabled):not(.disabled):active {
    background-color: #0098f0!important;
    background-image: linear-gradient(to bottom left,#00f2c3,#0098f0,#00f2c3)!important;
    background-image: -moz-linear-gradient(to bottom left,#00f2c3,#0098f0,#00f2c3)!important;
    border-color: #00f2c3;
    box-shadow: none;
    color: #fff
}

.btn-success.btn-link {
    color: #00f2c3
}

.btn-success.btn-link:active,.btn-success.btn-link:focus,.btn-success.btn-link:hover {
    background-color: #0000!important;
    background-image: none!important;
    box-shadow: none;
    color: #fff!important;
    text-decoration: none
}

.btn-info {
    background: #1d8cf8;
    background-color: #1d8cf8;
    background-image: linear-gradient(to bottom left,#1d8cf8,#3358f4,#1d8cf8);
    background-position: 100% 0;
    background-size: 210% 210%;
    box-shadow: none;
    color: #fff;
    transition: all .15s ease
}

.btn-info.animation-on-hover:hover {
    background-position: 0 100%;
    transition: .3s ease-in-out
}

.btn-info.active,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active,.btn-info:active:focus,.btn-info:active:hover,.btn-info:focus,.btn-info:hover {
    background-color: #3358f4!important;
    background-image: linear-gradient(to bottom left,#1d8cf8,#3358f4,#1d8cf8)!important;
    background-image: -moz-linear-gradient(to bottom left,#1d8cf8,#3358f4,#1d8cf8)!important;
    box-shadow: none;
    color: #fff
}

.btn-info:active {
    box-shadow: none!important;
    transform: translateY(1px)!important;
    transition: all .15s ease
}

.btn-info:not([data-action]):hover {
    box-shadow: 2px 2px 6px #0006;
    transform: translateY(-1px);
    -webkit-transform: translateY(-1px)
}

.btn-info.disabled,.btn-info.disabled.active,.btn-info.disabled.focus,.btn-info.disabled:active,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info:disabled,.btn-info:disabled.active,.btn-info:disabled.focus,.btn-info:disabled:active,.btn-info:disabled:focus,.btn-info:disabled:hover,.btn-info[disabled],.btn-info[disabled].active,.btn-info[disabled].focus,.btn-info[disabled]:active,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info,fieldset[disabled] .btn-info.active,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:active,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover {
    background-color: #1d8cf8;
    border-color: #1d8cf8
}

.btn-info.btn-simple {
    background: #0000;
    border-color: #1d8cf8;
    color: #1d8cf8
}

.btn-info.btn-simple:active,.btn-info.btn-simple:focus,.btn-info.btn-simple:hover,.btn-info.btn-simple:not(:disabled):not(.disabled):active {
    background-color: #0000!important;
    background-image: none!important;
    border-color: #1d8cf8;
    box-shadow: none;
    color: #1d8cf8
}

.btn-info.btn-simple.active {
    border-color: #1d8cf8!important
}

.btn-info.btn-simple.active:active,.btn-info.btn-simple.active:focus,.btn-info.btn-simple.active:hover,.btn-info.btn-simple.active:not(:disabled):not(.disabled):active {
    background-color: #3358f4!important;
    background-image: linear-gradient(to bottom left,#1d8cf8,#3358f4,#1d8cf8)!important;
    background-image: -moz-linear-gradient(to bottom left,#1d8cf8,#3358f4,#1d8cf8)!important;
    border-color: #1d8cf8;
    box-shadow: none;
    color: #fff
}

.btn-info.btn-link {
    color: #1d8cf8
}

.btn-info.btn-link:active,.btn-info.btn-link:focus,.btn-info.btn-link:hover {
    background-color: #0000!important;
    background-image: none!important;
    box-shadow: none;
    color: #fff!important;
    text-decoration: none
}

.btn-warning {
    background: #ff8d72;
    background-color: #ff8d72;
    background-image: linear-gradient(to bottom left,#ff8d72,#ff6491,#ff8d72);
    background-position: 100% 0;
    background-size: 210% 210%;
    box-shadow: none;
    color: #fff;
    transition: all .15s ease
}

.btn-warning.animation-on-hover:hover {
    background-position: 0 100%;
    transition: .3s ease-in-out
}

.btn-warning.active,.btn-warning.active:focus,.btn-warning.active:hover,.btn-warning:active,.btn-warning:active:focus,.btn-warning:active:hover,.btn-warning:focus,.btn-warning:hover {
    background-color: #ff6491!important;
    background-image: linear-gradient(to bottom left,#ff8d72,#ff6491,#ff8d72)!important;
    background-image: -moz-linear-gradient(to bottom left,#ff8d72,#ff6491,#ff8d72)!important;
    box-shadow: none;
    color: #fff
}

.btn-warning:active {
    box-shadow: none!important;
    transform: translateY(1px)!important;
    transition: all .15s ease
}

.btn-warning:not([data-action]):hover {
    box-shadow: 2px 2px 6px #0006;
    transform: translateY(-1px);
    -webkit-transform: translateY(-1px)
}

.btn-warning.disabled,.btn-warning.disabled.active,.btn-warning.disabled.focus,.btn-warning.disabled:active,.btn-warning.disabled:focus,.btn-warning.disabled:hover,.btn-warning:disabled,.btn-warning:disabled.active,.btn-warning:disabled.focus,.btn-warning:disabled:active,.btn-warning:disabled:focus,.btn-warning:disabled:hover,.btn-warning[disabled],.btn-warning[disabled].active,.btn-warning[disabled].focus,.btn-warning[disabled]:active,.btn-warning[disabled]:focus,.btn-warning[disabled]:hover,fieldset[disabled] .btn-warning,fieldset[disabled] .btn-warning.active,fieldset[disabled] .btn-warning.focus,fieldset[disabled] .btn-warning:active,fieldset[disabled] .btn-warning:focus,fieldset[disabled] .btn-warning:hover {
    background-color: #ff8d72;
    border-color: #ff8d72
}

.btn-warning.btn-simple {
    background: #0000;
    border-color: #ff8d72;
    color: #ff8d72
}

.btn-warning.btn-simple:active,.btn-warning.btn-simple:focus,.btn-warning.btn-simple:hover,.btn-warning.btn-simple:not(:disabled):not(.disabled):active {
    background-color: #0000!important;
    background-image: none!important;
    border-color: #ff8d72;
    box-shadow: none;
    color: #ff8d72
}

.btn-warning.btn-simple.active {
    border-color: #ff8d72!important
}

.btn-warning.btn-simple.active:active,.btn-warning.btn-simple.active:focus,.btn-warning.btn-simple.active:hover,.btn-warning.btn-simple.active:not(:disabled):not(.disabled):active {
    background-color: #ff6491!important;
    background-image: linear-gradient(to bottom left,#ff8d72,#ff6491,#ff8d72)!important;
    background-image: -moz-linear-gradient(to bottom left,#ff8d72,#ff6491,#ff8d72)!important;
    border-color: #ff8d72;
    box-shadow: none;
    color: #fff
}

.btn-warning.btn-link {
    color: #ff8d72
}

.btn-warning.btn-link:active,.btn-warning.btn-link:focus,.btn-warning.btn-link:hover {
    background-color: #0000!important;
    background-image: none!important;
    box-shadow: none;
    color: #fff!important;
    text-decoration: none
}

.btn-warning:not(:disabled):not(.disabled):active {
    color: #fff
}

.btn-danger {
    background: #fd5d93;
    background-color: #fd5d93;
    background-image: linear-gradient(to bottom left,#fd5d93,#ec250d,#fd5d93);
    background-position: 100% 0;
    background-size: 210% 210%;
    box-shadow: none;
    color: #fff;
    transition: all .15s ease
}

.btn-danger.animation-on-hover:hover {
    background-position: 0 100%;
    transition: .3s ease-in-out
}

.btn-danger.active,.btn-danger.active:focus,.btn-danger.active:hover,.btn-danger:active,.btn-danger:active:focus,.btn-danger:active:hover,.btn-danger:focus,.btn-danger:hover {
    background-color: #ec250d!important;
    background-image: linear-gradient(to bottom left,#fd5d93,#ec250d,#fd5d93)!important;
    background-image: -moz-linear-gradient(to bottom left,#fd5d93,#ec250d,#fd5d93)!important;
    box-shadow: none;
    color: #fff
}

.btn-danger:active {
    box-shadow: none!important;
    transform: translateY(1px)!important;
    transition: all .15s ease
}

.btn-danger:not([data-action]):hover {
    box-shadow: 2px 2px 6px #0006;
    transform: translateY(-1px);
    -webkit-transform: translateY(-1px)
}

.btn-danger.disabled,.btn-danger.disabled.active,.btn-danger.disabled.focus,.btn-danger.disabled:active,.btn-danger.disabled:focus,.btn-danger.disabled:hover,.btn-danger:disabled,.btn-danger:disabled.active,.btn-danger:disabled.focus,.btn-danger:disabled:active,.btn-danger:disabled:focus,.btn-danger:disabled:hover,.btn-danger[disabled],.btn-danger[disabled].active,.btn-danger[disabled].focus,.btn-danger[disabled]:active,.btn-danger[disabled]:focus,.btn-danger[disabled]:hover,fieldset[disabled] .btn-danger,fieldset[disabled] .btn-danger.active,fieldset[disabled] .btn-danger.focus,fieldset[disabled] .btn-danger:active,fieldset[disabled] .btn-danger:focus,fieldset[disabled] .btn-danger:hover {
    background-color: #fd5d93;
    border-color: #fd5d93
}

.btn-danger.btn-simple {
    background: #0000;
    border-color: #fd5d93;
    color: #fd5d93
}

.btn-danger.btn-simple:active,.btn-danger.btn-simple:focus,.btn-danger.btn-simple:hover,.btn-danger.btn-simple:not(:disabled):not(.disabled):active {
    background-color: #0000!important;
    background-image: none!important;
    border-color: #fd5d93;
    box-shadow: none;
    color: #fd5d93
}

.btn-danger.btn-simple.active {
    border-color: #fd5d93!important
}

.btn-danger.btn-simple.active:active,.btn-danger.btn-simple.active:focus,.btn-danger.btn-simple.active:hover,.btn-danger.btn-simple.active:not(:disabled):not(.disabled):active {
    background-color: #ec250d!important;
    background-image: linear-gradient(to bottom left,#fd5d93,#ec250d,#fd5d93)!important;
    background-image: -moz-linear-gradient(to bottom left,#fd5d93,#ec250d,#fd5d93)!important;
    border-color: #fd5d93;
    box-shadow: none;
    color: #fff
}

.btn-danger.btn-link {
    color: #fd5d93
}

.btn-danger.btn-link:active,.btn-danger.btn-link:focus,.btn-danger.btn-link:hover {
    background-color: #0000!important;
    background-image: none!important;
    box-shadow: none;
    color: #fff!important;
    text-decoration: none
}

.btn-neutral {
    background: #fff;
    background-color: #fff;
    background-image: linear-gradient(to bottom left,#fff,#fff,#fff);
    background-position: 100% 0;
    background-size: 210% 210%;
    box-shadow: none;
    color: #e14eca;
    transition: all .15s ease
}

.btn-neutral.animation-on-hover:hover {
    background-position: 0 100%;
    transition: .3s ease-in-out
}

.btn-neutral.active,.btn-neutral.active:focus,.btn-neutral.active:hover,.btn-neutral:active,.btn-neutral:active:focus,.btn-neutral:active:hover,.btn-neutral:focus,.btn-neutral:hover {
    background-color: #fff!important;
    background-image: linear-gradient(to bottom left,#fff,#fff,#fff)!important;
    background-image: -moz-linear-gradient(to bottom left,#fff,#fff,#fff)!important;
    box-shadow: none;
    color: #fff
}

.btn-neutral:active {
    box-shadow: none!important;
    transform: translateY(1px)!important;
    transition: all .15s ease
}

.btn-neutral:not([data-action]):hover {
    box-shadow: 2px 2px 6px #0006;
    transform: translateY(-1px);
    -webkit-transform: translateY(-1px)
}

.btn-neutral.disabled,.btn-neutral.disabled.active,.btn-neutral.disabled.focus,.btn-neutral.disabled:active,.btn-neutral.disabled:focus,.btn-neutral.disabled:hover,.btn-neutral:disabled,.btn-neutral:disabled.active,.btn-neutral:disabled.focus,.btn-neutral:disabled:active,.btn-neutral:disabled:focus,.btn-neutral:disabled:hover,.btn-neutral[disabled],.btn-neutral[disabled].active,.btn-neutral[disabled].focus,.btn-neutral[disabled]:active,.btn-neutral[disabled]:focus,.btn-neutral[disabled]:hover,fieldset[disabled] .btn-neutral,fieldset[disabled] .btn-neutral.active,fieldset[disabled] .btn-neutral.focus,fieldset[disabled] .btn-neutral:active,fieldset[disabled] .btn-neutral:focus,fieldset[disabled] .btn-neutral:hover {
    background-color: #fff;
    border-color: #fff
}

.btn-neutral.btn-danger {
    color: #fd5d93
}

.btn-neutral.btn-danger:active,.btn-neutral.btn-danger:active:focus,.btn-neutral.btn-danger:focus,.btn-neutral.btn-danger:hover {
    color: #ec250d
}

.btn-neutral.btn-info {
    color: #1d8cf8
}

.btn-neutral.btn-info:active,.btn-neutral.btn-info:active:focus,.btn-neutral.btn-info:focus,.btn-neutral.btn-info:hover {
    color: #3358f4
}

.btn-neutral.btn-warning {
    color: #ff8d72
}

.btn-neutral.btn-warning:active,.btn-neutral.btn-warning:active:focus,.btn-neutral.btn-warning:focus,.btn-neutral.btn-warning:hover {
    color: #ff6491
}

.btn-neutral.btn-success {
    color: #00f2c3
}

.btn-neutral.btn-success:active,.btn-neutral.btn-success:active:focus,.btn-neutral.btn-success:focus,.btn-neutral.btn-success:hover {
    color: #0098f0
}

.btn-neutral.btn-default {
    color: #344675
}

.btn-neutral.btn-default:active,.btn-neutral.btn-default:active:focus,.btn-neutral.btn-default:focus,.btn-neutral.btn-default:hover {
    color: #263148
}

.btn-neutral.active,.btn-neutral.active:focus,.btn-neutral.active:hover,.btn-neutral:active,.btn-neutral:active:focus,.btn-neutral:active:hover,.show>.btn-neutral.dropdown-toggle,.show>.btn-neutral.dropdown-toggle:focus,.show>.btn-neutral.dropdown-toggle:hover {
    background-color: #fff;
    box-shadow: none;
    color: #ba54f5
}

.btn-neutral:focus,.btn-neutral:hover {
    color: #ba54f5
}

.btn-neutral:focus:not(.nav-link),.btn-neutral:hover:not(.nav-link) {
    box-shadow: none
}

.btn-neutral.btn-simple {
    background: #0000;
    border-color: #fff;
    color: #fff
}

.btn-neutral.btn-simple:active,.btn-neutral.btn-simple:focus,.btn-neutral.btn-simple:hover,.btn-neutral.btn-simple:not(:disabled):not(.disabled):active {
    background-color: #0000!important;
    background-image: none!important;
    border-color: #fff;
    box-shadow: none;
    color: #fff
}

.btn-neutral.btn-simple.active {
    border-color: #fff!important
}

.btn-neutral.btn-simple.active:active,.btn-neutral.btn-simple.active:focus,.btn-neutral.btn-simple.active:hover,.btn-neutral.btn-simple.active:not(:disabled):not(.disabled):active {
    background-color: #fff!important;
    background-image: linear-gradient(to bottom left,#fff,#fff,#fff)!important;
    background-image: -moz-linear-gradient(to bottom left,#fff,#fff,#fff)!important;
    border-color: #fff;
    box-shadow: none;
    color: #fff
}

.btn-neutral.btn-link {
    color: #fff
}

.btn-neutral.btn-link:active,.btn-neutral.btn-link:focus,.btn-neutral.btn-link:hover {
    background-color: #0000!important;
    background-image: none!important;
    box-shadow: none;
    color: #fff!important;
    text-decoration: none
}

.btn.disabled,.btn:disabled,.btn[disabled] {
    filter: alpha(opacity=50);
    opacity: .5;
    pointer-events: none
}

.btn-simple {
    background-color: #0000;
    border: 1px solid #344675;
    box-shadow: none;
    padding: 10px 22px
}

.btn-link.disabled,.btn-link.disabled.active,.btn-link.disabled.focus,.btn-link.disabled:active,.btn-link.disabled:focus,.btn-link.disabled:hover,.btn-link:disabled,.btn-link:disabled.active,.btn-link:disabled.focus,.btn-link:disabled:active,.btn-link:disabled:focus,.btn-link:disabled:hover,.btn-link[disabled],.btn-link[disabled].active,.btn-link[disabled].focus,.btn-link[disabled]:active,.btn-link[disabled]:focus,.btn-link[disabled]:hover,.btn-simple.disabled,.btn-simple.disabled.active,.btn-simple.disabled.focus,.btn-simple.disabled:active,.btn-simple.disabled:focus,.btn-simple.disabled:hover,.btn-simple:disabled,.btn-simple:disabled.active,.btn-simple:disabled.focus,.btn-simple:disabled:active,.btn-simple:disabled:focus,.btn-simple:disabled:hover,.btn-simple[disabled],.btn-simple[disabled].active,.btn-simple[disabled].focus,.btn-simple[disabled]:active,.btn-simple[disabled]:focus,.btn-simple[disabled]:hover,fieldset[disabled] .btn-link,fieldset[disabled] .btn-link.active,fieldset[disabled] .btn-link.focus,fieldset[disabled] .btn-link:active,fieldset[disabled] .btn-link:focus,fieldset[disabled] .btn-link:hover,fieldset[disabled] .btn-simple,fieldset[disabled] .btn-simple.active,fieldset[disabled] .btn-simple.focus,fieldset[disabled] .btn-simple:active,fieldset[disabled] .btn-simple:focus,fieldset[disabled] .btn-simple:hover {
    background: #0000
}

.btn:not(:disabled):not(.disabled).active,.btn:not(:disabled):not(.disabled):active {
    box-shadow: 2px 2px 6px #0006
}

.btn-link {
    background: #0000;
    border: 0;
    box-shadow: none;
    color: #e3e3e3;
    font-weight: 600;
    padding: .5rem .7rem
}

.btn-link:hover {
    box-shadow: none!important;
    transform: none!important
}

.btn-group-lg>.btn,.btn-lg {
    border-radius: .4285rem;
    font-size: .875rem;
    padding: 15px 48px
}

.btn-group-lg>.btn-simple.btn,.btn-lg.btn-simple {
    padding: 14px 47px
}

.btn-group-sm>.btn,.btn-sm {
    border-radius: .2857rem;
    font-size: .875rem;
    padding: 5px 15px
}

.btn-group-sm>.btn-simple.btn,.btn-sm.btn-simple {
    padding: 4px 14px
}

.btn-wd {
    min-width: 140px
}

.btn-group.select {
    width: 100%
}

.btn-group.select .btn {
    text-align: left
}

.btn-group.select .caret {
    margin-top: -1px;
    position: absolute;
    right: 8px;
    top: 50%
}

.btn-group .btn.active {
    box-shadow: 2px 2px 6px #0006;
    transform: translateY(-1px);
    -webkit-transform: translateY(-1px)
}

.btn-round {
    border-radius: 30px;
    border-width: 1px
}

.btn-round.btn-simple {
    padding: 10px 22px
}

.no-caret.dropdown-toggle:after {
    display: none
}

.btn-secondary:not(:disabled):not(.disabled).active,.btn-secondary:not(:disabled):not(.disabled):active,.show>.btn-secondary.dropdown-toggle {
    color: #fff
}

.btn-group label.btn.active {
    transform: translateY(0);
    -webkit-transform: translateY(0)
}

.btn+.btn {
    margin-left: 5px
}

.dropdown-menu {
    border: 0;
    border-radius: .1428rem;
    box-shadow: 0 10px 50px 0 #0003;
    transition: all .15s linear
}

.dropdown-menu.dropdown-menu-right:after,.dropdown-menu.dropdown-menu-right:before {
    left: auto;
    right: 10px
}

.dropdown-menu.dropdown-black {
    background: linear-gradient(180deg,#222a42 0,#1d253b);
    border: 1px solid #344675
}

.dropdown-menu.dropdown-black .dropdown-item {
    color: #ffffffb3
}

.dropdown-menu.dropdown-black .dropdown-divider {
    border-color: #344675
}

.dropdown-menu.dropdown-black:before {
    color: #222a42;
    z-index: 2
}

.dropdown-menu.dropdown-black:after {
    border-bottom: .4em solid;
    border-left: .4em solid #0000;
    border-right: .4em solid #0000;
    color: #344675;
    content: "";
    display: inline-block;
    height: 0;
    left: 10px;
    position: absolute;
    right: auto;
    top: -6px;
    vertical-align: middle;
    width: 0;
    z-index: 1
}

.dropdown-menu.dropdown-black.dropdown-menu-right:after {
    left: auto;
    right: 10px
}

.dropup .dropdown-menu.dropdown-black:after {
    color: #1d253b;
    z-index: 2
}

.dropup .dropdown-menu.dropdown-black:before {
    border: .4em solid #0000;
    border-bottom: none;
    border-top-color: currentcolor;
    bottom: -6px;
    color: #555;
    content: "";
    display: inline-block;
    height: 0;
    left: 10px;
    position: absolute;
    right: auto;
    top: auto;
    vertical-align: middle;
    width: 0;
    z-index: 1
}

.dropdown-menu i {
    margin-right: 5px;
    position: relative;
    top: 1px
}

.dropdown-menu .tim-icons {
    font-size: 18px;
    margin-right: 10px;
    margin-top: -5px;
    opacity: .5;
    position: relative;
    top: 4px
}

.dropdown-menu .dropdown-item.active,.dropdown-menu .dropdown-item:active {
    color: inherit
}

.dropup .dropdown-menu:before {
    display: none
}

.dropup .dropdown-menu:after {
    border: .4em solid #0000;
    border-bottom: none;
    border-top-color: currentcolor;
    bottom: -5px;
    color: #fff;
    content: "";
    display: inline-block;
    height: 0;
    left: 10px;
    position: absolute;
    right: auto;
    top: auto;
    vertical-align: middle;
    width: 0
}

.dropup .dropdown-menu.dropdown-menu-right:after,.dropup .dropdown-menu.dropdown-menu-right:before {
    left: auto;
    right: 10px
}

.dropdown-menu:before {
    border-bottom: .4em solid;
    border-left: .4em solid #0000;
    border-right: .4em solid #0000;
    color: #fff;
    content: "";
    display: inline-block;
    height: 0;
    left: 10px;
    position: absolute;
    right: auto;
    top: -5px;
    vertical-align: middle;
    width: 0
}

.dropdown-menu.dropdown-menu-right {
    left: auto!important;
    right: 0!important
}

.bootstrap-select .dropdown-menu.inner li a,.dropdown-menu .dropdown-item {
    font-size: .7500000025rem;
    margin-top: 5px;
    padding-bottom: .6rem;
    padding-top: .6rem;
    transition: all .15s linear
}

.bootstrap-select .dropdown-menu.inner li a:focus,.bootstrap-select .dropdown-menu.inner li a:hover,.dropdown-menu .dropdown-item:focus,.dropdown-menu .dropdown-item:hover {
    background-color: #dedede4d
}

.bootstrap-select .dropdown-menu.inner li a.disabled,.bootstrap-select .dropdown-menu.inner li a:disabled,.dropdown-menu .dropdown-item.disabled,.dropdown-menu .dropdown-item:disabled {
    color: #b6b6b699
}

.bootstrap-select .dropdown-menu.inner li a.disabled:focus,.bootstrap-select .dropdown-menu.inner li a.disabled:hover,.bootstrap-select .dropdown-menu.inner li a:disabled:focus,.bootstrap-select .dropdown-menu.inner li a:disabled:hover,.dropdown-menu .dropdown-item.disabled:focus,.dropdown-menu .dropdown-item.disabled:hover,.dropdown-menu .dropdown-item:disabled:focus,.dropdown-menu .dropdown-item:disabled:hover {
    background-color: #0000;
    box-shadow: none
}

.dropdown-menu .dropdown-divider {
    background-color: #dedede80
}

.dropdown-menu .dropdown-header:not([href]) {
    color: #b6b6b699;
    font-size: .62475rem;
    font-weight: 600;
    text-transform: uppercase
}

.dropdown-menu.dropdown-primary {
    background-color: #df41c6
}

.dropdown-menu.dropdown-primary:before {
    color: #df41c6
}

.dropdown-menu.dropdown-primary .dropdown-header:not([href]):not([tabindex]) {
    color: #fffc
}

.dropdown-menu.dropdown-primary .dropdown-item {
    color: #fff
}

.dropdown-menu.dropdown-primary .dropdown-divider,.dropdown-menu.dropdown-primary .dropdown-item:focus,.dropdown-menu.dropdown-primary .dropdown-item:hover {
    background-color: #fff3
}

.dropdown-menu.dropdown-info {
    background-color: #0e84f8
}

.dropdown-menu.dropdown-info:before {
    color: #0e84f8
}

.dropdown-menu.dropdown-info .dropdown-header:not([href]):not([tabindex]) {
    color: #fffc
}

.dropdown-menu.dropdown-info .dropdown-item {
    color: #fff
}

.dropdown-menu.dropdown-info .dropdown-divider,.dropdown-menu.dropdown-info .dropdown-item:focus,.dropdown-menu.dropdown-info .dropdown-item:hover {
    background-color: #fff3
}

.dropdown-menu.dropdown-danger {
    background-color: #fd4e89
}

.dropdown-menu.dropdown-danger:before {
    color: #fd4e89
}

.dropdown-menu.dropdown-danger .dropdown-header:not([href]):not([tabindex]) {
    color: #fffc
}

.dropdown-menu.dropdown-danger .dropdown-item {
    color: #fff
}

.dropdown-menu.dropdown-danger .dropdown-divider,.dropdown-menu.dropdown-danger .dropdown-item:focus,.dropdown-menu.dropdown-danger .dropdown-item:hover {
    background-color: #fff3
}

.dropdown-menu.dropdown-success {
    background-color: #00e3b7
}

.dropdown-menu.dropdown-success:before {
    color: #00e3b7
}

.dropdown-menu.dropdown-success .dropdown-header:not([href]):not([tabindex]) {
    color: #fffc
}

.dropdown-menu.dropdown-success .dropdown-item {
    color: #fff
}

.dropdown-menu.dropdown-success .dropdown-divider,.dropdown-menu.dropdown-success .dropdown-item:focus,.dropdown-menu.dropdown-success .dropdown-item:hover {
    background-color: #fff3
}

.dropdown-menu.dropdown-warning {
    background-color: #ff8163
}

.dropdown-menu.dropdown-warning:before {
    color: #ff8163
}

.dropdown-menu.dropdown-warning .dropdown-header:not([href]):not([tabindex]) {
    color: #fffc
}

.dropdown-menu.dropdown-warning .dropdown-item {
    color: #fff
}

.dropdown-menu.dropdown-warning .dropdown-divider,.dropdown-menu.dropdown-warning .dropdown-item:focus,.dropdown-menu.dropdown-warning .dropdown-item:hover {
    background-color: #fff3
}

.bootstrap-select .dropdown-menu:not(.inner),.dropdown .dropdown-menu,.dropdown-menu.bootstrap-datetimepicker-widget.bottom,.dropup:not(.bootstrap-select) .dropdown-menu {
    display: block;
    filter: alpha(opacity=0);
    opacity: 0;
    top: 100%!important;
    transform: translate3d(0,-20px,0)!important;
    visibility: hidden
}

.dropdown-menu.bootstrap-datetimepicker-widget.top {
    display: block;
    filter: alpha(opacity=0);
    opacity: 0;
    transform: translate3d(0,-20px,0)!important;
    visibility: hidden
}

.dropdown-menu.bootstrap-datetimepicker-widget.bottom,.dropdown-menu.bootstrap-datetimepicker-widget.top {
    transform: translate3d(0,-20px,0)!important
}

.bootstrap-select.dropup .dropdown-menu:not(.inner) {
    transform: translate3d(0,25px,0)!important
}

.dropup:not(.bootstrap-select) .dropdown-menu {
    bottom: 100%;
    top: auto!important;
    transform: translate3d(0,20px,0)!important
}

.bootstrap-select.show .dropdown-menu:not(.inner),.dropdown-menu.bootstrap-datetimepicker-widget.bottom.open,.dropdown-menu.bootstrap-datetimepicker-widget.top.open,.dropdown.show .dropdown-menu,.dropup.show:not(.bootstrap-select) .dropdown-menu,.navbar .dropdown.show .dropdown-menu {
    filter: alpha(opacity=100);
    opacity: 1;
    transform: translate3d(0,1px,0)!important;
    visibility: visible
}

.dropdown-menu.bootstrap-datetimepicker-widget.bottom.open,.dropdown-menu.bootstrap-datetimepicker-widget.top.open {
    transform: translateZ(0)!important
}

.dropup.show:not(.bootstrap-select) .dropdown-menu {
    transform: translate3d(0,-2px,0)!important
}

.dropdown-menu.dropdown-navbar {
    left: -80px
}

.dropdown-menu.dropdown-navbar:after,.dropdown-menu.dropdown-navbar:before {
    left: auto;
    right: 17px
}

.btn {
    cursor: pointer
}

.btn.dropdown-toggle[data-toggle=dropdown] {
    margin: 0 0 5px;
    padding: 10px
}

.btn.dropdown-toggle[data-toggle=dropdown]:after {
    content: "";
    margin-left: 5px
}

.btn span.bs-caret {
    display: none
}

.btn.btn-link.dropdown-toggle {
    height: 22px;
    margin-right: 5px;
    padding: 0
}

.dropdown-toggle:after {
    content: normal
}

.btn:not(:disabled):not(.disabled).active:focus,.btn:not(:disabled):not(.disabled):active:focus,.show>.btn.dropdown-toggle:focus {
    box-shadow: none
}

.dropdown-menu-sm {
    border: .4285rem;
    min-width: 100px
}

.dropdown-menu-lg {
    border-radius: .4285rem;
    min-width: 260px
}

.dropdown-menu-xl {
    border-radius: .4285rem;
    min-width: 450px
}

@media screen and (max-width: 991px) {
    .dropdown-toggle:after {
        border-bottom:0;
        border-left: .3em solid #0000;
        border-right: .3em solid #0000;
        border-top: .3em solid;
        content: "";
        display: inline-block;
        height: 0;
        margin-left: .255em;
        vertical-align: .255em;
        width: 0
    }
}

@media screen and (min-width: 992px) {
    .dropdown-menu .dropdown-item {
        color:#9a9a9a
    }
}

.footer {
    padding: 24px 0 24px 250px
}

.footer [class*=container-] {
    padding: 0
}

.footer .nav {
    float: left;
    list-style: none;
    margin-bottom: 0;
    padding-left: 30px
}

.footer .nav,.footer .nav-item {
    display: inline-block
}

.footer .nav-item:first-child a {
    padding-left: 0
}

.footer .nav-link {
    color: #fff;
    font-size: .7500000025rem;
    padding: 0 .5rem;
    text-transform: uppercase
}

.footer .nav-link,.footer .nav-link:hover {
    text-decoration: none
}

.footer .copyright {
    color: #fff;
    font-size: .7500000025rem;
    line-height: 1.8
}

.footer:after {
    clear: both;
    content: " ";
    display: table
}

@media screen and (max-width: 991px) {
    .footer {
        padding-left:0
    }

    .footer .copyright {
        margin-right: 15px;
        text-align: right
    }
}

@media screen and (min-width: 992px) {
    .footer .copyright {
        float:right;
        padding-right: 30px
    }
}

@media screen and (max-width: 768px) {
    .footer nav {
        display:block;
        float: none;
        margin-bottom: 5px
    }
}

@media screen and (max-width: 576px) {
    .footer,.footer .copyright {
        text-align:center
    }

    .footer .nav {
        float: none;
        padding-left: 0
    }
}

.form-control:-moz-placeholder,.form-control::-moz-placeholder {
    color: #6c757c;
    filter: alpha(opacity=100);
    opacity: 1
}

.form-control::-webkit-input-placeholder {
    color: #6c757c;
    filter: alpha(opacity=100);
    opacity: 1
}

.form-control:-ms-input-placeholder {
    color: #6c757c;
    filter: alpha(opacity=100);
    opacity: 1
}

.form-control {
    border-color: #2b3553;
    border-radius: .4285rem;
    font-size: .7500000025rem;
    transition: color .3s ease-in-out,border-color .3s ease-in-out,background-color .3s ease-in-out
}

.form-control:focus {
    background-color: #0000;
    border-color: #e14eca;
    box-shadow: none
}

.form-control:focus+.input-group-append .input-group-text,.form-control:focus+.input-group-prepend .input-group-text,.form-control:focus~.input-group-append .input-group-text,.form-control:focus~.input-group-prepend .input-group-text {
    background-color: #0000;
    border: 1px solid #e14eca;
    border-left: none
}

.has-error .form-control,.has-error .form-control:focus,.has-success .form-control,.has-success .form-control:focus {
    box-shadow: none
}

.has-danger .form-control.form-control-danger,.has-danger .form-control.form-control-success,.has-success .form-control.form-control-danger,.has-success .form-control.form-control-success {
    background-image: none
}

.form-control+.form-control-feedback {
    border-radius: .4285rem;
    margin-top: -7px;
    position: absolute;
    right: 10px;
    top: 50%;
    vertical-align: middle
}

.open .form-control {
    border-bottom-color: #0000;
    border-radius: .4285rem .4285rem 0 0
}

.form-control+.input-group-append .input-group-text,.form-control+.input-group-prepend .input-group-text {
    background-color: #fff
}

.has-success .form-control,.has-success .input-group-append .input-group-text,.has-success .input-group-prepend .input-group-text {
    border-color: #2b3553
}

.has-success .form-control:focus,.has-success.input-group-focus .input-group-append .input-group-text,.has-success.input-group-focus .input-group-prepend .input-group-text {
    border-color: #00bf9a
}

.has-danger .form-control,.has-danger .input-group-append .input-group-text,.has-danger .input-group-prepend .input-group-text,.has-danger.input-group-focus .input-group-append .input-group-text,.has-danger.input-group-focus .input-group-prepend .input-group-text {
    background-color: #dedede1a;
    border-color: #f33620;
    color: #ec250d
}

.has-danger .form-control:focus,.has-danger .input-group-append .input-group-text:focus,.has-danger .input-group-prepend .input-group-text:focus,.has-danger.input-group-focus .input-group-append .input-group-text:focus,.has-danger.input-group-focus .input-group-prepend .input-group-text:focus {
    background-color: #0000
}

.has-danger:after,.has-success:after {
    color: #00f2c3;
    content: "";
    display: inline-block;
    font-family: nucleo;
    font-size: 11px;
    position: absolute;
    right: 20px;
    top: 13px
}

.has-danger.form-control-lg:after,.has-success.form-control-lg:after {
    font-size: 13px;
    top: 24px
}

.has-danger.has-label:after,.has-success.has-label:after {
    top: 37px
}

.has-danger.form-check:after,.has-success.form-check:after {
    display: none!important
}

.has-danger.form-check .form-check-label,.has-success.form-check .form-check-label {
    color: #00f2c3
}

.has-danger:after {
    color: #ec250d;
    content: ""
}

.has-danger.form-check .form-check-label {
    color: #ec250d
}

img {
    border-radius: .2857rem;
    max-width: 100%
}

.img-raised {
    box-shadow: 0 10px 25px 0 #0000004d
}

.modal-content {
    border: 0
}

.modal-content .modal-header {
    border-bottom: none
}

.modal-content .modal-header button {
    margin: -1rem -1rem -1rem auto;
    outline: 0;
    padding: 1rem;
    position: absolute;
    right: 27px;
    top: 24px
}

.modal-content .modal-header .title {
    color: #222a42;
    margin-bottom: 0;
    margin-top: 5px
}

.modal-content .modal-header .modal-title {
    color: #222a42
}

.modal-content .modal-header i.tim-icons {
    font-size: 16px
}

.modal-content .modal-body {
    line-height: 1.9
}

.modal-content .modal-body p {
    color: #222a42
}

.modal-content .modal-footer {
    border-top: 0;
    justify-content: space-between
}

.modal-content .modal-footer button {
    margin: 0;
    padding-left: 16px;
    padding-right: 16px;
    width: auto
}

.modal-content .modal-footer button.pull-left {
    left: -5px;
    padding-left: 5px;
    padding-right: 5px;
    position: relative
}

.modal-content .modal-body+.modal-footer {
    padding-top: 0
}

.modal-backdrop {
    background: #0000004d
}

.modal.modal-default .modal-content {
    background-color: #fff;
    color: #222a42
}

.modal.modal-default .modal-body p {
    color: #fffc
}

.modal.modal-default .form-control:-moz-placeholder,.modal.modal-default .form-control::-moz-placeholder {
    color: #fff6;
    filter: alpha(opacity=100);
    opacity: 1
}

.modal.modal-default .form-control::-webkit-input-placeholder {
    color: #fff6;
    filter: alpha(opacity=100);
    opacity: 1
}

.modal.modal-default .form-control:-ms-input-placeholder {
    color: #fff6;
    filter: alpha(opacity=100);
    opacity: 1
}

.modal.modal-default .form-control {
    border-color: #ffffff80;
    color: #fff
}

.modal.modal-default .form-control:focus {
    background-color: #0000;
    border-color: #fff;
    color: #fff
}

.modal.modal-default .has-danger:after,.modal.modal-default .has-success:after {
    color: #fff
}

.modal.modal-default .has-danger .form-control {
    background-color: #0000
}

.modal.modal-default .input-group-prepend {
    margin-right: 0
}

.modal.modal-default .input-group-append .input-group-text,.modal.modal-default .input-group-prepend .input-group-text {
    background-color: #1e1e2f33;
    border-color: #ffffff80;
    color: #fff
}

.modal.modal-default .input-group-focus .input-group-append .input-group-text,.modal.modal-default .input-group-focus .input-group-prepend .input-group-text {
    background-color: #1e1e2f4d;
    border-color: #fff;
    color: #fff
}

.modal.modal-default .form-group.no-border .form-control,.modal.modal-default .input-group.no-border .form-control {
    background-color: #1e1e2f33;
    color: #fff
}

.modal.modal-default .form-group.no-border .form-control:active,.modal.modal-default .form-group.no-border .form-control:focus,.modal.modal-default .input-group.no-border .form-control:active,.modal.modal-default .input-group.no-border .form-control:focus {
    background-color: #1e1e2f4d;
    color: #fff
}

.modal.modal-default .form-group.no-border .form-control+.input-group-append .input-group-text,.modal.modal-default .form-group.no-border .form-control+.input-group-prepend .input-group-text,.modal.modal-default .input-group.no-border .form-control+.input-group-append .input-group-text,.modal.modal-default .input-group.no-border .form-control+.input-group-prepend .input-group-text {
    background-color: #1e1e2f33
}

.modal.modal-default .form-group.no-border .form-control+.input-group-append .input-group-text:active,.modal.modal-default .form-group.no-border .form-control+.input-group-append .input-group-text:focus,.modal.modal-default .form-group.no-border .form-control+.input-group-prepend .input-group-text:active,.modal.modal-default .form-group.no-border .form-control+.input-group-prepend .input-group-text:focus,.modal.modal-default .form-group.no-border .form-control:focus+.input-group-append .input-group-text,.modal.modal-default .form-group.no-border .form-control:focus+.input-group-prepend .input-group-text,.modal.modal-default .input-group.no-border .form-control+.input-group-append .input-group-text:active,.modal.modal-default .input-group.no-border .form-control+.input-group-append .input-group-text:focus,.modal.modal-default .input-group.no-border .form-control+.input-group-prepend .input-group-text:active,.modal.modal-default .input-group.no-border .form-control+.input-group-prepend .input-group-text:focus,.modal.modal-default .input-group.no-border .form-control:focus+.input-group-append .input-group-text,.modal.modal-default .input-group.no-border .form-control:focus+.input-group-prepend .input-group-text {
    background-color: #1e1e2f4d;
    color: #fff
}

.modal.modal-default .form-group.no-border .input-group-append .input-group-text,.modal.modal-default .form-group.no-border .input-group-prepend .input-group-text,.modal.modal-default .input-group.no-border .input-group-append .input-group-text,.modal.modal-default .input-group.no-border .input-group-prepend .input-group-text {
    background-color: #1e1e2f33;
    border: none;
    color: #fff
}

.modal.modal-default .form-group.no-border.input-group-focus .input-group-append .input-group-text,.modal.modal-default .form-group.no-border.input-group-focus .input-group-prepend .input-group-text,.modal.modal-default .input-group.no-border.input-group-focus .input-group-append .input-group-text,.modal.modal-default .input-group.no-border.input-group-focus .input-group-prepend .input-group-text {
    background-color: #1e1e2f4d;
    color: #fff
}

.modal.modal-primary .modal-content {
    background-color: #e14eca;
    color: #fff
}

.modal.modal-primary .modal-body p {
    color: #fffc
}

.modal.modal-primary .form-control:-moz-placeholder,.modal.modal-primary .form-control::-moz-placeholder {
    color: #fff6;
    filter: alpha(opacity=100);
    opacity: 1
}

.modal.modal-primary .form-control::-webkit-input-placeholder {
    color: #fff6;
    filter: alpha(opacity=100);
    opacity: 1
}

.modal.modal-primary .form-control:-ms-input-placeholder {
    color: #fff6;
    filter: alpha(opacity=100);
    opacity: 1
}

.modal.modal-primary .form-control {
    border-color: #ffffff80;
    color: #fff
}

.modal.modal-primary .form-control:focus {
    background-color: #0000;
    border-color: #fff;
    color: #fff
}

.modal.modal-primary .has-danger:after,.modal.modal-primary .has-success:after {
    color: #fff
}

.modal.modal-primary .has-danger .form-control {
    background-color: #0000
}

.modal.modal-primary .input-group-prepend {
    margin-right: 0
}

.modal.modal-primary .input-group-append .input-group-text,.modal.modal-primary .input-group-prepend .input-group-text {
    background-color: #1e1e2f33;
    border-color: #ffffff80;
    color: #fff
}

.modal.modal-primary .input-group-focus .input-group-append .input-group-text,.modal.modal-primary .input-group-focus .input-group-prepend .input-group-text {
    background-color: #1e1e2f4d;
    border-color: #fff;
    color: #fff
}

.modal.modal-primary .form-group.no-border .form-control,.modal.modal-primary .input-group.no-border .form-control {
    background-color: #1e1e2f33;
    color: #fff
}

.modal.modal-primary .form-group.no-border .form-control:active,.modal.modal-primary .form-group.no-border .form-control:focus,.modal.modal-primary .input-group.no-border .form-control:active,.modal.modal-primary .input-group.no-border .form-control:focus {
    background-color: #1e1e2f4d;
    color: #fff
}

.modal.modal-primary .form-group.no-border .form-control+.input-group-append .input-group-text,.modal.modal-primary .form-group.no-border .form-control+.input-group-prepend .input-group-text,.modal.modal-primary .input-group.no-border .form-control+.input-group-append .input-group-text,.modal.modal-primary .input-group.no-border .form-control+.input-group-prepend .input-group-text {
    background-color: #1e1e2f33
}

.modal.modal-primary .form-group.no-border .form-control+.input-group-append .input-group-text:active,.modal.modal-primary .form-group.no-border .form-control+.input-group-append .input-group-text:focus,.modal.modal-primary .form-group.no-border .form-control+.input-group-prepend .input-group-text:active,.modal.modal-primary .form-group.no-border .form-control+.input-group-prepend .input-group-text:focus,.modal.modal-primary .form-group.no-border .form-control:focus+.input-group-append .input-group-text,.modal.modal-primary .form-group.no-border .form-control:focus+.input-group-prepend .input-group-text,.modal.modal-primary .input-group.no-border .form-control+.input-group-append .input-group-text:active,.modal.modal-primary .input-group.no-border .form-control+.input-group-append .input-group-text:focus,.modal.modal-primary .input-group.no-border .form-control+.input-group-prepend .input-group-text:active,.modal.modal-primary .input-group.no-border .form-control+.input-group-prepend .input-group-text:focus,.modal.modal-primary .input-group.no-border .form-control:focus+.input-group-append .input-group-text,.modal.modal-primary .input-group.no-border .form-control:focus+.input-group-prepend .input-group-text {
    background-color: #1e1e2f4d;
    color: #fff
}

.modal.modal-primary .form-group.no-border .input-group-append .input-group-text,.modal.modal-primary .form-group.no-border .input-group-prepend .input-group-text,.modal.modal-primary .input-group.no-border .input-group-append .input-group-text,.modal.modal-primary .input-group.no-border .input-group-prepend .input-group-text {
    background-color: #1e1e2f33;
    border: none;
    color: #fff
}

.modal.modal-primary .form-group.no-border.input-group-focus .input-group-append .input-group-text,.modal.modal-primary .form-group.no-border.input-group-focus .input-group-prepend .input-group-text,.modal.modal-primary .input-group.no-border.input-group-focus .input-group-append .input-group-text,.modal.modal-primary .input-group.no-border.input-group-focus .input-group-prepend .input-group-text {
    background-color: #1e1e2f4d;
    color: #fff
}

.modal.modal-danger .modal-content {
    background-color: #fd5d93;
    color: #fff
}

.modal.modal-danger .modal-body p {
    color: #fffc
}

.modal.modal-danger .form-control:-moz-placeholder,.modal.modal-danger .form-control::-moz-placeholder {
    color: #fff6;
    filter: alpha(opacity=100);
    opacity: 1
}

.modal.modal-danger .form-control::-webkit-input-placeholder {
    color: #fff6;
    filter: alpha(opacity=100);
    opacity: 1
}

.modal.modal-danger .form-control:-ms-input-placeholder {
    color: #fff6;
    filter: alpha(opacity=100);
    opacity: 1
}

.modal.modal-danger .form-control {
    border-color: #ffffff80;
    color: #fff
}

.modal.modal-danger .form-control:focus {
    background-color: #0000;
    border-color: #fff;
    color: #fff
}

.modal.modal-danger .has-danger:after,.modal.modal-danger .has-success:after {
    color: #fff
}

.modal.modal-danger .has-danger .form-control {
    background-color: #0000
}

.modal.modal-danger .input-group-prepend {
    margin-right: 0
}

.modal.modal-danger .input-group-append .input-group-text,.modal.modal-danger .input-group-prepend .input-group-text {
    background-color: #1e1e2f33;
    border-color: #ffffff80;
    color: #fff
}

.modal.modal-danger .input-group-focus .input-group-append .input-group-text,.modal.modal-danger .input-group-focus .input-group-prepend .input-group-text {
    background-color: #1e1e2f4d;
    border-color: #fff;
    color: #fff
}

.modal.modal-danger .form-group.no-border .form-control,.modal.modal-danger .input-group.no-border .form-control {
    background-color: #1e1e2f33;
    color: #fff
}

.modal.modal-danger .form-group.no-border .form-control:active,.modal.modal-danger .form-group.no-border .form-control:focus,.modal.modal-danger .input-group.no-border .form-control:active,.modal.modal-danger .input-group.no-border .form-control:focus {
    background-color: #1e1e2f4d;
    color: #fff
}

.modal.modal-danger .form-group.no-border .form-control+.input-group-append .input-group-text,.modal.modal-danger .form-group.no-border .form-control+.input-group-prepend .input-group-text,.modal.modal-danger .input-group.no-border .form-control+.input-group-append .input-group-text,.modal.modal-danger .input-group.no-border .form-control+.input-group-prepend .input-group-text {
    background-color: #1e1e2f33
}

.modal.modal-danger .form-group.no-border .form-control+.input-group-append .input-group-text:active,.modal.modal-danger .form-group.no-border .form-control+.input-group-append .input-group-text:focus,.modal.modal-danger .form-group.no-border .form-control+.input-group-prepend .input-group-text:active,.modal.modal-danger .form-group.no-border .form-control+.input-group-prepend .input-group-text:focus,.modal.modal-danger .form-group.no-border .form-control:focus+.input-group-append .input-group-text,.modal.modal-danger .form-group.no-border .form-control:focus+.input-group-prepend .input-group-text,.modal.modal-danger .input-group.no-border .form-control+.input-group-append .input-group-text:active,.modal.modal-danger .input-group.no-border .form-control+.input-group-append .input-group-text:focus,.modal.modal-danger .input-group.no-border .form-control+.input-group-prepend .input-group-text:active,.modal.modal-danger .input-group.no-border .form-control+.input-group-prepend .input-group-text:focus,.modal.modal-danger .input-group.no-border .form-control:focus+.input-group-append .input-group-text,.modal.modal-danger .input-group.no-border .form-control:focus+.input-group-prepend .input-group-text {
    background-color: #1e1e2f4d;
    color: #fff
}

.modal.modal-danger .form-group.no-border .input-group-append .input-group-text,.modal.modal-danger .form-group.no-border .input-group-prepend .input-group-text,.modal.modal-danger .input-group.no-border .input-group-append .input-group-text,.modal.modal-danger .input-group.no-border .input-group-prepend .input-group-text {
    background-color: #1e1e2f33;
    border: none;
    color: #fff
}

.modal.modal-danger .form-group.no-border.input-group-focus .input-group-append .input-group-text,.modal.modal-danger .form-group.no-border.input-group-focus .input-group-prepend .input-group-text,.modal.modal-danger .input-group.no-border.input-group-focus .input-group-append .input-group-text,.modal.modal-danger .input-group.no-border.input-group-focus .input-group-prepend .input-group-text {
    background-color: #1e1e2f4d;
    color: #fff
}

.modal.modal-warning .modal-content {
    background-color: #ff8d72;
    color: #fff
}

.modal.modal-warning .modal-body p {
    color: #fffc
}

.modal.modal-warning .form-control:-moz-placeholder,.modal.modal-warning .form-control::-moz-placeholder {
    color: #fff6;
    filter: alpha(opacity=100);
    opacity: 1
}

.modal.modal-warning .form-control::-webkit-input-placeholder {
    color: #fff6;
    filter: alpha(opacity=100);
    opacity: 1
}

.modal.modal-warning .form-control:-ms-input-placeholder {
    color: #fff6;
    filter: alpha(opacity=100);
    opacity: 1
}

.modal.modal-warning .form-control {
    border-color: #ffffff80;
    color: #fff
}

.modal.modal-warning .form-control:focus {
    background-color: #0000;
    border-color: #fff;
    color: #fff
}

.modal.modal-warning .has-danger:after,.modal.modal-warning .has-success:after {
    color: #fff
}

.modal.modal-warning .has-danger .form-control {
    background-color: #0000
}

.modal.modal-warning .input-group-prepend {
    margin-right: 0
}

.modal.modal-warning .input-group-append .input-group-text,.modal.modal-warning .input-group-prepend .input-group-text {
    background-color: #1e1e2f33;
    border-color: #ffffff80;
    color: #fff
}

.modal.modal-warning .input-group-focus .input-group-append .input-group-text,.modal.modal-warning .input-group-focus .input-group-prepend .input-group-text {
    background-color: #1e1e2f4d;
    border-color: #fff;
    color: #fff
}

.modal.modal-warning .form-group.no-border .form-control,.modal.modal-warning .input-group.no-border .form-control {
    background-color: #1e1e2f33;
    color: #fff
}

.modal.modal-warning .form-group.no-border .form-control:active,.modal.modal-warning .form-group.no-border .form-control:focus,.modal.modal-warning .input-group.no-border .form-control:active,.modal.modal-warning .input-group.no-border .form-control:focus {
    background-color: #1e1e2f4d;
    color: #fff
}

.modal.modal-warning .form-group.no-border .form-control+.input-group-append .input-group-text,.modal.modal-warning .form-group.no-border .form-control+.input-group-prepend .input-group-text,.modal.modal-warning .input-group.no-border .form-control+.input-group-append .input-group-text,.modal.modal-warning .input-group.no-border .form-control+.input-group-prepend .input-group-text {
    background-color: #1e1e2f33
}

.modal.modal-warning .form-group.no-border .form-control+.input-group-append .input-group-text:active,.modal.modal-warning .form-group.no-border .form-control+.input-group-append .input-group-text:focus,.modal.modal-warning .form-group.no-border .form-control+.input-group-prepend .input-group-text:active,.modal.modal-warning .form-group.no-border .form-control+.input-group-prepend .input-group-text:focus,.modal.modal-warning .form-group.no-border .form-control:focus+.input-group-append .input-group-text,.modal.modal-warning .form-group.no-border .form-control:focus+.input-group-prepend .input-group-text,.modal.modal-warning .input-group.no-border .form-control+.input-group-append .input-group-text:active,.modal.modal-warning .input-group.no-border .form-control+.input-group-append .input-group-text:focus,.modal.modal-warning .input-group.no-border .form-control+.input-group-prepend .input-group-text:active,.modal.modal-warning .input-group.no-border .form-control+.input-group-prepend .input-group-text:focus,.modal.modal-warning .input-group.no-border .form-control:focus+.input-group-append .input-group-text,.modal.modal-warning .input-group.no-border .form-control:focus+.input-group-prepend .input-group-text {
    background-color: #1e1e2f4d;
    color: #fff
}

.modal.modal-warning .form-group.no-border .input-group-append .input-group-text,.modal.modal-warning .form-group.no-border .input-group-prepend .input-group-text,.modal.modal-warning .input-group.no-border .input-group-append .input-group-text,.modal.modal-warning .input-group.no-border .input-group-prepend .input-group-text {
    background-color: #1e1e2f33;
    border: none;
    color: #fff
}

.modal.modal-warning .form-group.no-border.input-group-focus .input-group-append .input-group-text,.modal.modal-warning .form-group.no-border.input-group-focus .input-group-prepend .input-group-text,.modal.modal-warning .input-group.no-border.input-group-focus .input-group-append .input-group-text,.modal.modal-warning .input-group.no-border.input-group-focus .input-group-prepend .input-group-text {
    background-color: #1e1e2f4d;
    color: #fff
}

.modal.modal-success .modal-content {
    background-color: #00f2c3;
    color: #fff
}

.modal.modal-success .modal-body p {
    color: #fffc
}

.modal.modal-success .form-control:-moz-placeholder,.modal.modal-success .form-control::-moz-placeholder {
    color: #fff6;
    filter: alpha(opacity=100);
    opacity: 1
}

.modal.modal-success .form-control::-webkit-input-placeholder {
    color: #fff6;
    filter: alpha(opacity=100);
    opacity: 1
}

.modal.modal-success .form-control:-ms-input-placeholder {
    color: #fff6;
    filter: alpha(opacity=100);
    opacity: 1
}

.modal.modal-success .form-control {
    border-color: #ffffff80;
    color: #fff
}

.modal.modal-success .form-control:focus {
    background-color: #0000;
    border-color: #fff;
    color: #fff
}

.modal.modal-success .has-danger:after,.modal.modal-success .has-success:after {
    color: #fff
}

.modal.modal-success .has-danger .form-control {
    background-color: #0000
}

.modal.modal-success .input-group-prepend {
    margin-right: 0
}

.modal.modal-success .input-group-append .input-group-text,.modal.modal-success .input-group-prepend .input-group-text {
    background-color: #1e1e2f33;
    border-color: #ffffff80;
    color: #fff
}

.modal.modal-success .input-group-focus .input-group-append .input-group-text,.modal.modal-success .input-group-focus .input-group-prepend .input-group-text {
    background-color: #1e1e2f4d;
    border-color: #fff;
    color: #fff
}

.modal.modal-success .form-group.no-border .form-control,.modal.modal-success .input-group.no-border .form-control {
    background-color: #1e1e2f33;
    color: #fff
}

.modal.modal-success .form-group.no-border .form-control:active,.modal.modal-success .form-group.no-border .form-control:focus,.modal.modal-success .input-group.no-border .form-control:active,.modal.modal-success .input-group.no-border .form-control:focus {
    background-color: #1e1e2f4d;
    color: #fff
}

.modal.modal-success .form-group.no-border .form-control+.input-group-append .input-group-text,.modal.modal-success .form-group.no-border .form-control+.input-group-prepend .input-group-text,.modal.modal-success .input-group.no-border .form-control+.input-group-append .input-group-text,.modal.modal-success .input-group.no-border .form-control+.input-group-prepend .input-group-text {
    background-color: #1e1e2f33
}

.modal.modal-success .form-group.no-border .form-control+.input-group-append .input-group-text:active,.modal.modal-success .form-group.no-border .form-control+.input-group-append .input-group-text:focus,.modal.modal-success .form-group.no-border .form-control+.input-group-prepend .input-group-text:active,.modal.modal-success .form-group.no-border .form-control+.input-group-prepend .input-group-text:focus,.modal.modal-success .form-group.no-border .form-control:focus+.input-group-append .input-group-text,.modal.modal-success .form-group.no-border .form-control:focus+.input-group-prepend .input-group-text,.modal.modal-success .input-group.no-border .form-control+.input-group-append .input-group-text:active,.modal.modal-success .input-group.no-border .form-control+.input-group-append .input-group-text:focus,.modal.modal-success .input-group.no-border .form-control+.input-group-prepend .input-group-text:active,.modal.modal-success .input-group.no-border .form-control+.input-group-prepend .input-group-text:focus,.modal.modal-success .input-group.no-border .form-control:focus+.input-group-append .input-group-text,.modal.modal-success .input-group.no-border .form-control:focus+.input-group-prepend .input-group-text {
    background-color: #1e1e2f4d;
    color: #fff
}

.modal.modal-success .form-group.no-border .input-group-append .input-group-text,.modal.modal-success .form-group.no-border .input-group-prepend .input-group-text,.modal.modal-success .input-group.no-border .input-group-append .input-group-text,.modal.modal-success .input-group.no-border .input-group-prepend .input-group-text {
    background-color: #1e1e2f33;
    border: none;
    color: #fff
}

.modal.modal-success .form-group.no-border.input-group-focus .input-group-append .input-group-text,.modal.modal-success .form-group.no-border.input-group-focus .input-group-prepend .input-group-text,.modal.modal-success .input-group.no-border.input-group-focus .input-group-append .input-group-text,.modal.modal-success .input-group.no-border.input-group-focus .input-group-prepend .input-group-text {
    background-color: #1e1e2f4d;
    color: #fff
}

.modal.modal-info .modal-content {
    background-color: #1d8cf8;
    color: #fff
}

.modal.modal-info .modal-body p {
    color: #fffc
}

.modal.modal-info .form-control:-moz-placeholder,.modal.modal-info .form-control::-moz-placeholder {
    color: #fff6;
    filter: alpha(opacity=100);
    opacity: 1
}

.modal.modal-info .form-control::-webkit-input-placeholder {
    color: #fff6;
    filter: alpha(opacity=100);
    opacity: 1
}

.modal.modal-info .form-control:-ms-input-placeholder {
    color: #fff6;
    filter: alpha(opacity=100);
    opacity: 1
}

.modal.modal-info .form-control {
    border-color: #ffffff80;
    color: #fff
}

.modal.modal-info .form-control:focus {
    background-color: #0000;
    border-color: #fff;
    color: #fff
}

.modal.modal-info .has-danger:after,.modal.modal-info .has-success:after {
    color: #fff
}

.modal.modal-info .has-danger .form-control {
    background-color: #0000
}

.modal.modal-info .input-group-prepend {
    margin-right: 0
}

.modal.modal-info .input-group-append .input-group-text,.modal.modal-info .input-group-prepend .input-group-text {
    background-color: #1e1e2f33;
    border-color: #ffffff80;
    color: #fff
}

.modal.modal-info .input-group-focus .input-group-append .input-group-text,.modal.modal-info .input-group-focus .input-group-prepend .input-group-text {
    background-color: #1e1e2f4d;
    border-color: #fff;
    color: #fff
}

.modal.modal-info .form-group.no-border .form-control,.modal.modal-info .input-group.no-border .form-control {
    background-color: #1e1e2f33;
    color: #fff
}

.modal.modal-info .form-group.no-border .form-control:active,.modal.modal-info .form-group.no-border .form-control:focus,.modal.modal-info .input-group.no-border .form-control:active,.modal.modal-info .input-group.no-border .form-control:focus {
    background-color: #1e1e2f4d;
    color: #fff
}

.modal.modal-info .form-group.no-border .form-control+.input-group-append .input-group-text,.modal.modal-info .form-group.no-border .form-control+.input-group-prepend .input-group-text,.modal.modal-info .input-group.no-border .form-control+.input-group-append .input-group-text,.modal.modal-info .input-group.no-border .form-control+.input-group-prepend .input-group-text {
    background-color: #1e1e2f33
}

.modal.modal-info .form-group.no-border .form-control+.input-group-append .input-group-text:active,.modal.modal-info .form-group.no-border .form-control+.input-group-append .input-group-text:focus,.modal.modal-info .form-group.no-border .form-control+.input-group-prepend .input-group-text:active,.modal.modal-info .form-group.no-border .form-control+.input-group-prepend .input-group-text:focus,.modal.modal-info .form-group.no-border .form-control:focus+.input-group-append .input-group-text,.modal.modal-info .form-group.no-border .form-control:focus+.input-group-prepend .input-group-text,.modal.modal-info .input-group.no-border .form-control+.input-group-append .input-group-text:active,.modal.modal-info .input-group.no-border .form-control+.input-group-append .input-group-text:focus,.modal.modal-info .input-group.no-border .form-control+.input-group-prepend .input-group-text:active,.modal.modal-info .input-group.no-border .form-control+.input-group-prepend .input-group-text:focus,.modal.modal-info .input-group.no-border .form-control:focus+.input-group-append .input-group-text,.modal.modal-info .input-group.no-border .form-control:focus+.input-group-prepend .input-group-text {
    background-color: #1e1e2f4d;
    color: #fff
}

.modal.modal-info .form-group.no-border .input-group-append .input-group-text,.modal.modal-info .form-group.no-border .input-group-prepend .input-group-text,.modal.modal-info .input-group.no-border .input-group-append .input-group-text,.modal.modal-info .input-group.no-border .input-group-prepend .input-group-text {
    background-color: #1e1e2f33;
    border: none;
    color: #fff
}

.modal.modal-info .form-group.no-border.input-group-focus .input-group-append .input-group-text,.modal.modal-info .form-group.no-border.input-group-focus .input-group-prepend .input-group-text,.modal.modal-info .input-group.no-border.input-group-focus .input-group-append .input-group-text,.modal.modal-info .input-group.no-border.input-group-focus .input-group-prepend .input-group-text {
    background-color: #1e1e2f4d;
    color: #fff
}

.modal .modal-header .close {
    color: #fd5d93;
    text-shadow: none
}

.modal .modal-header .close:focus,.modal .modal-header .close:hover {
    opacity: 1
}

.modal.modal-black .modal-content {
    background: linear-gradient(180deg,#222a42 0,#1d253b);
    color: #fffc
}

.modal.modal-black .modal-content .modal-header .modal-title,.modal.modal-black .modal-content .modal-header .title {
    color: #ffffffe6
}

.modal.modal-black .modal-content .modal-body p {
    color: #fffc
}

.modal.modal-black h1,.modal.modal-black h2,.modal.modal-black h3,.modal.modal-black h4,.modal.modal-black h5,.modal.modal-black h6,.modal.modal-black p {
    color: #fff
}

.modal-search .modal-dialog {
    max-width: 650px
}

.modal-search .modal-dialog input {
    border: none;
    font-size: 17px;
    font-weight: 100
}

.modal-search .modal-dialog span {
    color: #b7b7b7;
    font-size: 35px
}

.modal-search .modal-content .modal-header {
    padding: 24px
}

.modal-search .modal-header .close {
    color: #555;
    top: 30px!important
}

.modal-search .modal-footer {
    border-top: 2px solid #f9f9f9;
    margin: 0 25px 20px
}

.navbar {
    background: #1a1e34;
    padding: 10px 30px 10px 15px;
    width: 100%;
    z-index: 1050
}

.navbar .photo {
    border-radius: 50%;
    display: inline-block;
    height: 30px;
    overflow: hidden;
    vertical-align: middle;
    width: 30px
}

.navbar .photo img {
    width: 100%
}

.navbar .navbar-wrapper {
    align-items: center;
    display: flex
}

.navbar .navbar-text {
    color: #fff
}

.navbar .btn {
    margin: 0 5px 0 10px
}

.navbar.navbar-absolute {
    position: absolute;
    z-index: 1050
}

.navbar.navbar-transparent {
    background: #0000!important
}

.navbar.bg-white .navbar-nav .search-bar.input-group i {
    color: #222a42
}

.navbar.bg-white .navbar-nav .search-bar.input-group .form-control {
    background: #222a421a;
    border-radius: 4px
}

.navbar.bg-white .navbar-nav a.nav-link {
    color: #222a42!important
}

.navbar.bg-white .navbar-brand,.navbar.bg-white .navbar-nav a.nav-link p,.navbar.bg-white .navbar-text {
    color: #222a42
}

.navbar.bg-white .form-control {
    color: #222a42!important
}

.navbar.bg-white .form-control::placeholder {
    color: #9a9a9a!important
}

.navbar.bg-dark {
    background: #222a42!important
}

.navbar.bg-primary {
    background-color: #e14eca!important
}

.navbar.bg-warning {
    background-color: #ff8d72!important
}

.navbar.bg-info {
    background-color: #1d8cf8!important
}

.navbar.bg-success {
    background-color: #00bf9a!important
}

.navbar.bg-danger {
    background-color: #fd5d93!important
}

.navbar .navbar-brand {
    color: #fff;
    font-size: 1rem;
    margin-left: 17px;
    margin-top: 3px;
    padding-bottom: .3125rem;
    padding-top: .3125rem;
    position: fixed;
    text-transform: uppercase
}

.navbar .navbar-toggle button:focus,.navbar .navbar-toggler {
    outline: none
}

.navbar-minimize-fixed {
    color: #fff;
    margin-left: 40px;
    margin-top: 14px;
    opacity: 0;
    position: fixed;
    transition: .3s ease;
    transition: .2s ease;
    z-index: 20
}

.navbar-minimize-fixed button i {
    font-size: 20px
}

.notification {
    background: #fd5d93;
    border: 1px solid #fd5d93;
    border-radius: .875rem;
    color: #fff;
    font-size: 12px;
    font-weight: 800;
    height: 6px;
    position: absolute;
    right: 10px;
    text-align: center;
    top: 10px;
    width: 6px
}

.navbar-nav li {
    padding: 0 10px
}

.navbar-nav li a {
    color: #fff
}

.navbar-nav li i {
    font-size: 20px;
    vertical-align: middle
}

@media screen and (max-width: 991px) {
    .navbar .container-fluid,.navbar .container-lg,.navbar .container-md,.navbar .container-sm,.navbar .container-xl {
        padding-left:15px;
        padding-right: 15px
    }

    .navbar .navbar-collapse .input-group {
        margin: 5px 0 0
    }

    .navbar .navbar-nav .btn {
        display: flex;
        margin-left: -3px
    }

    .navbar .navbar-nav .btn i {
        margin-right: 12px
    }

    .navbar .navbar-nav .btn span {
        font-weight: 300;
        margin: 0;
        text-transform: uppercase
    }

    .navbar .navbar-nav .btn span,.navbar .navbar-nav .btn span:active,.navbar .navbar-nav .btn span:active:focus,.navbar .navbar-nav .btn span:focus,.navbar .navbar-nav .btn span:hover {
        color: #222a42!important
    }

    .navbar .navbar-nav a.nav-link i {
        margin-left: 4px;
        margin-right: 5px;
        opacity: 1
    }

    .navbar .navbar-nav a.nav-link p {
        display: inline-block;
        margin-left: 7px;
        text-transform: uppercase
    }

    .navbar .navbar-nav .modal-search .modal-dialog {
        padding: 0 40px
    }

    .navbar .navbar-nav .dropdown {
        margin: 5px 0
    }

    .navbar .navbar-nav .dropdown .nav-link {
        padding-bottom: 0
    }

    .navbar .navbar-nav .dropdown .dropdown-menu .dropdown-item {
        margin-top: 0;
        padding-left: 24px
    }

    .navbar .dropdown.show .dropdown-menu {
        display: block
    }

    .navbar .dropdown .dropdown-menu {
        display: none
    }

    .navbar .dropdown .dropdown-menu li a {
        color: #222a42
    }

    .navbar .dropdown .dropdown-menu,.navbar .dropdown.show .dropdown-menu {
        background-color: #0000;
        border: 0;
        box-shadow: none;
        margin: 0 1rem;
        transition: none;
        width: auto
    }

    .navbar .dropdown .dropdown-menu:before,.navbar .dropdown.show .dropdown-menu:before {
        display: none
    }

    .navbar .dropdown-menu .dropdown-item:focus,.navbar .dropdown-menu .dropdown-item:hover {
        color: #fff
    }

    .navbar.bg-white .dropdown-menu .dropdown-item:focus,.navbar.bg-white .dropdown-menu .dropdown-item:hover {
        color: #344675
    }

    .navbar button.navbar-toggler[data-target="#navigation"] {
        padding-top: 0
    }

    .navbar .navbar-toggler-bar {
        background: #fff;
        border-radius: 1px;
        display: block;
        height: 1px;
        position: relative;
        width: 22px
    }

    .navbar .navbar-toggler-bar.navbar-kebab {
        border-radius: 50%;
        height: 4px;
        margin-bottom: 3px;
        width: 4px
    }

    .navbar .navbar-toggler-bar+.navbar-toggler-bar {
        margin-top: 7px
    }

    .navbar .navbar-toggler-bar+.navbar-toggler-bar.navbar-kebab {
        margin-top: 0
    }

    .navbar .navbar-toggler-bar.bar2 {
        transition: width .2s linear;
        width: 17px
    }

    .navbar.bg-white:not(.navbar-transparent) .navbar-toggler-bar {
        background-color: #344675
    }

    .navbar .toggled .navbar-toggler-bar {
        width: 24px
    }

    .navbar .toggled .navbar-toggler-bar+.navbar-toggler-bar {
        margin-top: 5px
    }

    .navbar .navbar-brand {
        margin-left: 20px;
        position: relative
    }

    .navbar-nav .nav-link i.fa,.navbar-nav .nav-link i.tim-icons {
        opacity: .5
    }

    .bar1,.bar2,.bar3 {
        outline: 1px solid #0000
    }

    .bar1 {
        animation: topbar-back .5s 0s;
        animation-fill-mode: forwards;
        top: 0
    }

    .bar2 {
        opacity: 1
    }

    .bar3 {
        animation: bottombar-back .5s 0s;
        animation-fill-mode: forwards;
        bottom: 0
    }

    .toggled .bar1 {
        animation: topbar-x .5s 0s;
        animation-fill-mode: forwards;
        top: 6px
    }

    .toggled .bar2 {
        opacity: 0
    }

    .toggled .bar3 {
        animation: bottombar-x .5s 0s;
        animation-fill-mode: forwards;
        bottom: 6px
    }

    @keyframes topbar-x {
        0% {
            top: 0;
            transform: rotate(0deg)
        }

        45% {
            top: 6px;
            transform: rotate(145deg)
        }

        75% {
            transform: rotate(130deg)
        }

        to {
            transform: rotate(135deg)
        }
    }

    @keyframes topbar-back {
        0% {
            top: 6px;
            transform: rotate(135deg)
        }

        45% {
            transform: rotate(-10deg)
        }

        75% {
            transform: rotate(5deg)
        }

        to {
            top: 0;
            transform: rotate(0)
        }
    }

    @keyframes bottombar-x {
        0% {
            bottom: 0;
            transform: rotate(0deg)
        }

        45% {
            bottom: 6px;
            transform: rotate(-145deg)
        }

        75% {
            transform: rotate(-130deg)
        }

        to {
            transform: rotate(-135deg)
        }
    }

    @keyframes bottombar-back {
        0% {
            bottom: 6px;
            transform: rotate(-135deg)
        }

        45% {
            transform: rotate(10deg)
        }

        75% {
            transform: rotate(-5deg)
        }

        to {
            bottom: 0;
            transform: rotate(0)
        }
    }

    @keyframes fadeIn {
        0% {
            opacity: 0
        }

        to {
            opacity: 1
        }
    }
}

@media screen and (min-width: 992px) {
    .navbar-collapse {
        background:none!important
    }

    .navbar .navbar-toggle {
        display: none
    }

    .navbar-nav .nav-link.profile-photo {
        margin: 7px .7rem;
        padding: 0
    }

    .navbar .caret {
        left: 80%;
        margin-left: 0;
        position: absolute;
        top: 55%
    }

    .navbar-expand-lg .navbar-nav .nav-link {
        padding-left: .5rem;
        padding-right: .5rem
    }
}

@media screen and (max-width: 576px) {
    .navbar[class*=navbar-toggleable-] .container {
        margin-left:0;
        margin-right: 0
    }

    .navbar .navbar-wrapper .navbar-toggle {
        transition: all 1s
    }

    .navbar .navbar-wrapper .navbar-toggle.toggled {
        left: -20px;
        position: relative;
        right: auto;
        transition: all 1s
    }

    .rtl .navbar .navbar-wrapper .navbar-toggle.toggled {
        left: auto;
        position: relative;
        right: -35px;
        transition: all 1s
    }
}

body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased
}

.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6 {
    line-height: 1.2
}

p {
    font-weight: 300
}

button,input,optgroup,select,textarea {
    font-family: Poppins,sans-serif
}

.card h1,.card h2,.card h3,.card h4,.card h5,.card h6,.card p {
    color: #fffc
}

h1,h2,h3,h4,h5,h6 {
    color: #fffc;
    font-weight: 400
}

a {
    color: #ba54f5;
    font-weight: 300
}

a:focus,a:hover {
    color: #e14eca
}

.h1,h1 {
    line-height: 1.05;
    margin-bottom: 30px
}

.h1 small,h1 small {
    font-weight: 600;
    opacity: .8;
    text-transform: uppercase
}

.h2,h2 {
    line-height: 1.2
}

.h2,.h3,h2,h3 {
    margin-bottom: 30px
}

.h3,h3 {
    line-height: 1.4em
}

.h4,h4 {
    line-height: 1.45em;
    margin-bottom: 15px
}

.h4+.category,.h4.title+.category,h4+.category,h4.title+.category {
    margin-top: -10px
}

.h5,h5 {
    line-height: 1.4em;
    margin-bottom: 15px
}

.h6,h6 {
    font-weight: 600;
    text-transform: uppercase
}

p {
    color: #fffc;
    margin-bottom: 5px
}

p.description {
    font-size: 1.14em
}

.title {
    font-weight: 600
}

.title.title-up {
    text-transform: uppercase
}

.title.title-up a {
    color: #222a42;
    text-decoration: none
}

.title+.category {
    margin-top: -10px
}

.card .footer .stats,.card-description,.description,.footer-big p {
    color: #9a9a9a;
    font-weight: 300
}

.card-category,.category {
    color: #fff9;
    font-size: .7500000025rem;
    font-weight: 400;
    text-transform: capitalize
}

.card-category {
    font-size: .7500000025rem
}

.blockquote {
    border: 1px solid #344675;
    font-size: .9625rem;
    line-height: 1.8;
    padding: 20px
}

.blockquote small {
    color: #344675;
    font-size: .7500000025rem;
    text-transform: uppercase
}

.blockquote.blockquote-primary {
    border-color: #e14eca;
    color: #e14eca
}

.blockquote.blockquote-primary small {
    color: #e14eca
}

.blockquote.blockquote-danger {
    border-color: #fd5d93;
    color: #fd5d93
}

.blockquote.blockquote-danger small {
    color: #fd5d93
}

.blockquote.blockquote-white {
    border-color: #fffc;
    color: #fff
}

.blockquote.blockquote-white small {
    color: #fffc
}

ol li,ul li {
    color: #fff
}

pre {
    color: #fffc
}

hr {
    border-top: 1px solid #0000001a;
    margin-bottom: 1rem;
    margin-top: 1rem
}

.table>tbody>tr>td {
    color: #ffffffb3!important
}

.table>tbody>tr>td .photo {
    border-radius: 50%;
    height: 30px;
    margin: 0 auto;
    overflow: hidden;
    width: 30px
}

.table>tbody>tr>td .photo img {
    width: 100%
}

.table>tbody>tr.table-success>td {
    background-color: #00bf9a
}

.table>tbody>tr.table-info>td {
    background-color: #1d8cf8
}

.table>tbody>tr.table-primary>td {
    background-color: #e14eca
}

.table>tbody>tr.table-warning>td {
    background-color: #ff8d72
}

.table>tbody>tr.table-danger>td {
    background-color: #fd5d93
}

.table .img-wrapper {
    border-radius: 50%;
    height: 40px;
    margin: 0 auto;
    overflow: hidden;
    width: 40px
}

.table .img-row {
    max-width: 60px;
    width: 60px
}

.table .form-check {
    margin: 5px 0 0
}

.table .form-check label .form-check-sign:after,.table .form-check label .form-check-sign:before {
    left: 4px;
    top: -17px
}

.table .btn {
    margin: 0
}

.table .small,.table small {
    font-weight: 300
}

.card-tasks .card-body .table {
    margin-bottom: 0
}

.card-tasks .card-body .table>tbody>tr>td,.card-tasks .card-body .table>tbody>tr>th,.card-tasks .card-body .table>tfoot>tr>td,.card-tasks .card-body .table>tfoot>tr>th,.card-tasks .card-body .table>thead>tr>td,.card-tasks .card-body .table>thead>tr>th {
    padding-bottom: 5px;
    padding-top: 5px
}

.table>thead>tr>th {
    border: 0;
    color: #ffffffb3;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase
}

.table .checkbox,.table .radio {
    margin-bottom: 0;
    margin-top: 0;
    padding: 0;
    width: 15px
}

.table .checkbox .icons,.table .radio .icons {
    position: relative
}

.table .checkbox label:after,.table .checkbox label:before,.table .radio label:after,.table .radio label:before {
    left: -3px;
    top: -17px
}

.table>tbody>tr>td,.table>tbody>tr>th,.table>tfoot>tr>td,.table>tfoot>tr>th,.table>thead>tr>td,.table>thead>tr>th {
    border-color: #ffffff1a;
    padding: 12px 7px;
    vertical-align: middle
}

.table.table-shopping tbody tr:last-child td {
    border: none
}

.table .th-description {
    max-width: 150px
}

.table .td-price {
    font-size: 26px;
    font-weight: 300;
    margin-top: 5px;
    position: relative;
    text-align: right;
    top: 4px
}

.table .td-total {
    font-size: .812499975rem;
    font-weight: 600;
    padding-top: 20px;
    text-align: right
}

.table .td-actions .btn {
    margin: 0
}

.table>tbody>tr {
    position: relative
}

.table>tfoot>tr {
    color: #ffffffb3;
    text-transform: uppercase
}

.table-responsive {
    overflow: scroll;
    padding-bottom: 10px
}

#tables .table-responsive {
    margin-bottom: 30px
}

.form-check {
    margin-top: .5rem;
    padding-left: 0
}

.form-check .form-check-label {
    cursor: pointer;
    display: inline-block;
    line-height: 18px;
    margin-bottom: 0;
    padding-left: 25px;
    position: relative;
    transition: color .3s linear
}

.radio .form-check-sign {
    padding-left: 28px
}

.form-check-radio.form-check-inline .form-check-label {
    margin-right: 10px;
    padding-left: 5px
}

.form-check .form-check-sign:after,.form-check .form-check-sign:before {
    border: 1px solid #818181;
    border-radius: 3px;
    content: " ";
    cursor: pointer;
    display: inline-block;
    height: 17px;
    left: 0;
    position: absolute;
    top: 0;
    transition: opacity .3s linear;
    width: 17px
}

.form-check input[type=checkbox]:checked+.form-check-sign:before {
    background-color: #e14eca;
    border: none
}

.form-check .form-check-sign:after {
    background-color: inherit;
    border: 0;
    color: #fff;
    content: "";
    font-family: nucleo;
    font-size: 14px;
    font-weight: 600;
    opacity: 0;
    text-align: center;
    top: 0
}

.form-check.disabled .form-check-label {
    color: #9a9a9a;
    cursor: not-allowed;
    opacity: .5
}

.form-check input[type=checkbox],.radio input[type=radio] {
    opacity: 0;
    position: absolute;
    visibility: hidden
}

.form-check input[type=checkbox]:checked+.form-check-sign:after {
    font-size: 10px;
    margin-top: 0;
    opacity: 1
}

.form-check input[type=checkbox]+.form-check-sign:after {
    font-size: 10px;
    margin-top: 0;
    opacity: 0
}

.checkbox input[type=checkbox]:disabled+.form-check-sign:after,.form-control input[type=checkbox]:disabled+.form-check-sign:before {
    cursor: not-allowed
}

.form-check input[type=checkbox]:disabled+.form-check-sign,.form-check input[type=radio]:disabled+.form-check-sign {
    pointer-events: none
}

.form-check-radio .form-check-label {
    padding-top: 3px
}

.form-check-radio .form-check-sign:after,.form-check-radio .form-check-sign:before {
    border: 1px solid #818181;
    border-radius: 50%;
    content: " ";
    display: inline-block;
    height: 18px;
    left: 0;
    padding: 1px;
    position: absolute;
    top: 3px;
    transition: opacity .3s linear;
    width: 18px
}

.form-check-radio input[type=radio],.form-check-radio input[type=radio]+.form-check-sign:after {
    opacity: 0
}

.form-check-radio input[type=radio]:checked+.form-check-sign:after {
    background-color: #e14eca;
    border-color: #e14eca;
    height: 6px;
    left: 6px;
    top: 9px;
    width: 6px
}

.form-check-radio input[type=radio]:checked+.form-check-sign:before {
    border-color: #e14eca
}

.form-check-radio input[type=radio]:checked+.form-check-sign:after {
    opacity: 1
}

.form-check-radio input[type=radio]:disabled+.form-check-sign,.form-check-radio input[type=radio]:disabled+.form-check-sign:after,.form-check-radio input[type=radio]:disabled+.form-check-sign:before {
    color: #9a9a9a
}

.fixed-plugin {
    background: #0000004d;
    border-radius: 8px 0 0 8px;
    position: fixed;
    right: 0;
    text-align: center;
    top: 130px;
    width: 64px;
    z-index: 1031
}

.fixed-plugin .badge,.fixed-plugin li>a {
    transition: all .34s;
    -webkit-transition: all .34s;
    -moz-transition: all .34s
}

.fixed-plugin .fa-cog {
    border-radius: 0 0 6px 6px;
    color: #fff;
    padding: 10px;
    width: auto
}

.fixed-plugin .dropdown-menu {
    background: linear-gradient(#222a42,#1d253b);
    border-radius: .1875rem;
    left: auto!important;
    padding: 0 10px;
    right: 80px;
    top: -52px!important;
    width: 290px
}

.fixed-plugin .dropdown .dropdown-menu .tim-icons {
    top: 5px
}

.fixed-plugin .dropdown-menu:after,.fixed-plugin .dropdown-menu:before {
    left: auto;
    margin-left: auto;
    right: 10px
}

.fixed-plugin .fa-circle-thin {
    color: #fff
}

.fixed-plugin .active .fa-circle-thin {
    color: #0bf
}

.fixed-plugin .dropdown-menu>.active>a,.fixed-plugin .dropdown-menu>.active>a:focus,.fixed-plugin .dropdown-menu>.active>a:hover {
    color: #777;
    text-align: center
}

.fixed-plugin img {
    border-radius: 0;
    height: 100px;
    margin: 0 auto;
    width: 100%
}

.fixed-plugin .dropdown-menu li>a:focus,.fixed-plugin .dropdown-menu li>a:hover {
    box-shadow: none
}

.fixed-plugin .badge {
    border: 2px solid #fff;
    border-radius: 50%;
    cursor: pointer;
    display: inline-block;
    height: 23px;
    margin-right: 5px;
    position: relative;
    width: 23px
}

.fixed-plugin .badge.active,.fixed-plugin .badge:hover {
    border-color: #1d253b
}

.fixed-plugin .dark-badge,.fixed-plugin .light-badge {
    border: 1px solid #1d8cf8;
    margin: 0
}

.fixed-plugin .dark-badge:hover,.fixed-plugin .light-badge:hover {
    border: 1px solid #1d8cf8
}

.fixed-plugin .light-badge,.fixed-plugin .light-badge:hover {
    background: #fff
}

.fixed-plugin .dark-badge,.fixed-plugin .dark-badge:hover {
    background: #222a42
}

.fixed-plugin h5 {
    margin: 10px
}

.fixed-plugin .dropdown-menu li {
    display: block;
    float: left;
    padding: 18px 2px;
    width: 25%
}

.fixed-plugin li.adjustments-line,.fixed-plugin li.button-container,.fixed-plugin li.header-title {
    height: 50px;
    min-height: inherit;
    width: 100%
}

.fixed-plugin li.button-container {
    height: auto
}

.fixed-plugin li.button-container div {
    margin-bottom: 5px
}

.fixed-plugin #sharrreTitle {
    height: 50px;
    padding: 10px 0;
    text-align: center
}

.fixed-plugin li.header-title {
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    height: 30px;
    line-height: 25px;
    text-align: center;
    text-transform: uppercase
}

.fixed-plugin .adjustments-line a {
    color: #0000
}

.fixed-plugin .adjustments-line a .badge-colors {
    position: relative;
    top: -2px
}

.fixed-plugin .adjustments-line a a:focus,.fixed-plugin .adjustments-line a a:hover {
    color: #0000
}

.fixed-plugin .adjustments-line .togglebutton {
    text-align: center
}

.fixed-plugin .adjustments-line .togglebutton .label-switch {
    color: #fff;
    font-size: .62475rem;
    left: -10px;
    position: relative
}

.fixed-plugin .adjustments-line .togglebutton .label-switch.label-right {
    left: 10px
}

.fixed-plugin .adjustments-line .togglebutton .toggle {
    margin-right: 0
}

.fixed-plugin .adjustments-line .color-label {
    color: #fff;
    font-size: .62475rem;
    position: relative;
    top: -7px
}

.fixed-plugin .adjustments-line .dropdown-menu>li.adjustments-line>a {
    border-bottom: 1px solid #ddd;
    border-radius: 0;
    margin: 0;
    padding-left: 0;
    padding-right: 0
}

.fixed-plugin .dropdown-menu>li>a.img-holder {
    background-color: #fff;
    border: 3px solid #fff;
    border-radius: 10px;
    cursor: pointer;
    display: block;
    font-size: 1rem;
    max-height: 100px;
    opacity: 1;
    overflow: hidden;
    padding: 0;
    text-align: center
}

.fixed-plugin .dropdown-menu>li>a.img-holder img {
    margin-top: auto
}

.fixed-plugin .dropdown-menu>li a.switch-trigger:hover,.fixed-plugin .dropdown-menu>li>a.switch-trigger:focus {
    background-color: #0000
}

.fixed-plugin .dropdown-menu>li:focus>a.img-holder,.fixed-plugin .dropdown-menu>li:hover>a.img-holder {
    border-color: #00bbff87
}

.fixed-plugin .dropdown-menu>.active>a.img-holder {
    background-color: #fff;
    border-color: #0bf
}

.fixed-plugin .btn-social {
    display: block;
    float: left;
    font-weight: 600;
    width: 50%;
    width: 48%
}

.fixed-plugin .btn-social i {
    margin-right: 5px
}

.fixed-plugin .btn-social:first-child {
    margin-right: 2%
}

.fixed-plugin .dropdown .dropdown-menu {
    opacity: 0;
    top: 27px;
    transform: translateY(-15%);
    transform-origin: 0 0
}

.fixed-plugin .dropdown .dropdown-menu:before {
    border-bottom: .4em solid #0000;
    border-left: .4em solid #0003;
    border-top: .4em solid #0000;
    right: -16px;
    top: 46px
}

.fixed-plugin .dropdown .dropdown-menu:after {
    border-bottom: .4em solid #0000;
    border-left: .4em solid #222a42;
    border-top: .4em solid #0000;
    right: -16px
}

.fixed-plugin .dropdown .dropdown-menu:after,.fixed-plugin .dropdown .dropdown-menu:before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 74px;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    width: 16px
}

.fixed-plugin .dropdown.show .dropdown-menu {
    opacity: 1;
    transform: translateY(-13%);
    transform-origin: 0 0
}

.fixed-plugin .bootstrap-switch {
    margin: 0
}

.wrapper {
    height: 100vh;
    position: relative;
    top: 0
}

.wrapper.wrapper-full-page {
    height: auto;
    min-height: 100vh
}

.sidebar-wrapper ul li div.collapse ul li div.collapse ul li a,.sidebar-wrapper ul li div.collapse ul li div.collapsing ul li a,.sidebar-wrapper ul li div.collapsing ul li div.collapse ul li a {
    margin-left: 25px
}

.off-canvas-sidebar,.sidebar {
    background: #ba54f5;
    background: linear-gradient(0deg,#ba54f5,#e14eca);
    background-position: 50%;
    background-size: cover;
    border-radius: 5px;
    box-shadow: 0 0 45px 0 #0009;
    display: block;
    height: calc(100vh - 90px);
    left: 0;
    margin-left: 20px;
    margin-top: 80px;
    position: fixed;
    top: 0;
    transition: .5s cubic-bezier(.685,.0473,.346,1);
    width: 230px;
    z-index: 1
}

.off-canvas-sidebar .sidebar-wrapper,.sidebar .sidebar-wrapper {
    max-height: calc(100vh - 705px);
    min-height: 100%;
    overflow: auto;
    position: relative;
    width: 100%;
    z-index: 4
}

.off-canvas-sidebar .sidebar-wrapper .dropdown .dropdown-backdrop,.sidebar .sidebar-wrapper .dropdown .dropdown-backdrop {
    display: none!important
}

.off-canvas-sidebar .sidebar-wrapper .navbar-form,.sidebar .sidebar-wrapper .navbar-form {
    border: none
}

.off-canvas-sidebar .sidebar-wrapper .user .info [data-toggle=collapse]~div>ul>li>a span,.off-canvas-sidebar .sidebar-wrapper>.nav [data-toggle=collapse]~div>ul>li>a span,.sidebar .sidebar-wrapper .user .info [data-toggle=collapse]~div>ul>li>a span,.sidebar .sidebar-wrapper>.nav [data-toggle=collapse]~div>ul>li>a span {
    display: inline-block
}

.off-canvas-sidebar .sidebar-wrapper .user .info [data-toggle=collapse]~div>ul>li>a .sidebar-normal,.off-canvas-sidebar .sidebar-wrapper>.nav [data-toggle=collapse]~div>ul>li>a .sidebar-normal,.sidebar .sidebar-wrapper .user .info [data-toggle=collapse]~div>ul>li>a .sidebar-normal,.sidebar .sidebar-wrapper>.nav [data-toggle=collapse]~div>ul>li>a .sidebar-normal {
    color: #fffc;
    display: block;
    line-height: 23px;
    margin: 0;
    opacity: 1;
    position: relative;
    transform: translateX(0);
    white-space: nowrap;
    z-index: 1
}

.off-canvas-sidebar .sidebar-wrapper .user .info [data-toggle=collapse]~div>ul>li>a .sidebar-mini-icon,.off-canvas-sidebar .sidebar-wrapper>.nav [data-toggle=collapse]~div>ul>li>a .sidebar-mini-icon,.sidebar .sidebar-wrapper .user .info [data-toggle=collapse]~div>ul>li>a .sidebar-mini-icon,.sidebar .sidebar-wrapper>.nav [data-toggle=collapse]~div>ul>li>a .sidebar-mini-icon {
    color: #fffc;
    display: inherit;
    float: left;
    font-size: 12px;
    line-height: 25px;
    line-height: 24px;
    margin-left: 0;
    margin-right: 10px;
    position: relative;
    text-align: center;
    text-transform: uppercase;
    width: 34px;
    z-index: 1
}

.off-canvas-sidebar .sidebar-wrapper .user .info [data-toggle=collapse]~div>ul>li>a i,.off-canvas-sidebar .sidebar-wrapper>.nav [data-toggle=collapse]~div>ul>li>a i,.sidebar .sidebar-wrapper .user .info [data-toggle=collapse]~div>ul>li>a i,.sidebar .sidebar-wrapper>.nav [data-toggle=collapse]~div>ul>li>a i {
    font-size: 17px;
    line-height: 20px;
    width: 26px
}

.off-canvas-sidebar .sidebar-wrapper [data-toggle=collapse]~div>ul>li:hover>a .sidebar-mini-icon,.off-canvas-sidebar .sidebar-wrapper [data-toggle=collapse]~div>ul>li:hover>a .sidebar-normal,.sidebar .sidebar-wrapper [data-toggle=collapse]~div>ul>li:hover>a .sidebar-mini-icon,.sidebar .sidebar-wrapper [data-toggle=collapse]~div>ul>li:hover>a .sidebar-normal {
    color: #fff
}

.off-canvas-sidebar .sidebar-wrapper .nav [data-toggle=collapse]~div>ul>li>a .sidebar-mini-icon,.sidebar .sidebar-wrapper .nav [data-toggle=collapse]~div>ul>li>a .sidebar-mini-icon {
    opacity: 0
}

.off-canvas-sidebar .navbar-minimize,.sidebar .navbar-minimize {
    opacity: 1;
    position: absolute;
    right: 20px;
    top: 2px
}

.off-canvas-sidebar .nav,.sidebar .nav {
    display: block;
    margin-top: 20px
}

.off-canvas-sidebar .nav .caret,.sidebar .nav .caret {
    position: absolute;
    right: 10px;
    top: 14px
}

.off-canvas-sidebar .nav li>a+div .nav,.sidebar .nav li>a+div .nav {
    margin-top: 5px
}

.off-canvas-sidebar .nav li>a+div .nav li>a,.sidebar .nav li>a+div .nav li>a {
    margin-top: 0;
    padding: 8px
}

.off-canvas-sidebar .nav li>a,.sidebar .nav li>a {
    border-radius: 30px;
    color: #fff;
    cursor: pointer;
    display: block;
    font-size: .62475rem;
    line-height: 1.625rem;
    margin: 10px 15px 0;
    padding: 10px 8px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase
}

.off-canvas-sidebar .nav li:first-child>a,.sidebar .nav li:first-child>a {
    margin: 0 15px
}

.off-canvas-sidebar .nav li:focus:not(.active)>a i,.off-canvas-sidebar .nav li:focus:not(.active)>a p,.off-canvas-sidebar .nav li:hover:not(.active)>a i,.off-canvas-sidebar .nav li:hover:not(.active)>a p,.sidebar .nav li:focus:not(.active)>a i,.sidebar .nav li:focus:not(.active)>a p,.sidebar .nav li:hover:not(.active)>a i,.sidebar .nav li:hover:not(.active)>a p {
    color: #fff
}

.off-canvas-sidebar .nav li.active>a:not([data-toggle=collapse]),.sidebar .nav li.active>a:not([data-toggle=collapse]) {
    background: #0000
}

.off-canvas-sidebar .nav li.active>a:not([data-toggle=collapse]) i,.off-canvas-sidebar .nav li.active>a:not([data-toggle=collapse]) p,.sidebar .nav li.active>a:not([data-toggle=collapse]) i,.sidebar .nav li.active>a:not([data-toggle=collapse]) p {
    color: #fff
}

.off-canvas-sidebar .nav li.active>a:not([data-toggle=collapse]):before,.sidebar .nav li.active>a:not([data-toggle=collapse]):before {
    background: #fff;
    border-radius: 50%;
    content: " ";
    height: 6px;
    left: -4px;
    position: absolute;
    top: 22px;
    width: 6px
}

.off-canvas-sidebar .nav li.active>a[data-toggle=collapse],.sidebar .nav li.active>a[data-toggle=collapse] {
    background: #0000;
    box-shadow: none;
    color: #fff
}

.off-canvas-sidebar .nav li.active>a[data-toggle=collapse] i,.sidebar .nav li.active>a[data-toggle=collapse] i {
    color: #fff
}

.off-canvas-sidebar .nav li.active>a[data-toggle=collapse]+div .nav .active a,.sidebar .nav li.active>a[data-toggle=collapse]+div .nav .active a {
    box-shadow: none
}

.off-canvas-sidebar .nav li.active>a[data-toggle=collapse]+div .nav .active a .sidebar-mini-icon,.off-canvas-sidebar .nav li.active>a[data-toggle=collapse]+div .nav .active a .sidebar-normal,.sidebar .nav li.active>a[data-toggle=collapse]+div .nav .active a .sidebar-mini-icon,.sidebar .nav li.active>a[data-toggle=collapse]+div .nav .active a .sidebar-normal {
    color: #fff;
    font-weight: 400
}

.off-canvas-sidebar .nav li.active>a[data-toggle=collapse]+div .nav .active a:before,.sidebar .nav li.active>a[data-toggle=collapse]+div .nav .active a:before {
    background: #fff;
    border-radius: 50%;
    content: " ";
    height: 6px;
    left: -4px;
    position: absolute;
    top: 17px;
    width: 6px
}

.off-canvas-sidebar .nav li.active>a[data-toggle=collapse]:before,.sidebar .nav li.active>a[data-toggle=collapse]:before {
    background: #fff9;
    border-radius: 50%;
    content: " ";
    height: 6px;
    left: -4px;
    position: absolute;
    top: 22px;
    width: 6px
}

.off-canvas-sidebar .nav p,.sidebar .nav p {
    display: block;
    height: auto;
    line-height: 30px;
    margin: 0;
    position: relative;
    white-space: nowrap
}

.off-canvas-sidebar .nav i,.sidebar .nav i {
    color: #fffc;
    float: left;
    font-size: 20px;
    line-height: 30px;
    margin-right: 12px;
    position: relative;
    text-align: center;
    width: 34px
}

.off-canvas-sidebar .logo,.sidebar .logo {
    padding: .5rem .7rem;
    position: relative;
    z-index: 4
}

.off-canvas-sidebar .logo a.logo-mini,.sidebar .logo a.logo-mini {
    float: left;
    margin-left: 12px;
    margin-right: 12px;
    opacity: 1;
    text-align: center;
    width: 34px
}

.off-canvas-sidebar .logo a.logo-mini img,.sidebar .logo a.logo-mini img {
    border-radius: 50%;
    width: 30px
}

.off-canvas-sidebar .logo a.logo-normal,.sidebar .logo a.logo-normal {
    display: block;
    opacity: 1;
    transform: translateZ(0)
}

.off-canvas-sidebar .logo:after,.sidebar .logo:after {
    background: #ffffff80;
    bottom: 0;
    content: "";
    height: 1px;
    position: absolute;
    right: 15px;
    width: calc(100% - 30px)
}

.off-canvas-sidebar .logo p,.sidebar .logo p {
    color: #fff;
    float: left;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    font-size: 20px;
    line-height: 20px;
    margin: 10px
}

.off-canvas-sidebar .logo .simple-text,.sidebar .logo .simple-text {
    color: #fff;
    display: block;
    font-weight: 400;
    line-height: 30px;
    overflow: hidden;
    padding: .5rem 0;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap
}

.off-canvas-sidebar .logo-tim,.sidebar .logo-tim {
    border: 1px solid #333;
    border-radius: 50%;
    display: block;
    float: left;
    height: 61px;
    overflow: hidden;
    width: 61px
}

.off-canvas-sidebar .logo-tim img,.sidebar .logo-tim img {
    height: 60px;
    width: 60px
}

.off-canvas-sidebar[data=blue],.sidebar[data=blue] {
    background: #3358f4;
    background: linear-gradient(0deg,#3358f4,#1d8cf8)
}

.off-canvas-sidebar[data=green],.sidebar[data=green] {
    background: #0098f0;
    background: linear-gradient(0deg,#0098f0,#00f2c3)
}

.off-canvas-sidebar .user,.sidebar .user {
    margin: 20px auto 0;
    padding-bottom: 20px;
    position: relative
}

.off-canvas-sidebar .user:after,.sidebar .user:after {
    background: #ffffff80;
    bottom: 0;
    content: "";
    height: 1px;
    position: absolute;
    right: 15px;
    width: calc(100% - 30px)
}

.off-canvas-sidebar .user .photo,.sidebar .user .photo {
    border-radius: 50%;
    box-shadow: 0 10px 25px 0 #0000004d;
    float: left;
    height: 34px;
    margin-left: 23px;
    margin-right: 10px;
    overflow: hidden;
    width: 34px;
    z-index: 5
}

.off-canvas-sidebar .user .photo img,.sidebar .user .photo img {
    width: 100%
}

.off-canvas-sidebar .user a,.sidebar .user a {
    color: #fff;
    padding: .5rem 15px;
    text-decoration: none;
    white-space: nowrap
}

.off-canvas-sidebar .user .info>a,.sidebar .user .info>a {
    display: block;
    line-height: 18px
}

.off-canvas-sidebar .user .info>a>span,.sidebar .user .info>a>span {
    display: block;
    opacity: 1;
    position: relative
}

.off-canvas-sidebar .user .info .caret,.sidebar .user .info .caret {
    position: absolute;
    right: 18px;
    top: 8px
}

.visible-on-sidebar-regular {
    display: inline-block!important
}

.visible-on-sidebar-mini {
    display: none!important
}

.off-canvas-sidebar .nav>li>a,.off-canvas-sidebar .nav>li>a:hover {
    color: #fff
}

.off-canvas-sidebar .nav>li>a:focus {
    background: #c8c8c833
}

.main-panel {
    background: linear-gradient(#1e1e2f,#1e1e24);
    border-top: 2px solid #e14eca;
    float: right;
    min-height: 100vh;
    position: relative;
    transition: all .5s cubic-bezier(.685,.0473,.346,1);
    width: 100%
}

.main-panel[data=blue] {
    border-top: 2px solid #1d8cf8
}

.main-panel[data=green] {
    border-top: 2px solid #00f2c3
}

.main-panel[data=primary] {
    border-top: 2px solid #e14eca
}

.main-panel>.content {
    min-height: calc(100vh - 70px);
    padding: 78px 30px 30px 280px
}

.main-panel>.navbar {
    margin-bottom: 0
}

.main-panel .header {
    margin-bottom: 50px
}

.perfect-scrollbar-on .main-panel {
    height: 100%;
    max-height: 100%
}

.main-panel,.sidebar,.sidebar-wrapper {
    -webkit-overflow-scrolling: touch
}

@media(min-width: 991px) {
    .main-panel,.sidebar,.sidebar-wrapper {
        transition-duration:.2s,.2s,.35s;
        transition-property: top,bottom,width;
        transition-timing-function: linear,linear,ease
    }

    .sidebar-mini .visible-on-sidebar-regular {
        display: none!important
    }

    .sidebar-mini .visible-on-sidebar-mini {
        display: inline-block!important
    }

    .sidebar-mini .sidebar {
        width: 80px
    }

    .sidebar-mini .sidebar .sidebar-wrapper {
        width: 100%!important
    }

    .sidebar-mini .sidebar {
        box-shadow: 0 2px 22px 0 #0003,0 2px 30px 0 #00000059;
        display: block;
        z-index: 1030
    }

    .sidebar-mini .sidebar .logo a.logo-normal,.sidebar-mini .sidebar .sidebar-wrapper .user .info [data-toggle=collapse]~div>ul>li>a .sidebar-normal,.sidebar-mini .sidebar .sidebar-wrapper .user .info>a>span,.sidebar-mini .sidebar .sidebar-wrapper>.nav [data-toggle=collapse]~div>ul>li>a .sidebar-normal,.sidebar-mini .sidebar .sidebar-wrapper>.nav li>a p {
        opacity: 0;
        transform: translate3d(-25px,0,0)
    }

    .sidebar-mini .sidebar .nav [data-toggle=collapse]~div>ul>li>a .sidebar-mini-icon {
        opacity: 1
    }

    .sidebar-mini .sidebar:hover {
        width: 260px
    }

    .sidebar-mini .sidebar:hover .logo a.logo-normal {
        opacity: 1;
        transform: translateZ(0)
    }

    .sidebar-mini .sidebar:hover .navbar-minimize {
        opacity: 1
    }

    .sidebar-mini .sidebar:hover .sidebar-wrapper {
        width: 260px
    }

    .sidebar-mini .sidebar:hover .sidebar-wrapper .user .info [data-toggle=collapse]~div>ul>li>a .sidebar-normal,.sidebar-mini .sidebar:hover .sidebar-wrapper .user .info>a>span,.sidebar-mini .sidebar:hover .sidebar-wrapper>.nav [data-toggle=collapse]~div>ul>li>a .sidebar-normal,.sidebar-mini .sidebar:hover .sidebar-wrapper>.nav li>a p {
        opacity: 1;
        transform: translateZ(0)
    }

    .sidebar-mini .sidebar:hover .nav [data-toggle=collapse]~div>ul>li>a .sidebar-mini-icon {
        opacity: 0
    }

    .sidebar-mini .main-panel>.content,.sidebar-mini footer {
        padding-left: 130px
    }

    .navbar-minimize button {
        margin-left: 10px
    }

    .navbar-minimize button i {
        color: #fff;
        font-size: 20px
    }
}

.panel-header {
    background: #141e30;
    background: linear-gradient(90deg,#0c2646 0,#204065 60%,#2a5788);
    height: 260px;
    overflow: hidden;
    padding-bottom: 45px;
    padding-top: 80px;
    position: relative
}

.panel-header .header .title {
    color: #fff
}

.panel-header .header .category {
    color: #ffffff80;
    font-size: 13px;
    margin: 0 auto;
    max-width: 600px
}

.panel-header .header .category a {
    color: #fff
}

.panel-header-sm {
    height: 135px
}

.panel-header-lg {
    height: 380px
}

@media screen and (max-width: 991px) {
    .sidebar {
        border-radius:0;
        display: block;
        height: 100%;
        left: 0;
        margin: 0;
        overflow-y: visible;
        padding: 0;
        position: fixed;
        right: auto;
        top: 0;
        transform: translate3d(-260px,0,0);
        transition: .5s cubic-bezier(.685,.0473,.346,1);
        visibility: visible;
        width: 260px;
        z-index: 1032
    }
}

@media screen and (max-width: 991px)and (prefers-reduced-motion:reduce) {
    .sidebar {
        transition:none
    }
}

@media screen and (max-width: 991px) {
    .wrapper {
        transition:.5s,cubic-bezier(.685,.0473,.346,1)
    }
}

@media screen and (max-width: 991px)and (prefers-reduced-motion:reduce) {
    .wrapper {
        transition:none
    }
}

@media screen and (max-width: 991px) {
    .main-panel {
        width:100%
    }

    .main-panel .content {
        padding-left: 30px
    }

    .nav-open .main-panel {
        right: 0;
        transform: translate3d(260px,0,0)
    }

    .nav-open .sidebar {
        transform: translateZ(0);
        transition: .5s cubic-bezier(.685,.0473,.346,1)
    }
}

@media screen and (max-width: 991px)and (prefers-reduced-motion:reduce) {
    .nav-open .sidebar {
        transition:none
    }
}

@media screen and (max-width: 991px) {
    .nav-open .sidebar:before {
        content:normal
    }

    .nav-open body {
        overflow-x: hidden;
        position: relative
    }

    .nav-open .menu-on-right .main-panel {
        transform: translate3d(-260px,0,0)
    }

    .nav-open .menu-on-right .navbar-collapse,.nav-open .menu-on-right .sidebar {
        transform: translateZ(0)
    }

    .nav-open .menu-on-right #bodyClick {
        left: auto;
        right: 260px
    }

    .nav-open .fixed-plugin {
        display: none
    }

    .menu-on-right .sidebar {
        left: auto;
        right: 0;
        transform: translate3d(260px,0,0)
    }

    #bodyClick {
        background-color: #0000;
        content: "";
        height: 100%;
        left: 260px;
        opacity: 1;
        overflow-x: hidden;
        position: fixed;
        right: 0;
        top: 0;
        transition: .5s,cubic-bezier(.685,.0473,.346,1);
        width: 100%;
        z-index: 9999
    }
}

@media screen and (max-width: 991px)and (prefers-reduced-motion:reduce) {
    #bodyClick {
        transition:none
    }
}

@media screen and (max-width: 991px) {
    .navbar .dropdown-menu {
        position:static!important
    }
}

@media screen and (max-width: 768px) {
    .main-panel .content {
        padding-left:15px;
        padding-right: 15px
    }
}

.animation-transition-general,.nav-pills .nav-link,.nav-tabs .nav-link,.navbar,.navbar-collapse .navbar-nav .nav-link,.off-canvas-sidebar .logo a.logo-mini,.off-canvas-sidebar .logo a.logo-normal,.off-canvas-sidebar .nav p,.off-canvas-sidebar .user .info>a>span,.off-canvas-sidebar .user .photo,.off-canvas-sidebar .user a,.sidebar .logo a.logo-mini,.sidebar .logo a.logo-normal,.sidebar .nav a,.sidebar .nav a i,.sidebar .nav p,.sidebar .user .info>a>span,.sidebar .user .photo,.sidebar .user a,.tag,.tag [data-role=remove] {
    transition: all .3s ease 0s
}

.bootstrap-switch-label:before,.caret {
    transition: all .15s ease 0s
}

.card-collapse .card a[data-toggle=collapse].expanded i,.card-collapse .card a[data-toggle=collapse][aria-expanded=true] i,.dropdown-toggle[aria-expanded=true]:after,a[data-toggle=collapse][aria-expanded=true] .caret {
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);
    transform: rotate(180deg)
}

.caret {
    border-left: 4px solid #0000;
    border-right: 4px solid #0000;
    border-top: 4px dashed;
    height: 0;
    margin-left: 5px;
    margin-top: -5px;
    position: absolute;
    top: 30px;
    vertical-align: middle;
    width: 0
}

.pull-left {
    float: left
}

.pull-right {
    float: right
}

.card form label+.form-control {
    margin-bottom: 20px
}

.card .map-title {
    color: #fff
}

.card.card-chart .gm-style-cc,.card.card-chart .gmnoprint {
    display: none!important
}

.bd-docs h1,.bd-docs h2,.bd-docs h3,.bd-docs h4,.bd-docs h5,.bd-docs h6,.bd-docs ol li,.bd-docs p,.bd-docs ul li {
    color: #2c2c2c
}

.bd-docs .bd-content>table>thead>tr>th {
    color: #222a42
}

.bd-docs .blockquote,.bd-docs .blockquote p,.bd-docs .card p {
    color: #fffc
}

.bd-docs .bd-example {
    background: linear-gradient(#1e1e2f,#1e1e24)
}

.bd-docs .navbar {
    border-top: none
}

.bd-docs .navbar .navbar-nav .nav-link {
    color: #fffc!important
}

.bd-docs .bd-example .btn {
    margin: 4px 0
}

.bd-docs .bd-example .btn .badge {
    display: inline-block
}

.bd-docs .bd-example .tim-icons {
    color: #fff
}

.bd-docs .bd-example .popover .popover-header {
    color: #b5b5b599
}

.bd-docs .bd-example .popover-body p {
    color: #212529
}

.bd-docs .bd-example.tooltip-demo p,.bd-docs .card .card-body,.bd-docs .card.card-body,.bd-docs .form-check,.bd-docs label {
    color: #fffc
}

.bd-docs .form-check+.btn {
    margin-top: 20px
}

.bd-docs .bd-example .h1,.bd-docs .bd-example .h2,.bd-docs .bd-example .h3,.bd-docs .bd-example .h4,.bd-docs .bd-example .h5,.bd-docs .bd-example .h6,.bd-docs .bd-example h1,.bd-docs .bd-example h2,.bd-docs .bd-example h3,.bd-docs .bd-example h4,.bd-docs .bd-example h5,.bd-docs .bd-example h6,.bd-docs .bd-example thead th,.bd-docs table .h1,.bd-docs table .h2,.bd-docs table .h3,.bd-docs table .h4,.bd-docs table .h5,.bd-docs table .h6,.bd-docs table h1,.bd-docs table h2,.bd-docs table h3,.bd-docs table h4,.bd-docs table h5,.bd-docs table h6,.bd-docs table thead th {
    color: #fffc
}

.bd-docs .bd-example .datepicker .tim-icons,.bd-docs .bd-example .datepicker table thead th,.bd-docs .bd-example .datepicker thead th,.bd-docs .bd-example .picker-switch .tim-icons,.bd-docs table .datepicker .tim-icons,.bd-docs table .datepicker table thead th,.bd-docs table .datepicker thead th,.bd-docs table .picker-switch .tim-icons {
    color: #e14eca
}

.bd-docs .footer .container-fluid>nav,.bd-docs .footer .container-lg>nav,.bd-docs .footer .container-md>nav,.bd-docs .footer .container-sm>nav,.bd-docs .footer .container-xl>nav {
    display: inline-block
}

.modal.show .modal-dialog {
    transform: translateY(30%)
}

code {
    color: #f3a4b5
}

@media screen and (max-width: 991px) {
    .profile-photo .profile-photo-small {
        margin-left:-2px
    }

    .button-dropdown {
        display: none
    }

    #searchModal .modal-dialog {
        margin: 20px
    }

    #minimizeSidebar {
        display: none
    }
}

@media screen and (max-width: 768px) {
    .landing-page .section-story-overview .image-container:nth-child(2) {
        margin-bottom:30px;
        margin-left: 0
    }
}

@media screen and (max-width: 576px) {
    .page-header .container h6.category-absolute {
        width:90%
    }

    .form-horizontal .col-form-label,.form-horizontal .label-on-right {
        padding-top: 0;
        text-align: inherit
    }

    .form-horizontal .col-form-label code,.form-horizontal .label-on-right code {
        padding: 0 10px
    }
}

.rtl .bootstrap-navbar,.rtl .sidebar {
    left: auto;
    margin-left: 0;
    margin-right: 20px;
    right: 0
}

.rtl .bootstrap-navbar .nav i,.rtl .sidebar .nav i {
    float: right;
    margin-left: 15px;
    margin-right: 0
}

.rtl .bootstrap-navbar .nav p,.rtl .sidebar .nav p {
    margin-right: 45px;
    text-align: right
}

.rtl .bootstrap-navbar .nav .caret,.rtl .sidebar .nav .caret {
    left: 11px;
    right: auto
}

.rtl .bootstrap-navbar .logo a.logo-mini,.rtl .sidebar .logo a.logo-mini {
    float: right;
    margin-left: 10px;
    margin-right: 20px
}

.rtl .bootstrap-navbar .logo .simple-text,.rtl .sidebar .logo .simple-text {
    text-align: right
}

.rtl .bootstrap-navbar .sidebar-wrapper .nav [data-toggle=collapse]~div>ul>li>a .sidebar-mini-icon,.rtl .bootstrap-navbar .sidebar-wrapper .user .info [data-toggle=collapse]~div>ul>li>a .sidebar-mini-icon,.rtl .sidebar .sidebar-wrapper .nav [data-toggle=collapse]~div>ul>li>a .sidebar-mini-icon,.rtl .sidebar .sidebar-wrapper .user .info [data-toggle=collapse]~div>ul>li>a .sidebar-mini-icon {
    float: right;
    margin-left: 15px;
    margin-right: 0
}

.rtl .bootstrap-navbar .sidebar-wrapper .user .info [data-toggle=collapse]~div>ul>li>a .sidebar-normal,.rtl .bootstrap-navbar .sidebar-wrapper>.nav [data-toggle=collapse]~div>ul>li>a .sidebar-normal,.rtl .sidebar .sidebar-wrapper .user .info [data-toggle=collapse]~div>ul>li>a .sidebar-normal,.rtl .sidebar .sidebar-wrapper>.nav [data-toggle=collapse]~div>ul>li>a .sidebar-normal {
    text-align: right
}

.rtl .bootstrap-navbar:before,.rtl .sidebar:before {
    left: auto;
    right: 30px
}

.rtl .main-panel .content {
    padding: 80px 280px 30px 30px
}

.rtl .footer {
    padding: 24px 300px 24px 0
}

.rtl .dropdown-toggle:after {
    margin-left: 0;
    margin-right: .255em
}

.rtl .dropdown-menu.dropdown-menu-right.dropdown-navbar {
    left: auto;
    right: -220px!important
}

.rtl .dropdown-menu.dropdown-menu-right.dropdown-navbar:before {
    left: 35px;
    right: auto
}

.rtl .notification {
    left: 40px;
    right: auto
}

.rtl .dropdown-menu {
    left: 0;
    right: auto
}

.rtl .minimize-sidebar {
    float: right
}

.rtl .alert {
    left: 0;
    margin-left: 0;
    margin-right: 0
}

.rtl .alert button.close {
    left: 10px!important;
    right: auto!important
}

.rtl .alert span[data-notify=icon] {
    left: auto;
    right: 15px
}

.rtl .alert.alert-with-icon {
    padding-left: 15px;
    padding-right: 65px
}

.rtl .alert.alert-with-icon i[data-notify=icon] {
    left: auto;
    right: 15px
}

.rtl .search-bar {
    margin-left: 0
}

.rtl .modal-search .modal-header .close {
    left: 10px;
    margin-right: auto
}

@media(min-width: 991px) {
    .rtl.sidebar-mini .main-panel .content,.rtl.sidebar-mini footer {
        padding-left:50px;
        padding-right: 130px
    }

    .rtl .navbar-minimize button {
        margin-right: -5px
    }
}

@media screen and (max-width: 991px) {
    .rtl .sidebar {
        margin-right:0
    }

    .rtl .main-panel .content {
        padding-right: 50px
    }

    .rtl #bodyClick {
        left: auto;
        right: 260px
    }

    .rtl .footer {
        padding-right: 15px
    }
}

.rtl .navbar .navbar-nav {
    padding-right: 0
}

.rtl .navbar .navbar-nav a.nav-link {
    text-align: right
}

.rtl .navbar .navbar-nav a.nav-link p {
    margin-right: 7px
}

.rtl .navbar .navbar-nav .btn {
    margin-right: 0;
    padding: 0
}

.rtl .navbar .navbar-nav .btn i {
    margin-left: 4px;
    margin-right: 5px
}

.rtl .navbar .navbar-nav .search-bar span {
    margin-right: 10px
}

.rtl .ps__rail-y {
    left: 0;
    right: auto!important
}

.rtl .main-panel {
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    position: fixed
}

.rtl .fixed-plugin {
    border-radius: 0 8px 8px 0;
    left: 0;
    right: auto
}

.rtl .fixed-plugin .dropdown-menu {
    left: 80px!important;
    right: auto!important
}

.rtl .fixed-plugin .dropdown-menu:after,.rtl .fixed-plugin .dropdown-menu:before {
    left: 10px;
    margin-right: auto;
    right: auto
}

.rtl .fixed-plugin .dropdown-menu:before {
    border-left: initial;
    border-right: .4em solid #0003;
    left: -16px;
    right: auto
}

.rtl .fixed-plugin .dropdown-menu:after {
    border-left: initial;
    border-right: .4em solid #222a42;
    left: -16px;
    right: auto
}

.rtl .off-canvas-sidebar .nav li.active>a:not([data-toggle=collapse]):before,.rtl .sidebar .nav li.active>a:not([data-toggle=collapse]):before {
    left: auto;
    right: -4px
}

@media screen and (max-width: 768px) {
    .rtl .main-panel .content {
        padding-left:15px;
        padding-right: 15px
    }
}

.form-group.has-danger .error,.input-group.has-danger .error {
    color: #ec250d
}

.form-group.has-success .error,.input-group.has-success .error {
    color: #00f2c3
}

.form-group.no-border.form-control-lg .input-group-append .input-group-text,.input-group.no-border.form-control-lg .input-group-append .input-group-text {
    padding: 15px 0 15px 19px
}

.form-group.no-border.form-control-lg .form-control,.input-group.no-border.form-control-lg .form-control {
    padding: 15px 19px
}

.form-group.no-border.form-control-lg .form-control+.input-group-append .input-group-text,.form-group.no-border.form-control-lg .form-control+.input-group-prepend .input-group-text,.input-group.no-border.form-control-lg .form-control+.input-group-append .input-group-text,.input-group.no-border.form-control-lg .form-control+.input-group-prepend .input-group-text {
    padding: 15px 19px 15px 0
}

.form-group.form-control-lg .form-control,.input-group.form-control-lg .form-control {
    height: 100%;
    padding: 14px 18px
}

.form-group.form-control-lg .form-control+.input-group-append .input-group-text,.form-group.form-control-lg .form-control+.input-group-prepend .input-group-text,.input-group.form-control-lg .form-control+.input-group-append .input-group-text,.input-group.form-control-lg .form-control+.input-group-prepend .input-group-text {
    padding: 14px 18px 14px 0
}

.form-group.form-control-lg .input-group-append .input-group-text,.form-group.form-control-lg .input-group-prepend .input-group-text,.input-group.form-control-lg .input-group-append .input-group-text,.input-group.form-control-lg .input-group-prepend .input-group-text {
    padding: 14px 0 15px 18px
}

.form-group.form-control-lg .input-group-append .input-group-text+.form-control,.form-group.form-control-lg .input-group-prepend .input-group-text+.form-control,.input-group.form-control-lg .input-group-append .input-group-text+.form-control,.input-group.form-control-lg .input-group-prepend .input-group-text+.form-control {
    padding: 15px 18px 15px 16px
}

.form-group.no-border .form-control,.input-group.no-border .form-control {
    padding: 11px 19px
}

.form-group.no-border .form-control+.input-group-append .input-group-text,.form-group.no-border .form-control+.input-group-prepend .input-group-text,.input-group.no-border .form-control+.input-group-append .input-group-text,.input-group.no-border .form-control+.input-group-prepend .input-group-text {
    padding: 11px 19px 11px 0
}

.form-group.no-border .input-group-append .input-group-text,.form-group.no-border .input-group-prepend .input-group-text,.input-group.no-border .input-group-append .input-group-text,.input-group.no-border .input-group-prepend .input-group-text {
    padding: 11px 0 11px 19px
}

.form-group .form-control,.input-group .form-control {
    padding: 10px 18px
}

.form-group .form-control+.input-group-append .input-group-text,.form-group .form-control+.input-group-prepend .input-group-text,.input-group .form-control+.input-group-append .input-group-text,.input-group .form-control+.input-group-prepend .input-group-text {
    padding: 10px 18px 10px 0
}

.form-group .input-group-append .input-group-text,.form-group .input-group-prepend .input-group-text,.input-group .input-group-append .input-group-text,.input-group .input-group-prepend .input-group-text {
    padding: 10px 0 10px 18px
}

.form-group .input-group-append .input-group-text+.form-control,.form-group .input-group-append .input-group-text~.form-control,.form-group .input-group-prepend .input-group-text+.form-control,.form-group .input-group-prepend .input-group-text~.form-control,.input-group .input-group-append .input-group-text+.form-control,.input-group .input-group-append .input-group-text~.form-control,.input-group .input-group-prepend .input-group-text+.form-control,.input-group .input-group-prepend .input-group-text~.form-control {
    padding: 10px 19px 11px 16px
}

.form-group.no-border .form-control,.form-group.no-border .form-control+.input-group-append .input-group-text,.form-group.no-border .form-control+.input-group-prepend .input-group-text,.input-group.no-border .form-control,.input-group.no-border .form-control+.input-group-append .input-group-text,.input-group.no-border .form-control+.input-group-prepend .input-group-text {
    background-color: #242c45;
    border: none
}

.form-group.no-border .form-control+.input-group-append .input-group-text:active,.form-group.no-border .form-control+.input-group-append .input-group-text:focus,.form-group.no-border .form-control+.input-group-prepend .input-group-text:active,.form-group.no-border .form-control+.input-group-prepend .input-group-text:focus,.form-group.no-border .form-control:active,.form-group.no-border .form-control:focus,.input-group.no-border .form-control+.input-group-append .input-group-text:active,.input-group.no-border .form-control+.input-group-append .input-group-text:focus,.input-group.no-border .form-control+.input-group-prepend .input-group-text:active,.input-group.no-border .form-control+.input-group-prepend .input-group-text:focus,.input-group.no-border .form-control:active,.input-group.no-border .form-control:focus {
    background-color: #252e49;
    border: none
}

.form-group.no-border .form-control:focus+.input-group-append .input-group-text,.form-group.no-border .form-control:focus+.input-group-prepend .input-group-text,.input-group.no-border .form-control:focus+.input-group-append .input-group-text,.input-group.no-border .form-control:focus+.input-group-prepend .input-group-text {
    background-color: #252e49
}

.form-group.no-border .input-group-append .input-group-text,.form-group.no-border .input-group-prepend .input-group-text,.input-group.no-border .input-group-append .input-group-text,.input-group.no-border .input-group-prepend .input-group-text {
    background-color: #242c45;
    border: none
}

.has-error .control-label,.has-error .form-control-feedback {
    color: #ec250d
}

.has-success .control-label,.has-success .form-control-feedback {
    color: #00f2c3
}

.input-group-append .input-group-text,.input-group-prepend .input-group-text {
    background-color: #0000;
    border: 1px solid #2b3553;
    border-radius: .4285rem;
    color: #fff;
    transition: color .3s ease-in-out,border-color .3s ease-in-out,background-color .3s ease-in-out
}

.input-group-append .input-group-text i,.input-group-prepend .input-group-text i {
    opacity: .5
}

.has-danger.input-group-focus .input-group-append .input-group-text,.has-danger.input-group-focus .input-group-prepend .input-group-text,.has-success .input-group-append .input-group-text,.has-success .input-group-prepend .input-group-text {
    background-color: #0000
}

.has-danger .form-control:focus+.input-group-append .input-group-text,.has-danger .form-control:focus+.input-group-prepend .input-group-text {
    color: #ec250d
}

.has-success .form-control:focus+.input-group-append .input-group-text,.has-success .form-control:focus+.input-group-prepend .input-group-text {
    color: #00f2c3
}

.input-group-append .input-group-text+.form-control,.input-group-append .input-group-text~.form-control,.input-group-prepend .input-group-text+.form-control,.input-group-prepend .input-group-text~.form-control {
    padding: -.5rem .7rem -.5rem 18px
}

.input-group-append .input-group-text i,.input-group-prepend .input-group-text i {
    width: 17px
}

.input-group-append,.input-group-prepend .input-group-text {
    background-color: #0000;
    border: 1px solid #2b3553;
    border-radius: .4285rem;
    color: #fff;
    margin: 0
}

.input-group-append .input-group-text {
    border-left: none
}

.input-group-prepend .input-group-text {
    border-right: none
}

.input-group-focus .input-group-append .input-group-text,.input-group-focus .input-group-prepend .input-group-text {
    background-color: #fff;
    background-color: #0000;
    border-color: #e14eca
}

.input-group-focus.no-border .input-group-append .input-group-text,.input-group-focus.no-border .input-group-prepend .input-group-text {
    background-color: #252e49
}

.form-group,.input-group {
    margin-bottom: 10px;
    position: relative
}

.form-group .form-control-static,.input-group .form-control-static {
    margin-top: 9px
}

.input-group[disabled] .input-group-append .input-group-text,.input-group[disabled] .input-group-prepend .input-group-text {
    background-color: #e3e3e3
}

.input-group .form-control:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child) {
    border-radius: .4285rem;
    border-bottom-left-radius: 0;
    border-left: 0;
    border-top-left-radius: 0
}

.input-group .form-control:first-child,.input-group-btn:first-child>.dropdown-toggle,.input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle) {
    border-right: 0
}

.input-group .form-control:last-child,.input-group-btn:first-child>.btn:not(:first-child),.input-group-btn:last-child>.dropdown-toggle {
    border-left: 0
}

.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control {
    background-color: #1d253b;
    color: #344675;
    cursor: not-allowed
}

.input-group-btn .btn {
    border-width: 1px;
    padding: 11px .7rem
}

.input-group-btn .btn-default:not(.btn-fill) {
    border-color: #ddd
}

.input-group-btn:last-child>.btn {
    margin-left: 0
}

textarea.form-control {
    line-height: 2;
    max-height: 80px;
    max-width: 100%;
    padding: 10px 10px 0 0;
    resize: none
}

.has-danger.form-group .form-control,.has-danger.form-group.no-border .form-control,.has-success.form-group .form-control,.has-success.form-group.no-border .form-control {
    padding-right: 40px
}

.form.form-newsletter .form-group {
    float: left;
    margin-right: 2%;
    margin-top: 9px;
    width: 78%
}

.input-group .input-group-btn {
    padding: 0 12px
}

.form-group input[type=file] {
    bottom: 0;
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 100
}

.form-text {
    color: #fffc;
    font-size: .7500000025rem
}

.form-control-lg {
    border-radius: 0;
    font-size: inherit;
    line-height: 0;
    padding: 0
}

.form-control-lg .form-control {
    height: calc(2.875rem + 2px)
}

.form-horizontal .col-form-label,.form-horizontal .label-on-right {
    max-width: 180px;
    padding: 10px 5px 0 15px;
    text-align: right
}

.form-horizontal .checkbox-radios {
    margin-bottom: 15px
}

.form-horizontal .checkbox-radios .form-check:first-child {
    margin-top: 8px
}

.form-horizontal .label-on-right {
    padding: 10px 15px 0 5px;
    text-align: left
}

.form-horizontal .form-check-inline {
    margin-top: 6px
}

.form-horizontal .form-check-inline .form-check-label {
    margin-right: 1.5rem
}

.search-bar {
    margin-left: 30px
}

.search-bar .btn {
    margin: 0
}

.search-bar.input-group {
    border-radius: 25px;
    height: 43px;
    margin-bottom: 0;
    padding-right: 5px;
    z-index: 4
}

.search-bar.input-group .input-group-addon {
    background: #0000;
    border: none;
    color: #ffffffb3;
    padding: 10px
}

.search-bar.input-group i {
    color: #fff;
    font-size: 20px;
    margin-top: 0!important
}

.search-bar.input-group input {
    background: #0000;
    border: none!important;
    border-radius: 0;
    font-size: 12px;
    opacity: .5;
    padding: 12px!important
}

.search-bar.input-group input:focus {
    background: #0000
}

.search-bar.input-group .form-control {
    color: #fff;
    opacity: 1
}

.search-bar.input-group .form-control::placeholder {
    color: #fff
}

.modal-search .modal-dialog {
    margin: 20px auto;
    max-width: 1000px
}

.modal-search .modal-dialog .form-control {
    border: none;
    color: #222a42
}

.modal-search .modal-dialog .form-control::placeholder {
    color: #222a42
}

.input-group-prepend {
    margin-right: 0
}

.input-group-append .tim-icons,.input-group-prepend .tim-icons {
    font-size: 1rem
}

.history-results {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    padding: 0 20px
}

.history-results>span {
    margin-left: 5px
}

.vela-results {
    color: #fff;
    cursor: pointer;
    margin: 4px;
    text-align: center
}

.vela-results:hover {
    opacity: .8
}

.odd-method-select {
    margin-right: 10px
}

.card-table {
    height: 400px;
    overflow: auto!important
}

.aviator-content {
    margin-bottom: 16px;
    position: relative
}

.aviator-content .loading-puff {
    left: 100px;
    position: absolute;
    top: 82px
}

.aviator-content .odd-aviator {
    font-weight: 700;
    left: 82px;
    position: absolute;
    top: 91px
}

.slider-banners {
    position: relative
}

.slider-banners .minesbet-logo {
    background: url(/static/media/minesbetbanner.b63d2da9ee463bd98e59.png) no-repeat 50%;
    background-size: cover;
    height: 120px;
    width: 100%
}

.slider-banners .apostaganha-logo {
    background: url(/static/media/torneio_apostaganha.6a31076f1d8ee629a98f.png) no-repeat 50%;
    background-size: cover;
    height: 120px;
    width: 100%
}

.slider-banners .br4bet-logo {
    background: url(/static/media/br4bet-logo.de67517c0bfb2f681639.jpg) no-repeat 50%;
    background-size: cover;
    height: 120px;
    width: 100%
}

.slider-banners .br4bet-logo2 {
    background: url(/static/media/br4bet-logo2.c9a1bcdf15d092400701.jpg) no-repeat 50%;
    background-size: cover;
    height: 120px;
    width: 100%
}

.slider-banners .overlay {
    background: linear-gradient(0deg,#000000b3,#0000);
    bottom: 0;
    padding: 12px;
    position: absolute;
    width: 100%
}

.slider-banners .overlay h3 {
    font-size: 16px;
    margin: -10px 0 0;
    padding: 0
}

.slider-banners .overlay a {
    font-size: 12px;
    margin: 0;
    padding: 8px;
    text-decoration: none
}

.history-hours .body-hours {
    height: 380px;
    overflow-x: auto
}

@media(max-width: 576px) {
    .history-hours .body-hours {
        height:280px
    }
}

.history-hours .hour-item {
    border: 1px solid #344675;
    border-radius: 8px;
    padding: 4px;
    text-align: center;
    width: 100%
}

.history-hours .hour-count {
    background-color: #e14eca;
    border: 1px solid #e14eca;
    border-radius: 8px;
    font-weight: 600!important;
    margin-left: 12px;
    padding: 4px;
    text-align: center;
    width: 100%
}

.swal2-dark {
    background-color: #525f7f;
    color: #fff
}

.swal2-dark .swal2-popup {
    background-color: #3e3e3e;
    border: 1px solid #444;
    color: #fff
}

.swal2-dark .swal2-content,.swal2-dark .swal2-title {
    color: #fff
}

.swal2-dark .swal2-input {
    background-color: #555;
    border: 1px solid #666;
    color: #fff
}

.swal2-dark .swal2-confirm {
    background-color: #4caf50;
    color: #fff
}

.swal2-dark .swal2-cancel {
    background-color: #f44336;
    color: #fff
}

.swal2-dark .swal2-styled:focus {
    box-shadow: 0 0 2px 2px #ffffff80
}

.swal2-html-container {
    padding: 6px!important
}

.lds-spinner {
    color: official;
    display: inline-block;
    height: 80px;
    position: relative;
    width: 80px
}

.lds-spinner div {
    animation: lds-spinner 1.2s linear infinite;
    transform-origin: 40px 40px
}

.lds-spinner div:after {
    background: #fff;
    border-radius: 20%;
    content: " ";
    display: block;
    height: 18px;
    left: 37px;
    position: absolute;
    top: 3px;
    width: 6px
}

.lds-spinner div:first-child {
    animation-delay: -1.1s;
    transform: rotate(0deg)
}

.lds-spinner div:nth-child(2) {
    animation-delay: -1s;
    transform: rotate(30deg)
}

.lds-spinner div:nth-child(3) {
    animation-delay: -.9s;
    transform: rotate(60deg)
}

.lds-spinner div:nth-child(4) {
    animation-delay: -.8s;
    transform: rotate(90deg)
}

.lds-spinner div:nth-child(5) {
    animation-delay: -.7s;
    transform: rotate(120deg)
}

.lds-spinner div:nth-child(6) {
    animation-delay: -.6s;
    transform: rotate(150deg)
}

.lds-spinner div:nth-child(7) {
    animation-delay: -.5s;
    transform: rotate(180deg)
}

.lds-spinner div:nth-child(8) {
    animation-delay: -.4s;
    transform: rotate(210deg)
}

.lds-spinner div:nth-child(9) {
    animation-delay: -.3s;
    transform: rotate(240deg)
}

.lds-spinner div:nth-child(10) {
    animation-delay: -.2s;
    transform: rotate(270deg)
}

.lds-spinner div:nth-child(11) {
    animation-delay: -.1s;
    transform: rotate(300deg)
}

.lds-spinner div:nth-child(12) {
    animation-delay: 0s;
    transform: rotate(330deg)
}

@keyframes lds-spinner {
    0% {
        opacity: 1
    }

    to {
        opacity: 0
    }
}

.ps {
    -ms-overflow-style: none;
    overflow: hidden!important;
    overflow-anchor: none;
    touch-action: auto;
    -ms-touch-action: auto
}

.ps__rail-x {
    bottom: 0;
    height: 15px
}

.ps__rail-x,.ps__rail-y {
    display: none;
    opacity: 0;
    position: absolute;
    transition: background-color .2s linear,opacity .2s linear;
    -webkit-transition: background-color .2s linear,opacity .2s linear
}

.ps__rail-y {
    right: 0;
    width: 15px
}

.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y {
    background-color: #0000;
    display: block
}

.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y,.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y {
    opacity: .6
}

.ps .ps__rail-x.ps--clicking,.ps .ps__rail-x:focus,.ps .ps__rail-x:hover,.ps .ps__rail-y.ps--clicking,.ps .ps__rail-y:focus,.ps .ps__rail-y:hover {
    background-color: #eee;
    opacity: .9
}

.ps__thumb-x {
    bottom: 2px;
    height: 6px;
    transition: background-color .2s linear,height .2s ease-in-out;
    -webkit-transition: background-color .2s linear,height .2s ease-in-out
}

.ps__thumb-x,.ps__thumb-y {
    background-color: #aaa;
    border-radius: 6px;
    position: absolute
}

.ps__thumb-y {
    right: 2px;
    transition: background-color .2s linear,width .2s ease-in-out;
    -webkit-transition: background-color .2s linear,width .2s ease-in-out;
    width: 6px
}

.ps__rail-x.ps--clicking .ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x:hover>.ps__thumb-x {
    background-color: #999;
    height: 11px
}

.ps__rail-y.ps--clicking .ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y:hover>.ps__thumb-y {
    background-color: #999;
    width: 11px
}

@supports(-ms-overflow-style: none) {
    .ps {
        overflow:auto!important
    }
}

@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active) {
    .ps {
        overflow: auto!important
    }
}

.react-notification-alert-container {
    position: fixed;
    z-index: 1051
}

.white-content {
    background: #f5f6fa
}

.white-content .navbar.navbar-transparent .navbar-brand {
    color: #1d253b
}

.white-content .navbar.navbar-transparent .navbar-toggler-bar {
    background: #1d253b
}

.white-content .navbar.navbar-transparent .navbar-minimize button i,.white-content .navbar.navbar-transparent .navbar-nav li a:not(.dropdown-item),.white-content .navbar.navbar-transparent .navbar-nav li a:not(.dropdown-item) i,.white-content .navbar.navbar-transparent .search-bar.input-group i {
    color: #1d253b
}

.white-content .navbar.navbar-transparent .search-bar.input-group .form-control {
    color: #344675
}

.white-content .navbar.navbar-transparent .search-bar.input-group .form-control::placeholder {
    color: #9a9a9a
}

.white-content .sidebar {
    box-shadow: 0 2px 22px 0 #0000001a,0 4px 20px 0 #00000026
}

.white-content .sidebar p {
    color: #fffc
}

.white-content .main-panel {
    background: #f5f6fa
}

.white-content h1,.white-content h2,.white-content h3,.white-content h4,.white-content h5,.white-content h6,.white-content ol li,.white-content p,.white-content pre,.white-content ul li {
    color: #1d253b
}

.white-content .font-icon-detail i {
    color: #222a42
}

.white-content .btn:not([data-action]):hover {
    box-shadow: 0 4px 6px #32325d1c,0 1px 3px #00000014
}

.white-content .btn-neutral.btn-link {
    color: #222a42b3
}

.white-content .form-control:-moz-placeholder,.white-content .form-control::-moz-placeholder {
    color: #222a4266;
    filter: alpha(opacity=100);
    opacity: 1
}

.white-content .form-control::-webkit-input-placeholder {
    color: #222a4266;
    filter: alpha(opacity=100);
    opacity: 1
}

.white-content .form-control:-ms-input-placeholder {
    color: #222a4266;
    filter: alpha(opacity=100);
    opacity: 1
}

.white-content .has-danger .form-control,.white-content .has-danger .input-group-prepend .input-group-text {
    border-color: #ec250d
}

.white-content .input-group-prepend .input-group-text {
    border-color: #1d253b80;
    color: #1d253b
}

.white-content .form-control {
    border-color: #1d253b80;
    color: #222a42
}

.white-content .form-control:focus {
    border-color: #e14eca
}

.white-content .form-group.no-border .form-control,.white-content .form-group.no-border .form-control+.input-group-append .input-group-text,.white-content .form-group.no-border .form-control+.input-group-prepend .input-group-text,.white-content .form-group.no-border .input-group-append .input-group-text,.white-content .form-group.no-border .input-group-prepend .input-group-text,.white-content .input-group.no-border .form-control,.white-content .input-group.no-border .form-control+.input-group-append .input-group-text,.white-content .input-group.no-border .form-control+.input-group-prepend .input-group-text,.white-content .input-group.no-border .input-group-append .input-group-text,.white-content .input-group.no-border .input-group-prepend .input-group-text {
    background-color: #dedede4d
}

.white-content .form-group.no-border .form-control+.input-group-append .input-group-text:active,.white-content .form-group.no-border .form-control+.input-group-append .input-group-text:focus,.white-content .form-group.no-border .form-control+.input-group-prepend .input-group-text:active,.white-content .form-group.no-border .form-control+.input-group-prepend .input-group-text:focus,.white-content .form-group.no-border .form-control:active,.white-content .form-group.no-border .form-control:focus,.white-content .form-group.no-border .input-group-append .input-group-text:active,.white-content .form-group.no-border .input-group-append .input-group-text:focus,.white-content .form-group.no-border .input-group-prepend .input-group-text:active,.white-content .form-group.no-border .input-group-prepend .input-group-text:focus,.white-content .input-group.no-border .form-control+.input-group-append .input-group-text:active,.white-content .input-group.no-border .form-control+.input-group-append .input-group-text:focus,.white-content .input-group.no-border .form-control+.input-group-prepend .input-group-text:active,.white-content .input-group.no-border .form-control+.input-group-prepend .input-group-text:focus,.white-content .input-group.no-border .form-control:active,.white-content .input-group.no-border .form-control:focus,.white-content .input-group.no-border .input-group-append .input-group-text:active,.white-content .input-group.no-border .input-group-append .input-group-text:focus,.white-content .input-group.no-border .input-group-prepend .input-group-text:active,.white-content .input-group.no-border .input-group-prepend .input-group-text:focus {
    background-color: #dedede80
}

.white-content .form-group.no-border .form-control:focus+.input-group-append .input-group-text,.white-content .form-group.no-border .form-control:focus+.input-group-prepend .input-group-text,.white-content .input-group.no-border .form-control:focus+.input-group-append .input-group-text,.white-content .input-group.no-border .form-control:focus+.input-group-prepend .input-group-text {
    background-color: #0000
}

.white-content .input-group[disabled] .input-group-append .input-group-text,.white-content .input-group[disabled] .input-group-prepend .input-group-text {
    background-color: #222a42
}

.white-content .form-control[disabled],.white-content .form-control[readonly],.white-content fieldset[disabled] .form-control {
    background: #e3e3e3;
    border-color: #1d253b4d
}

.white-content .input-group-focus .form-control,.white-content .input-group-focus .input-group-append .input-group-text,.white-content .input-group-focus .input-group-prepend .input-group-text {
    border-color: #e14eca
}

.white-content .input-group-focus.no-border .input-group-append .input-group-text,.white-content .input-group-focus.no-border .input-group-prepend .input-group-text {
    background-color: #dedede80
}

.white-content .input-group-prepend .input-group-text {
    border-right: none
}

.white-content .input-group-append .input-group-text {
    border-left: none
}

.white-content .has-danger .form-control:focus,.white-content .has-success.input-group-focus .input-group-append .input-group-text,.white-content .has-success.input-group-focus .input-group-prepend .input-group-text {
    border-color: #ec250d
}

.white-content .has-success .form-control:focus,.white-content .has-success.input-group-focus .input-group-append .input-group-text,.white-content .has-success.input-group-focus .input-group-prepend .input-group-text {
    border-color: #00bf9a
}

.white-content .btn.btn-link:active,.white-content .btn.btn-link:focus,.white-content .btn.btn-link:hover {
    color: #9a9a9a!important
}

.white-content .btn-group .btn.active {
    box-shadow: 0 4px 6px #32325d1c,0 1px 3px #00000014
}

.white-content .card:not(.card-white) {
    background: #fff;
    box-shadow: 0 1px 15px 0 #7b7b7b0d
}

.white-content .card:not(.card-white) .card-header,.white-content .card:not(.card-white) .card-header a[data-toggle=collapse] {
    color: #222a42
}

.white-content .card:not(.card-white) .card-body .card-category,.white-content .card:not(.card-white) .card-body .card-description,.white-content .card:not(.card-white) .card-body .card-title,.white-content .card:not(.card-white) .card-header .card-title {
    color: #1d253b
}

.white-content .card:not(.card-white) label:not(.btn) {
    color: #344675
}

.white-content .card:not(.card-white).nav-pills .nav-item .nav-link {
    background-color: #dedede4d;
    color: #444
}

.white-content .card:not(.card-white).nav-pills .nav-item .nav-link:not(.active):hover {
    background: #dedede80
}

.white-content .card:not(.card-white).nav-pills .nav-item .nav-link.active {
    color: #fff
}

.white-content .card:not(.card-white) .tab-content .tab-pane {
    color: #444
}

.white-content .card:not(.card-white) .card {
    box-shadow: none
}

.white-content .card:not(.card-white).card-plain {
    background: #0000;
    box-shadow: none
}

.white-content .card:not(.card-white).card-tasks .card-body i {
    color: #222a42b3
}

.white-content .card:not(.card-white).card-tasks .card-body i:hover {
    color: #222a42
}

.white-content .table>tbody>tr>td {
    color: #222a42b3!important
}

.white-content .table>tbody>tr>td,.white-content .table>tbody>tr>th,.white-content .table>tfoot>tr>td,.white-content .table>tfoot>tr>th,.white-content .table>thead>tr>td,.white-content .table>thead>tr>th {
    border-color: #222a4233;
    padding: 12px 7px;
    vertical-align: middle
}

.white-content .table button.btn-neutral.btn-link,.white-content .table>thead>tr>th {
    color: #222a42b3
}

.white-content .footer .copyright,.white-content .footer ul li a {
    color: #1d253b
}

.white-content .progress-container .progress,.white-content .progress-container.progress.sm .progress {
    background: #222a421a;
    box-shadow: 0 0 0 3px #222a421a
}

.white-content .progress-container .progress .progress-value,.white-content .progress-container.progress.sm .progress .progress-value {
    color: #344675
}

.white-content .progress-container .progress-badge,.white-content .progress-container.progress.sm .progress-badge {
    color: #1d253b
}

.white-content .full-page {
    background: #f5f6fa
}

.white-content .full-page h1,.white-content .full-page h2,.white-content .full-page h3,.white-content .full-page h4,.white-content .full-page h5,.white-content .full-page h6,.white-content .full-page ol li,.white-content .full-page p,.white-content .full-page pre,.white-content .full-page ul li {
    color: #1d253b
}

.white-content .full-page .description {
    color: #9a9a9a
}

.white-content .full-page .footer .copyright,.white-content .full-page .footer ul li a {
    color: #1d253b
}

.white-content .nav-pills .nav-item .nav-link:not(.active) {
    background: #d3d7e9;
    color: #1d253b
}

.white-content .nav-pills .nav-item .nav-link:not(.active):hover {
    background: #ccc
}

.card {
    background: #27293d;
    border: 0;
    box-shadow: 0 1px 20px 0 #0000001a;
    margin-bottom: 30px;
    position: relative;
    width: 100%
}

.card label {
    color: #fff9
}

.card .card-title {
    margin-bottom: .75rem
}

.card .card-body {
    padding: 15px
}

.card .card-body.table-full-width {
    padding-left: 0;
    padding-right: 0
}

.card .card-body .card-title {
    color: #fff;
    font-weight: 300;
    margin-bottom: .75rem;
    text-transform: inherit
}

.card .card-body .card-category,.card .card-body .card-description {
    color: #fff9
}

.card .card-header {
    border: 0;
    color: #fffc;
    padding: 15px 15px 0
}

.card .card-header:not([data-background-color]) {
    background-color: #0000
}

.card .card-header .card-title {
    color: #fff;
    font-weight: 100
}

.card .card-header .card-category {
    color: #9a9a9a;
    font-weight: 300;
    margin-bottom: 5px
}

.card .map {
    border-radius: .2857rem
}

.card .map.map-big {
    height: 420px
}

.card.card-white {
    background: #fff
}

.card.card-white .card-title {
    color: #222a42
}

.card.card-white .card-category,.card.card-white .stats {
    color: gray
}

.card.card-white .form-control:-moz-placeholder,.card.card-white .form-control::-moz-placeholder {
    color: #222a4266;
    filter: alpha(opacity=100);
    opacity: 1
}

.card.card-white .form-control::-webkit-input-placeholder {
    color: #222a4266;
    filter: alpha(opacity=100);
    opacity: 1
}

.card.card-white .form-control:-ms-input-placeholder {
    color: #222a4266;
    filter: alpha(opacity=100);
    opacity: 1
}

.card.card-white .has-danger .form-control,.card.card-white .has-danger .input-group-prepend .input-group-text {
    border-color: #ec250d
}

.card.card-white .input-group-prepend .input-group-text {
    border-color: #1d253b33;
    color: #1d253b
}

.card.card-white .form-control {
    border-color: #1d253b33;
    color: #222a42
}

.card.card-white .form-control:focus {
    border-color: #e14eca
}

.card.card-white label:not(.btn) {
    color: #344675
}

.card.card-white .form-group.no-border .form-control,.card.card-white .form-group.no-border .form-control+.input-group-append .input-group-text,.card.card-white .form-group.no-border .form-control+.input-group-prepend .input-group-text,.card.card-white .form-group.no-border .input-group-append .input-group-text,.card.card-white .form-group.no-border .input-group-prepend .input-group-text,.card.card-white .input-group.no-border .form-control,.card.card-white .input-group.no-border .form-control+.input-group-append .input-group-text,.card.card-white .input-group.no-border .form-control+.input-group-prepend .input-group-text,.card.card-white .input-group.no-border .input-group-append .input-group-text,.card.card-white .input-group.no-border .input-group-prepend .input-group-text {
    background-color: #dedede4d
}

.card.card-white .form-group.no-border .form-control+.input-group-append .input-group-text:active,.card.card-white .form-group.no-border .form-control+.input-group-append .input-group-text:focus,.card.card-white .form-group.no-border .form-control+.input-group-prepend .input-group-text:active,.card.card-white .form-group.no-border .form-control+.input-group-prepend .input-group-text:focus,.card.card-white .form-group.no-border .form-control:active,.card.card-white .form-group.no-border .form-control:focus,.card.card-white .form-group.no-border .input-group-append .input-group-text:active,.card.card-white .form-group.no-border .input-group-append .input-group-text:focus,.card.card-white .form-group.no-border .input-group-prepend .input-group-text:active,.card.card-white .form-group.no-border .input-group-prepend .input-group-text:focus,.card.card-white .input-group.no-border .form-control+.input-group-append .input-group-text:active,.card.card-white .input-group.no-border .form-control+.input-group-append .input-group-text:focus,.card.card-white .input-group.no-border .form-control+.input-group-prepend .input-group-text:active,.card.card-white .input-group.no-border .form-control+.input-group-prepend .input-group-text:focus,.card.card-white .input-group.no-border .form-control:active,.card.card-white .input-group.no-border .form-control:focus,.card.card-white .input-group.no-border .input-group-append .input-group-text:active,.card.card-white .input-group.no-border .input-group-append .input-group-text:focus,.card.card-white .input-group.no-border .input-group-prepend .input-group-text:active,.card.card-white .input-group.no-border .input-group-prepend .input-group-text:focus {
    background-color: #dedede80
}

.card.card-white .form-group.no-border .form-control:focus+.input-group-append .input-group-text,.card.card-white .form-group.no-border .form-control:focus+.input-group-prepend .input-group-text,.card.card-white .input-group.no-border .form-control:focus+.input-group-append .input-group-text,.card.card-white .input-group.no-border .form-control:focus+.input-group-prepend .input-group-text {
    background-color: #0000
}

.card.card-white .input-group[disabled] .input-group-append .input-group-text,.card.card-white .input-group[disabled] .input-group-prepend .input-group-text {
    background-color: #222a42
}

.card.card-white .form-control[disabled],.card.card-white .form-control[readonly],.card.card-white fieldset[disabled] .form-control {
    background: #e3e3e3;
    border-color: #1d253b4d
}

.card.card-white .input-group-focus .form-control,.card.card-white .input-group-focus .input-group-append .input-group-text,.card.card-white .input-group-focus .input-group-prepend .input-group-text {
    background-color: #fff;
    border-color: #e14eca
}

.card.card-white .input-group-focus.no-border .input-group-append .input-group-text,.card.card-white .input-group-focus.no-border .input-group-prepend .input-group-text {
    background-color: #dedede80
}

.card.card-white .input-group-prepend .input-group-text {
    border-right: none
}

.card.card-white .input-group-append .input-group-text {
    border-left: none
}

.card.card-white .has-danger .form-control:focus,.card.card-white .has-success.input-group-focus .input-group-append .input-group-text,.card.card-white .has-success.input-group-focus .input-group-prepend .input-group-text {
    border-color: #ec250d
}

.card.card-white .has-success .form-control:focus,.card.card-white .has-success.input-group-focus .input-group-append .input-group-text,.card.card-white .has-success.input-group-focus .input-group-prepend .input-group-text {
    border-color: #00bf9a
}

.card.card-plain {
    background: #0000;
    box-shadow: none
}

.card .image {
    height: 200px;
    overflow: hidden;
    position: relative
}

.card .avatar {
    border-radius: 50%;
    height: 30px;
    margin-bottom: 15px;
    overflow: hidden;
    width: 30px
}

.card label {
    font-size: .7500000025rem;
    margin-bottom: 5px
}

.card .card-footer {
    background-color: #0000;
    border: 0;
    padding: 15px
}

.card .card-footer .stats i {
    margin-right: 5px;
    position: relative
}

.card .card-footer h6 {
    margin-bottom: 0;
    padding: 7px 0
}

.card-body {
    padding: 1.25rem
}

@media(max-width: 767.98px) {
    .card.card-chart .card-header .btn-group-toggle .tim-icons {
        font-size:.875rem;
        top: -1px
    }
}

.card-chart {
    overflow: hidden
}

.card-chart .card-header .card-title i {
    font-size: 16px;
    margin-bottom: 3px;
    margin-right: 5px
}

.card-chart .card-header .card-category {
    margin-bottom: 5px
}

.card-chart .card-body {
    padding-left: 5px;
    padding-right: 5px
}

.card-chart .card-body .tab-space {
    padding: 0
}

.card-chart .table {
    margin-bottom: 0
}

.card-chart .table td {
    border-bottom: 1px solid #ffffff1a;
    border-top: none
}

.card-chart .card-progress {
    margin-top: 30px;
    padding: 0 10px
}

.card-chart .chart-area {
    height: 220px;
    width: 100%
}

.card-chart .card-footer {
    margin-top: 15px
}

.card-chart .card-footer .stats {
    color: #9a9a9a
}

.card-chart .dropdown {
    position: absolute;
    right: 20px;
    top: 20px
}

.card-chart .dropdown .btn {
    margin: 0
}

.card-chart.card-chart-pie .chart-area {
    height: auto;
    padding: 10px 0 25px
}

.card-chart.card-chart-pie .card-title {
    margin-bottom: 10px
}

.card-chart.card-chart-pie .card-title i {
    font-size: 1rem
}

.map {
    height: 500px
}

.card-user {
    overflow: hidden
}

.card-user .image {
    height: 120px
}

.card-user .author {
    margin-top: 25px;
    text-align: center;
    text-transform: none
}

.card-user .author a+p.description {
    margin-top: -7px
}

.card-user .author .block {
    height: 100px;
    position: absolute;
    width: 250px
}

.card-user .author .block.block-one {
    margin-left: -50px;
    margin-top: -90px;
    transform: rotate(150deg)
}

.card-user .author .block.block-one,.card-user .author .block.block-two {
    background: #e14eca99;
    background: linear-gradient(90deg,#e14eca99 0,#e14eca00);
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=10)
}

.card-user .author .block.block-two {
    margin-left: -100px;
    margin-top: -40px;
    transform: rotate(30deg)
}

.card-user .author .block.block-three {
    margin-top: -70px;
    transform: rotate(170deg)
}

.card-user .author .block.block-four,.card-user .author .block.block-three {
    background: #e14eca99;
    background: linear-gradient(90deg,#e14eca99 0,#e14eca00);
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=10);
    right: -45px
}

.card-user .author .block.block-four {
    margin-top: -25px;
    transform: rotate(150deg)
}

.card-user .avatar {
    background-color: #0000;
    border: 5px solid #2b3553;
    border-bottom-color: #0000;
    height: 124px;
    position: relative;
    width: 124px
}

.card-user .card-body {
    min-height: 240px
}

.card-user hr {
    margin: 5px 15px
}

.card-user .button-container {
    margin-bottom: 6px;
    text-align: center
}

.card-user .card-description {
    margin-top: 30px
}

.card-tasks {
    height: 473px
}

.card-tasks .table-full-width {
    max-height: 410px;
    position: relative
}

.card-tasks .card-header .title {
    font-weight: 400;
    margin-right: 20px
}

.card-tasks .card-header .dropdown {
    color: #ccc;
    float: right
}

.card-tasks .card-body i {
    color: #9a9a9a;
    font-size: 1.4em
}

.card-tasks .card-body i:hover {
    color: #fff
}

.card-plain {
    background: #0000;
    box-shadow: none
}

.card-plain .card-footer,.card-plain .card-header {
    background-color: #0000;
    margin-left: 0;
    margin-right: 0
}

.card-plain:not(.card-subcategories).card-body {
    padding-left: 0;
    padding-right: 0
}

select.form-control option {
    color: #888
}

.badge-purple {
    background-color: #5603ad
}

.whatsapp {
    background: url(/static/media/whatsapp-logo.08ab64c3e9c9d4ef5095.png) 50% no-repeat;
    background-size: cover;
    border-radius: 50%;
    bottom: 12px;
    height: 50px;
    position: absolute;
    right: 12px;
    width: 50px
}

.whatsapp-call {
    margin-left: -20px;
    margin-top: -39px
}

/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
.tim-row {
    margin-bottom: 20px
}

.tim-white-buttons {
    background-color: #777
}

.typography-line {
    display: block;
    margin-bottom: 35px;
    padding-left: 25%;
    position: relative;
    width: 100%
}

.typography-line span {
    bottom: 10px;
    color: #c0c1c2;
    display: block;
    font-size: 13px;
    font-weight: 400;
    left: 0;
    line-height: 13px;
    position: absolute;
    text-transform: none;
    width: 260px
}

.tim-row {
    padding-top: 60px
}

.tim-row h3 {
    margin-top: 0
}

.offline-doc .page-header {
    align-items: center;
    display: flex
}

.offline-doc .footer {
    background: #0000;
    bottom: 0;
    color: #fff;
    padding-left: 0;
    position: absolute;
    width: 100%;
    z-index: 1
}

@media (min-width: 992px) {
    .sidebar .nav>li.active-pro {
        bottom:10px;
        position: absolute;
        width: 100%
    }
}

.card.card-upgrade .card-category {
    margin: 0 auto;
    max-width: 530px
}

.offline-doc .page-header {
    color: #fff;
    max-height: 999px;
    min-height: 100vh;
    padding: 0;
    position: relative
}

.offline-doc .page-header .page-header-image {
    background-position: 50%;
    background-size: cover;
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: -1
}

.offline-doc .page-header .content-center {
    color: #fff;
    left: 50%;
    max-width: 880px;
    padding: 0 15px;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    z-index: 2
}

.offline-doc .page-header footer {
    bottom: 0;
    position: absolute;
    width: 100%
}

.offline-doc .page-header .container {
    height: 100%;
    z-index: 1
}

.offline-doc .page-header .category,.offline-doc .page-header .description {
    color: #fffc
}

.offline-doc .page-header.page-header-small {
    max-height: 440px;
    min-height: 60vh
}

.offline-doc .page-header.page-header-mini {
    max-height: 340px;
    min-height: 40vh
}

.offline-doc .page-header .title {
    margin-bottom: 15px
}

.offline-doc .page-header .title+h4 {
    margin-top: 10px
}

.offline-doc .page-header:after,.offline-doc .page-header:before {
    content: "";
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 0
}

.offline-doc .page-header:before {
    background-color: #000c
}

@font-face {
    font-family: Nucleo;
    font-style: normal;
    font-weight: 400;
    src: url(/static/media/nucleo.bd5cce8bf40be5947637.eot);
    src: url(/static/media/nucleo.bd5cce8bf40be5947637.eot) format("embedded-opentype"),url(/static/media/nucleo.6dfb4833e3a0132fd1fc.woff2) format("woff2"),url(/static/media/nucleo.5c65ef4d6434bb8062a3.woff) format("woff"),url(/static/media/nucleo.35b08447277ca7bf9f09.ttf) format("truetype")
}

.tim-icons {
    speak: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: inline-block;
    font: normal normal normal 1em/1 Nucleo;
    text-transform: none;
    vertical-align: middle
}

.font-icon-detail {
    border: 1px solid #e44cc4;
    border-radius: .1875rem;
    margin: 15px 0;
    min-height: 168px;
    padding: 45px 0 30px;
    text-align: center
}

.font-icon-detail i {
    color: #fff;
    font-size: 1.5em
}

.font-icon-detail p {
    color: #e44cc4!important;
    font-size: .7142em;
    margin-top: 30px;
    padding: 0 10px
}

.tim-icons-sm {
    font-size: .8em
}

.tim-icons-lg {
    font-size: 1.2em
}

.tim-icons-16 {
    font-size: 16px
}

.tim-icons-32 {
    font-size: 32px
}

.tim-icons-bg-circle,.tim-icons-bg-square {
    padding: .35em
}

.tim-icons-bg-circle {
    border-radius: 50%
}

.tim-icons-is-spinning {
    animation: tim-icons-spin 2s linear infinite
}

@keyframes tim-icons-spin {
    0% {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(1turn)
    }
}

.icon-alert-circle-exc:before {
    content: "\ea02"
}

.icon-align-center:before {
    content: "\ea03"
}

.icon-align-left-2:before {
    content: "\ea04"
}

.icon-app:before {
    content: "\ea05"
}

.icon-atom:before {
    content: "\ea06"
}

.icon-attach-87:before {
    content: "\ea07"
}

.icon-badge:before {
    content: "\ea08"
}

.icon-bag-16:before {
    content: "\ea09"
}

.icon-bank:before {
    content: "\ea0a"
}

.icon-basket-simple:before {
    content: "\ea0b"
}

.icon-bell-55:before {
    content: "\ea0c"
}

.icon-bold:before {
    content: "\ea0d"
}

.icon-book-bookmark:before {
    content: "\ea0e"
}

.icon-bulb-63:before {
    content: "\ea0f"
}

.icon-bullet-list-67:before {
    content: "\ea10"
}

.icon-bus-front-12:before {
    content: "\ea11"
}

.icon-button-pause:before {
    content: "\ea12"
}

.icon-button-power:before {
    content: "\ea13"
}

.icon-calendar-60:before {
    content: "\ea14"
}

.icon-camera-18:before {
    content: "\ea15"
}

.icon-caps-small:before {
    content: "\ea16"
}

.icon-cart:before {
    content: "\ea17"
}

.icon-chart-bar-32:before {
    content: "\ea18"
}

.icon-chart-pie-36:before {
    content: "\ea19"
}

.icon-chat-33:before {
    content: "\ea1a"
}

.icon-check-2:before {
    content: "\ea1b"
}

.icon-cloud-download-93:before {
    content: "\ea1c"
}

.icon-cloud-upload-94:before {
    content: "\ea1d"
}

.icon-coins:before {
    content: "\ea1e"
}

.icon-compass-05:before {
    content: "\ea1f"
}

.icon-controller:before {
    content: "\ea20"
}

.icon-credit-card:before {
    content: "\ea21"
}

.icon-delivery-fast:before {
    content: "\ea22"
}

.icon-double-left:before {
    content: "\ea23"
}

.icon-double-right:before {
    content: "\ea24"
}

.icon-email-85:before {
    content: "\ea25"
}

.icon-gift-2:before {
    content: "\ea26"
}

.icon-globe-2:before {
    content: "\ea27"
}

.icon-headphones:before {
    content: "\ea28"
}

.icon-heart-2:before {
    content: "\ea29"
}

.icon-html5:before {
    content: "\ea2a"
}

.icon-image-02:before {
    content: "\ea2b"
}

.icon-istanbul:before {
    content: "\ea2c"
}

.icon-key-25:before {
    content: "\ea2d"
}

.icon-laptop:before {
    content: "\ea2e"
}

.icon-light-3:before {
    content: "\ea2f"
}

.icon-link-72:before {
    content: "\ea30"
}

.icon-lock-circle:before {
    content: "\ea31"
}

.icon-map-big:before {
    content: "\ea32"
}

.icon-minimal-down:before {
    content: "\ea33"
}

.icon-minimal-left:before {
    content: "\ea34"
}

.icon-minimal-right:before {
    content: "\ea35"
}

.icon-minimal-up:before {
    content: "\ea36"
}

.icon-mobile:before {
    content: "\ea37"
}

.icon-molecule-40:before {
    content: "\ea38"
}

.icon-money-coins:before {
    content: "\ea39"
}

.icon-notes:before {
    content: "\ea3a"
}

.icon-palette:before {
    content: "\ea3b"
}

.icon-paper:before {
    content: "\ea3c"
}

.icon-pencil:before {
    content: "\ea3d"
}

.icon-pin:before {
    content: "\ea3e"
}

.icon-planet:before {
    content: "\ea3f"
}

.icon-puzzle-10:before {
    content: "\ea40"
}

.icon-satisfied:before {
    content: "\ea41"
}

.icon-scissors:before {
    content: "\ea42"
}

.icon-send:before {
    content: "\ea43"
}

.icon-settings-gear-63:before {
    content: "\ea44"
}

.icon-settings:before {
    content: "\ea45"
}

.icon-simple-add:before {
    content: "\ea46"
}

.icon-simple-delete:before {
    content: "\ea47"
}

.icon-simple-remove:before {
    content: "\ea48"
}

.icon-single-02:before {
    content: "\ea49"
}

.icon-single-copy-04:before {
    content: "\ea4a"
}

.icon-sound-wave:before {
    content: "\ea4b"
}

.icon-spaceship:before {
    content: "\ea4c"
}

.icon-square-pin:before {
    content: "\ea4d"
}

.icon-support-17:before {
    content: "\ea4e"
}

.icon-tablet-2:before {
    content: "\ea4f"
}

.icon-tag:before {
    content: "\ea50"
}

.icon-tap-02:before {
    content: "\ea51"
}

.icon-tie-bow:before {
    content: "\ea52"
}

.icon-time-alarm:before {
    content: "\ea53"
}

.icon-trash-simple:before {
    content: "\ea54"
}

.icon-triangle-right-17:before {
    content: "\ea55"
}

.icon-trophy:before {
    content: "\ea56"
}

.icon-tv-2:before {
    content: "\ea57"
}

.icon-upload:before {
    content: "\ea58"
}

.icon-user-run:before {
    content: "\ea59"
}

.icon-vector:before {
    content: "\ea5a"
}

.icon-video-66:before {
    content: "\ea5b"
}

.icon-volume-98:before {
    content: "\ea5c"
}

.icon-wallet-43:before {
    content: "\ea5d"
}

.icon-watch-time:before {
    content: "\ea5e"
}

.icon-wifi:before {
    content: "\ea5f"
}

.icon-world:before {
    content: "\ea60"
}

.icon-zoom-split:before {
    content: "\ea61"
}

.icon-refresh-01:before {
    content: "\ea62"
}

.icon-refresh-02:before {
    content: "\ea63"
}

.icon-shape-star:before {
    content: "\ea64"
}

.icon-components:before {
    content: "\ea65"
}

/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
.fa {
    font-family: Font Awesome\ 6 Free;
    font-family: var(--fa-style-family,"Font Awesome 6 Free");
    font-weight: 900;
    font-weight: var(--fa-style,900)
}

.fa,.fa-brands,.fa-duotone,.fa-light,.fa-regular,.fa-solid,.fa-thin,.fab,.fad,.fal,.far,.fas,.fat {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-feature-settings: normal;
    display: inline-block;
    display: var(--fa-display,inline-block);
    font-style: normal;
    font-variant: normal;
    line-height: 1;
    text-rendering: auto
}

.fa-1x {
    font-size: 1em
}

.fa-2x {
    font-size: 2em
}

.fa-3x {
    font-size: 3em
}

.fa-4x {
    font-size: 4em
}

.fa-5x {
    font-size: 5em
}

.fa-6x {
    font-size: 6em
}

.fa-7x {
    font-size: 7em
}

.fa-8x {
    font-size: 8em
}

.fa-9x {
    font-size: 9em
}

.fa-10x {
    font-size: 10em
}

.fa-2xs {
    font-size: .625em;
    line-height: .1em;
    vertical-align: .225em
}

.fa-xs {
    font-size: .75em;
    line-height: .08333em;
    vertical-align: .125em
}

.fa-sm {
    font-size: .875em;
    line-height: .07143em;
    vertical-align: .05357em
}

.fa-lg {
    font-size: 1.25em;
    line-height: .05em;
    vertical-align: -.075em
}

.fa-xl {
    font-size: 1.5em;
    line-height: .04167em;
    vertical-align: -.125em
}

.fa-2xl {
    font-size: 2em;
    line-height: .03125em;
    vertical-align: -.1875em
}

.fa-fw {
    text-align: center;
    width: 1.25em
}

.fa-ul {
    list-style-type: none;
    margin-left: 2.5em;
    margin-left: var(--fa-li-margin,2.5em);
    padding-left: 0
}

.fa-ul>li {
    position: relative
}

.fa-li {
    left: -2em;
    left: calc(var(--fa-li-width, 2em)*-1);
    line-height: inherit;
    position: absolute;
    text-align: center;
    width: 2em;
    width: var(--fa-li-width,2em)
}

.fa-border {
    border: .08em solid #eee;
    border: var(--fa-border-width,.08em) var(--fa-border-style,solid) var(--fa-border-color,#eee);
    border-radius: .1em;
    border-radius: var(--fa-border-radius,.1em);
    padding: .2em .25em .15em;
    padding: var(--fa-border-padding,.2em .25em .15em)
}

.fa-pull-left {
    float: left;
    margin-right: .3em;
    margin-right: var(--fa-pull-margin,.3em)
}

.fa-pull-right {
    float: right;
    margin-left: .3em;
    margin-left: var(--fa-pull-margin,.3em)
}

.fa-beat {
    animation-delay: 0;
    animation-delay: var(--fa-animation-delay,0);
    animation-direction: normal;
    animation-direction: var(--fa-animation-direction,normal);
    animation-duration: 1s;
    animation-duration: var(--fa-animation-duration,1s);
    animation-iteration-count: infinite;
    animation-iteration-count: var(--fa-animation-iteration-count,infinite);
    animation-name: fa-beat;
    animation-timing-function: ease-in-out;
    animation-timing-function: var(--fa-animation-timing,ease-in-out)
}

.fa-bounce {
    animation-delay: 0;
    animation-delay: var(--fa-animation-delay,0);
    animation-direction: normal;
    animation-direction: var(--fa-animation-direction,normal);
    animation-duration: 1s;
    animation-duration: var(--fa-animation-duration,1s);
    animation-iteration-count: infinite;
    animation-iteration-count: var(--fa-animation-iteration-count,infinite);
    animation-name: fa-bounce;
    animation-timing-function: cubic-bezier(.28,.84,.42,1);
    animation-timing-function: var(--fa-animation-timing,cubic-bezier(.28,.84,.42,1))
}

.fa-fade {
    animation-iteration-count: infinite;
    animation-iteration-count: var(--fa-animation-iteration-count,infinite);
    animation-name: fa-fade;
    animation-timing-function: cubic-bezier(.4,0,.6,1);
    animation-timing-function: var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))
}

.fa-beat-fade,.fa-fade {
    animation-delay: 0;
    animation-delay: var(--fa-animation-delay,0);
    animation-direction: normal;
    animation-direction: var(--fa-animation-direction,normal);
    animation-duration: 1s;
    animation-duration: var(--fa-animation-duration,1s)
}

.fa-beat-fade {
    animation-iteration-count: infinite;
    animation-iteration-count: var(--fa-animation-iteration-count,infinite);
    animation-name: fa-beat-fade;
    animation-timing-function: cubic-bezier(.4,0,.6,1);
    animation-timing-function: var(--fa-animation-timing,cubic-bezier(.4,0,.6,1))
}

.fa-flip {
    animation-delay: 0;
    animation-delay: var(--fa-animation-delay,0);
    animation-direction: normal;
    animation-direction: var(--fa-animation-direction,normal);
    animation-duration: 1s;
    animation-duration: var(--fa-animation-duration,1s);
    animation-iteration-count: infinite;
    animation-iteration-count: var(--fa-animation-iteration-count,infinite);
    animation-name: fa-flip;
    animation-timing-function: ease-in-out;
    animation-timing-function: var(--fa-animation-timing,ease-in-out)
}

.fa-shake {
    animation-duration: 1s;
    animation-duration: var(--fa-animation-duration,1s);
    animation-iteration-count: infinite;
    animation-iteration-count: var(--fa-animation-iteration-count,infinite);
    animation-name: fa-shake;
    animation-timing-function: linear;
    animation-timing-function: var(--fa-animation-timing,linear)
}

.fa-shake,.fa-spin {
    animation-delay: 0;
    animation-delay: var(--fa-animation-delay,0);
    animation-direction: normal;
    animation-direction: var(--fa-animation-direction,normal)
}

.fa-spin {
    animation-duration: 2s;
    animation-duration: var(--fa-animation-duration,2s);
    animation-iteration-count: infinite;
    animation-iteration-count: var(--fa-animation-iteration-count,infinite);
    animation-name: fa-spin;
    animation-timing-function: linear;
    animation-timing-function: var(--fa-animation-timing,linear)
}

.fa-spin-reverse {
    --fa-animation-direction: reverse
}

.fa-pulse,.fa-spin-pulse {
    animation-direction: normal;
    animation-direction: var(--fa-animation-direction,normal);
    animation-duration: 1s;
    animation-duration: var(--fa-animation-duration,1s);
    animation-iteration-count: infinite;
    animation-iteration-count: var(--fa-animation-iteration-count,infinite);
    animation-name: fa-spin;
    animation-timing-function: steps(8);
    animation-timing-function: var(--fa-animation-timing,steps(8))
}

@media (prefers-reduced-motion:reduce) {
    .fa-beat,.fa-beat-fade,.fa-bounce,.fa-fade,.fa-flip,.fa-pulse,.fa-shake,.fa-spin,.fa-spin-pulse {
        animation-delay: -1ms;
        animation-duration: 1ms;
        animation-iteration-count: 1;
        transition-delay: 0s;
        transition-duration: 0s
    }
}

@keyframes fa-beat {
    0%,90% {
        transform: scale(1)
    }

    45% {
        transform: scale(1.25);
        transform: scale(var(--fa-beat-scale,1.25))
    }
}

@keyframes fa-bounce {
    0% {
        transform: scale(1) translateY(0)
    }

    10% {
        transform: scale(1.1,.9) translateY(0);
        transform: scale(var(--fa-bounce-start-scale-x,1.1),var(--fa-bounce-start-scale-y,.9)) translateY(0)
    }

    30% {
        transform: scale(.9,1.1) translateY(-.5em);
        transform: scale(var(--fa-bounce-jump-scale-x,.9),var(--fa-bounce-jump-scale-y,1.1)) translateY(var(--fa-bounce-height,-.5em))
    }

    50% {
        transform: scale(1.05,.95) translateY(0);
        transform: scale(var(--fa-bounce-land-scale-x,1.05),var(--fa-bounce-land-scale-y,.95)) translateY(0)
    }

    57% {
        transform: scale(1) translateY(-.125em);
        transform: scale(1) translateY(var(--fa-bounce-rebound,-.125em))
    }

    64% {
        transform: scale(1) translateY(0)
    }

    to {
        transform: scale(1) translateY(0)
    }
}

@keyframes fa-fade {
    50% {
        opacity: .4;
        opacity: var(--fa-fade-opacity,.4)
    }
}

@keyframes fa-beat-fade {
    0%,to {
        opacity: .4;
        opacity: var(--fa-beat-fade-opacity,.4);
        transform: scale(1)
    }

    50% {
        opacity: 1;
        transform: scale(1.125);
        transform: scale(var(--fa-beat-fade-scale,1.125))
    }
}

@keyframes fa-flip {
    50% {
        transform: rotateY(-180deg);
        transform: rotate3d(var(--fa-flip-x,0),var(--fa-flip-y,1),var(--fa-flip-z,0),var(--fa-flip-angle,-180deg))
    }
}

@keyframes fa-shake {
    0% {
        transform: rotate(-15deg)
    }

    4% {
        transform: rotate(15deg)
    }

    24%,8% {
        transform: rotate(-18deg)
    }

    12%,28% {
        transform: rotate(18deg)
    }

    16% {
        transform: rotate(-22deg)
    }

    20% {
        transform: rotate(22deg)
    }

    32% {
        transform: rotate(-12deg)
    }

    36% {
        transform: rotate(12deg)
    }

    40%,to {
        transform: rotate(0deg)
    }
}

@keyframes fa-spin {
    0% {
        transform: rotate(0deg)
    }

    to {
        transform: rotate(1turn)
    }
}

.fa-rotate-90 {
    transform: rotate(90deg)
}

.fa-rotate-180 {
    transform: rotate(180deg)
}

.fa-rotate-270 {
    transform: rotate(270deg)
}

.fa-flip-horizontal {
    transform: scaleX(-1)
}

.fa-flip-vertical {
    transform: scaleY(-1)
}

.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical {
    transform: scale(-1)
}

.fa-rotate-by {
    transform: rotate(none);
    transform: rotate(var(--fa-rotate-angle,none))
}

.fa-stack {
    display: inline-block;
    height: 2em;
    line-height: 2em;
    position: relative;
    vertical-align: middle;
    width: 2.5em
}

.fa-stack-1x,.fa-stack-2x {
    left: 0;
    position: absolute;
    text-align: center;
    width: 100%;
    z-index: auto;
    z-index: var(--fa-stack-z-index,auto)
}

.fa-stack-1x {
    line-height: inherit
}

.fa-stack-2x {
    font-size: 2em
}

.fa-inverse {
    color: #fff;
    color: var(--fa-inverse,#fff)
}

.fa-0:before {
    content: "\30"
}

.fa-1:before {
    content: "\31"
}

.fa-2:before {
    content: "\32"
}

.fa-3:before {
    content: "\33"
}

.fa-4:before {
    content: "\34"
}

.fa-5:before {
    content: "\35"
}

.fa-6:before {
    content: "\36"
}

.fa-7:before {
    content: "\37"
}

.fa-8:before {
    content: "\38"
}

.fa-9:before {
    content: "\39"
}

.fa-a:before {
    content: "\41"
}

.fa-address-book:before,.fa-contact-book:before {
    content: "\f2b9"
}

.fa-address-card:before,.fa-contact-card:before,.fa-vcard:before {
    content: "\f2bb"
}

.fa-align-center:before {
    content: "\f037"
}

.fa-align-justify:before {
    content: "\f039"
}

.fa-align-left:before {
    content: "\f036"
}

.fa-align-right:before {
    content: "\f038"
}

.fa-anchor:before {
    content: "\f13d"
}

.fa-anchor-circle-check:before {
    content: "\e4aa"
}

.fa-anchor-circle-exclamation:before {
    content: "\e4ab"
}

.fa-anchor-circle-xmark:before {
    content: "\e4ac"
}

.fa-anchor-lock:before {
    content: "\e4ad"
}

.fa-angle-down:before {
    content: "\f107"
}

.fa-angle-left:before {
    content: "\f104"
}

.fa-angle-right:before {
    content: "\f105"
}

.fa-angle-up:before {
    content: "\f106"
}

.fa-angle-double-down:before,.fa-angles-down:before {
    content: "\f103"
}

.fa-angle-double-left:before,.fa-angles-left:before {
    content: "\f100"
}

.fa-angle-double-right:before,.fa-angles-right:before {
    content: "\f101"
}

.fa-angle-double-up:before,.fa-angles-up:before {
    content: "\f102"
}

.fa-ankh:before {
    content: "\f644"
}

.fa-apple-alt:before,.fa-apple-whole:before {
    content: "\f5d1"
}

.fa-archway:before {
    content: "\f557"
}

.fa-arrow-down:before {
    content: "\f063"
}

.fa-arrow-down-1-9:before,.fa-sort-numeric-asc:before,.fa-sort-numeric-down:before {
    content: "\f162"
}

.fa-arrow-down-9-1:before,.fa-sort-numeric-desc:before,.fa-sort-numeric-down-alt:before {
    content: "\f886"
}

.fa-arrow-down-a-z:before,.fa-sort-alpha-asc:before,.fa-sort-alpha-down:before {
    content: "\f15d"
}

.fa-arrow-down-long:before,.fa-long-arrow-down:before {
    content: "\f175"
}

.fa-arrow-down-short-wide:before,.fa-sort-amount-desc:before,.fa-sort-amount-down-alt:before {
    content: "\f884"
}

.fa-arrow-down-up-across-line:before {
    content: "\e4af"
}

.fa-arrow-down-up-lock:before {
    content: "\e4b0"
}

.fa-arrow-down-wide-short:before,.fa-sort-amount-asc:before,.fa-sort-amount-down:before {
    content: "\f160"
}

.fa-arrow-down-z-a:before,.fa-sort-alpha-desc:before,.fa-sort-alpha-down-alt:before {
    content: "\f881"
}

.fa-arrow-left:before {
    content: "\f060"
}

.fa-arrow-left-long:before,.fa-long-arrow-left:before {
    content: "\f177"
}

.fa-arrow-pointer:before,.fa-mouse-pointer:before {
    content: "\f245"
}

.fa-arrow-right:before {
    content: "\f061"
}

.fa-arrow-right-arrow-left:before,.fa-exchange:before {
    content: "\f0ec"
}

.fa-arrow-right-from-bracket:before,.fa-sign-out:before {
    content: "\f08b"
}

.fa-arrow-right-long:before,.fa-long-arrow-right:before {
    content: "\f178"
}

.fa-arrow-right-to-bracket:before,.fa-sign-in:before {
    content: "\f090"
}

.fa-arrow-right-to-city:before {
    content: "\e4b3"
}

.fa-arrow-left-rotate:before,.fa-arrow-rotate-back:before,.fa-arrow-rotate-backward:before,.fa-arrow-rotate-left:before,.fa-undo:before {
    content: "\f0e2"
}

.fa-arrow-right-rotate:before,.fa-arrow-rotate-forward:before,.fa-arrow-rotate-right:before,.fa-redo:before {
    content: "\f01e"
}

.fa-arrow-trend-down:before {
    content: "\e097"
}

.fa-arrow-trend-up:before {
    content: "\e098"
}

.fa-arrow-turn-down:before,.fa-level-down:before {
    content: "\f149"
}

.fa-arrow-turn-up:before,.fa-level-up:before {
    content: "\f148"
}

.fa-arrow-up:before {
    content: "\f062"
}

.fa-arrow-up-1-9:before,.fa-sort-numeric-up:before {
    content: "\f163"
}

.fa-arrow-up-9-1:before,.fa-sort-numeric-up-alt:before {
    content: "\f887"
}

.fa-arrow-up-a-z:before,.fa-sort-alpha-up:before {
    content: "\f15e"
}

.fa-arrow-up-from-bracket:before {
    content: "\e09a"
}

.fa-arrow-up-from-ground-water:before {
    content: "\e4b5"
}

.fa-arrow-up-from-water-pump:before {
    content: "\e4b6"
}

.fa-arrow-up-long:before,.fa-long-arrow-up:before {
    content: "\f176"
}

.fa-arrow-up-right-dots:before {
    content: "\e4b7"
}

.fa-arrow-up-right-from-square:before,.fa-external-link:before {
    content: "\f08e"
}

.fa-arrow-up-short-wide:before,.fa-sort-amount-up-alt:before {
    content: "\f885"
}

.fa-arrow-up-wide-short:before,.fa-sort-amount-up:before {
    content: "\f161"
}

.fa-arrow-up-z-a:before,.fa-sort-alpha-up-alt:before {
    content: "\f882"
}

.fa-arrows-down-to-line:before {
    content: "\e4b8"
}

.fa-arrows-down-to-people:before {
    content: "\e4b9"
}

.fa-arrows-h:before,.fa-arrows-left-right:before {
    content: "\f07e"
}

.fa-arrows-left-right-to-line:before {
    content: "\e4ba"
}

.fa-arrows-rotate:before,.fa-refresh:before,.fa-sync:before {
    content: "\f021"
}

.fa-arrows-spin:before {
    content: "\e4bb"
}

.fa-arrows-split-up-and-left:before {
    content: "\e4bc"
}

.fa-arrows-to-circle:before {
    content: "\e4bd"
}

.fa-arrows-to-dot:before {
    content: "\e4be"
}

.fa-arrows-to-eye:before {
    content: "\e4bf"
}

.fa-arrows-turn-right:before {
    content: "\e4c0"
}

.fa-arrows-turn-to-dots:before {
    content: "\e4c1"
}

.fa-arrows-up-down:before,.fa-arrows-v:before {
    content: "\f07d"
}

.fa-arrows-up-down-left-right:before,.fa-arrows:before {
    content: "\f047"
}

.fa-arrows-up-to-line:before {
    content: "\e4c2"
}

.fa-asterisk:before {
    content: "\2a"
}

.fa-at:before {
    content: "\40"
}

.fa-atom:before {
    content: "\f5d2"
}

.fa-audio-description:before {
    content: "\f29e"
}

.fa-austral-sign:before {
    content: "\e0a9"
}

.fa-award:before {
    content: "\f559"
}

.fa-b:before {
    content: "\42"
}

.fa-baby:before {
    content: "\f77c"
}

.fa-baby-carriage:before,.fa-carriage-baby:before {
    content: "\f77d"
}

.fa-backward:before {
    content: "\f04a"
}

.fa-backward-fast:before,.fa-fast-backward:before {
    content: "\f049"
}

.fa-backward-step:before,.fa-step-backward:before {
    content: "\f048"
}

.fa-bacon:before {
    content: "\f7e5"
}

.fa-bacteria:before {
    content: "\e059"
}

.fa-bacterium:before {
    content: "\e05a"
}

.fa-bag-shopping:before,.fa-shopping-bag:before {
    content: "\f290"
}

.fa-bahai:before {
    content: "\f666"
}

.fa-baht-sign:before {
    content: "\e0ac"
}

.fa-ban:before,.fa-cancel:before {
    content: "\f05e"
}

.fa-ban-smoking:before,.fa-smoking-ban:before {
    content: "\f54d"
}

.fa-band-aid:before,.fa-bandage:before {
    content: "\f462"
}

.fa-barcode:before {
    content: "\f02a"
}

.fa-bars:before,.fa-navicon:before {
    content: "\f0c9"
}

.fa-bars-progress:before,.fa-tasks-alt:before {
    content: "\f828"
}

.fa-bars-staggered:before,.fa-reorder:before,.fa-stream:before {
    content: "\f550"
}

.fa-baseball-ball:before,.fa-baseball:before {
    content: "\f433"
}

.fa-baseball-bat-ball:before {
    content: "\f432"
}

.fa-basket-shopping:before,.fa-shopping-basket:before {
    content: "\f291"
}

.fa-basketball-ball:before,.fa-basketball:before {
    content: "\f434"
}

.fa-bath:before,.fa-bathtub:before {
    content: "\f2cd"
}

.fa-battery-0:before,.fa-battery-empty:before {
    content: "\f244"
}

.fa-battery-5:before,.fa-battery-full:before,.fa-battery:before {
    content: "\f240"
}

.fa-battery-3:before,.fa-battery-half:before {
    content: "\f242"
}

.fa-battery-2:before,.fa-battery-quarter:before {
    content: "\f243"
}

.fa-battery-4:before,.fa-battery-three-quarters:before {
    content: "\f241"
}

.fa-bed:before {
    content: "\f236"
}

.fa-bed-pulse:before,.fa-procedures:before {
    content: "\f487"
}

.fa-beer-mug-empty:before,.fa-beer:before {
    content: "\f0fc"
}

.fa-bell:before {
    content: "\f0f3"
}

.fa-bell-concierge:before,.fa-concierge-bell:before {
    content: "\f562"
}

.fa-bell-slash:before {
    content: "\f1f6"
}

.fa-bezier-curve:before {
    content: "\f55b"
}

.fa-bicycle:before {
    content: "\f206"
}

.fa-binoculars:before {
    content: "\f1e5"
}

.fa-biohazard:before {
    content: "\f780"
}

.fa-bitcoin-sign:before {
    content: "\e0b4"
}

.fa-blender:before {
    content: "\f517"
}

.fa-blender-phone:before {
    content: "\f6b6"
}

.fa-blog:before {
    content: "\f781"
}

.fa-bold:before {
    content: "\f032"
}

.fa-bolt:before,.fa-zap:before {
    content: "\f0e7"
}

.fa-bolt-lightning:before {
    content: "\e0b7"
}

.fa-bomb:before {
    content: "\f1e2"
}

.fa-bone:before {
    content: "\f5d7"
}

.fa-bong:before {
    content: "\f55c"
}

.fa-book:before {
    content: "\f02d"
}

.fa-atlas:before,.fa-book-atlas:before {
    content: "\f558"
}

.fa-bible:before,.fa-book-bible:before {
    content: "\f647"
}

.fa-book-bookmark:before {
    content: "\e0bb"
}

.fa-book-journal-whills:before,.fa-journal-whills:before {
    content: "\f66a"
}

.fa-book-medical:before {
    content: "\f7e6"
}

.fa-book-open:before {
    content: "\f518"
}

.fa-book-open-reader:before,.fa-book-reader:before {
    content: "\f5da"
}

.fa-book-quran:before,.fa-quran:before {
    content: "\f687"
}

.fa-book-dead:before,.fa-book-skull:before {
    content: "\f6b7"
}

.fa-bookmark:before {
    content: "\f02e"
}

.fa-border-all:before {
    content: "\f84c"
}

.fa-border-none:before {
    content: "\f850"
}

.fa-border-style:before,.fa-border-top-left:before {
    content: "\f853"
}

.fa-bore-hole:before {
    content: "\e4c3"
}

.fa-bottle-droplet:before {
    content: "\e4c4"
}

.fa-bottle-water:before {
    content: "\e4c5"
}

.fa-bowl-food:before {
    content: "\e4c6"
}

.fa-bowl-rice:before {
    content: "\e2eb"
}

.fa-bowling-ball:before {
    content: "\f436"
}

.fa-box:before {
    content: "\f466"
}

.fa-archive:before,.fa-box-archive:before {
    content: "\f187"
}

.fa-box-open:before {
    content: "\f49e"
}

.fa-box-tissue:before {
    content: "\e05b"
}

.fa-boxes-packing:before {
    content: "\e4c7"
}

.fa-boxes-alt:before,.fa-boxes-stacked:before,.fa-boxes:before {
    content: "\f468"
}

.fa-braille:before {
    content: "\f2a1"
}

.fa-brain:before {
    content: "\f5dc"
}

.fa-brazilian-real-sign:before {
    content: "\e46c"
}

.fa-bread-slice:before {
    content: "\f7ec"
}

.fa-bridge:before {
    content: "\e4c8"
}

.fa-bridge-circle-check:before {
    content: "\e4c9"
}

.fa-bridge-circle-exclamation:before {
    content: "\e4ca"
}

.fa-bridge-circle-xmark:before {
    content: "\e4cb"
}

.fa-bridge-lock:before {
    content: "\e4cc"
}

.fa-bridge-water:before {
    content: "\e4ce"
}

.fa-briefcase:before {
    content: "\f0b1"
}

.fa-briefcase-medical:before {
    content: "\f469"
}

.fa-broom:before {
    content: "\f51a"
}

.fa-broom-ball:before,.fa-quidditch-broom-ball:before,.fa-quidditch:before {
    content: "\f458"
}

.fa-brush:before {
    content: "\f55d"
}

.fa-bucket:before {
    content: "\e4cf"
}

.fa-bug:before {
    content: "\f188"
}

.fa-bug-slash:before {
    content: "\e490"
}

.fa-bugs:before {
    content: "\e4d0"
}

.fa-building:before {
    content: "\f1ad"
}

.fa-building-circle-arrow-right:before {
    content: "\e4d1"
}

.fa-building-circle-check:before {
    content: "\e4d2"
}

.fa-building-circle-exclamation:before {
    content: "\e4d3"
}

.fa-building-circle-xmark:before {
    content: "\e4d4"
}

.fa-bank:before,.fa-building-columns:before,.fa-institution:before,.fa-museum:before,.fa-university:before {
    content: "\f19c"
}

.fa-building-flag:before {
    content: "\e4d5"
}

.fa-building-lock:before {
    content: "\e4d6"
}

.fa-building-ngo:before {
    content: "\e4d7"
}

.fa-building-shield:before {
    content: "\e4d8"
}

.fa-building-un:before {
    content: "\e4d9"
}

.fa-building-user:before {
    content: "\e4da"
}

.fa-building-wheat:before {
    content: "\e4db"
}

.fa-bullhorn:before {
    content: "\f0a1"
}

.fa-bullseye:before {
    content: "\f140"
}

.fa-burger:before,.fa-hamburger:before {
    content: "\f805"
}

.fa-burst:before {
    content: "\e4dc"
}

.fa-bus:before {
    content: "\f207"
}

.fa-bus-alt:before,.fa-bus-simple:before {
    content: "\f55e"
}

.fa-briefcase-clock:before,.fa-business-time:before {
    content: "\f64a"
}

.fa-c:before {
    content: "\43"
}

.fa-birthday-cake:before,.fa-cake-candles:before,.fa-cake:before {
    content: "\f1fd"
}

.fa-calculator:before {
    content: "\f1ec"
}

.fa-calendar:before {
    content: "\f133"
}

.fa-calendar-check:before {
    content: "\f274"
}

.fa-calendar-day:before {
    content: "\f783"
}

.fa-calendar-alt:before,.fa-calendar-days:before {
    content: "\f073"
}

.fa-calendar-minus:before {
    content: "\f272"
}

.fa-calendar-plus:before {
    content: "\f271"
}

.fa-calendar-week:before {
    content: "\f784"
}

.fa-calendar-times:before,.fa-calendar-xmark:before {
    content: "\f273"
}

.fa-camera-alt:before,.fa-camera:before {
    content: "\f030"
}

.fa-camera-retro:before {
    content: "\f083"
}

.fa-camera-rotate:before {
    content: "\e0d8"
}

.fa-campground:before {
    content: "\f6bb"
}

.fa-candy-cane:before {
    content: "\f786"
}

.fa-cannabis:before {
    content: "\f55f"
}

.fa-capsules:before {
    content: "\f46b"
}

.fa-automobile:before,.fa-car:before {
    content: "\f1b9"
}

.fa-battery-car:before,.fa-car-battery:before {
    content: "\f5df"
}

.fa-car-burst:before,.fa-car-crash:before {
    content: "\f5e1"
}

.fa-car-on:before {
    content: "\e4dd"
}

.fa-car-alt:before,.fa-car-rear:before {
    content: "\f5de"
}

.fa-car-side:before {
    content: "\f5e4"
}

.fa-car-tunnel:before {
    content: "\e4de"
}

.fa-caravan:before {
    content: "\f8ff"
}

.fa-caret-down:before {
    content: "\f0d7"
}

.fa-caret-left:before {
    content: "\f0d9"
}

.fa-caret-right:before {
    content: "\f0da"
}

.fa-caret-up:before {
    content: "\f0d8"
}

.fa-carrot:before {
    content: "\f787"
}

.fa-cart-arrow-down:before {
    content: "\f218"
}

.fa-cart-flatbed:before,.fa-dolly-flatbed:before {
    content: "\f474"
}

.fa-cart-flatbed-suitcase:before,.fa-luggage-cart:before {
    content: "\f59d"
}

.fa-cart-plus:before {
    content: "\f217"
}

.fa-cart-shopping:before,.fa-shopping-cart:before {
    content: "\f07a"
}

.fa-cash-register:before {
    content: "\f788"
}

.fa-cat:before {
    content: "\f6be"
}

.fa-cedi-sign:before {
    content: "\e0df"
}

.fa-cent-sign:before {
    content: "\e3f5"
}

.fa-certificate:before {
    content: "\f0a3"
}

.fa-chair:before {
    content: "\f6c0"
}

.fa-blackboard:before,.fa-chalkboard:before {
    content: "\f51b"
}

.fa-chalkboard-teacher:before,.fa-chalkboard-user:before {
    content: "\f51c"
}

.fa-champagne-glasses:before,.fa-glass-cheers:before {
    content: "\f79f"
}

.fa-charging-station:before {
    content: "\f5e7"
}

.fa-area-chart:before,.fa-chart-area:before {
    content: "\f1fe"
}

.fa-bar-chart:before,.fa-chart-bar:before {
    content: "\f080"
}

.fa-chart-column:before {
    content: "\e0e3"
}

.fa-chart-gantt:before {
    content: "\e0e4"
}

.fa-chart-line:before,.fa-line-chart:before {
    content: "\f201"
}

.fa-chart-pie:before,.fa-pie-chart:before {
    content: "\f200"
}

.fa-chart-simple:before {
    content: "\e473"
}

.fa-check:before {
    content: "\f00c"
}

.fa-check-double:before {
    content: "\f560"
}

.fa-check-to-slot:before,.fa-vote-yea:before {
    content: "\f772"
}

.fa-cheese:before {
    content: "\f7ef"
}

.fa-chess:before {
    content: "\f439"
}

.fa-chess-bishop:before {
    content: "\f43a"
}

.fa-chess-board:before {
    content: "\f43c"
}

.fa-chess-king:before {
    content: "\f43f"
}

.fa-chess-knight:before {
    content: "\f441"
}

.fa-chess-pawn:before {
    content: "\f443"
}

.fa-chess-queen:before {
    content: "\f445"
}

.fa-chess-rook:before {
    content: "\f447"
}

.fa-chevron-down:before {
    content: "\f078"
}

.fa-chevron-left:before {
    content: "\f053"
}

.fa-chevron-right:before {
    content: "\f054"
}

.fa-chevron-up:before {
    content: "\f077"
}

.fa-child:before {
    content: "\f1ae"
}

.fa-child-dress:before {
    content: "\e59c"
}

.fa-child-reaching:before {
    content: "\e59d"
}

.fa-child-rifle:before {
    content: "\e4e0"
}

.fa-children:before {
    content: "\e4e1"
}

.fa-church:before {
    content: "\f51d"
}

.fa-circle:before {
    content: "\f111"
}

.fa-arrow-circle-down:before,.fa-circle-arrow-down:before {
    content: "\f0ab"
}

.fa-arrow-circle-left:before,.fa-circle-arrow-left:before {
    content: "\f0a8"
}

.fa-arrow-circle-right:before,.fa-circle-arrow-right:before {
    content: "\f0a9"
}

.fa-arrow-circle-up:before,.fa-circle-arrow-up:before {
    content: "\f0aa"
}

.fa-check-circle:before,.fa-circle-check:before {
    content: "\f058"
}

.fa-chevron-circle-down:before,.fa-circle-chevron-down:before {
    content: "\f13a"
}

.fa-chevron-circle-left:before,.fa-circle-chevron-left:before {
    content: "\f137"
}

.fa-chevron-circle-right:before,.fa-circle-chevron-right:before {
    content: "\f138"
}

.fa-chevron-circle-up:before,.fa-circle-chevron-up:before {
    content: "\f139"
}

.fa-circle-dollar-to-slot:before,.fa-donate:before {
    content: "\f4b9"
}

.fa-circle-dot:before,.fa-dot-circle:before {
    content: "\f192"
}

.fa-arrow-alt-circle-down:before,.fa-circle-down:before {
    content: "\f358"
}

.fa-circle-exclamation:before,.fa-exclamation-circle:before {
    content: "\f06a"
}

.fa-circle-h:before,.fa-hospital-symbol:before {
    content: "\f47e"
}

.fa-adjust:before,.fa-circle-half-stroke:before {
    content: "\f042"
}

.fa-circle-info:before,.fa-info-circle:before {
    content: "\f05a"
}

.fa-arrow-alt-circle-left:before,.fa-circle-left:before {
    content: "\f359"
}

.fa-circle-minus:before,.fa-minus-circle:before {
    content: "\f056"
}

.fa-circle-nodes:before {
    content: "\e4e2"
}

.fa-circle-notch:before {
    content: "\f1ce"
}

.fa-circle-pause:before,.fa-pause-circle:before {
    content: "\f28b"
}

.fa-circle-play:before,.fa-play-circle:before {
    content: "\f144"
}

.fa-circle-plus:before,.fa-plus-circle:before {
    content: "\f055"
}

.fa-circle-question:before,.fa-question-circle:before {
    content: "\f059"
}

.fa-circle-radiation:before,.fa-radiation-alt:before {
    content: "\f7ba"
}

.fa-arrow-alt-circle-right:before,.fa-circle-right:before {
    content: "\f35a"
}

.fa-circle-stop:before,.fa-stop-circle:before {
    content: "\f28d"
}

.fa-arrow-alt-circle-up:before,.fa-circle-up:before {
    content: "\f35b"
}

.fa-circle-user:before,.fa-user-circle:before {
    content: "\f2bd"
}

.fa-circle-xmark:before,.fa-times-circle:before,.fa-xmark-circle:before {
    content: "\f057"
}

.fa-city:before {
    content: "\f64f"
}

.fa-clapperboard:before {
    content: "\e131"
}

.fa-clipboard:before {
    content: "\f328"
}

.fa-clipboard-check:before {
    content: "\f46c"
}

.fa-clipboard-list:before {
    content: "\f46d"
}

.fa-clipboard-question:before {
    content: "\e4e3"
}

.fa-clipboard-user:before {
    content: "\f7f3"
}

.fa-clock-four:before,.fa-clock:before {
    content: "\f017"
}

.fa-clock-rotate-left:before,.fa-history:before {
    content: "\f1da"
}

.fa-clone:before {
    content: "\f24d"
}

.fa-closed-captioning:before {
    content: "\f20a"
}

.fa-cloud:before {
    content: "\f0c2"
}

.fa-cloud-arrow-down:before,.fa-cloud-download-alt:before,.fa-cloud-download:before {
    content: "\f0ed"
}

.fa-cloud-arrow-up:before,.fa-cloud-upload-alt:before,.fa-cloud-upload:before {
    content: "\f0ee"
}

.fa-cloud-bolt:before,.fa-thunderstorm:before {
    content: "\f76c"
}

.fa-cloud-meatball:before {
    content: "\f73b"
}

.fa-cloud-moon:before {
    content: "\f6c3"
}

.fa-cloud-moon-rain:before {
    content: "\f73c"
}

.fa-cloud-rain:before {
    content: "\f73d"
}

.fa-cloud-showers-heavy:before {
    content: "\f740"
}

.fa-cloud-showers-water:before {
    content: "\e4e4"
}

.fa-cloud-sun:before {
    content: "\f6c4"
}

.fa-cloud-sun-rain:before {
    content: "\f743"
}

.fa-clover:before {
    content: "\e139"
}

.fa-code:before {
    content: "\f121"
}

.fa-code-branch:before {
    content: "\f126"
}

.fa-code-commit:before {
    content: "\f386"
}

.fa-code-compare:before {
    content: "\e13a"
}

.fa-code-fork:before {
    content: "\e13b"
}

.fa-code-merge:before {
    content: "\f387"
}

.fa-code-pull-request:before {
    content: "\e13c"
}

.fa-coins:before {
    content: "\f51e"
}

.fa-colon-sign:before {
    content: "\e140"
}

.fa-comment:before {
    content: "\f075"
}

.fa-comment-dollar:before {
    content: "\f651"
}

.fa-comment-dots:before,.fa-commenting:before {
    content: "\f4ad"
}

.fa-comment-medical:before {
    content: "\f7f5"
}

.fa-comment-slash:before {
    content: "\f4b3"
}

.fa-comment-sms:before,.fa-sms:before {
    content: "\f7cd"
}

.fa-comments:before {
    content: "\f086"
}

.fa-comments-dollar:before {
    content: "\f653"
}

.fa-compact-disc:before {
    content: "\f51f"
}

.fa-compass:before {
    content: "\f14e"
}

.fa-compass-drafting:before,.fa-drafting-compass:before {
    content: "\f568"
}

.fa-compress:before {
    content: "\f066"
}

.fa-computer:before {
    content: "\e4e5"
}

.fa-computer-mouse:before,.fa-mouse:before {
    content: "\f8cc"
}

.fa-cookie:before {
    content: "\f563"
}

.fa-cookie-bite:before {
    content: "\f564"
}

.fa-copy:before {
    content: "\f0c5"
}

.fa-copyright:before {
    content: "\f1f9"
}

.fa-couch:before {
    content: "\f4b8"
}

.fa-cow:before {
    content: "\f6c8"
}

.fa-credit-card-alt:before,.fa-credit-card:before {
    content: "\f09d"
}

.fa-crop:before {
    content: "\f125"
}

.fa-crop-alt:before,.fa-crop-simple:before {
    content: "\f565"
}

.fa-cross:before {
    content: "\f654"
}

.fa-crosshairs:before {
    content: "\f05b"
}

.fa-crow:before {
    content: "\f520"
}

.fa-crown:before {
    content: "\f521"
}

.fa-crutch:before {
    content: "\f7f7"
}

.fa-cruzeiro-sign:before {
    content: "\e152"
}

.fa-cube:before {
    content: "\f1b2"
}

.fa-cubes:before {
    content: "\f1b3"
}

.fa-cubes-stacked:before {
    content: "\e4e6"
}

.fa-d:before {
    content: "\44"
}

.fa-database:before {
    content: "\f1c0"
}

.fa-backspace:before,.fa-delete-left:before {
    content: "\f55a"
}

.fa-democrat:before {
    content: "\f747"
}

.fa-desktop-alt:before,.fa-desktop:before {
    content: "\f390"
}

.fa-dharmachakra:before {
    content: "\f655"
}

.fa-diagram-next:before {
    content: "\e476"
}

.fa-diagram-predecessor:before {
    content: "\e477"
}

.fa-diagram-project:before,.fa-project-diagram:before {
    content: "\f542"
}

.fa-diagram-successor:before {
    content: "\e47a"
}

.fa-diamond:before {
    content: "\f219"
}

.fa-diamond-turn-right:before,.fa-directions:before {
    content: "\f5eb"
}

.fa-dice:before {
    content: "\f522"
}

.fa-dice-d20:before {
    content: "\f6cf"
}

.fa-dice-d6:before {
    content: "\f6d1"
}

.fa-dice-five:before {
    content: "\f523"
}

.fa-dice-four:before {
    content: "\f524"
}

.fa-dice-one:before {
    content: "\f525"
}

.fa-dice-six:before {
    content: "\f526"
}

.fa-dice-three:before {
    content: "\f527"
}

.fa-dice-two:before {
    content: "\f528"
}

.fa-disease:before {
    content: "\f7fa"
}

.fa-display:before {
    content: "\e163"
}

.fa-divide:before {
    content: "\f529"
}

.fa-dna:before {
    content: "\f471"
}

.fa-dog:before {
    content: "\f6d3"
}

.fa-dollar-sign:before,.fa-dollar:before,.fa-usd:before {
    content: "\24"
}

.fa-dolly-box:before,.fa-dolly:before {
    content: "\f472"
}

.fa-dong-sign:before {
    content: "\e169"
}

.fa-door-closed:before {
    content: "\f52a"
}

.fa-door-open:before {
    content: "\f52b"
}

.fa-dove:before {
    content: "\f4ba"
}

.fa-compress-alt:before,.fa-down-left-and-up-right-to-center:before {
    content: "\f422"
}

.fa-down-long:before,.fa-long-arrow-alt-down:before {
    content: "\f309"
}

.fa-download:before {
    content: "\f019"
}

.fa-dragon:before {
    content: "\f6d5"
}

.fa-draw-polygon:before {
    content: "\f5ee"
}

.fa-droplet:before,.fa-tint:before {
    content: "\f043"
}

.fa-droplet-slash:before,.fa-tint-slash:before {
    content: "\f5c7"
}

.fa-drum:before {
    content: "\f569"
}

.fa-drum-steelpan:before {
    content: "\f56a"
}

.fa-drumstick-bite:before {
    content: "\f6d7"
}

.fa-dumbbell:before {
    content: "\f44b"
}

.fa-dumpster:before {
    content: "\f793"
}

.fa-dumpster-fire:before {
    content: "\f794"
}

.fa-dungeon:before {
    content: "\f6d9"
}

.fa-e:before {
    content: "\45"
}

.fa-deaf:before,.fa-deafness:before,.fa-ear-deaf:before,.fa-hard-of-hearing:before {
    content: "\f2a4"
}

.fa-assistive-listening-systems:before,.fa-ear-listen:before {
    content: "\f2a2"
}

.fa-earth-africa:before,.fa-globe-africa:before {
    content: "\f57c"
}

.fa-earth-america:before,.fa-earth-americas:before,.fa-earth:before,.fa-globe-americas:before {
    content: "\f57d"
}

.fa-earth-asia:before,.fa-globe-asia:before {
    content: "\f57e"
}

.fa-earth-europe:before,.fa-globe-europe:before {
    content: "\f7a2"
}

.fa-earth-oceania:before,.fa-globe-oceania:before {
    content: "\e47b"
}

.fa-egg:before {
    content: "\f7fb"
}

.fa-eject:before {
    content: "\f052"
}

.fa-elevator:before {
    content: "\e16d"
}

.fa-ellipsis-h:before,.fa-ellipsis:before {
    content: "\f141"
}

.fa-ellipsis-v:before,.fa-ellipsis-vertical:before {
    content: "\f142"
}

.fa-envelope:before {
    content: "\f0e0"
}

.fa-envelope-circle-check:before {
    content: "\e4e8"
}

.fa-envelope-open:before {
    content: "\f2b6"
}

.fa-envelope-open-text:before {
    content: "\f658"
}

.fa-envelopes-bulk:before,.fa-mail-bulk:before {
    content: "\f674"
}

.fa-equals:before {
    content: "\3d"
}

.fa-eraser:before {
    content: "\f12d"
}

.fa-ethernet:before {
    content: "\f796"
}

.fa-eur:before,.fa-euro-sign:before,.fa-euro:before {
    content: "\f153"
}

.fa-exclamation:before {
    content: "\21"
}

.fa-expand:before {
    content: "\f065"
}

.fa-explosion:before {
    content: "\e4e9"
}

.fa-eye:before {
    content: "\f06e"
}

.fa-eye-dropper-empty:before,.fa-eye-dropper:before,.fa-eyedropper:before {
    content: "\f1fb"
}

.fa-eye-low-vision:before,.fa-low-vision:before {
    content: "\f2a8"
}

.fa-eye-slash:before {
    content: "\f070"
}

.fa-f:before {
    content: "\46"
}

.fa-angry:before,.fa-face-angry:before {
    content: "\f556"
}

.fa-dizzy:before,.fa-face-dizzy:before {
    content: "\f567"
}

.fa-face-flushed:before,.fa-flushed:before {
    content: "\f579"
}

.fa-face-frown:before,.fa-frown:before {
    content: "\f119"
}

.fa-face-frown-open:before,.fa-frown-open:before {
    content: "\f57a"
}

.fa-face-grimace:before,.fa-grimace:before {
    content: "\f57f"
}

.fa-face-grin:before,.fa-grin:before {
    content: "\f580"
}

.fa-face-grin-beam:before,.fa-grin-beam:before {
    content: "\f582"
}

.fa-face-grin-beam-sweat:before,.fa-grin-beam-sweat:before {
    content: "\f583"
}

.fa-face-grin-hearts:before,.fa-grin-hearts:before {
    content: "\f584"
}

.fa-face-grin-squint:before,.fa-grin-squint:before {
    content: "\f585"
}

.fa-face-grin-squint-tears:before,.fa-grin-squint-tears:before {
    content: "\f586"
}

.fa-face-grin-stars:before,.fa-grin-stars:before {
    content: "\f587"
}

.fa-face-grin-tears:before,.fa-grin-tears:before {
    content: "\f588"
}

.fa-face-grin-tongue:before,.fa-grin-tongue:before {
    content: "\f589"
}

.fa-face-grin-tongue-squint:before,.fa-grin-tongue-squint:before {
    content: "\f58a"
}

.fa-face-grin-tongue-wink:before,.fa-grin-tongue-wink:before {
    content: "\f58b"
}

.fa-face-grin-wide:before,.fa-grin-alt:before {
    content: "\f581"
}

.fa-face-grin-wink:before,.fa-grin-wink:before {
    content: "\f58c"
}

.fa-face-kiss:before,.fa-kiss:before {
    content: "\f596"
}

.fa-face-kiss-beam:before,.fa-kiss-beam:before {
    content: "\f597"
}

.fa-face-kiss-wink-heart:before,.fa-kiss-wink-heart:before {
    content: "\f598"
}

.fa-face-laugh:before,.fa-laugh:before {
    content: "\f599"
}

.fa-face-laugh-beam:before,.fa-laugh-beam:before {
    content: "\f59a"
}

.fa-face-laugh-squint:before,.fa-laugh-squint:before {
    content: "\f59b"
}

.fa-face-laugh-wink:before,.fa-laugh-wink:before {
    content: "\f59c"
}

.fa-face-meh:before,.fa-meh:before {
    content: "\f11a"
}

.fa-face-meh-blank:before,.fa-meh-blank:before {
    content: "\f5a4"
}

.fa-face-rolling-eyes:before,.fa-meh-rolling-eyes:before {
    content: "\f5a5"
}

.fa-face-sad-cry:before,.fa-sad-cry:before {
    content: "\f5b3"
}

.fa-face-sad-tear:before,.fa-sad-tear:before {
    content: "\f5b4"
}

.fa-face-smile:before,.fa-smile:before {
    content: "\f118"
}

.fa-face-smile-beam:before,.fa-smile-beam:before {
    content: "\f5b8"
}

.fa-face-smile-wink:before,.fa-smile-wink:before {
    content: "\f4da"
}

.fa-face-surprise:before,.fa-surprise:before {
    content: "\f5c2"
}

.fa-face-tired:before,.fa-tired:before {
    content: "\f5c8"
}

.fa-fan:before {
    content: "\f863"
}

.fa-faucet:before {
    content: "\e005"
}

.fa-faucet-drip:before {
    content: "\e006"
}

.fa-fax:before {
    content: "\f1ac"
}

.fa-feather:before {
    content: "\f52d"
}

.fa-feather-alt:before,.fa-feather-pointed:before {
    content: "\f56b"
}

.fa-ferry:before {
    content: "\e4ea"
}

.fa-file:before {
    content: "\f15b"
}

.fa-file-arrow-down:before,.fa-file-download:before {
    content: "\f56d"
}

.fa-file-arrow-up:before,.fa-file-upload:before {
    content: "\f574"
}

.fa-file-audio:before {
    content: "\f1c7"
}

.fa-file-circle-check:before {
    content: "\e493"
}

.fa-file-circle-exclamation:before {
    content: "\e4eb"
}

.fa-file-circle-minus:before {
    content: "\e4ed"
}

.fa-file-circle-plus:before {
    content: "\e4ee"
}

.fa-file-circle-question:before {
    content: "\e4ef"
}

.fa-file-circle-xmark:before {
    content: "\e494"
}

.fa-file-code:before {
    content: "\f1c9"
}

.fa-file-contract:before {
    content: "\f56c"
}

.fa-file-csv:before {
    content: "\f6dd"
}

.fa-file-excel:before {
    content: "\f1c3"
}

.fa-arrow-right-from-file:before,.fa-file-export:before {
    content: "\f56e"
}

.fa-file-image:before {
    content: "\f1c5"
}

.fa-arrow-right-to-file:before,.fa-file-import:before {
    content: "\f56f"
}

.fa-file-invoice:before {
    content: "\f570"
}

.fa-file-invoice-dollar:before {
    content: "\f571"
}

.fa-file-alt:before,.fa-file-lines:before,.fa-file-text:before {
    content: "\f15c"
}

.fa-file-medical:before {
    content: "\f477"
}

.fa-file-pdf:before {
    content: "\f1c1"
}

.fa-file-edit:before,.fa-file-pen:before {
    content: "\f31c"
}

.fa-file-powerpoint:before {
    content: "\f1c4"
}

.fa-file-prescription:before {
    content: "\f572"
}

.fa-file-shield:before {
    content: "\e4f0"
}

.fa-file-signature:before {
    content: "\f573"
}

.fa-file-video:before {
    content: "\f1c8"
}

.fa-file-medical-alt:before,.fa-file-waveform:before {
    content: "\f478"
}

.fa-file-word:before {
    content: "\f1c2"
}

.fa-file-archive:before,.fa-file-zipper:before {
    content: "\f1c6"
}

.fa-fill:before {
    content: "\f575"
}

.fa-fill-drip:before {
    content: "\f576"
}

.fa-film:before {
    content: "\f008"
}

.fa-filter:before {
    content: "\f0b0"
}

.fa-filter-circle-dollar:before,.fa-funnel-dollar:before {
    content: "\f662"
}

.fa-filter-circle-xmark:before {
    content: "\e17b"
}

.fa-fingerprint:before {
    content: "\f577"
}

.fa-fire:before {
    content: "\f06d"
}

.fa-fire-burner:before {
    content: "\e4f1"
}

.fa-fire-extinguisher:before {
    content: "\f134"
}

.fa-fire-alt:before,.fa-fire-flame-curved:before {
    content: "\f7e4"
}

.fa-burn:before,.fa-fire-flame-simple:before {
    content: "\f46a"
}

.fa-fish:before {
    content: "\f578"
}

.fa-fish-fins:before {
    content: "\e4f2"
}

.fa-flag:before {
    content: "\f024"
}

.fa-flag-checkered:before {
    content: "\f11e"
}

.fa-flag-usa:before {
    content: "\f74d"
}

.fa-flask:before {
    content: "\f0c3"
}

.fa-flask-vial:before {
    content: "\e4f3"
}

.fa-floppy-disk:before,.fa-save:before {
    content: "\f0c7"
}

.fa-florin-sign:before {
    content: "\e184"
}

.fa-folder-blank:before,.fa-folder:before {
    content: "\f07b"
}

.fa-folder-closed:before {
    content: "\e185"
}

.fa-folder-minus:before {
    content: "\f65d"
}

.fa-folder-open:before {
    content: "\f07c"
}

.fa-folder-plus:before {
    content: "\f65e"
}

.fa-folder-tree:before {
    content: "\f802"
}

.fa-font:before {
    content: "\f031"
}

.fa-football-ball:before,.fa-football:before {
    content: "\f44e"
}

.fa-forward:before {
    content: "\f04e"
}

.fa-fast-forward:before,.fa-forward-fast:before {
    content: "\f050"
}

.fa-forward-step:before,.fa-step-forward:before {
    content: "\f051"
}

.fa-franc-sign:before {
    content: "\e18f"
}

.fa-frog:before {
    content: "\f52e"
}

.fa-futbol-ball:before,.fa-futbol:before,.fa-soccer-ball:before {
    content: "\f1e3"
}

.fa-g:before {
    content: "\47"
}

.fa-gamepad:before {
    content: "\f11b"
}

.fa-gas-pump:before {
    content: "\f52f"
}

.fa-dashboard:before,.fa-gauge-med:before,.fa-gauge:before,.fa-tachometer-alt-average:before {
    content: "\f624"
}

.fa-gauge-high:before,.fa-tachometer-alt-fast:before,.fa-tachometer-alt:before {
    content: "\f625"
}

.fa-gauge-simple-med:before,.fa-gauge-simple:before,.fa-tachometer-average:before {
    content: "\f629"
}

.fa-gauge-simple-high:before,.fa-tachometer-fast:before,.fa-tachometer:before {
    content: "\f62a"
}

.fa-gavel:before,.fa-legal:before {
    content: "\f0e3"
}

.fa-cog:before,.fa-gear:before {
    content: "\f013"
}

.fa-cogs:before,.fa-gears:before {
    content: "\f085"
}

.fa-gem:before {
    content: "\f3a5"
}

.fa-genderless:before {
    content: "\f22d"
}

.fa-ghost:before {
    content: "\f6e2"
}

.fa-gift:before {
    content: "\f06b"
}

.fa-gifts:before {
    content: "\f79c"
}

.fa-glass-water:before {
    content: "\e4f4"
}

.fa-glass-water-droplet:before {
    content: "\e4f5"
}

.fa-glasses:before {
    content: "\f530"
}

.fa-globe:before {
    content: "\f0ac"
}

.fa-golf-ball-tee:before,.fa-golf-ball:before {
    content: "\f450"
}

.fa-gopuram:before {
    content: "\f664"
}

.fa-graduation-cap:before,.fa-mortar-board:before {
    content: "\f19d"
}

.fa-greater-than:before {
    content: "\3e"
}

.fa-greater-than-equal:before {
    content: "\f532"
}

.fa-grip-horizontal:before,.fa-grip:before {
    content: "\f58d"
}

.fa-grip-lines:before {
    content: "\f7a4"
}

.fa-grip-lines-vertical:before {
    content: "\f7a5"
}

.fa-grip-vertical:before {
    content: "\f58e"
}

.fa-group-arrows-rotate:before {
    content: "\e4f6"
}

.fa-guarani-sign:before {
    content: "\e19a"
}

.fa-guitar:before {
    content: "\f7a6"
}

.fa-gun:before {
    content: "\e19b"
}

.fa-h:before {
    content: "\48"
}

.fa-hammer:before {
    content: "\f6e3"
}

.fa-hamsa:before {
    content: "\f665"
}

.fa-hand-paper:before,.fa-hand:before {
    content: "\f256"
}

.fa-hand-back-fist:before,.fa-hand-rock:before {
    content: "\f255"
}

.fa-allergies:before,.fa-hand-dots:before {
    content: "\f461"
}

.fa-fist-raised:before,.fa-hand-fist:before {
    content: "\f6de"
}

.fa-hand-holding:before {
    content: "\f4bd"
}

.fa-hand-holding-dollar:before,.fa-hand-holding-usd:before {
    content: "\f4c0"
}

.fa-hand-holding-droplet:before,.fa-hand-holding-water:before {
    content: "\f4c1"
}

.fa-hand-holding-hand:before {
    content: "\e4f7"
}

.fa-hand-holding-heart:before {
    content: "\f4be"
}

.fa-hand-holding-medical:before {
    content: "\e05c"
}

.fa-hand-lizard:before {
    content: "\f258"
}

.fa-hand-middle-finger:before {
    content: "\f806"
}

.fa-hand-peace:before {
    content: "\f25b"
}

.fa-hand-point-down:before {
    content: "\f0a7"
}

.fa-hand-point-left:before {
    content: "\f0a5"
}

.fa-hand-point-right:before {
    content: "\f0a4"
}

.fa-hand-point-up:before {
    content: "\f0a6"
}

.fa-hand-pointer:before {
    content: "\f25a"
}

.fa-hand-scissors:before {
    content: "\f257"
}

.fa-hand-sparkles:before {
    content: "\e05d"
}

.fa-hand-spock:before {
    content: "\f259"
}

.fa-handcuffs:before {
    content: "\e4f8"
}

.fa-hands:before,.fa-sign-language:before,.fa-signing:before {
    content: "\f2a7"
}

.fa-american-sign-language-interpreting:before,.fa-asl-interpreting:before,.fa-hands-american-sign-language-interpreting:before,.fa-hands-asl-interpreting:before {
    content: "\f2a3"
}

.fa-hands-bound:before {
    content: "\e4f9"
}

.fa-hands-bubbles:before,.fa-hands-wash:before {
    content: "\e05e"
}

.fa-hands-clapping:before {
    content: "\e1a8"
}

.fa-hands-holding:before {
    content: "\f4c2"
}

.fa-hands-holding-child:before {
    content: "\e4fa"
}

.fa-hands-holding-circle:before {
    content: "\e4fb"
}

.fa-hands-praying:before,.fa-praying-hands:before {
    content: "\f684"
}

.fa-handshake:before {
    content: "\f2b5"
}

.fa-hands-helping:before,.fa-handshake-angle:before {
    content: "\f4c4"
}

.fa-handshake-alt:before,.fa-handshake-simple:before {
    content: "\f4c6"
}

.fa-handshake-alt-slash:before,.fa-handshake-simple-slash:before {
    content: "\e05f"
}

.fa-handshake-slash:before {
    content: "\e060"
}

.fa-hanukiah:before {
    content: "\f6e6"
}

.fa-hard-drive:before,.fa-hdd:before {
    content: "\f0a0"
}

.fa-hashtag:before {
    content: "\23"
}

.fa-hat-cowboy:before {
    content: "\f8c0"
}

.fa-hat-cowboy-side:before {
    content: "\f8c1"
}

.fa-hat-wizard:before {
    content: "\f6e8"
}

.fa-head-side-cough:before {
    content: "\e061"
}

.fa-head-side-cough-slash:before {
    content: "\e062"
}

.fa-head-side-mask:before {
    content: "\e063"
}

.fa-head-side-virus:before {
    content: "\e064"
}

.fa-header:before,.fa-heading:before {
    content: "\f1dc"
}

.fa-headphones:before {
    content: "\f025"
}

.fa-headphones-alt:before,.fa-headphones-simple:before {
    content: "\f58f"
}

.fa-headset:before {
    content: "\f590"
}

.fa-heart:before {
    content: "\f004"
}

.fa-heart-circle-bolt:before {
    content: "\e4fc"
}

.fa-heart-circle-check:before {
    content: "\e4fd"
}

.fa-heart-circle-exclamation:before {
    content: "\e4fe"
}

.fa-heart-circle-minus:before {
    content: "\e4ff"
}

.fa-heart-circle-plus:before {
    content: "\e500"
}

.fa-heart-circle-xmark:before {
    content: "\e501"
}

.fa-heart-broken:before,.fa-heart-crack:before {
    content: "\f7a9"
}

.fa-heart-pulse:before,.fa-heartbeat:before {
    content: "\f21e"
}

.fa-helicopter:before {
    content: "\f533"
}

.fa-helicopter-symbol:before {
    content: "\e502"
}

.fa-hard-hat:before,.fa-hat-hard:before,.fa-helmet-safety:before {
    content: "\f807"
}

.fa-helmet-un:before {
    content: "\e503"
}

.fa-highlighter:before {
    content: "\f591"
}

.fa-hill-avalanche:before {
    content: "\e507"
}

.fa-hill-rockslide:before {
    content: "\e508"
}

.fa-hippo:before {
    content: "\f6ed"
}

.fa-hockey-puck:before {
    content: "\f453"
}

.fa-holly-berry:before {
    content: "\f7aa"
}

.fa-horse:before {
    content: "\f6f0"
}

.fa-horse-head:before {
    content: "\f7ab"
}

.fa-hospital-alt:before,.fa-hospital-wide:before,.fa-hospital:before {
    content: "\f0f8"
}

.fa-hospital-user:before {
    content: "\f80d"
}

.fa-hot-tub-person:before,.fa-hot-tub:before {
    content: "\f593"
}

.fa-hotdog:before {
    content: "\f80f"
}

.fa-hotel:before {
    content: "\f594"
}

.fa-hourglass-2:before,.fa-hourglass-half:before,.fa-hourglass:before {
    content: "\f254"
}

.fa-hourglass-empty:before {
    content: "\f252"
}

.fa-hourglass-3:before,.fa-hourglass-end:before {
    content: "\f253"
}

.fa-hourglass-1:before,.fa-hourglass-start:before {
    content: "\f251"
}

.fa-home-alt:before,.fa-home-lg-alt:before,.fa-home:before,.fa-house:before {
    content: "\f015"
}

.fa-home-lg:before,.fa-house-chimney:before {
    content: "\e3af"
}

.fa-house-chimney-crack:before,.fa-house-damage:before {
    content: "\f6f1"
}

.fa-clinic-medical:before,.fa-house-chimney-medical:before {
    content: "\f7f2"
}

.fa-house-chimney-user:before {
    content: "\e065"
}

.fa-house-chimney-window:before {
    content: "\e00d"
}

.fa-house-circle-check:before {
    content: "\e509"
}

.fa-house-circle-exclamation:before {
    content: "\e50a"
}

.fa-house-circle-xmark:before {
    content: "\e50b"
}

.fa-house-crack:before {
    content: "\e3b1"
}

.fa-house-fire:before {
    content: "\e50c"
}

.fa-house-flag:before {
    content: "\e50d"
}

.fa-house-flood-water:before {
    content: "\e50e"
}

.fa-house-flood-water-circle-arrow-right:before {
    content: "\e50f"
}

.fa-house-laptop:before,.fa-laptop-house:before {
    content: "\e066"
}

.fa-house-lock:before {
    content: "\e510"
}

.fa-house-medical:before {
    content: "\e3b2"
}

.fa-house-medical-circle-check:before {
    content: "\e511"
}

.fa-house-medical-circle-exclamation:before {
    content: "\e512"
}

.fa-house-medical-circle-xmark:before {
    content: "\e513"
}

.fa-house-medical-flag:before {
    content: "\e514"
}

.fa-house-signal:before {
    content: "\e012"
}

.fa-house-tsunami:before {
    content: "\e515"
}

.fa-home-user:before,.fa-house-user:before {
    content: "\e1b0"
}

.fa-hryvnia-sign:before,.fa-hryvnia:before {
    content: "\f6f2"
}

.fa-hurricane:before {
    content: "\f751"
}

.fa-i:before {
    content: "\49"
}

.fa-i-cursor:before {
    content: "\f246"
}

.fa-ice-cream:before {
    content: "\f810"
}

.fa-icicles:before {
    content: "\f7ad"
}

.fa-heart-music-camera-bolt:before,.fa-icons:before {
    content: "\f86d"
}

.fa-id-badge:before {
    content: "\f2c1"
}

.fa-drivers-license:before,.fa-id-card:before {
    content: "\f2c2"
}

.fa-id-card-alt:before,.fa-id-card-clip:before {
    content: "\f47f"
}

.fa-igloo:before {
    content: "\f7ae"
}

.fa-image:before {
    content: "\f03e"
}

.fa-image-portrait:before,.fa-portrait:before {
    content: "\f3e0"
}

.fa-images:before {
    content: "\f302"
}

.fa-inbox:before {
    content: "\f01c"
}

.fa-indent:before {
    content: "\f03c"
}

.fa-indian-rupee-sign:before,.fa-indian-rupee:before,.fa-inr:before {
    content: "\e1bc"
}

.fa-industry:before {
    content: "\f275"
}

.fa-infinity:before {
    content: "\f534"
}

.fa-info:before {
    content: "\f129"
}

.fa-italic:before {
    content: "\f033"
}

.fa-j:before {
    content: "\4a"
}

.fa-jar:before {
    content: "\e516"
}

.fa-jar-wheat:before {
    content: "\e517"
}

.fa-jedi:before {
    content: "\f669"
}

.fa-fighter-jet:before,.fa-jet-fighter:before {
    content: "\f0fb"
}

.fa-jet-fighter-up:before {
    content: "\e518"
}

.fa-joint:before {
    content: "\f595"
}

.fa-jug-detergent:before {
    content: "\e519"
}

.fa-k:before {
    content: "\4b"
}

.fa-kaaba:before {
    content: "\f66b"
}

.fa-key:before {
    content: "\f084"
}

.fa-keyboard:before {
    content: "\f11c"
}

.fa-khanda:before {
    content: "\f66d"
}

.fa-kip-sign:before {
    content: "\e1c4"
}

.fa-first-aid:before,.fa-kit-medical:before {
    content: "\f479"
}

.fa-kitchen-set:before {
    content: "\e51a"
}

.fa-kiwi-bird:before {
    content: "\f535"
}

.fa-l:before {
    content: "\4c"
}

.fa-land-mine-on:before {
    content: "\e51b"
}

.fa-landmark:before {
    content: "\f66f"
}

.fa-landmark-alt:before,.fa-landmark-dome:before {
    content: "\f752"
}

.fa-landmark-flag:before {
    content: "\e51c"
}

.fa-language:before {
    content: "\f1ab"
}

.fa-laptop:before {
    content: "\f109"
}

.fa-laptop-code:before {
    content: "\f5fc"
}

.fa-laptop-file:before {
    content: "\e51d"
}

.fa-laptop-medical:before {
    content: "\f812"
}

.fa-lari-sign:before {
    content: "\e1c8"
}

.fa-layer-group:before {
    content: "\f5fd"
}

.fa-leaf:before {
    content: "\f06c"
}

.fa-left-long:before,.fa-long-arrow-alt-left:before {
    content: "\f30a"
}

.fa-arrows-alt-h:before,.fa-left-right:before {
    content: "\f337"
}

.fa-lemon:before {
    content: "\f094"
}

.fa-less-than:before {
    content: "\3c"
}

.fa-less-than-equal:before {
    content: "\f537"
}

.fa-life-ring:before {
    content: "\f1cd"
}

.fa-lightbulb:before {
    content: "\f0eb"
}

.fa-lines-leaning:before {
    content: "\e51e"
}

.fa-chain:before,.fa-link:before {
    content: "\f0c1"
}

.fa-chain-broken:before,.fa-chain-slash:before,.fa-link-slash:before,.fa-unlink:before {
    content: "\f127"
}

.fa-lira-sign:before {
    content: "\f195"
}

.fa-list-squares:before,.fa-list:before {
    content: "\f03a"
}

.fa-list-check:before,.fa-tasks:before {
    content: "\f0ae"
}

.fa-list-1-2:before,.fa-list-numeric:before,.fa-list-ol:before {
    content: "\f0cb"
}

.fa-list-dots:before,.fa-list-ul:before {
    content: "\f0ca"
}

.fa-litecoin-sign:before {
    content: "\e1d3"
}

.fa-location-arrow:before {
    content: "\f124"
}

.fa-location-crosshairs:before,.fa-location:before {
    content: "\f601"
}

.fa-location-dot:before,.fa-map-marker-alt:before {
    content: "\f3c5"
}

.fa-location-pin:before,.fa-map-marker:before {
    content: "\f041"
}

.fa-location-pin-lock:before {
    content: "\e51f"
}

.fa-lock:before {
    content: "\f023"
}

.fa-lock-open:before {
    content: "\f3c1"
}

.fa-locust:before {
    content: "\e520"
}

.fa-lungs:before {
    content: "\f604"
}

.fa-lungs-virus:before {
    content: "\e067"
}

.fa-m:before {
    content: "\4d"
}

.fa-magnet:before {
    content: "\f076"
}

.fa-magnifying-glass:before,.fa-search:before {
    content: "\f002"
}

.fa-magnifying-glass-arrow-right:before {
    content: "\e521"
}

.fa-magnifying-glass-chart:before {
    content: "\e522"
}

.fa-magnifying-glass-dollar:before,.fa-search-dollar:before {
    content: "\f688"
}

.fa-magnifying-glass-location:before,.fa-search-location:before {
    content: "\f689"
}

.fa-magnifying-glass-minus:before,.fa-search-minus:before {
    content: "\f010"
}

.fa-magnifying-glass-plus:before,.fa-search-plus:before {
    content: "\f00e"
}

.fa-manat-sign:before {
    content: "\e1d5"
}

.fa-map:before {
    content: "\f279"
}

.fa-map-location:before,.fa-map-marked:before {
    content: "\f59f"
}

.fa-map-location-dot:before,.fa-map-marked-alt:before {
    content: "\f5a0"
}

.fa-map-pin:before {
    content: "\f276"
}

.fa-marker:before {
    content: "\f5a1"
}

.fa-mars:before {
    content: "\f222"
}

.fa-mars-and-venus:before {
    content: "\f224"
}

.fa-mars-and-venus-burst:before {
    content: "\e523"
}

.fa-mars-double:before {
    content: "\f227"
}

.fa-mars-stroke:before {
    content: "\f229"
}

.fa-mars-stroke-h:before,.fa-mars-stroke-right:before {
    content: "\f22b"
}

.fa-mars-stroke-up:before,.fa-mars-stroke-v:before {
    content: "\f22a"
}

.fa-glass-martini-alt:before,.fa-martini-glass:before {
    content: "\f57b"
}

.fa-cocktail:before,.fa-martini-glass-citrus:before {
    content: "\f561"
}

.fa-glass-martini:before,.fa-martini-glass-empty:before {
    content: "\f000"
}

.fa-mask:before {
    content: "\f6fa"
}

.fa-mask-face:before {
    content: "\e1d7"
}

.fa-mask-ventilator:before {
    content: "\e524"
}

.fa-masks-theater:before,.fa-theater-masks:before {
    content: "\f630"
}

.fa-mattress-pillow:before {
    content: "\e525"
}

.fa-expand-arrows-alt:before,.fa-maximize:before {
    content: "\f31e"
}

.fa-medal:before {
    content: "\f5a2"
}

.fa-memory:before {
    content: "\f538"
}

.fa-menorah:before {
    content: "\f676"
}

.fa-mercury:before {
    content: "\f223"
}

.fa-comment-alt:before,.fa-message:before {
    content: "\f27a"
}

.fa-meteor:before {
    content: "\f753"
}

.fa-microchip:before {
    content: "\f2db"
}

.fa-microphone:before {
    content: "\f130"
}

.fa-microphone-alt:before,.fa-microphone-lines:before {
    content: "\f3c9"
}

.fa-microphone-alt-slash:before,.fa-microphone-lines-slash:before {
    content: "\f539"
}

.fa-microphone-slash:before {
    content: "\f131"
}

.fa-microscope:before {
    content: "\f610"
}

.fa-mill-sign:before {
    content: "\e1ed"
}

.fa-compress-arrows-alt:before,.fa-minimize:before {
    content: "\f78c"
}

.fa-minus:before,.fa-subtract:before {
    content: "\f068"
}

.fa-mitten:before {
    content: "\f7b5"
}

.fa-mobile-android:before,.fa-mobile-phone:before,.fa-mobile:before {
    content: "\f3ce"
}

.fa-mobile-button:before {
    content: "\f10b"
}

.fa-mobile-retro:before {
    content: "\e527"
}

.fa-mobile-android-alt:before,.fa-mobile-screen:before {
    content: "\f3cf"
}

.fa-mobile-alt:before,.fa-mobile-screen-button:before {
    content: "\f3cd"
}

.fa-money-bill:before {
    content: "\f0d6"
}

.fa-money-bill-1:before,.fa-money-bill-alt:before {
    content: "\f3d1"
}

.fa-money-bill-1-wave:before,.fa-money-bill-wave-alt:before {
    content: "\f53b"
}

.fa-money-bill-transfer:before {
    content: "\e528"
}

.fa-money-bill-trend-up:before {
    content: "\e529"
}

.fa-money-bill-wave:before {
    content: "\f53a"
}

.fa-money-bill-wheat:before {
    content: "\e52a"
}

.fa-money-bills:before {
    content: "\e1f3"
}

.fa-money-check:before {
    content: "\f53c"
}

.fa-money-check-alt:before,.fa-money-check-dollar:before {
    content: "\f53d"
}

.fa-monument:before {
    content: "\f5a6"
}

.fa-moon:before {
    content: "\f186"
}

.fa-mortar-pestle:before {
    content: "\f5a7"
}

.fa-mosque:before {
    content: "\f678"
}

.fa-mosquito:before {
    content: "\e52b"
}

.fa-mosquito-net:before {
    content: "\e52c"
}

.fa-motorcycle:before {
    content: "\f21c"
}

.fa-mound:before {
    content: "\e52d"
}

.fa-mountain:before {
    content: "\f6fc"
}

.fa-mountain-city:before {
    content: "\e52e"
}

.fa-mountain-sun:before {
    content: "\e52f"
}

.fa-mug-hot:before {
    content: "\f7b6"
}

.fa-coffee:before,.fa-mug-saucer:before {
    content: "\f0f4"
}

.fa-music:before {
    content: "\f001"
}

.fa-n:before {
    content: "\4e"
}

.fa-naira-sign:before {
    content: "\e1f6"
}

.fa-network-wired:before {
    content: "\f6ff"
}

.fa-neuter:before {
    content: "\f22c"
}

.fa-newspaper:before {
    content: "\f1ea"
}

.fa-not-equal:before {
    content: "\f53e"
}

.fa-note-sticky:before,.fa-sticky-note:before {
    content: "\f249"
}

.fa-notes-medical:before {
    content: "\f481"
}

.fa-o:before {
    content: "\4f"
}

.fa-object-group:before {
    content: "\f247"
}

.fa-object-ungroup:before {
    content: "\f248"
}

.fa-oil-can:before {
    content: "\f613"
}

.fa-oil-well:before {
    content: "\e532"
}

.fa-om:before {
    content: "\f679"
}

.fa-otter:before {
    content: "\f700"
}

.fa-dedent:before,.fa-outdent:before {
    content: "\f03b"
}

.fa-p:before {
    content: "\50"
}

.fa-pager:before {
    content: "\f815"
}

.fa-paint-roller:before {
    content: "\f5aa"
}

.fa-paint-brush:before,.fa-paintbrush:before {
    content: "\f1fc"
}

.fa-palette:before {
    content: "\f53f"
}

.fa-pallet:before {
    content: "\f482"
}

.fa-panorama:before {
    content: "\e209"
}

.fa-paper-plane:before {
    content: "\f1d8"
}

.fa-paperclip:before {
    content: "\f0c6"
}

.fa-parachute-box:before {
    content: "\f4cd"
}

.fa-paragraph:before {
    content: "\f1dd"
}

.fa-passport:before {
    content: "\f5ab"
}

.fa-file-clipboard:before,.fa-paste:before {
    content: "\f0ea"
}

.fa-pause:before {
    content: "\f04c"
}

.fa-paw:before {
    content: "\f1b0"
}

.fa-peace:before {
    content: "\f67c"
}

.fa-pen:before {
    content: "\f304"
}

.fa-pen-alt:before,.fa-pen-clip:before {
    content: "\f305"
}

.fa-pen-fancy:before {
    content: "\f5ac"
}

.fa-pen-nib:before {
    content: "\f5ad"
}

.fa-pen-ruler:before,.fa-pencil-ruler:before {
    content: "\f5ae"
}

.fa-edit:before,.fa-pen-to-square:before {
    content: "\f044"
}

.fa-pencil-alt:before,.fa-pencil:before {
    content: "\f303"
}

.fa-people-arrows-left-right:before,.fa-people-arrows:before {
    content: "\e068"
}

.fa-people-carry-box:before,.fa-people-carry:before {
    content: "\f4ce"
}

.fa-people-group:before {
    content: "\e533"
}

.fa-people-line:before {
    content: "\e534"
}

.fa-people-pulling:before {
    content: "\e535"
}

.fa-people-robbery:before {
    content: "\e536"
}

.fa-people-roof:before {
    content: "\e537"
}

.fa-pepper-hot:before {
    content: "\f816"
}

.fa-percent:before,.fa-percentage:before {
    content: "\25"
}

.fa-male:before,.fa-person:before {
    content: "\f183"
}

.fa-person-arrow-down-to-line:before {
    content: "\e538"
}

.fa-person-arrow-up-from-line:before {
    content: "\e539"
}

.fa-biking:before,.fa-person-biking:before {
    content: "\f84a"
}

.fa-person-booth:before {
    content: "\f756"
}

.fa-person-breastfeeding:before {
    content: "\e53a"
}

.fa-person-burst:before {
    content: "\e53b"
}

.fa-person-cane:before {
    content: "\e53c"
}

.fa-person-chalkboard:before {
    content: "\e53d"
}

.fa-person-circle-check:before {
    content: "\e53e"
}

.fa-person-circle-exclamation:before {
    content: "\e53f"
}

.fa-person-circle-minus:before {
    content: "\e540"
}

.fa-person-circle-plus:before {
    content: "\e541"
}

.fa-person-circle-question:before {
    content: "\e542"
}

.fa-person-circle-xmark:before {
    content: "\e543"
}

.fa-digging:before,.fa-person-digging:before {
    content: "\f85e"
}

.fa-diagnoses:before,.fa-person-dots-from-line:before {
    content: "\f470"
}

.fa-female:before,.fa-person-dress:before {
    content: "\f182"
}

.fa-person-dress-burst:before {
    content: "\e544"
}

.fa-person-drowning:before {
    content: "\e545"
}

.fa-person-falling:before {
    content: "\e546"
}

.fa-person-falling-burst:before {
    content: "\e547"
}

.fa-person-half-dress:before {
    content: "\e548"
}

.fa-person-harassing:before {
    content: "\e549"
}

.fa-hiking:before,.fa-person-hiking:before {
    content: "\f6ec"
}

.fa-person-military-pointing:before {
    content: "\e54a"
}

.fa-person-military-rifle:before {
    content: "\e54b"
}

.fa-person-military-to-person:before {
    content: "\e54c"
}

.fa-person-praying:before,.fa-pray:before {
    content: "\f683"
}

.fa-person-pregnant:before {
    content: "\e31e"
}

.fa-person-rays:before {
    content: "\e54d"
}

.fa-person-rifle:before {
    content: "\e54e"
}

.fa-person-running:before,.fa-running:before {
    content: "\f70c"
}

.fa-person-shelter:before {
    content: "\e54f"
}

.fa-person-skating:before,.fa-skating:before {
    content: "\f7c5"
}

.fa-person-skiing:before,.fa-skiing:before {
    content: "\f7c9"
}

.fa-person-skiing-nordic:before,.fa-skiing-nordic:before {
    content: "\f7ca"
}

.fa-person-snowboarding:before,.fa-snowboarding:before {
    content: "\f7ce"
}

.fa-person-swimming:before,.fa-swimmer:before {
    content: "\f5c4"
}

.fa-person-through-window:before {
    content: "\e433"
}

.fa-person-walking:before,.fa-walking:before {
    content: "\f554"
}

.fa-person-walking-arrow-loop-left:before {
    content: "\e551"
}

.fa-person-walking-arrow-right:before {
    content: "\e552"
}

.fa-person-walking-dashed-line-arrow-right:before {
    content: "\e553"
}

.fa-person-walking-luggage:before {
    content: "\e554"
}

.fa-blind:before,.fa-person-walking-with-cane:before {
    content: "\f29d"
}

.fa-peseta-sign:before {
    content: "\e221"
}

.fa-peso-sign:before {
    content: "\e222"
}

.fa-phone:before {
    content: "\f095"
}

.fa-phone-alt:before,.fa-phone-flip:before {
    content: "\f879"
}

.fa-phone-slash:before {
    content: "\f3dd"
}

.fa-phone-volume:before,.fa-volume-control-phone:before {
    content: "\f2a0"
}

.fa-photo-film:before,.fa-photo-video:before {
    content: "\f87c"
}

.fa-piggy-bank:before {
    content: "\f4d3"
}

.fa-pills:before {
    content: "\f484"
}

.fa-pizza-slice:before {
    content: "\f818"
}

.fa-place-of-worship:before {
    content: "\f67f"
}

.fa-plane:before {
    content: "\f072"
}

.fa-plane-arrival:before {
    content: "\f5af"
}

.fa-plane-circle-check:before {
    content: "\e555"
}

.fa-plane-circle-exclamation:before {
    content: "\e556"
}

.fa-plane-circle-xmark:before {
    content: "\e557"
}

.fa-plane-departure:before {
    content: "\f5b0"
}

.fa-plane-lock:before {
    content: "\e558"
}

.fa-plane-slash:before {
    content: "\e069"
}

.fa-plane-up:before {
    content: "\e22d"
}

.fa-plant-wilt:before {
    content: "\e43b"
}

.fa-plate-wheat:before {
    content: "\e55a"
}

.fa-play:before {
    content: "\f04b"
}

.fa-plug:before {
    content: "\f1e6"
}

.fa-plug-circle-bolt:before {
    content: "\e55b"
}

.fa-plug-circle-check:before {
    content: "\e55c"
}

.fa-plug-circle-exclamation:before {
    content: "\e55d"
}

.fa-plug-circle-minus:before {
    content: "\e55e"
}

.fa-plug-circle-plus:before {
    content: "\e55f"
}

.fa-plug-circle-xmark:before {
    content: "\e560"
}

.fa-add:before,.fa-plus:before {
    content: "\2b"
}

.fa-plus-minus:before {
    content: "\e43c"
}

.fa-podcast:before {
    content: "\f2ce"
}

.fa-poo:before {
    content: "\f2fe"
}

.fa-poo-bolt:before,.fa-poo-storm:before {
    content: "\f75a"
}

.fa-poop:before {
    content: "\f619"
}

.fa-power-off:before {
    content: "\f011"
}

.fa-prescription:before {
    content: "\f5b1"
}

.fa-prescription-bottle:before {
    content: "\f485"
}

.fa-prescription-bottle-alt:before,.fa-prescription-bottle-medical:before {
    content: "\f486"
}

.fa-print:before {
    content: "\f02f"
}

.fa-pump-medical:before {
    content: "\e06a"
}

.fa-pump-soap:before {
    content: "\e06b"
}

.fa-puzzle-piece:before {
    content: "\f12e"
}

.fa-q:before {
    content: "\51"
}

.fa-qrcode:before {
    content: "\f029"
}

.fa-question:before {
    content: "\3f"
}

.fa-quote-left-alt:before,.fa-quote-left:before {
    content: "\f10d"
}

.fa-quote-right-alt:before,.fa-quote-right:before {
    content: "\f10e"
}

.fa-r:before {
    content: "\52"
}

.fa-radiation:before {
    content: "\f7b9"
}

.fa-radio:before {
    content: "\f8d7"
}

.fa-rainbow:before {
    content: "\f75b"
}

.fa-ranking-star:before {
    content: "\e561"
}

.fa-receipt:before {
    content: "\f543"
}

.fa-record-vinyl:before {
    content: "\f8d9"
}

.fa-ad:before,.fa-rectangle-ad:before {
    content: "\f641"
}

.fa-list-alt:before,.fa-rectangle-list:before {
    content: "\f022"
}

.fa-rectangle-times:before,.fa-rectangle-xmark:before,.fa-times-rectangle:before,.fa-window-close:before {
    content: "\f410"
}

.fa-recycle:before {
    content: "\f1b8"
}

.fa-registered:before {
    content: "\f25d"
}

.fa-repeat:before {
    content: "\f363"
}

.fa-mail-reply:before,.fa-reply:before {
    content: "\f3e5"
}

.fa-mail-reply-all:before,.fa-reply-all:before {
    content: "\f122"
}

.fa-republican:before {
    content: "\f75e"
}

.fa-restroom:before {
    content: "\f7bd"
}

.fa-retweet:before {
    content: "\f079"
}

.fa-ribbon:before {
    content: "\f4d6"
}

.fa-right-from-bracket:before,.fa-sign-out-alt:before {
    content: "\f2f5"
}

.fa-exchange-alt:before,.fa-right-left:before {
    content: "\f362"
}

.fa-long-arrow-alt-right:before,.fa-right-long:before {
    content: "\f30b"
}

.fa-right-to-bracket:before,.fa-sign-in-alt:before {
    content: "\f2f6"
}

.fa-ring:before {
    content: "\f70b"
}

.fa-road:before {
    content: "\f018"
}

.fa-road-barrier:before {
    content: "\e562"
}

.fa-road-bridge:before {
    content: "\e563"
}

.fa-road-circle-check:before {
    content: "\e564"
}

.fa-road-circle-exclamation:before {
    content: "\e565"
}

.fa-road-circle-xmark:before {
    content: "\e566"
}

.fa-road-lock:before {
    content: "\e567"
}

.fa-road-spikes:before {
    content: "\e568"
}

.fa-robot:before {
    content: "\f544"
}

.fa-rocket:before {
    content: "\f135"
}

.fa-rotate:before,.fa-sync-alt:before {
    content: "\f2f1"
}

.fa-rotate-back:before,.fa-rotate-backward:before,.fa-rotate-left:before,.fa-undo-alt:before {
    content: "\f2ea"
}

.fa-redo-alt:before,.fa-rotate-forward:before,.fa-rotate-right:before {
    content: "\f2f9"
}

.fa-route:before {
    content: "\f4d7"
}

.fa-feed:before,.fa-rss:before {
    content: "\f09e"
}

.fa-rouble:before,.fa-rub:before,.fa-ruble-sign:before,.fa-ruble:before {
    content: "\f158"
}

.fa-rug:before {
    content: "\e569"
}

.fa-ruler:before {
    content: "\f545"
}

.fa-ruler-combined:before {
    content: "\f546"
}

.fa-ruler-horizontal:before {
    content: "\f547"
}

.fa-ruler-vertical:before {
    content: "\f548"
}

.fa-rupee-sign:before,.fa-rupee:before {
    content: "\f156"
}

.fa-rupiah-sign:before {
    content: "\e23d"
}

.fa-s:before {
    content: "\53"
}

.fa-sack-dollar:before {
    content: "\f81d"
}

.fa-sack-xmark:before {
    content: "\e56a"
}

.fa-sailboat:before {
    content: "\e445"
}

.fa-satellite:before {
    content: "\f7bf"
}

.fa-satellite-dish:before {
    content: "\f7c0"
}

.fa-balance-scale:before,.fa-scale-balanced:before {
    content: "\f24e"
}

.fa-balance-scale-left:before,.fa-scale-unbalanced:before {
    content: "\f515"
}

.fa-balance-scale-right:before,.fa-scale-unbalanced-flip:before {
    content: "\f516"
}

.fa-school:before {
    content: "\f549"
}

.fa-school-circle-check:before {
    content: "\e56b"
}

.fa-school-circle-exclamation:before {
    content: "\e56c"
}

.fa-school-circle-xmark:before {
    content: "\e56d"
}

.fa-school-flag:before {
    content: "\e56e"
}

.fa-school-lock:before {
    content: "\e56f"
}

.fa-cut:before,.fa-scissors:before {
    content: "\f0c4"
}

.fa-screwdriver:before {
    content: "\f54a"
}

.fa-screwdriver-wrench:before,.fa-tools:before {
    content: "\f7d9"
}

.fa-scroll:before {
    content: "\f70e"
}

.fa-scroll-torah:before,.fa-torah:before {
    content: "\f6a0"
}

.fa-sd-card:before {
    content: "\f7c2"
}

.fa-section:before {
    content: "\e447"
}

.fa-seedling:before,.fa-sprout:before {
    content: "\f4d8"
}

.fa-server:before {
    content: "\f233"
}

.fa-shapes:before,.fa-triangle-circle-square:before {
    content: "\f61f"
}

.fa-arrow-turn-right:before,.fa-mail-forward:before,.fa-share:before {
    content: "\f064"
}

.fa-share-from-square:before,.fa-share-square:before {
    content: "\f14d"
}

.fa-share-alt:before,.fa-share-nodes:before {
    content: "\f1e0"
}

.fa-sheet-plastic:before {
    content: "\e571"
}

.fa-ils:before,.fa-shekel-sign:before,.fa-shekel:before,.fa-sheqel-sign:before,.fa-sheqel:before {
    content: "\f20b"
}

.fa-shield-blank:before,.fa-shield:before {
    content: "\f132"
}

.fa-shield-cat:before {
    content: "\e572"
}

.fa-shield-dog:before {
    content: "\e573"
}

.fa-shield-alt:before,.fa-shield-halved:before {
    content: "\f3ed"
}

.fa-shield-heart:before {
    content: "\e574"
}

.fa-shield-virus:before {
    content: "\e06c"
}

.fa-ship:before {
    content: "\f21a"
}

.fa-shirt:before,.fa-t-shirt:before,.fa-tshirt:before {
    content: "\f553"
}

.fa-shoe-prints:before {
    content: "\f54b"
}

.fa-shop:before,.fa-store-alt:before {
    content: "\f54f"
}

.fa-shop-lock:before {
    content: "\e4a5"
}

.fa-shop-slash:before,.fa-store-alt-slash:before {
    content: "\e070"
}

.fa-shower:before {
    content: "\f2cc"
}

.fa-shrimp:before {
    content: "\e448"
}

.fa-random:before,.fa-shuffle:before {
    content: "\f074"
}

.fa-shuttle-space:before,.fa-space-shuttle:before {
    content: "\f197"
}

.fa-sign-hanging:before,.fa-sign:before {
    content: "\f4d9"
}

.fa-signal-5:before,.fa-signal-perfect:before,.fa-signal:before {
    content: "\f012"
}

.fa-signature:before {
    content: "\f5b7"
}

.fa-map-signs:before,.fa-signs-post:before {
    content: "\f277"
}

.fa-sim-card:before {
    content: "\f7c4"
}

.fa-sink:before {
    content: "\e06d"
}

.fa-sitemap:before {
    content: "\f0e8"
}

.fa-skull:before {
    content: "\f54c"
}

.fa-skull-crossbones:before {
    content: "\f714"
}

.fa-slash:before {
    content: "\f715"
}

.fa-sleigh:before {
    content: "\f7cc"
}

.fa-sliders-h:before,.fa-sliders:before {
    content: "\f1de"
}

.fa-smog:before {
    content: "\f75f"
}

.fa-smoking:before {
    content: "\f48d"
}

.fa-snowflake:before {
    content: "\f2dc"
}

.fa-snowman:before {
    content: "\f7d0"
}

.fa-snowplow:before {
    content: "\f7d2"
}

.fa-soap:before {
    content: "\e06e"
}

.fa-socks:before {
    content: "\f696"
}

.fa-solar-panel:before {
    content: "\f5ba"
}

.fa-sort:before,.fa-unsorted:before {
    content: "\f0dc"
}

.fa-sort-desc:before,.fa-sort-down:before {
    content: "\f0dd"
}

.fa-sort-asc:before,.fa-sort-up:before {
    content: "\f0de"
}

.fa-spa:before {
    content: "\f5bb"
}

.fa-pastafarianism:before,.fa-spaghetti-monster-flying:before {
    content: "\f67b"
}

.fa-spell-check:before {
    content: "\f891"
}

.fa-spider:before {
    content: "\f717"
}

.fa-spinner:before {
    content: "\f110"
}

.fa-splotch:before {
    content: "\f5bc"
}

.fa-spoon:before,.fa-utensil-spoon:before {
    content: "\f2e5"
}

.fa-spray-can:before {
    content: "\f5bd"
}

.fa-air-freshener:before,.fa-spray-can-sparkles:before {
    content: "\f5d0"
}

.fa-square:before {
    content: "\f0c8"
}

.fa-external-link-square:before,.fa-square-arrow-up-right:before {
    content: "\f14c"
}

.fa-caret-square-down:before,.fa-square-caret-down:before {
    content: "\f150"
}

.fa-caret-square-left:before,.fa-square-caret-left:before {
    content: "\f191"
}

.fa-caret-square-right:before,.fa-square-caret-right:before {
    content: "\f152"
}

.fa-caret-square-up:before,.fa-square-caret-up:before {
    content: "\f151"
}

.fa-check-square:before,.fa-square-check:before {
    content: "\f14a"
}

.fa-envelope-square:before,.fa-square-envelope:before {
    content: "\f199"
}

.fa-square-full:before {
    content: "\f45c"
}

.fa-h-square:before,.fa-square-h:before {
    content: "\f0fd"
}

.fa-minus-square:before,.fa-square-minus:before {
    content: "\f146"
}

.fa-square-nfi:before {
    content: "\e576"
}

.fa-parking:before,.fa-square-parking:before {
    content: "\f540"
}

.fa-pen-square:before,.fa-pencil-square:before,.fa-square-pen:before {
    content: "\f14b"
}

.fa-square-person-confined:before {
    content: "\e577"
}

.fa-phone-square:before,.fa-square-phone:before {
    content: "\f098"
}

.fa-phone-square-alt:before,.fa-square-phone-flip:before {
    content: "\f87b"
}

.fa-plus-square:before,.fa-square-plus:before {
    content: "\f0fe"
}

.fa-poll-h:before,.fa-square-poll-horizontal:before {
    content: "\f682"
}

.fa-poll:before,.fa-square-poll-vertical:before {
    content: "\f681"
}

.fa-square-root-alt:before,.fa-square-root-variable:before {
    content: "\f698"
}

.fa-rss-square:before,.fa-square-rss:before {
    content: "\f143"
}

.fa-share-alt-square:before,.fa-square-share-nodes:before {
    content: "\f1e1"
}

.fa-external-link-square-alt:before,.fa-square-up-right:before {
    content: "\f360"
}

.fa-square-virus:before {
    content: "\e578"
}

.fa-square-xmark:before,.fa-times-square:before,.fa-xmark-square:before {
    content: "\f2d3"
}

.fa-rod-asclepius:before,.fa-rod-snake:before,.fa-staff-aesculapius:before,.fa-staff-snake:before {
    content: "\e579"
}

.fa-stairs:before {
    content: "\e289"
}

.fa-stamp:before {
    content: "\f5bf"
}

.fa-star:before {
    content: "\f005"
}

.fa-star-and-crescent:before {
    content: "\f699"
}

.fa-star-half:before {
    content: "\f089"
}

.fa-star-half-alt:before,.fa-star-half-stroke:before {
    content: "\f5c0"
}

.fa-star-of-david:before {
    content: "\f69a"
}

.fa-star-of-life:before {
    content: "\f621"
}

.fa-gbp:before,.fa-pound-sign:before,.fa-sterling-sign:before {
    content: "\f154"
}

.fa-stethoscope:before {
    content: "\f0f1"
}

.fa-stop:before {
    content: "\f04d"
}

.fa-stopwatch:before {
    content: "\f2f2"
}

.fa-stopwatch-20:before {
    content: "\e06f"
}

.fa-store:before {
    content: "\f54e"
}

.fa-store-slash:before {
    content: "\e071"
}

.fa-street-view:before {
    content: "\f21d"
}

.fa-strikethrough:before {
    content: "\f0cc"
}

.fa-stroopwafel:before {
    content: "\f551"
}

.fa-subscript:before {
    content: "\f12c"
}

.fa-suitcase:before {
    content: "\f0f2"
}

.fa-medkit:before,.fa-suitcase-medical:before {
    content: "\f0fa"
}

.fa-suitcase-rolling:before {
    content: "\f5c1"
}

.fa-sun:before {
    content: "\f185"
}

.fa-sun-plant-wilt:before {
    content: "\e57a"
}

.fa-superscript:before {
    content: "\f12b"
}

.fa-swatchbook:before {
    content: "\f5c3"
}

.fa-synagogue:before {
    content: "\f69b"
}

.fa-syringe:before {
    content: "\f48e"
}

.fa-t:before {
    content: "\54"
}

.fa-table:before {
    content: "\f0ce"
}

.fa-table-cells:before,.fa-th:before {
    content: "\f00a"
}

.fa-table-cells-large:before,.fa-th-large:before {
    content: "\f009"
}

.fa-columns:before,.fa-table-columns:before {
    content: "\f0db"
}

.fa-table-list:before,.fa-th-list:before {
    content: "\f00b"
}

.fa-ping-pong-paddle-ball:before,.fa-table-tennis-paddle-ball:before,.fa-table-tennis:before {
    content: "\f45d"
}

.fa-tablet-android:before,.fa-tablet:before {
    content: "\f3fb"
}

.fa-tablet-button:before {
    content: "\f10a"
}

.fa-tablet-alt:before,.fa-tablet-screen-button:before {
    content: "\f3fa"
}

.fa-tablets:before {
    content: "\f490"
}

.fa-digital-tachograph:before,.fa-tachograph-digital:before {
    content: "\f566"
}

.fa-tag:before {
    content: "\f02b"
}

.fa-tags:before {
    content: "\f02c"
}

.fa-tape:before {
    content: "\f4db"
}

.fa-tarp:before {
    content: "\e57b"
}

.fa-tarp-droplet:before {
    content: "\e57c"
}

.fa-cab:before,.fa-taxi:before {
    content: "\f1ba"
}

.fa-teeth:before {
    content: "\f62e"
}

.fa-teeth-open:before {
    content: "\f62f"
}

.fa-temperature-arrow-down:before,.fa-temperature-down:before {
    content: "\e03f"
}

.fa-temperature-arrow-up:before,.fa-temperature-up:before {
    content: "\e040"
}

.fa-temperature-0:before,.fa-temperature-empty:before,.fa-thermometer-0:before,.fa-thermometer-empty:before {
    content: "\f2cb"
}

.fa-temperature-4:before,.fa-temperature-full:before,.fa-thermometer-4:before,.fa-thermometer-full:before {
    content: "\f2c7"
}

.fa-temperature-2:before,.fa-temperature-half:before,.fa-thermometer-2:before,.fa-thermometer-half:before {
    content: "\f2c9"
}

.fa-temperature-high:before {
    content: "\f769"
}

.fa-temperature-low:before {
    content: "\f76b"
}

.fa-temperature-1:before,.fa-temperature-quarter:before,.fa-thermometer-1:before,.fa-thermometer-quarter:before {
    content: "\f2ca"
}

.fa-temperature-3:before,.fa-temperature-three-quarters:before,.fa-thermometer-3:before,.fa-thermometer-three-quarters:before {
    content: "\f2c8"
}

.fa-tenge-sign:before,.fa-tenge:before {
    content: "\f7d7"
}

.fa-tent:before {
    content: "\e57d"
}

.fa-tent-arrow-down-to-line:before {
    content: "\e57e"
}

.fa-tent-arrow-left-right:before {
    content: "\e57f"
}

.fa-tent-arrow-turn-left:before {
    content: "\e580"
}

.fa-tent-arrows-down:before {
    content: "\e581"
}

.fa-tents:before {
    content: "\e582"
}

.fa-terminal:before {
    content: "\f120"
}

.fa-text-height:before {
    content: "\f034"
}

.fa-remove-format:before,.fa-text-slash:before {
    content: "\f87d"
}

.fa-text-width:before {
    content: "\f035"
}

.fa-thermometer:before {
    content: "\f491"
}

.fa-thumbs-down:before {
    content: "\f165"
}

.fa-thumbs-up:before {
    content: "\f164"
}

.fa-thumb-tack:before,.fa-thumbtack:before {
    content: "\f08d"
}

.fa-ticket:before {
    content: "\f145"
}

.fa-ticket-alt:before,.fa-ticket-simple:before {
    content: "\f3ff"
}

.fa-timeline:before {
    content: "\e29c"
}

.fa-toggle-off:before {
    content: "\f204"
}

.fa-toggle-on:before {
    content: "\f205"
}

.fa-toilet:before {
    content: "\f7d8"
}

.fa-toilet-paper:before {
    content: "\f71e"
}

.fa-toilet-paper-slash:before {
    content: "\e072"
}

.fa-toilet-portable:before {
    content: "\e583"
}

.fa-toilets-portable:before {
    content: "\e584"
}

.fa-toolbox:before {
    content: "\f552"
}

.fa-tooth:before {
    content: "\f5c9"
}

.fa-torii-gate:before {
    content: "\f6a1"
}

.fa-tornado:before {
    content: "\f76f"
}

.fa-broadcast-tower:before,.fa-tower-broadcast:before {
    content: "\f519"
}

.fa-tower-cell:before {
    content: "\e585"
}

.fa-tower-observation:before {
    content: "\e586"
}

.fa-tractor:before {
    content: "\f722"
}

.fa-trademark:before {
    content: "\f25c"
}

.fa-traffic-light:before {
    content: "\f637"
}

.fa-trailer:before {
    content: "\e041"
}

.fa-train:before {
    content: "\f238"
}

.fa-subway:before,.fa-train-subway:before {
    content: "\f239"
}

.fa-train-tram:before,.fa-tram:before {
    content: "\f7da"
}

.fa-transgender-alt:before,.fa-transgender:before {
    content: "\f225"
}

.fa-trash:before {
    content: "\f1f8"
}

.fa-trash-arrow-up:before,.fa-trash-restore:before {
    content: "\f829"
}

.fa-trash-alt:before,.fa-trash-can:before {
    content: "\f2ed"
}

.fa-trash-can-arrow-up:before,.fa-trash-restore-alt:before {
    content: "\f82a"
}

.fa-tree:before {
    content: "\f1bb"
}

.fa-tree-city:before {
    content: "\e587"
}

.fa-exclamation-triangle:before,.fa-triangle-exclamation:before,.fa-warning:before {
    content: "\f071"
}

.fa-trophy:before {
    content: "\f091"
}

.fa-trowel:before {
    content: "\e589"
}

.fa-trowel-bricks:before {
    content: "\e58a"
}

.fa-truck:before {
    content: "\f0d1"
}

.fa-truck-arrow-right:before {
    content: "\e58b"
}

.fa-truck-droplet:before {
    content: "\e58c"
}

.fa-shipping-fast:before,.fa-truck-fast:before {
    content: "\f48b"
}

.fa-truck-field:before {
    content: "\e58d"
}

.fa-truck-field-un:before {
    content: "\e58e"
}

.fa-truck-front:before {
    content: "\e2b7"
}

.fa-ambulance:before,.fa-truck-medical:before {
    content: "\f0f9"
}

.fa-truck-monster:before {
    content: "\f63b"
}

.fa-truck-moving:before {
    content: "\f4df"
}

.fa-truck-pickup:before {
    content: "\f63c"
}

.fa-truck-plane:before {
    content: "\e58f"
}

.fa-truck-loading:before,.fa-truck-ramp-box:before {
    content: "\f4de"
}

.fa-teletype:before,.fa-tty:before {
    content: "\f1e4"
}

.fa-try:before,.fa-turkish-lira-sign:before,.fa-turkish-lira:before {
    content: "\e2bb"
}

.fa-level-down-alt:before,.fa-turn-down:before {
    content: "\f3be"
}

.fa-level-up-alt:before,.fa-turn-up:before {
    content: "\f3bf"
}

.fa-television:before,.fa-tv-alt:before,.fa-tv:before {
    content: "\f26c"
}

.fa-u:before {
    content: "\55"
}

.fa-umbrella:before {
    content: "\f0e9"
}

.fa-umbrella-beach:before {
    content: "\f5ca"
}

.fa-underline:before {
    content: "\f0cd"
}

.fa-universal-access:before {
    content: "\f29a"
}

.fa-unlock:before {
    content: "\f09c"
}

.fa-unlock-alt:before,.fa-unlock-keyhole:before {
    content: "\f13e"
}

.fa-arrows-alt-v:before,.fa-up-down:before {
    content: "\f338"
}

.fa-arrows-alt:before,.fa-up-down-left-right:before {
    content: "\f0b2"
}

.fa-long-arrow-alt-up:before,.fa-up-long:before {
    content: "\f30c"
}

.fa-expand-alt:before,.fa-up-right-and-down-left-from-center:before {
    content: "\f424"
}

.fa-external-link-alt:before,.fa-up-right-from-square:before {
    content: "\f35d"
}

.fa-upload:before {
    content: "\f093"
}

.fa-user:before {
    content: "\f007"
}

.fa-user-astronaut:before {
    content: "\f4fb"
}

.fa-user-check:before {
    content: "\f4fc"
}

.fa-user-clock:before {
    content: "\f4fd"
}

.fa-user-doctor:before,.fa-user-md:before {
    content: "\f0f0"
}

.fa-user-cog:before,.fa-user-gear:before {
    content: "\f4fe"
}

.fa-user-graduate:before {
    content: "\f501"
}

.fa-user-friends:before,.fa-user-group:before {
    content: "\f500"
}

.fa-user-injured:before {
    content: "\f728"
}

.fa-user-alt:before,.fa-user-large:before {
    content: "\f406"
}

.fa-user-alt-slash:before,.fa-user-large-slash:before {
    content: "\f4fa"
}

.fa-user-lock:before {
    content: "\f502"
}

.fa-user-minus:before {
    content: "\f503"
}

.fa-user-ninja:before {
    content: "\f504"
}

.fa-user-nurse:before {
    content: "\f82f"
}

.fa-user-edit:before,.fa-user-pen:before {
    content: "\f4ff"
}

.fa-user-plus:before {
    content: "\f234"
}

.fa-user-secret:before {
    content: "\f21b"
}

.fa-user-shield:before {
    content: "\f505"
}

.fa-user-slash:before {
    content: "\f506"
}

.fa-user-tag:before {
    content: "\f507"
}

.fa-user-tie:before {
    content: "\f508"
}

.fa-user-times:before,.fa-user-xmark:before {
    content: "\f235"
}

.fa-users:before {
    content: "\f0c0"
}

.fa-users-between-lines:before {
    content: "\e591"
}

.fa-users-cog:before,.fa-users-gear:before {
    content: "\f509"
}

.fa-users-line:before {
    content: "\e592"
}

.fa-users-rays:before {
    content: "\e593"
}

.fa-users-rectangle:before {
    content: "\e594"
}

.fa-users-slash:before {
    content: "\e073"
}

.fa-users-viewfinder:before {
    content: "\e595"
}

.fa-cutlery:before,.fa-utensils:before {
    content: "\f2e7"
}

.fa-v:before {
    content: "\56"
}

.fa-shuttle-van:before,.fa-van-shuttle:before {
    content: "\f5b6"
}

.fa-vault:before {
    content: "\e2c5"
}

.fa-vector-square:before {
    content: "\f5cb"
}

.fa-venus:before {
    content: "\f221"
}

.fa-venus-double:before {
    content: "\f226"
}

.fa-venus-mars:before {
    content: "\f228"
}

.fa-vest:before {
    content: "\e085"
}

.fa-vest-patches:before {
    content: "\e086"
}

.fa-vial:before {
    content: "\f492"
}

.fa-vial-circle-check:before {
    content: "\e596"
}

.fa-vial-virus:before {
    content: "\e597"
}

.fa-vials:before {
    content: "\f493"
}

.fa-video-camera:before,.fa-video:before {
    content: "\f03d"
}

.fa-video-slash:before {
    content: "\f4e2"
}

.fa-vihara:before {
    content: "\f6a7"
}

.fa-virus:before {
    content: "\e074"
}

.fa-virus-covid:before {
    content: "\e4a8"
}

.fa-virus-covid-slash:before {
    content: "\e4a9"
}

.fa-virus-slash:before {
    content: "\e075"
}

.fa-viruses:before {
    content: "\e076"
}

.fa-voicemail:before {
    content: "\f897"
}

.fa-volcano:before {
    content: "\f770"
}

.fa-volleyball-ball:before,.fa-volleyball:before {
    content: "\f45f"
}

.fa-volume-high:before,.fa-volume-up:before {
    content: "\f028"
}

.fa-volume-down:before,.fa-volume-low:before {
    content: "\f027"
}

.fa-volume-off:before {
    content: "\f026"
}

.fa-volume-mute:before,.fa-volume-times:before,.fa-volume-xmark:before {
    content: "\f6a9"
}

.fa-vr-cardboard:before {
    content: "\f729"
}

.fa-w:before {
    content: "\57"
}

.fa-walkie-talkie:before {
    content: "\f8ef"
}

.fa-wallet:before {
    content: "\f555"
}

.fa-magic:before,.fa-wand-magic:before {
    content: "\f0d0"
}

.fa-magic-wand-sparkles:before,.fa-wand-magic-sparkles:before {
    content: "\e2ca"
}

.fa-wand-sparkles:before {
    content: "\f72b"
}

.fa-warehouse:before {
    content: "\f494"
}

.fa-water:before {
    content: "\f773"
}

.fa-ladder-water:before,.fa-swimming-pool:before,.fa-water-ladder:before {
    content: "\f5c5"
}

.fa-wave-square:before {
    content: "\f83e"
}

.fa-weight-hanging:before {
    content: "\f5cd"
}

.fa-weight-scale:before,.fa-weight:before {
    content: "\f496"
}

.fa-wheat-alt:before,.fa-wheat-awn:before {
    content: "\e2cd"
}

.fa-wheat-awn-circle-exclamation:before {
    content: "\e598"
}

.fa-wheelchair:before {
    content: "\f193"
}

.fa-wheelchair-alt:before,.fa-wheelchair-move:before {
    content: "\e2ce"
}

.fa-glass-whiskey:before,.fa-whiskey-glass:before {
    content: "\f7a0"
}

.fa-wifi-3:before,.fa-wifi-strong:before,.fa-wifi:before {
    content: "\f1eb"
}

.fa-wind:before {
    content: "\f72e"
}

.fa-window-maximize:before {
    content: "\f2d0"
}

.fa-window-minimize:before {
    content: "\f2d1"
}

.fa-window-restore:before {
    content: "\f2d2"
}

.fa-wine-bottle:before {
    content: "\f72f"
}

.fa-wine-glass:before {
    content: "\f4e3"
}

.fa-wine-glass-alt:before,.fa-wine-glass-empty:before {
    content: "\f5ce"
}

.fa-krw:before,.fa-won-sign:before,.fa-won:before {
    content: "\f159"
}

.fa-worm:before {
    content: "\e599"
}

.fa-wrench:before {
    content: "\f0ad"
}

.fa-x:before {
    content: "\58"
}

.fa-x-ray:before {
    content: "\f497"
}

.fa-close:before,.fa-multiply:before,.fa-remove:before,.fa-times:before,.fa-xmark:before {
    content: "\f00d"
}

.fa-xmarks-lines:before {
    content: "\e59a"
}

.fa-y:before {
    content: "\59"
}

.fa-cny:before,.fa-jpy:before,.fa-rmb:before,.fa-yen-sign:before,.fa-yen:before {
    content: "\f157"
}

.fa-yin-yang:before {
    content: "\f6ad"
}

.fa-z:before {
    content: "\5a"
}

.fa-sr-only,.fa-sr-only-focusable:not(:focus),.sr-only,.sr-only-focusable:not(:focus) {
    clip: rect(0,0,0,0);
    border-width: 0;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px
}

:host,:root {
    --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands"
}

@font-face {
    font-display: block;
    font-family: Font Awesome\ 6 Brands;
    font-style: normal;
    font-weight: 400;
    src: url(/static/media/fa-brands-400.ebb7a127d2d8ee6f1832.woff2) format("woff2"),url(/static/media/fa-brands-400.b823fc0dbb5a5f0c21bb.ttf) format("truetype")
}

.fa-brands,.fab {
    font-family: Font Awesome\ 6 Brands;
    font-weight: 400
}

.fa-42-group:before,.fa-innosoft:before {
    content: "\e080"
}

.fa-500px:before {
    content: "\f26e"
}

.fa-accessible-icon:before {
    content: "\f368"
}

.fa-accusoft:before {
    content: "\f369"
}

.fa-adn:before {
    content: "\f170"
}

.fa-adversal:before {
    content: "\f36a"
}

.fa-affiliatetheme:before {
    content: "\f36b"
}

.fa-airbnb:before {
    content: "\f834"
}

.fa-algolia:before {
    content: "\f36c"
}

.fa-alipay:before {
    content: "\f642"
}

.fa-amazon:before {
    content: "\f270"
}

.fa-amazon-pay:before {
    content: "\f42c"
}

.fa-amilia:before {
    content: "\f36d"
}

.fa-android:before {
    content: "\f17b"
}

.fa-angellist:before {
    content: "\f209"
}

.fa-angrycreative:before {
    content: "\f36e"
}

.fa-angular:before {
    content: "\f420"
}

.fa-app-store:before {
    content: "\f36f"
}

.fa-app-store-ios:before {
    content: "\f370"
}

.fa-apper:before {
    content: "\f371"
}

.fa-apple:before {
    content: "\f179"
}

.fa-apple-pay:before {
    content: "\f415"
}

.fa-artstation:before {
    content: "\f77a"
}

.fa-asymmetrik:before {
    content: "\f372"
}

.fa-atlassian:before {
    content: "\f77b"
}

.fa-audible:before {
    content: "\f373"
}

.fa-autoprefixer:before {
    content: "\f41c"
}

.fa-avianex:before {
    content: "\f374"
}

.fa-aviato:before {
    content: "\f421"
}

.fa-aws:before {
    content: "\f375"
}

.fa-bandcamp:before {
    content: "\f2d5"
}

.fa-battle-net:before {
    content: "\f835"
}

.fa-behance:before {
    content: "\f1b4"
}

.fa-behance-square:before {
    content: "\f1b5"
}

.fa-bilibili:before {
    content: "\e3d9"
}

.fa-bimobject:before {
    content: "\f378"
}

.fa-bitbucket:before {
    content: "\f171"
}

.fa-bitcoin:before {
    content: "\f379"
}

.fa-bity:before {
    content: "\f37a"
}

.fa-black-tie:before {
    content: "\f27e"
}

.fa-blackberry:before {
    content: "\f37b"
}

.fa-blogger:before {
    content: "\f37c"
}

.fa-blogger-b:before {
    content: "\f37d"
}

.fa-bluetooth:before {
    content: "\f293"
}

.fa-bluetooth-b:before {
    content: "\f294"
}

.fa-bootstrap:before {
    content: "\f836"
}

.fa-bots:before {
    content: "\e340"
}

.fa-btc:before {
    content: "\f15a"
}

.fa-buffer:before {
    content: "\f837"
}

.fa-buromobelexperte:before {
    content: "\f37f"
}

.fa-buy-n-large:before {
    content: "\f8a6"
}

.fa-buysellads:before {
    content: "\f20d"
}

.fa-canadian-maple-leaf:before {
    content: "\f785"
}

.fa-cc-amazon-pay:before {
    content: "\f42d"
}

.fa-cc-amex:before {
    content: "\f1f3"
}

.fa-cc-apple-pay:before {
    content: "\f416"
}

.fa-cc-diners-club:before {
    content: "\f24c"
}

.fa-cc-discover:before {
    content: "\f1f2"
}

.fa-cc-jcb:before {
    content: "\f24b"
}

.fa-cc-mastercard:before {
    content: "\f1f1"
}

.fa-cc-paypal:before {
    content: "\f1f4"
}

.fa-cc-stripe:before {
    content: "\f1f5"
}

.fa-cc-visa:before {
    content: "\f1f0"
}

.fa-centercode:before {
    content: "\f380"
}

.fa-centos:before {
    content: "\f789"
}

.fa-chrome:before {
    content: "\f268"
}

.fa-chromecast:before {
    content: "\f838"
}

.fa-cloudflare:before {
    content: "\e07d"
}

.fa-cloudscale:before {
    content: "\f383"
}

.fa-cloudsmith:before {
    content: "\f384"
}

.fa-cloudversify:before {
    content: "\f385"
}

.fa-cmplid:before {
    content: "\e360"
}

.fa-codepen:before {
    content: "\f1cb"
}

.fa-codiepie:before {
    content: "\f284"
}

.fa-confluence:before {
    content: "\f78d"
}

.fa-connectdevelop:before {
    content: "\f20e"
}

.fa-contao:before {
    content: "\f26d"
}

.fa-cotton-bureau:before {
    content: "\f89e"
}

.fa-cpanel:before {
    content: "\f388"
}

.fa-creative-commons:before {
    content: "\f25e"
}

.fa-creative-commons-by:before {
    content: "\f4e7"
}

.fa-creative-commons-nc:before {
    content: "\f4e8"
}

.fa-creative-commons-nc-eu:before {
    content: "\f4e9"
}

.fa-creative-commons-nc-jp:before {
    content: "\f4ea"
}

.fa-creative-commons-nd:before {
    content: "\f4eb"
}

.fa-creative-commons-pd:before {
    content: "\f4ec"
}

.fa-creative-commons-pd-alt:before {
    content: "\f4ed"
}

.fa-creative-commons-remix:before {
    content: "\f4ee"
}

.fa-creative-commons-sa:before {
    content: "\f4ef"
}

.fa-creative-commons-sampling:before {
    content: "\f4f0"
}

.fa-creative-commons-sampling-plus:before {
    content: "\f4f1"
}

.fa-creative-commons-share:before {
    content: "\f4f2"
}

.fa-creative-commons-zero:before {
    content: "\f4f3"
}

.fa-critical-role:before {
    content: "\f6c9"
}

.fa-css3:before {
    content: "\f13c"
}

.fa-css3-alt:before {
    content: "\f38b"
}

.fa-cuttlefish:before {
    content: "\f38c"
}

.fa-d-and-d:before {
    content: "\f38d"
}

.fa-d-and-d-beyond:before {
    content: "\f6ca"
}

.fa-dailymotion:before {
    content: "\e052"
}

.fa-dashcube:before {
    content: "\f210"
}

.fa-deezer:before {
    content: "\e077"
}

.fa-delicious:before {
    content: "\f1a5"
}

.fa-deploydog:before {
    content: "\f38e"
}

.fa-deskpro:before {
    content: "\f38f"
}

.fa-dev:before {
    content: "\f6cc"
}

.fa-deviantart:before {
    content: "\f1bd"
}

.fa-dhl:before {
    content: "\f790"
}

.fa-diaspora:before {
    content: "\f791"
}

.fa-digg:before {
    content: "\f1a6"
}

.fa-digital-ocean:before {
    content: "\f391"
}

.fa-discord:before {
    content: "\f392"
}

.fa-discourse:before {
    content: "\f393"
}

.fa-dochub:before {
    content: "\f394"
}

.fa-docker:before {
    content: "\f395"
}

.fa-draft2digital:before {
    content: "\f396"
}

.fa-dribbble:before {
    content: "\f17d"
}

.fa-dribbble-square:before {
    content: "\f397"
}

.fa-dropbox:before {
    content: "\f16b"
}

.fa-drupal:before {
    content: "\f1a9"
}

.fa-dyalog:before {
    content: "\f399"
}

.fa-earlybirds:before {
    content: "\f39a"
}

.fa-ebay:before {
    content: "\f4f4"
}

.fa-edge:before {
    content: "\f282"
}

.fa-edge-legacy:before {
    content: "\e078"
}

.fa-elementor:before {
    content: "\f430"
}

.fa-ello:before {
    content: "\f5f1"
}

.fa-ember:before {
    content: "\f423"
}

.fa-empire:before {
    content: "\f1d1"
}

.fa-envira:before {
    content: "\f299"
}

.fa-erlang:before {
    content: "\f39d"
}

.fa-ethereum:before {
    content: "\f42e"
}

.fa-etsy:before {
    content: "\f2d7"
}

.fa-evernote:before {
    content: "\f839"
}

.fa-expeditedssl:before {
    content: "\f23e"
}

.fa-facebook:before {
    content: "\f09a"
}

.fa-facebook-f:before {
    content: "\f39e"
}

.fa-facebook-messenger:before {
    content: "\f39f"
}

.fa-facebook-square:before {
    content: "\f082"
}

.fa-fantasy-flight-games:before {
    content: "\f6dc"
}

.fa-fedex:before {
    content: "\f797"
}

.fa-fedora:before {
    content: "\f798"
}

.fa-figma:before {
    content: "\f799"
}

.fa-firefox:before {
    content: "\f269"
}

.fa-firefox-browser:before {
    content: "\e007"
}

.fa-first-order:before {
    content: "\f2b0"
}

.fa-first-order-alt:before {
    content: "\f50a"
}

.fa-firstdraft:before {
    content: "\f3a1"
}

.fa-flickr:before {
    content: "\f16e"
}

.fa-flipboard:before {
    content: "\f44d"
}

.fa-fly:before {
    content: "\f417"
}

.fa-font-awesome-flag:before,.fa-font-awesome-logo-full:before,.fa-font-awesome:before {
    content: "\f2b4"
}

.fa-fonticons:before {
    content: "\f280"
}

.fa-fonticons-fi:before {
    content: "\f3a2"
}

.fa-fort-awesome:before {
    content: "\f286"
}

.fa-fort-awesome-alt:before {
    content: "\f3a3"
}

.fa-forumbee:before {
    content: "\f211"
}

.fa-foursquare:before {
    content: "\f180"
}

.fa-free-code-camp:before {
    content: "\f2c5"
}

.fa-freebsd:before {
    content: "\f3a4"
}

.fa-fulcrum:before {
    content: "\f50b"
}

.fa-galactic-republic:before {
    content: "\f50c"
}

.fa-galactic-senate:before {
    content: "\f50d"
}

.fa-get-pocket:before {
    content: "\f265"
}

.fa-gg:before {
    content: "\f260"
}

.fa-gg-circle:before {
    content: "\f261"
}

.fa-git:before {
    content: "\f1d3"
}

.fa-git-alt:before {
    content: "\f841"
}

.fa-git-square:before {
    content: "\f1d2"
}

.fa-github:before {
    content: "\f09b"
}

.fa-github-alt:before {
    content: "\f113"
}

.fa-github-square:before {
    content: "\f092"
}

.fa-gitkraken:before {
    content: "\f3a6"
}

.fa-gitlab:before {
    content: "\f296"
}

.fa-gitter:before {
    content: "\f426"
}

.fa-glide:before {
    content: "\f2a5"
}

.fa-glide-g:before {
    content: "\f2a6"
}

.fa-gofore:before {
    content: "\f3a7"
}

.fa-golang:before {
    content: "\e40f"
}

.fa-goodreads:before {
    content: "\f3a8"
}

.fa-goodreads-g:before {
    content: "\f3a9"
}

.fa-google:before {
    content: "\f1a0"
}

.fa-google-drive:before {
    content: "\f3aa"
}

.fa-google-pay:before {
    content: "\e079"
}

.fa-google-play:before {
    content: "\f3ab"
}

.fa-google-plus:before {
    content: "\f2b3"
}

.fa-google-plus-g:before {
    content: "\f0d5"
}

.fa-google-plus-square:before {
    content: "\f0d4"
}

.fa-google-wallet:before {
    content: "\f1ee"
}

.fa-gratipay:before {
    content: "\f184"
}

.fa-grav:before {
    content: "\f2d6"
}

.fa-gripfire:before {
    content: "\f3ac"
}

.fa-grunt:before {
    content: "\f3ad"
}

.fa-guilded:before {
    content: "\e07e"
}

.fa-gulp:before {
    content: "\f3ae"
}

.fa-hacker-news:before {
    content: "\f1d4"
}

.fa-hacker-news-square:before {
    content: "\f3af"
}

.fa-hackerrank:before {
    content: "\f5f7"
}

.fa-hashnode:before {
    content: "\e499"
}

.fa-hips:before {
    content: "\f452"
}

.fa-hire-a-helper:before {
    content: "\f3b0"
}

.fa-hive:before {
    content: "\e07f"
}

.fa-hooli:before {
    content: "\f427"
}

.fa-hornbill:before {
    content: "\f592"
}

.fa-hotjar:before {
    content: "\f3b1"
}

.fa-houzz:before {
    content: "\f27c"
}

.fa-html5:before {
    content: "\f13b"
}

.fa-hubspot:before {
    content: "\f3b2"
}

.fa-ideal:before {
    content: "\e013"
}

.fa-imdb:before {
    content: "\f2d8"
}

.fa-instagram:before {
    content: "\f16d"
}

.fa-instagram-square:before {
    content: "\e055"
}

.fa-instalod:before {
    content: "\e081"
}

.fa-intercom:before {
    content: "\f7af"
}

.fa-internet-explorer:before {
    content: "\f26b"
}

.fa-invision:before {
    content: "\f7b0"
}

.fa-ioxhost:before {
    content: "\f208"
}

.fa-itch-io:before {
    content: "\f83a"
}

.fa-itunes:before {
    content: "\f3b4"
}

.fa-itunes-note:before {
    content: "\f3b5"
}

.fa-java:before {
    content: "\f4e4"
}

.fa-jedi-order:before {
    content: "\f50e"
}

.fa-jenkins:before {
    content: "\f3b6"
}

.fa-jira:before {
    content: "\f7b1"
}

.fa-joget:before {
    content: "\f3b7"
}

.fa-joomla:before {
    content: "\f1aa"
}

.fa-js:before {
    content: "\f3b8"
}

.fa-js-square:before {
    content: "\f3b9"
}

.fa-jsfiddle:before {
    content: "\f1cc"
}

.fa-kaggle:before {
    content: "\f5fa"
}

.fa-keybase:before {
    content: "\f4f5"
}

.fa-keycdn:before {
    content: "\f3ba"
}

.fa-kickstarter:before {
    content: "\f3bb"
}

.fa-kickstarter-k:before {
    content: "\f3bc"
}

.fa-korvue:before {
    content: "\f42f"
}

.fa-laravel:before {
    content: "\f3bd"
}

.fa-lastfm:before {
    content: "\f202"
}

.fa-lastfm-square:before {
    content: "\f203"
}

.fa-leanpub:before {
    content: "\f212"
}

.fa-less:before {
    content: "\f41d"
}

.fa-line:before {
    content: "\f3c0"
}

.fa-linkedin:before {
    content: "\f08c"
}

.fa-linkedin-in:before {
    content: "\f0e1"
}

.fa-linode:before {
    content: "\f2b8"
}

.fa-linux:before {
    content: "\f17c"
}

.fa-lyft:before {
    content: "\f3c3"
}

.fa-magento:before {
    content: "\f3c4"
}

.fa-mailchimp:before {
    content: "\f59e"
}

.fa-mandalorian:before {
    content: "\f50f"
}

.fa-markdown:before {
    content: "\f60f"
}

.fa-mastodon:before {
    content: "\f4f6"
}

.fa-maxcdn:before {
    content: "\f136"
}

.fa-mdb:before {
    content: "\f8ca"
}

.fa-medapps:before {
    content: "\f3c6"
}

.fa-medium-m:before,.fa-medium:before {
    content: "\f23a"
}

.fa-medrt:before {
    content: "\f3c8"
}

.fa-meetup:before {
    content: "\f2e0"
}

.fa-megaport:before {
    content: "\f5a3"
}

.fa-mendeley:before {
    content: "\f7b3"
}

.fa-microblog:before {
    content: "\e01a"
}

.fa-microsoft:before {
    content: "\f3ca"
}

.fa-mix:before {
    content: "\f3cb"
}

.fa-mixcloud:before {
    content: "\f289"
}

.fa-mixer:before {
    content: "\e056"
}

.fa-mizuni:before {
    content: "\f3cc"
}

.fa-modx:before {
    content: "\f285"
}

.fa-monero:before {
    content: "\f3d0"
}

.fa-napster:before {
    content: "\f3d2"
}

.fa-neos:before {
    content: "\f612"
}

.fa-nfc-directional:before {
    content: "\e530"
}

.fa-nfc-symbol:before {
    content: "\e531"
}

.fa-nimblr:before {
    content: "\f5a8"
}

.fa-node:before {
    content: "\f419"
}

.fa-node-js:before {
    content: "\f3d3"
}

.fa-npm:before {
    content: "\f3d4"
}

.fa-ns8:before {
    content: "\f3d5"
}

.fa-nutritionix:before {
    content: "\f3d6"
}

.fa-octopus-deploy:before {
    content: "\e082"
}

.fa-odnoklassniki:before {
    content: "\f263"
}

.fa-odnoklassniki-square:before {
    content: "\f264"
}

.fa-old-republic:before {
    content: "\f510"
}

.fa-opencart:before {
    content: "\f23d"
}

.fa-openid:before {
    content: "\f19b"
}

.fa-opera:before {
    content: "\f26a"
}

.fa-optin-monster:before {
    content: "\f23c"
}

.fa-orcid:before {
    content: "\f8d2"
}

.fa-osi:before {
    content: "\f41a"
}

.fa-padlet:before {
    content: "\e4a0"
}

.fa-page4:before {
    content: "\f3d7"
}

.fa-pagelines:before {
    content: "\f18c"
}

.fa-palfed:before {
    content: "\f3d8"
}

.fa-patreon:before {
    content: "\f3d9"
}

.fa-paypal:before {
    content: "\f1ed"
}

.fa-perbyte:before {
    content: "\e083"
}

.fa-periscope:before {
    content: "\f3da"
}

.fa-phabricator:before {
    content: "\f3db"
}

.fa-phoenix-framework:before {
    content: "\f3dc"
}

.fa-phoenix-squadron:before {
    content: "\f511"
}

.fa-php:before {
    content: "\f457"
}

.fa-pied-piper:before {
    content: "\f2ae"
}

.fa-pied-piper-alt:before {
    content: "\f1a8"
}

.fa-pied-piper-hat:before {
    content: "\f4e5"
}

.fa-pied-piper-pp:before {
    content: "\f1a7"
}

.fa-pied-piper-square:before {
    content: "\e01e"
}

.fa-pinterest:before {
    content: "\f0d2"
}

.fa-pinterest-p:before {
    content: "\f231"
}

.fa-pinterest-square:before {
    content: "\f0d3"
}

.fa-pix:before {
    content: "\e43a"
}

.fa-playstation:before {
    content: "\f3df"
}

.fa-product-hunt:before {
    content: "\f288"
}

.fa-pushed:before {
    content: "\f3e1"
}

.fa-python:before {
    content: "\f3e2"
}

.fa-qq:before {
    content: "\f1d6"
}

.fa-quinscape:before {
    content: "\f459"
}

.fa-quora:before {
    content: "\f2c4"
}

.fa-r-project:before {
    content: "\f4f7"
}

.fa-raspberry-pi:before {
    content: "\f7bb"
}

.fa-ravelry:before {
    content: "\f2d9"
}

.fa-react:before {
    content: "\f41b"
}

.fa-reacteurope:before {
    content: "\f75d"
}

.fa-readme:before {
    content: "\f4d5"
}

.fa-rebel:before {
    content: "\f1d0"
}

.fa-red-river:before {
    content: "\f3e3"
}

.fa-reddit:before {
    content: "\f1a1"
}

.fa-reddit-alien:before {
    content: "\f281"
}

.fa-reddit-square:before {
    content: "\f1a2"
}

.fa-redhat:before {
    content: "\f7bc"
}

.fa-renren:before {
    content: "\f18b"
}

.fa-replyd:before {
    content: "\f3e6"
}

.fa-researchgate:before {
    content: "\f4f8"
}

.fa-resolving:before {
    content: "\f3e7"
}

.fa-rev:before {
    content: "\f5b2"
}

.fa-rocketchat:before {
    content: "\f3e8"
}

.fa-rockrms:before {
    content: "\f3e9"
}

.fa-rust:before {
    content: "\e07a"
}

.fa-safari:before {
    content: "\f267"
}

.fa-salesforce:before {
    content: "\f83b"
}

.fa-sass:before {
    content: "\f41e"
}

.fa-schlix:before {
    content: "\f3ea"
}

.fa-screenpal:before {
    content: "\e570"
}

.fa-scribd:before {
    content: "\f28a"
}

.fa-searchengin:before {
    content: "\f3eb"
}

.fa-sellcast:before {
    content: "\f2da"
}

.fa-sellsy:before {
    content: "\f213"
}

.fa-servicestack:before {
    content: "\f3ec"
}

.fa-shirtsinbulk:before {
    content: "\f214"
}

.fa-shopify:before {
    content: "\e057"
}

.fa-shopware:before {
    content: "\f5b5"
}

.fa-simplybuilt:before {
    content: "\f215"
}

.fa-sistrix:before {
    content: "\f3ee"
}

.fa-sith:before {
    content: "\f512"
}

.fa-sitrox:before {
    content: "\e44a"
}

.fa-sketch:before {
    content: "\f7c6"
}

.fa-skyatlas:before {
    content: "\f216"
}

.fa-skype:before {
    content: "\f17e"
}

.fa-slack-hash:before,.fa-slack:before {
    content: "\f198"
}

.fa-slideshare:before {
    content: "\f1e7"
}

.fa-snapchat-ghost:before,.fa-snapchat:before {
    content: "\f2ab"
}

.fa-snapchat-square:before {
    content: "\f2ad"
}

.fa-soundcloud:before {
    content: "\f1be"
}

.fa-sourcetree:before {
    content: "\f7d3"
}

.fa-speakap:before {
    content: "\f3f3"
}

.fa-speaker-deck:before {
    content: "\f83c"
}

.fa-spotify:before {
    content: "\f1bc"
}

.fa-square-font-awesome:before {
    content: "\f425"
}

.fa-font-awesome-alt:before,.fa-square-font-awesome-stroke:before {
    content: "\f35c"
}

.fa-squarespace:before {
    content: "\f5be"
}

.fa-stack-exchange:before {
    content: "\f18d"
}

.fa-stack-overflow:before {
    content: "\f16c"
}

.fa-stackpath:before {
    content: "\f842"
}

.fa-staylinked:before {
    content: "\f3f5"
}

.fa-steam:before {
    content: "\f1b6"
}

.fa-steam-square:before {
    content: "\f1b7"
}

.fa-steam-symbol:before {
    content: "\f3f6"
}

.fa-sticker-mule:before {
    content: "\f3f7"
}

.fa-strava:before {
    content: "\f428"
}

.fa-stripe:before {
    content: "\f429"
}

.fa-stripe-s:before {
    content: "\f42a"
}

.fa-studiovinari:before {
    content: "\f3f8"
}

.fa-stumbleupon:before {
    content: "\f1a4"
}

.fa-stumbleupon-circle:before {
    content: "\f1a3"
}

.fa-superpowers:before {
    content: "\f2dd"
}

.fa-supple:before {
    content: "\f3f9"
}

.fa-suse:before {
    content: "\f7d6"
}

.fa-swift:before {
    content: "\f8e1"
}

.fa-symfony:before {
    content: "\f83d"
}

.fa-teamspeak:before {
    content: "\f4f9"
}

.fa-telegram-plane:before,.fa-telegram:before {
    content: "\f2c6"
}

.fa-tencent-weibo:before {
    content: "\f1d5"
}

.fa-the-red-yeti:before {
    content: "\f69d"
}

.fa-themeco:before {
    content: "\f5c6"
}

.fa-themeisle:before {
    content: "\f2b2"
}

.fa-think-peaks:before {
    content: "\f731"
}

.fa-tiktok:before {
    content: "\e07b"
}

.fa-trade-federation:before {
    content: "\f513"
}

.fa-trello:before {
    content: "\f181"
}

.fa-tumblr:before {
    content: "\f173"
}

.fa-tumblr-square:before {
    content: "\f174"
}

.fa-twitch:before {
    content: "\f1e8"
}

.fa-twitter:before {
    content: "\f099"
}

.fa-twitter-square:before {
    content: "\f081"
}

.fa-typo3:before {
    content: "\f42b"
}

.fa-uber:before {
    content: "\f402"
}

.fa-ubuntu:before {
    content: "\f7df"
}

.fa-uikit:before {
    content: "\f403"
}

.fa-umbraco:before {
    content: "\f8e8"
}

.fa-uncharted:before {
    content: "\e084"
}

.fa-uniregistry:before {
    content: "\f404"
}

.fa-unity:before {
    content: "\e049"
}

.fa-unsplash:before {
    content: "\e07c"
}

.fa-untappd:before {
    content: "\f405"
}

.fa-ups:before {
    content: "\f7e0"
}

.fa-usb:before {
    content: "\f287"
}

.fa-usps:before {
    content: "\f7e1"
}

.fa-ussunnah:before {
    content: "\f407"
}

.fa-vaadin:before {
    content: "\f408"
}

.fa-viacoin:before {
    content: "\f237"
}

.fa-viadeo:before {
    content: "\f2a9"
}

.fa-viadeo-square:before {
    content: "\f2aa"
}

.fa-viber:before {
    content: "\f409"
}

.fa-vimeo:before {
    content: "\f40a"
}

.fa-vimeo-square:before {
    content: "\f194"
}

.fa-vimeo-v:before {
    content: "\f27d"
}

.fa-vine:before {
    content: "\f1ca"
}

.fa-vk:before {
    content: "\f189"
}

.fa-vnv:before {
    content: "\f40b"
}

.fa-vuejs:before {
    content: "\f41f"
}

.fa-watchman-monitoring:before {
    content: "\e087"
}

.fa-waze:before {
    content: "\f83f"
}

.fa-weebly:before {
    content: "\f5cc"
}

.fa-weibo:before {
    content: "\f18a"
}

.fa-weixin:before {
    content: "\f1d7"
}

.fa-whatsapp:before {
    content: "\f232"
}

.fa-whatsapp-square:before {
    content: "\f40c"
}

.fa-whmcs:before {
    content: "\f40d"
}

.fa-wikipedia-w:before {
    content: "\f266"
}

.fa-windows:before {
    content: "\f17a"
}

.fa-wirsindhandwerk:before,.fa-wsh:before {
    content: "\e2d0"
}

.fa-wix:before {
    content: "\f5cf"
}

.fa-wizards-of-the-coast:before {
    content: "\f730"
}

.fa-wodu:before {
    content: "\e088"
}

.fa-wolf-pack-battalion:before {
    content: "\f514"
}

.fa-wordpress:before {
    content: "\f19a"
}

.fa-wordpress-simple:before {
    content: "\f411"
}

.fa-wpbeginner:before {
    content: "\f297"
}

.fa-wpexplorer:before {
    content: "\f2de"
}

.fa-wpforms:before {
    content: "\f298"
}

.fa-wpressr:before {
    content: "\f3e4"
}

.fa-xbox:before {
    content: "\f412"
}

.fa-xing:before {
    content: "\f168"
}

.fa-xing-square:before {
    content: "\f169"
}

.fa-y-combinator:before {
    content: "\f23b"
}

.fa-yahoo:before {
    content: "\f19e"
}

.fa-yammer:before {
    content: "\f840"
}

.fa-yandex:before {
    content: "\f413"
}

.fa-yandex-international:before {
    content: "\f414"
}

.fa-yarn:before {
    content: "\f7e3"
}

.fa-yelp:before {
    content: "\f1e9"
}

.fa-yoast:before {
    content: "\f2b1"
}

.fa-youtube:before {
    content: "\f167"
}

.fa-youtube-square:before {
    content: "\f431"
}

.fa-zhihu:before {
    content: "\f63f"
}

:host,:root {
    --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free"
}

@font-face {
    font-display: block;
    font-family: Font Awesome\ 6 Free;
    font-style: normal;
    font-weight: 400;
    src: url(/static/media/fa-regular-400.0caf4c6cf244a90efcc5.woff2) format("woff2"),url(/static/media/fa-regular-400.0d03b1bbd1d62c1e1284.ttf) format("truetype")
}

.fa-regular,.far {
    font-family: Font Awesome\ 6 Free;
    font-weight: 400
}

:host,:root {
    --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free"
}

@font-face {
    font-display: block;
    font-family: Font Awesome\ 6 Free;
    font-style: normal;
    font-weight: 900;
    src: url(/static/media/fa-solid-900.59edf72a325ac2048d60.woff2) format("woff2"),url(/static/media/fa-solid-900.e615bbcb258550973c16.ttf) format("truetype")
}

.fa-solid,.fas {
    font-family: Font Awesome\ 6 Free;
    font-weight: 900
}

@font-face {
    font-display: block;
    font-family: Font Awesome\ 5 Brands;
    font-weight: 400;
    src: url(/static/media/fa-brands-400.ebb7a127d2d8ee6f1832.woff2) format("woff2"),url(/static/media/fa-brands-400.b823fc0dbb5a5f0c21bb.ttf) format("truetype")
}

@font-face {
    font-display: block;
    font-family: Font Awesome\ 5 Free;
    font-weight: 900;
    src: url(/static/media/fa-solid-900.59edf72a325ac2048d60.woff2) format("woff2"),url(/static/media/fa-solid-900.e615bbcb258550973c16.ttf) format("truetype")
}

@font-face {
    font-display: block;
    font-family: Font Awesome\ 5 Free;
    font-weight: 400;
    src: url(/static/media/fa-regular-400.0caf4c6cf244a90efcc5.woff2) format("woff2"),url(/static/media/fa-regular-400.0d03b1bbd1d62c1e1284.ttf) format("truetype")
}

@font-face {
    font-display: block;
    font-family: FontAwesome;
    src: url(/static/media/fa-solid-900.59edf72a325ac2048d60.woff2) format("woff2"),url(/static/media/fa-solid-900.e615bbcb258550973c16.ttf) format("truetype")
}

@font-face {
    font-display: block;
    font-family: FontAwesome;
    src: url(/static/media/fa-brands-400.ebb7a127d2d8ee6f1832.woff2) format("woff2"),url(/static/media/fa-brands-400.b823fc0dbb5a5f0c21bb.ttf) format("truetype")
}

@font-face {
    font-display: block;
    font-family: FontAwesome;
    src: url(/static/media/fa-regular-400.0caf4c6cf244a90efcc5.woff2) format("woff2"),url(/static/media/fa-regular-400.0d03b1bbd1d62c1e1284.ttf) format("truetype");
    unicode-range: u+f003,u+f006,u+f014,u+f016-f017,u+f01a-f01b,u+f01d,u+f022,u+f03e,u+f044,u+f046,u+f05c-f05d,u+f06e,u+f070,u+f087-f088,u+f08a,u+f094,u+f096-f097,u+f09d,u+f0a0,u+f0a2,u+f0a4-f0a7,u+f0c5,u+f0c7,u+f0e5-f0e6,u+f0eb,u+f0f6-f0f8,u+f10c,u+f114-f115,u+f118-f11a,u+f11c-f11d,u+f133,u+f147,u+f14e,u+f150-f152,u+f185-f186,u+f18e,u+f190-f192,u+f196,u+f1c1-f1c9,u+f1d9,u+f1db,u+f1e3,u+f1ea,u+f1f7,u+f1f9,u+f20a,u+f247-f248,u+f24a,u+f24d,u+f255-f25b,u+f25d,u+f271-f274,u+f278,u+f27b,u+f28c,u+f28e,u+f29c,u+f2b5,u+f2b7,u+f2ba,u+f2bc,u+f2be,u+f2c0-f2c1,u+f2c3,u+f2d0,u+f2d2,u+f2d4,u+f2dc
}

@font-face {
    font-display: block;
    font-family: FontAwesome;
    src: url(/static/media/fa-v4compatibility.afac89562a5301459069.woff2) format("woff2"),url(/static/media/fa-v4compatibility.4baccb548138840fa33a.ttf) format("truetype");
    unicode-range: u+f041,u+f047,u+f065-f066,u+f07d-f07e,u+f080,u+f08b,u+f08e,u+f090,u+f09a,u+f0ac,u+f0ae,u+f0b2,u+f0d0,u+f0d6,u+f0e4,u+f0ec,u+f10a-f10b,u+f123,u+f13e,u+f148-f149,u+f14c,u+f156,u+f15e,u+f160-f161,u+f163,u+f175-f178,u+f195,u+f1f8,u+f219,u+f250,u+f252,u+f27a
}

/*# sourceMappingURL=main.6146c3d4.css.map*/
