<template>
    <section
        v-editable="blok"
        class="contact-col-2"
    >
        <p v-if="blok?.description?.length">
            {{  blok.description }}
        </p>

        <div class="container">
            <div class="content-container">
                <div class="opening-hours">
                    <h4>Opening Hours</h4>

                    <StoryblokComponent
                        v-for="blok in blok.days"
                        :key="blok._uid"
                        :blok="blok"
                    />
                </div>

                <div class="social-links">
                    <span class="facebook">
                        <a 
                            :href="'https://facebook.com/' + blok.facebook"
                            target="_blank" 
                            rel="noopener"
                        >
                            <icon-facebook />
                        </a>
                    </span>

                    <span class="instagram">
                        <a 
                            :href="'https://www.instagram.com/' + blok.instagram"
                            target="_blank" 
                            rel="noopener"
                        >
                            <icon-instagram />
                        </a>
                    </span>

                    <span class="email">
                        <a :href="'mailto:' + blok.email">
                            <icon-email />
                        </a>
                    </span>
                </div>
            </div>

            <div class="map-container">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.6619821475306!2d-2.6346088187188546!3d53.456628388856075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b058d7bcaefa5%3A0x4e820d11e7773dff!2sFor%20Beauty%E2%80%99s%20Sake!5e0!3m2!1sen!2suk!4v1726947796875!5m2!1sen!2suk"  
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </section>
</template>

<script>
    import iconFacebook from '~/components/Icons/icon-facebook.vue';
    import iconInstagram from '~/components/Icons/icon-instagram.vue';
    import iconEmail from '~/components/Icons/icon-email.vue';

    export default {
        name: 'contactCol2',
        props: {
            componentName: {
                type: String,
                default: 'contact-col-2'
            },
            blok: {
                type: Object,
            }
        },
        components: {
            iconFacebook,
            iconInstagram,
            iconEmail,
        },
    }
</script>

<style lang="scss" scoped>
    @import "~/assets/css/main.scss";

    .contact-col-2 {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        justify-content: center;
        margin: 0 auto;
        padding: 5rem 2rem;
        width: 80%;

        @media (max-width: 600px) {
            padding: 2rem 1rem;
            width: 100%;
        }

        p {
            text-align: center;
        }

        .container {
            display: flex;
            flex-direction: row;

            @media (max-width: 600px) {
                flex-direction: column;
            }
        }

        .content-container {
            display: flex;
            flex-direction: column;
            flex: 1;
            gap: 2rem;
            padding: 1rem 2rem;
            width: 50%;

            @media (max-width: 600px) {
                padding: 1rem;
                width: 100%;
            }
            
            .social-links {
                display: flex;
                gap: 1rem;
            }
        }

        .map-container {
            flex: 1;
            width: 50%;

            @media (max-width: 600px) {
                width: 100%;
            }

            iframe {
                height: 100%;
                width: 100%;
                object-fit: cover;

                @media (max-width: 600px) {
                    height: 20rem;
                }
            }
        }
    }
</style>