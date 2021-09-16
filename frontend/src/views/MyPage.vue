<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">Your Story Starts With Us.</h1>
            <h4>
              Every landing page needs a small description after the big bold
              title, that's why we added this text here. Add here all the
              information that can make you or your product create the first
              impression.
            </h4>
            <br />
            <md-button
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              class="md-success md-lg"
              target="_blank"
              ><i class="fas fa-play"></i> Watch video</md-button
            >
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
      <div class ="my-box">
      </div>
          <div class="md-layout">
            //nav toolbar
            <div class="md-toolbar md-dark md-theme-default md-elevation-4">
              <div class="md-toolbar-row"><div class="md-toolbar-section-start">
                <h3 class="md-title">Navbar with notification</h3>
                </div>
                <div class="md-toolbar-section-end">
                  <button type="button" class="md-button md-just-icon md-simple md-white md-toolbar-toggle md-theme-default">
                    <div class="md-ripple">
                      <div class="md-button-content">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        </div>
                         </div>
                         </button>
                         <div class="md-collapse">
                           <ul class="md-list md-theme-default">
                             <li href="javascript:void(0)" class="md-list-item">
                               <a mdripple="true" href="javascript:void(0)" class="md-list-item-link md-list-item-container md-button-clean">
                                 <div class="md-list-item-content md-ripple"><p>Discover</p> 
                                 </div>
                                 </a>
                                 </li>
                                 <li href="javascript:void(0)" class="md-list-item">
                                   <a mdripple="true" href="javascript:void(0)" class="md-list-item-link md-list-item-container md-button-clean">
                                     <div class="md-list-item-content md-ripple">
                                       <p>Whishlist</p>
                                        </div>
                                        </a>
                                        </li>
                                        <li class="md-list-item"><a href="javascript:void(0)" class="md-list-item-router md-list-item-container md-button-clean">
                                          <div class="md-list-item-content">
                                            <button type="button" class="md-button md-rose md-just-icon md-round md-theme-default">
                                              <div class="md-ripple">
                                                <div class="md-button-content">
                                                  <i class="md-icon md-icon-font md-theme-default">email</i>
                                                  </div>
                                                   </div>
                                                   </button>
                                                   </div>
                                                   </a>
                                                   </li>
                                                   <li class="md-list-item">
                                                     <a href="javascript:void(0)" class="md-list-item-router md-list-item-container md-button-clean dropdown">
                                                       <div class="md-list-item-content"
                                                       ><div class="profile-photo dropdown">
                                                         <div data-toggle="dropdown" class="profile-photo-small">
                                                           <img src="/img/avatar.cc93a967.jpg" alt="Circle Image">
                                                           </div>
                                                           <ul class="dropdown-menu dropdown-menu-right">
                                                             <li class="dropdown-header">Dropdown header</li>
                                                             <li><a href="#pablo" class="dropdown-item">Me</a></li>
                                                             <li><a href="#pablo" class="dropdown-item">Settings and other stuff</a></li>
                                                             <li><a href="#pablo" class="dropdown-item">Sign Out</a></li>
                                                           </ul>
                                                        </div>
                                                      </div>
                                                     </a>
                                                   </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
          <b-navbar id="menu" toggleable type="light" variant="light">
          <b-navbar-brand href="#">My Page</b-navbar-brand>

          <b-navbar-toggle target="navbar-toggle-collapse">
            <template #default="{ expanded }">
              <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
              <b-icon v-else icon="chevron-bar-down"></b-icon>
            </template>
          </b-navbar-toggle>

          <b-collapse id="navbar-toggle-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <br><br><br>
              <b-nav-item href="#">나의 동물등록증</b-nav-item>
              <br>
              <b-nav-item href="#">Neverland  </b-nav-item>
              <br>
              <b-nav-item href="#">MY NFT</b-nav-item>
              <br><br><br><br>
              <br><br><br><br>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
        <div class="my-box1">
        </div>

          </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg7.jpg")
    },
    teamImg1: {
      type: String,
      default: require("@/assets/img/faces/avatar.jpg")
    },
    teamImg2: {
      type: String,
      default: require("@/assets/img/faces/christian.jpg")
    },
    teamImg3: {
      type: String,
      default: require("@/assets/img/faces/kendall.jpg")
    }
  },
  data() {
    return {
      name: null,
      email: null,
      message: null
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;
}
.ex1 {
  background-color: rgb(146, 93, 23);
  border-radius:30px;
  width: 500px;
  height: 50px;
}
.my-box {
  position: relative;
  display: inline-block;
  margin-left: 90px;
  width: 1600px;
  height: 100px;
  padding: 20px;
  background-color: rgba(42, 45, 59, 0.815);
  max-width: 100%;
}
.my-box1 {
  position: relative;
}

</style>
