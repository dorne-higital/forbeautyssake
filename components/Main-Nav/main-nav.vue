<template>
    <section class="nav_section">
        <nav>
            <a href="/" class="nav_logo">
                <img 
                    src="~/assets/images/fbs-logo.png" 
                    alt="Logo for For Beautys Sake"
                >
            </a>
            <div class="nav-btn" onclick="toggleNavMenu()">
                <span class="material-symbols-rounded">
                    density_medium
                </span>
            </div>
            <ul class="desktop_nav">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/treatments">Treatments</a></li>
                <li><a href="/contact">Get in Touch</a></li>
                <li><a href="/booking">Book Appointment</a></li>
            </ul>
            <ul class="mobile_nav" id="nav_menu">
                <section class="mobile_nav_sect">
                    <span
                        class="material-symbols-rounded close"
                        onclick="toggleNavMenu()"
                    >
                        close
                    </span>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Home</a></li>
                </section>
            </ul>
        </nav>
    </section>
</template>

<script>
    export default {
        name: 'mainNab',
        components: {
            
        }
    }
</script>

<style lang="scss" scoped>
    @import "~/assets/css/main.scss";
    
    .nav_section {
        padding: 0 1rem;
        width: calc(100vw - 2rem);
        z-index: 99;

        @media only screen and (max-width: 600px) {
            margin: 0;
            padding: 1rem 0;
            position: absolute;
            top: 0;
            width: 100vw;
        }

        nav {
            align-items: center;
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
            max-width: $sw;

            .nav_logo {
                line-height: 1.5rem;

                &:hover {
                    border-bottom: 2px solid transparent;
                }

                span {
                    font-size: 1.5rem;
                    font-weight: 700;
                }

                img {
                    cursor: pointer;
                    max-width: 12rem;
                }
            }

            .nav-btn {
                display: none;

                @media only screen and (max-width: 600px) {
                    // color: white !important;
                }
            }

            ul {
                display: flex;
                list-style: none;
                margin: 1rem;

                li {
                    padding: 1em;
                    font-weight: 300;
                    font-size: 0.8rem;
                    letter-spacing: 2px;
                }
            }

            .mobile_nav {
                display: none;
            }

            @media only screen and (max-width: 600px) {
                .desktop_nav {
                    display: none;
                }

                .mobile_nav {
                    background-color: white;
                    box-shadow: 0px 2px 20px #929292;
                    display: none;
                    flex-direction: column;
                    position: fixed;
                    top: 0;
                    width: 100%;
                    z-index: 99;
                    margin: 0;
                    padding: 2rem 0;
                    text-align: center;

                    .close {
                        font-size: 2rem;
                        position: absolute;
                        right: 1rem;
                        text-align: right;
                        top: 1rem;
                    }
                }

                .nav-btn {
                    display: block;
                    padding-right: 1.5rem;
                }

                .nav-btn span.material-symbols-outlined {
                    font-size: 40px;
                }

                a.nav_logo,
                .quick_contact_section,
                .about_section_text {
                    padding: 0 1.5rem;
                }

            }

        }
    }
</style>