<template>
    <section class="nav_section">
        <nav>
            <a href="/" class="nav_logo">
                <img 
                    src="~/assets/images/fbs-logo.png"
                    alt="Logo for For Beautys Sake"
                >
            </a>
            <div class="nav-btn" @click="toggleNavMenu">
                <icon-menu />
            </div>
            <ul class="desktop_nav">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                
                <li>
                    <a 
                        href="/treatments" 
                        @click.prevent="toggleDropdown"
                    >
                        Treatments
                        <icon-arrow-down />
                    </a>

                    <ul v-if="isDropdownOpen" class="dropdown-desktop">
                        <li>
                            <a href="/skin-treats">Skin Treats</a>
                        </li>
                        <li>
                            <a href="/injectables">Injectables</a>
                        </li>
                        <li>
                            <a href="/facial-waxing-tinting">Facial Waxing/tinting</a>
                        </li>
                        <li>
                            <a href="/lash-brow-treatments">Lash & Brow</a>
                        </li>
                        <li>
                            <a href="/weekday-combo">Weekday Combo</a>
                        </li>
                        <li>
                            <a href="/semi-perm-makeup">Semi Perm Make-up</a>
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

                    <icon-close 
                        @click="toggleNavMenu" 
                        class="close"
                    />
                </div>

                <div class="mobile_nav_content">
                    <li>
                        <a href="/">
                            Home

                            <icon-arrow-right />
                        </a>
                    </li>

                    <li>
                        <a href="/about">
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
                                <a href="/skin-treats">Skin Treats</a>
                            </li>
                            <li>
                                <a href="/injectables">Injectables</a>
                            </li>
                            <li>
                                <a href="/facial-waxing-tinting">Facial Waxing/tinting</a>
                            </li>
                            <li>
                                <a href="/lash-brow-treatments">Lash & Brow</a>
                            </li>
                            <li>
                                <a href="/weekday-combo">Weekday Combo</a>
                            </li>
                            <li>
                                <a href="/semi-perm-makeup">Semi Perm Make-up</a>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <a href="/contact">
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
    import iconMenu from '~/components/Icons/icon-menu.vue';
    import iconClose from '~/components/Icons/icon-close.vue';

export default {
    name: 'mainNav',
    components: {
        iconArrowDown,
        iconArrowRight,
        iconMenu,
        iconClose,
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
                        background: $bg-primary;
                        border-radius: .35rem;
                        box-shadow: 0 10px 12px 0 rgb(223 223 223);
                        display: flex;
                        flex-direction: column;
                        margin-left: -1rem;
                        padding: 1rem;
                        position: absolute;
                        top: 4rem;
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

                            a {
                                padding: 1rem 0;
                            }
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
                                    padding: .5rem 0;
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