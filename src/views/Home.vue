<template>
  <div class="container">
    <!-- <div class="row">
      <div class="col-md-12">
        <img src="/logo.gif" />
      </div>
    </div> -->
    <div class="row">
      <div class="col-md-8" id="banner-section"></div>
      <div class="col-md-4">
        <div class="row">
          <div class="col-md-12">
            <div class="col-md-12">
              <img src="/logo.gif" height="120" class="float-right" />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="card mt-4">
              <div class="card-header bg-primary text-white">
                Login to your account
              </div>
              <div class="card-body">
                <form>
                  <div>
                    <div class="form-group">
                      <input
                        v-model="email"
                        type="email"
                        placeholder="Enter Email"
                        class="form-control"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        v-model="password"
                        type="password"
                        placeholder="Enter Password"
                        class="form-control"
                      />
                    </div>
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click="login"
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const email = ref("");
const password = ref("");

const login = () => {
  // Use the router to navigate to the "profile" page
  // Assuming you have set up Vue Router in your project
  router.push({ path: "profile" });
};
</script>

<style scoped>
.container {
  padding: 0;
  margin: 0;
}

#banner-section {
  background-image: url("/home_page_back.jpg");
  padding: 0;
  margin: 0;
  height: 100vh;
}
</style>
