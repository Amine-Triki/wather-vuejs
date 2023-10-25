<template>
  <main>
      <section class="text-center pt-5 pb-5 ">
        <div class="container">
            <div class="main-title mt-5 mb-5 position-relative">
                <h2>My Projects</h2>
                <p>What I build</p>
            </div>
            <ul class="switcher bg-dark text-white d-flex flex-row py-3 justify-content-around px-0 flex-wrap sm:flex-column ">
                <li class="active" data-cat=".all">All works</li>
                <li data-cat=".Vue-js">Vue js</li>
                <li data-cat=".JavaScript">JavaScript</li>
                <li data-cat=".Wordpress">Wordpress</li>
            </ul>
            <div class="gallery text-start">
                <div class="  gap-5 d-flex justify-content-center flex-wrap" >
                <div class="post all Vue-js mb-3">
                    <div class="card" style="width: 18rem;">
                        <img src="/src/assets/9.webp" class="card-img-top" alt="1.webp">
                        <div class="card-body">
                            <h5 class="card-title">weather website</h5>
                            <p class="card-text">Vue js + BOOTSTRAP</p>
                            <a target="_blank"  href="https://amine-triki.github.io/wather-vuejs/" class="btn btn-primary">Visit</a>
                        </div>
                    </div>
                </div> 
                <div class="post all JavaScript mb-3">
                    <div class="card" style="width: 18rem;">
                        <img src="/src/assets/8.webp" class="card-img-top" alt="1.webp">
                        <div class="card-body">
                            <h5 class="card-title">weather website</h5>
                            <p class="card-text">JavaScript + BOOTSTRAP</p>
                            <a target="_blank"  href="https://amine-triki.github.io/Weather-js/" class="btn btn-primary">Visit</a>
                        </div>
                    </div>
                </div> 
                <div class="post all Vue-js mb-3">
                        <div class="card" style="width: 18rem;">
                            <img src="/src/assets/7.webp" class="card-img-top" alt="1.webp">
                            <div class="card-body">
                                <h5 class="card-title">personal website</h5>
                                <p class="card-text">Vue js + tailwind css</p>
                                <a target="_blank"  href="https://amine-triki.github.io/vue-tailwind/" class="btn btn-primary">Visit</a>
                            </div>
                        </div>
                    </div>
                    <div class="post all Vue-js mb-3">
                        <div class="card" style="width: 18rem;">
                            <img src="/src/assets/6.webp" class="card-img-top" alt="6.webp">
                            <div class="card-body">
                                <h5 class="card-title">personal website</h5>
                                <p class="card-text">Vue js + BOOTSTRAP</p>
                                <a target="_blank" href="https://amine-triki.github.io/vuejs-bootstrap/" class="btn btn-primary">Visit</a>
                            </div>
                        </div>
                    </div>
                    <div class="post all Wordpress mb-3 ">
                        <div class="card" style="width: 18rem;">
                            <img src="/src/assets/5.webp" class="card-img-top" alt="5.webp">
                            <div class="card-body">
                                <h5 class="card-title">personal website</h5>
                                <p class="card-text">WORDPRESS</p>
                                <a target="_blank" href="https://aminetriki.com.tn/" class="btn btn-primary">Visit</a>
                            </div>
                        </div>
                    </div>
                    <div class="post all Wordpress mb-3 ">
                        <div class="card" style="width: 18rem;">
                            <img src="/src/assets/4.webp" class="card-img-top" alt="4.webp">
                            <div class="card-body">
                                <h5 class="card-title">M.J.S.E website</h5>
                                <p class="card-text">WORDPRESS</p>
                                <a target="_blank" href="https://mjse.com.tn/" class="btn btn-primary">Visit</a>
                            </div>
                        </div>
                    </div>
                    
                
                    <div class="post all JavaScript mb-3">
                        <div class="card" style="width: 18rem;">
                            <img src="/src/assets/3.webp" class="card-img-top" alt="3.webp">
                            <div class="card-body">
                                <h5 class="card-title">personal website</h5>
                                <p class="card-text">JavaScript + BOOTSTRAP</p>
                                <a target="_blank" href="https://amine-triki.github.io/portfolio/" class="btn btn-primary">Visit</a>
                            </div>
                        </div>
                    </div>
                    <div class="post all JavaScript mb-3">
                        <div class="card" style="width: 18rem;">
                            <img src="/src/assets/2.webp" class="card-img-top" alt="2.webp">
                            <div class="card-body">
                                <h5 class="card-title">personal website</h5>
                                <p class="card-text">JavaScript + BOOTSTRAP</p>
                                <a target="_blank" href="https://amine-triki.github.io/" class="btn btn-primary">Visit</a>
                            </div>
                        </div>
                    </div>
                    <div class="post all JavaScript mb-3">
                        <div class="card" style="width: 18rem;">
                            <img src="/src/assets/1.webp" class="card-img-top" alt="1.webp">
                            <div class="card-body">
                                <h5 class="card-title">personal website</h5>
                                <p class="card-text">SASS + JavaScript</p>
                                <a target="_blank"  href="https://amine-triki.github.io/portfolio-website-responsive-with-sass-js/" class="btn btn-primary">Visit</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'ProjectsView',
    mounted() {
    // filter posts
let switchLis = document.querySelectorAll(".switcher li");
let posts = Array.from(document.querySelectorAll(" .post"));


switchLis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", managePosts);
});

//remove active calss from all posts and add to current
function removeActive() {
  switchLis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}
//manage posts
function managePosts() {
    posts.forEach((post) => {
        post.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "flex";
    })
}
  },
  
};
</script>







