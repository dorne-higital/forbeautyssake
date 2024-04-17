<template>
    <section class="nav_section">
        <aside class="social-section">
            <div class="container">
                <span class="contact">
                    <p>Call us:</p>
                    <a href="tel:0123456789">012345689</a>
                </span>

                <span class="socials">
                    <ul>
                        <li><icon-instagram /></li>
                        <li><icon-facebook /></li>
                        <li><icon-tiktok /></li>
                    </ul>
                </span>
            </div>
        </aside>
        <nav>
            <a href="/" class="nav_logo">
                <img 
                    src="~/assets/images/fbs-logo.png" 
                    alt="Logo for For Beautys Sake"
                >
            </a>
            <div class="nav-btn" @click="toggleNavMenu">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="32" width="32" version="1.1" id="Layer_1" viewBox="0 0 293.5 293.5" xml:space="preserve">
                    <g>
                        <g>
                            <g>
                                <path d="M171.603,0h-49.705c-8.612,0-15.618,7.006-15.618,15.618v49.705c0,8.612,7.006,15.618,15.618,15.618h49.705     c8.612,0,15.618-7.006,15.618-15.618V15.618C187.221,7.006,180.215,0,171.603,0z"/>
                                <path d="M171.603,106.279h-49.705c-8.612,0-15.618,7.006-15.618,15.618v49.705c0,8.612,7.006,15.618,15.618,15.618h49.705     c8.612,0,15.618-7.006,15.618-15.618v-49.705C187.221,113.285,180.215,106.279,171.603,106.279z"/>
                                <path d="M171.603,212.559h-49.705c-8.612,0-15.618,7.006-15.618,15.618v49.705c0,8.612,7.006,15.618,15.618,15.618h49.705     c8.612,0,15.618-7.006,15.618-15.618v-49.705C187.221,219.564,180.215,212.559,171.603,212.559z"/>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            <ul class="desktop_nav">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                
                <li>
                    <a 
                        href="/" 
                        @click.prevent="toggleDropdown"
                    >
                        Treatments
                        <icon-arrow-down />
                    </a>

                    <ul v-if="isDropdownOpen" class="dropdown-desktop">
                        <li>
                            <a href="/">Skin Treats</a>
                        </li>
                        <li>
                            <a href="/">Injectables</a>
                        </li>
                        <li>
                            <a href="/">Facial Waxing/tinting</a>
                        </li>
                        <li>
                            <a href="/">Lash & Brow</a>
                        </li>
                        <li>
                            <a href="/">Weekday Combo</a>
                        </li>
                        <li>
                            <a href="/">Semi Perm Make-up</a>
                        </li>
                    </ul>
                </li>
                <li><a href="/contact">Get in Touch</a></li>
                <li><a href="/booking">Book Appointment</a></li>
            </ul>
            <ul 
                v-if="isMobileNavOpen"
                class="mobile_nav"
            >
                <div class="mobile_nav_header">
                    <a href="/" class="nav_logo">
                        <img 
                            src="~/assets/images/fbs-logo.png" 
                            alt="Logo for For Beautys Sake"
                        >
                    </a>

                    <svg 
                        @click="toggleNavMenu" 
                        class="close"
                        xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                    >
                        <g clip-path="url(#clip0_429_11083)">
                            <path d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006" stroke="#292929" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_429_11083">
                                <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>

                <div class="mobile_nav_content">
                    <li>
                        <a href="/">
                            Home

                            <icon-arrow-right />
                        </a>
                    </li>

                    <li>
                        <a href="/">
                            About

                            <icon-arrow-right />
                        </a>
                    </li>

                    <li>
                        <a href="/" @click.prevent="toggleDropdown">
                            Treatments

                            <icon-arrow-right v-if="!isDropdownOpen" />
                            <icon-arrow-down v-if="isDropdownOpen" />
                        </a>

                        <ul v-if="isDropdownOpen" class="dropdown-menu">
                            <li>
                                <a href="/">Skin Treats</a>
                            </li>
                            <li>
                                <a href="/">Injectables</a>
                            </li>
                            <li>
                                <a href="/">Facial Waxing/tinting</a>
                            </li>
                            <li>
                                <a href="/">Lash & Brow</a>
                            </li>
                            <li>
                                <a href="/">Weekday Combo</a>
                            </li>
                            <li>
                                <a href="/">Semi Perm Make-up</a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="/">
                            Get in Touch

                            <icon-arrow-right />
                        </a>
                    </li>

                    <li>
                        <a href="/booking">
                            Book Appointment
                        
                            <icon-arrow-right />
                        </a>
                    </li>
                </div>

                <div class="mobile_nav_footer">
                    <span>
                        <icon-instagram />
                    </span>
                    <span>
                        <icon-facebook />
                    </span>
                    <span>
                        <icon-tiktok />
                    </span>
                </div>
            </ul>
        </nav>
    </section>
</template>

<script>
    import iconArrowDown from '~/components/Icons/icon-arrow-down.vue';
    import iconArrowRight from '~/components/Icons/icon-arrow-right.vue';
    import iconInstagram from '~/components/Icons/icon-instagram.vue';
    import iconFacebook from '~/components/Icons/icon-facebook.vue';
    import iconTiktok from '~/components/Icons/icon-tiktok.vue';

export default {
    name: 'mainNav',
    components: {
        iconArrowDown,
        iconArrowRight,
        iconInstagram,
        iconFacebook,
        iconTiktok,
    },
    data() {
        return {
            isMobileNavOpen: false,
            isDropdownOpen: false
        };
    },
    methods: {
        toggleNavMenu() {
            this.isMobileNavOpen = !this.isMobileNavOpen;
        },
        toggleDropdown() { 
            this.isDropdownOpen = !this.isDropdownOpen;
        },
    }
}
</script>

<style lang="scss" scoped>
    @import "~/assets/css/main.scss";
    
    .nav_section {
        background-color: $bg-primary;
        padding: 0;
        width: 100vw;
        z-index: 99;

        @media only screen and (max-width: 600px) {
            margin: 0;
            position: absolute;
            top: 0;
            width: 100vw;
        }

        .social-section {
            background-color: $color-1;
            padding: .5rem 2rem;

            @media only screen and (max-width: 600px) {
                display: none;
            }

            .container {
                display: flex;
                justify-content: space-between;
                margin: 0 auto;
                max-width: $sw;

                .contact {
                    display: flex;
                    flex-direction: row;
                    gap: .5rem;

                    p {
                        font-weight: 300;
                        line-height: 1.5rem;
                        margin: 0;
                    }

                    a {
                        border-bottom: 1px solid transparent;
                        color: $color-5;
                        font-weight: 500;
                        line-height: 1.5rem;
                        margin: 0;
                        padding: 0;

                        &:hover {
                            border-bottom: 1px solid $color-5;
                            color: $color-5;
                        }
                    }
                }

                .socials {
                    ul {
                        display: flex;
                        flex-direction: row;
                        gap: .7rem;

                        li {

                            svg {
                                height: 1.5rem;
                                width: 1.5rem;
                            }
                        }
                    }
                }
            }
        }

        nav {
            align-items: center;
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
            max-width: $sw;

            .nav_logo {
                line-height: 1.5rem;


                @media only screen and (max-width: 600px) {
                    line-height: 1.2rem;
                }

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


                    @media only screen and (max-width: 600px) {
                        max-width: 10rem;
                    }
                }
            }

            .nav-btn {
                display: none;

                @media only screen and (max-width: 600px) {
                }
            }

            ul {
                display: flex;
                list-style: none;
                margin: 1rem;

                li {
                    display: flex;
                    flex-direction: column;
                    font-weight: 300;
                    font-size: 0.8rem;
                    justify-content: space-between;
                    letter-spacing: 2px;
                    padding: 1em;

                    a {
                        align-items: center;
                        display: flex;
                        flex-grow: 1;
                        justify-content: center;
                    }

                    svg {
                        height: 1rem;
                        width: 1rem;
                    }

                    ul {
                        margin: 1rem 0;
                    }

                    .dropdown-desktop {
                        display: flex;
                        flex-direction: column;
                        position: absolute;
                        top: 7rem;
                        z-index: 10;

                        li {
                            align-items: flex-start;
                            padding: 0;
                        }

                        a {
                            font-weight: 300;
                        }
                    }
                }
            }

            @media only screen and (max-width: 600px) {
                .desktop_nav {
                    display: none;
                }

                .mobile_nav {
                    background-color: white;
                    box-shadow: 0px 2px 20px #929292;
                    flex-direction: column;
                    height: 100dvh;
                    margin: 0;
                    position: fixed;
                    text-align: center;
                    top: 0;
                    width: 100%;
                    z-index: 99;

                    .mobile_nav_header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;

                        .close {
                            cursor: pointer;
                            font-size: 2rem;
                            padding-right: 1.5rem;
                        }
                    }

                    .mobile_nav_content {
                        padding: 1rem 0;

                        li {
                            padding: 0 1rem;
                        }
                        
                        a {
                            align-items: center;
                            border-bottom: 1px solid rgb(228, 228, 228);
                            display: flex;
                            justify-content: space-between;
                        }

                        .dropdown-menu {
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            padding: 0;

                            li {
                                padding: 0;

                                a {
                                    border-bottom: 1px solid transparent;
                                }
                            }
                        }
                    }

                    .mobile_nav_footer {
                        background-color: $color-1;
                        bottom: 0;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-around;
                        padding: 2rem 0;
                        position: absolute;
                        width: 100%;
                    }
                }

                .nav-btn {
                    cursor: pointer;
                    display: block;
                    padding-right: 1.5rem;
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