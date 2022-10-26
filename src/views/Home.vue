<template>
    <div style="background-color: #e9ffe9; padding-bottom: 50px;">
        <div class="container">
            <router-link :to="{ name: 'Home' }">
                <img src="../assets/idea.png" alt="logo" style="width: 120px; margin-left: -10px" >
            </router-link>
            <div class="row pb-20" style="margin-top: 40px;">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <h1 class="for_h1">WHERE THE WORLD WORKS</h1>
                    <p class="for_p">An online marketplace that connects freelancers and business owners around the world with easy-to-do affordable tasks.</p>
                    <router-link :to="{ name: 'Index' }">
                        <button class="btn btn-success my-3">Explore Ideas</button>
                    </router-link>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consequuntur minima placeat quas veritatis optio nisi doloribus architecto sequi vel temporibus suscipit numquam similique quisquam iusto, asperiores, sunt exercitationem maxime iure atque! Aperiam labore delectus, eligendi id veritatis rerum possimus voluptatibus aut dolorum non debitis et praesentium numquam illo accusamus libero suscipit similique? Officiis perferendis porro eum inventore quam molestiae accusamus explicabo tempore fugiat. Molestiae quae dolorum architecto consequuntur sint ad voluptatum veniam omnis maiores laudantium perspiciatis consectetur, sit neque voluptatem quidem recusandae est molestias perferendis deleniti nemo fugit minus aspernatur. Quas praesentium facere at esse! Fugiat odio eligendi officia?
                </div>
            </div>
        </div>
    </div>


    <div class="container" style="margin-top: 90px;">
        <h2 class="for_h2">ONE MARKETPLACE... <br> MULTIPLE WAYS TO <span v-if="switch_to == 0">GET WORK DONE</span> <span v-if="switch_to == 1">WORK AND LEARN</span></h2>
            <h1 class="for_h4">Switch to</h1>
            <input class="radio" type="radio" v-model="switch_to" value="0"> <b>Freelancer's Pros</b>
            <span class="ms-5 radio"><input type="radio" v-model="switch_to" value="1"> <b>Businerss owner's Pros</b></span>
    </div>


    <div class="container" style="margin-top: 35px;">
        <!-- Show when switch_to 0 -->
        <template v-if="switch_to == 0">
            <div class="row">
                <div col="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
                    <span class="d-flex align-items-center"><span class="list_num">1</span><span style=""><h2 class="for_h22">Hire many workers</h2></span></span>
                </div>
            </div>
            <div class="row" style="margin-top: 20px;">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consequuntur minima placeat quas veritatis optio nisi doloribus architecto sequi vel temporibus suscipit numquam similique quisquam iusto, asperiores, sunt exercitationem maxime iure atque! Aperiam labore delectus, eligendi id veritatis rerum possimus voluptatibus aut dolorum non debitis et praesentium numquam illo accusamus libero suscipit similique? Officiis perferendis porro eum inventore quam molestiae accusamus explicabo tempore fugiat. Molestiae quae dolorum architecto consequuntur sint ad voluptatum veniam omnis maiores laudantium perspiciatis consectetur, sit neque voluptatem quidem recusandae est molestias perferendis deleniti nemo fugit minus aspernatur. Quas praesentium facere at esse! Fugiat odio eligendi officia?
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <h4 class="for_h4">Business owner's idea</h4>
                    <h3 class="for_h3">Set filters and target your ideal freelancer</h3>
                    <p class="for_p">Choose a targeting zone or exclude unwanted countries while posting a job with many tasks. It is a great way to target your perfect freelancer and make sure you only get proper work from the freelancers you desire.</p>
                </div>
            </div>
            <div class="row" style="margin-top: 100px;">
                <div col="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
                    <span class="d-flex"><span class="list_num">2</span> <h2 class="for_h22">Expertise Levels</h2></span>
                </div>
            </div>
            <div class="row" style="margin-top: 20px;">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <h3 class="for_h3">Quality work for an affordable price</h3>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <p class="for_p">
                        When posting a job you can target a larger worker audience, or select a higher level of expertise to ensure your jobs are completed by more experienced freelancers.
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 40px; background-color: #f5f7fa; padding: 30px 15px; border-radius: 0.5rem;">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <h3 class="for_h3">Overview</h3>
                    <p class="for_p">Workers earn badges for their successful experience on the platform. Our level system allows business owners to choose the level of specialist they would like to work with.</p>
                    <router-link :to="{ name: 'Index' }">
                        <button class="btn btn-success my-3">Explore Ideas</button>
                    </router-link>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consequuntur minima placeat quas veritatis optio nisi doloribus architecto sequi vel temporibus suscipit numquam similique quisquam iusto, asperiores, sunt exercitationem maxime iure atque! Aperiam labore delectus, eligendi id veritatis rerum possimus voluptatibus aut dolorum non debitis et praesentium numquam illo accusamus libero suscipit similique? Officiis perferendis porro eum inventore quam molestiae accusamus explicabo tempore fugiat. Molestiae quae dolorum architecto consequuntur sint ad voluptatum veniam omnis maiores laudantium perspiciatis consectetur, sit neque voluptatem quidem recusandae est molestias perferendis deleniti nemo fugit minus aspernatur. Quas praesentium facere at esse! Fugiat odio eligendi officia?
                </div>
            </div>
            <div class="row" style="margin-top: 100px;">
                <div col="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
                    <span class="d-flex"><span class="list_num">3</span> <h2 class="for_h22">SproutGigs API</h2></span>
                </div>
            </div>
            <div class="row" style="margin-top: 20px;">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <h3 class="for_h3">JSON based API where employers can create jobs programatically.</h3>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <p class="for_p">
                        The API has a wide offering of features including topping up your spendable balance. If you require additional features, just ask!
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 40px; background-color: #f5f7fa; padding: 30px 15px; border-radius: 0.5rem;">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <h3 class="for_h3">Overview</h3>
                    <p class="for_p">Every API request needs to be authenticated. You can create or reset you API secret in the tab SETTINGS of your Account Settings page.</p>
                    <router-link :to="{ name: 'Index' }">
                        <button class="btn btn-success my-3">Explore Ideas</button>
                    </router-link>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consequuntur minima placeat quas veritatis optio nisi doloribus architecto sequi vel temporibus suscipit numquam similique quisquam iusto, asperiores, sunt exercitationem maxime iure atque! Aperiam labore delectus, eligendi id veritatis rerum possimus voluptatibus aut dolorum non debitis et praesentium numquam illo accusamus libero suscipit similique? Officiis perferendis porro eum inventore quam molestiae accusamus explicabo tempore fugiat. Molestiae quae dolorum architecto consequuntur sint ad voluptatum veniam omnis maiores laudantium perspiciatis consectetur, sit neque voluptatem quidem recusandae est molestias perferendis deleniti nemo fugit minus aspernatur. Quas praesentium facere at esse! Fugiat odio eligendi officia?
                </div>
            </div>
        </template>


        <!-- Show when switch_to 1 -->
        <template v-if="switch_to == 1">
            <div class="row">
                <div col="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
                    <span class="d-flex align-items-center"><span class="list_num">1</span><span style=""><h2 class="for_h22">Micro Jobs</h2></span></span>
                </div>
            </div>
            <div class="row" style="margin-top: 20px;">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consequuntur minima placeat quas veritatis optio nisi doloribus architecto sequi vel temporibus suscipit numquam similique quisquam iusto, asperiores, sunt exercitationem maxime iure atque! Aperiam labore delectus, eligendi id veritatis rerum possimus voluptatibus aut dolorum non debitis et praesentium numquam illo accusamus libero suscipit similique? Officiis perferendis porro eum inventore quam molestiae accusamus explicabo tempore fugiat. Molestiae quae dolorum architecto consequuntur sint ad voluptatum veniam omnis maiores laudantium perspiciatis consectetur, sit neque voluptatem quidem recusandae est molestias perferendis deleniti nemo fugit minus aspernatur. Quas praesentium facere at esse! Fugiat odio eligendi officia?
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <h4 class="for_h4">Freelancer’s side</h4>
                    <h3 class="for_h3">Deliver work in minutes and get paid fast</h3>
                    <p class="for_p">Micro Jobs are small, easy tasks that require little time to complete. For example, testing an app, helping promote content, data collection, and many others. Get compensated immediately after the task is reviewed, and don’t wait a month or more for payment.</p>
                </div>
            </div>
            <div class="row" style="margin-top: 100px;">
                <div col="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
                    <span class="d-flex"><span class="list_num">2</span> <h2 class="for_h22">Surveys & Offers</h2></span>
                </div>
            </div>
            <div class="row" style="margin-top: 20px;">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <h3 class="for_h3">Take paid surveys and complete offers for quick and easy income</h3>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <p class="for_p">
                        The payouts won't push you to financial freedom overnight, but taking surveys and completing offers for money will provide a significant financial boost when you need it.
                    </p>
                </div>
            </div>
            <div class="row" style="margin-top: 40px; background-color: #fff3cf; padding: 30px 15px; border-radius: 0.5rem;">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <h3 class="for_h3">How it works:</h3>
                    <p class="for_p">Workers earn badges for their successful experience on the platform. Our level system allows business owners to choose the level of specialist they would like to work with.</p>
                    <router-link :to="{ name: 'Index' }">
                        <button class="btn btn-success my-3">Explore Ideas</button>
                    </router-link>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consequuntur minima placeat quas veritatis optio nisi doloribus architecto sequi vel temporibus suscipit numquam similique quisquam iusto, asperiores, sunt exercitationem maxime iure atque! Aperiam labore delectus, eligendi id veritatis rerum possimus voluptatibus aut dolorum non debitis et praesentium numquam illo accusamus libero suscipit similique? Officiis perferendis porro eum inventore quam molestiae accusamus explicabo tempore fugiat. Molestiae quae dolorum architecto consequuntur sint ad voluptatum veniam omnis maiores laudantium perspiciatis consectetur, sit neque voluptatem quidem recusandae est molestias perferendis deleniti nemo fugit minus aspernatur. Quas praesentium facere at esse! Fugiat odio eligendi officia?
                </div>
            </div>
            <div class="row" style="margin-top: 100px;">
                <div col="col-xs-12 col-sm-12 col-md-6 col-lg-6" >
                    <span class="d-flex"><span class="list_num">3</span> <h2 class="for_h22">Influencer marketing</h2></span>
                </div>
            </div>
            <div class="row" style="margin-top: 20px;">
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <h3 class="for_h3">Become an influencer in a favorite product niche or your local area and grab job opportunities from business owners.</h3>
                    <p class="for_p">
                        Being a micro-influencer, you've got a unique opportunity to hyper-focus your social media presence and get paid by businesses looking for precise targeting. Simply get matched with businesses, promote their products and start earning.
                    </p>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consequuntur minima placeat quas veritatis optio nisi doloribus architecto sequi vel temporibus suscipit numquam similique quisquam iusto, asperiores, sunt exercitationem maxime iure atque! Aperiam labore delectus, eligendi id veritatis rerum possimus voluptatibus aut dolorum non debitis et praesentium numquam illo accusamus libero suscipit similique? Officiis perferendis porro eum inventore quam molestiae accusamus explicabo tempore fugiat. Molestiae quae dolorum architecto consequuntur sint ad voluptatum veniam omnis maiores laudantium perspiciatis consectetur, sit neque voluptatem quidem recusandae est molestias perferendis deleniti nemo fugit minus aspernatur. Quas praesentium facere at esse! Fugiat odio eligendi officia?
                </div>
            </div>
        </template>

        <div class="row" style="margin-top: 100px;">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <h2 class="for_h2">Frequently Asked Questions</h2>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <h2 class="for_h2">Frequently Asked Questions</h2>
            </div>
        </div>
    </div>
    <div class="text-center" style="margin-top: 100px; background-color: #f5f7fa; padding: 30px 30px;">
        <div>
            <router-link :to="{ name: 'Home' }">
                <img src="../assets/idea.png" alt="logo" style="width: 120px; margin-left: -10px" >
            </router-link>
        </div>
        <div style="margin-top: 30px; color: #7f7e7e;">
            <p>© 2022 The Vault. All Rights Reserved.</p>
            <span class="">
                <i class="fa-brands fa-facebook" style="margin-right: 40px;"></i>
                <i class="fa-brands fa-instagram" style="margin-right: 40px;"></i>
                <i class="fa-brands fa-linkedin"></i>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            switch_to: 0
        }
    }
}
</script>

<style scoped>
    .list_num {
        padding: 7px 20px;
        font-size: 1.5rem;
        border-radius: 0.25rem;
        color: #fec40f;
        background-color: #fff3cf;
        font-weight: 700;
        margin-right: 2.1875rem;
    }
    .for_h4 {
        color: #22ab59; 
        font-size: 1rem; 
        font-weight: 700;  
        margin-bottom: 0.875rem;
    }
    .for_h3 {
        font-size: 1.875rem; 
        font-weight: 700; 
        margin-bottom: 1.5rem;
    }
    .for_p {
        font-size: 1.25rem;
    }
    .for_h1 {
        font-size: 3.5rem;
        margin-bottom: 0.75rem;
        font-weight: 700;
    }
    .for_h2 {
        font-size: 3rem;
        margin-bottom: 3.75rem;
        font-weight: 700;
    }
    .for_h22 {
        font-size: 2.5rem;
        font-weight: 700;
    }
    .radio {
        accent-color: green;
    }
</style>