<template>
    <section class="footer_section">
        <div v-if="isMobile" class="logo_container">
            <img 
                src="~/assets/images/fbs-logo.png"
                alt="Logo for For Beautys Sake"
            >
        </div>
        
        <div class="company_info">
            <h5 @click="toggleSection('companyInfo')">
                Where to find us 
                <span v-if="isMobile">
                    <icon-plus v-if="!isSectionOpen('companyInfo')" />
                    <icon-minus v-else />
                </span>
            </h5>
            <div :class="{ active: isSectionOpen('companyInfo') }">
                <p>18a Water Street</p>
                <p>Newton-le-Willows</p>
                <p>WA12 0EF</p>
            </div>
        </div>

        <div class="quick_links">
            <h5 @click="toggleSection('quickLinks')">
                Useful Links
                <span v-if="isMobile">
                    <icon-plus v-if="!isSectionOpen('quickLinks')" />
                    <icon-minus v-else />
                </span>
            </h5>
            <div :class="{ active: isSectionOpen('quickLinks') }">
                <ul>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/treatments">Treatments</a>
                    </li>
                    <li>
                        <a href="/beauty-by-charlotte">Beauty by Charlotte</a>
                    </li>
                    <li>
                        <a href="/training">Training</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                    <li>
                        <a href="/booking">Bookings</a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="contact_info">
            <h5 @click="toggleSection('contactInfo')">
                Opening hours
                <span v-if="isMobile">
                    <icon-plus v-if="!isSectionOpen('contactInfo')" />
                    <icon-minus v-else />
                </span>
            </h5>
            <div :class="{ active: isSectionOpen('contactInfo') }">
                <ul class="hours">
                    <li>
                        <p>Monday</p>
                        <p>Closed</p>
                    </li>
                    <li>
                        <p>Tuesday</p>
                        <p>10:00 - 18:00</p>
                    </li>
                    <li>
                        <p>Wednesday</p>
                        <p>12:00 - 20:00</p>
                    </li>
                    <li>
                        <p>Thursday</p>
                        <p>12:00 - 20:00</p>
                    </li>
                    <li>
                        <p>Friday</p>
                        <p>10:00 - 16:00</p>
                    </li>
                    <li>
                        <p>Saturday</p>
                        <p>10:00 - 15:00</p>
                    </li>
                    <li>
                        <p>Sunday</p>
                        <p>Closed</p>
                    </li>
                </ul>
            </div>
        </div>

        <div class="legal_info">
            <p>Copyright &copy; ForBeautysSake 2024</p>
        </div>
    </section>
</template>

<script>
import iconPlus from '~/components/Icons/icon-plus.vue';
import iconMinus from '~/components/Icons/icon-minus.vue';

export default {
    name: 'mainFooter',
    components: {
        iconPlus,
        iconMinus,
    },
    data() {
        return {
            openSection: null,
            isMobile: false
        };
    },
    mounted() {
        this.checkScreenSize();
        window.addEventListener('resize', this.checkScreenSize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.checkScreenSize);
    },
    methods: {
        toggleSection(section) {
            this.openSection = this.openSection === section ? null : section;
        },
        isSectionOpen(section) {
            return this.openSection === section;
        },
        checkScreenSize() {
            this.isMobile = window.innerWidth <= 600;
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "~/assets/css/main.scss";
    
    .footer_section {
        background-color: $bg-tertiary;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 5rem;
        justify-content: center;
        padding: 4rem 10rem;
        width: 100vw;
        z-index: 99;

        .logo_container {
            text-align: center;
            width: 100%;

            img {
                max-width: 40%;
            }
        }

        h5 {
            border-bottom: 1px solid $primary-color;
            padding: .5rem 0;
            width: fit-content;
            cursor: pointer;

            @media only screen and (max-width: 600px) {
                align-items: center;
                background: #DDCEC9;
                border-bottom: 1px solid #DDCEC9;
                display: flex;
                justify-content: space-between;
                margin: 0;
                padding: .5rem;
                width: 100%;
            }
        }

        @media only screen and (max-width: 600px) {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;

            .company_info, .quick_links, .contact_info {
                > div {
                    display: none;

                    &.active {
                        background: #DDCEC9;
                        display: block;
                        padding: .5rem;
                    }
                }
            }
        }

        .company_info {
            flex: 1;

            p {
                margin-bottom: .5rem;

                a {
                    color: $primary-color;
                    font-weight: 300;
                    padding: .5rem 0 .2rem;

                    &:hover {
                        border-bottom: 1px solid $primary-color;
                    }
                }
            }
        }

        .quick_links {
            flex: 1;

            ul {
                @media only screen and (max-width: 600px) {
                    display: flex;
                    flex-wrap: wrap;

                    li {
                        width: 50%;

                        a {
                            color: $primary-color;
                            font-weight: 300;
                            padding: .5rem 0 .2rem;

                            &:hover {
                                border-bottom: 1px solid $primary-color;
                            }
                        }
                    }
                }
            }

            li {
                padding: .5rem 0;

                a {
                    font-weight: 400;
                }
            }
        }

        .contact_info {
            flex: 1;

            .hours {
                li {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;

                    p {
                        margin-bottom: .2rem;
                    }
                }
            }
        }

        .legal_info {
            border-top: 1px solid;
            padding: 2rem;
            text-align: center;
            width: 100%;

            ul {
                display: flex;
                flex-direction: row;
                gap: 2rem;
                justify-content: center;
                padding-bottom: 1rem;
            }
        }
    }
</style>
