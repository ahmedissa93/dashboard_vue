<template>
    <div>
        <div class="h-100 bg-plum-plate bg-animation">
            <div class="d-flex h-100 justify-content-center align-items-center">
                <b-col md="8" class="mx-auto app-login-box">
                    <div class="app-logo-inverse mx-auto mb-3"/>

                    <div class="modal-dialog w-100 mx-auto">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="h5 modal-title text-center">
                                    <h4 class="mt-2">
                                        <div>Welcome back,</div>
                                        <span>Please sign in to your account below.</span>
                                    </h4>
                                </div>
                                <b-form-group id="exampleInputGroup1"
                                              label-for="exampleInput1"
                                              description="We'll never share your email with anyone else.">
                                    <b-form-input id="exampleInput1"
                                                  type="email"
                                                  required
                                                  v-model="email"
                                                  placeholder="Enter email...">
                                    </b-form-input>
                                </b-form-group>
                                <b-form-group id="exampleInputGroup2"
                                              label-for="exampleInput2">
                                    <b-form-input id="exampleInput2"
                                                  type="password"
                                                  required
                                                  v-model="password"
                                                  placeholder="Enter password...">
                                    </b-form-input>
                                </b-form-group>
                                <b-form-checkbox name="check" id="exampleCheck">
                                    Keep me logged in
                                </b-form-checkbox>
                                <div class="divider"/>
                                <h6 class="mb-0">
                                    No account?
                                    <a href="javascript:void(0);" class="text-primary">Sign up now</a>
                                </h6>
                            </div>
                            <div class="modal-footer clearfix">
                                <div class="float-left">
                                    <a href="javascript:void(0);" class="btn-lg btn btn-link">Recover
                                        Password</a>
                                </div>
                                <div class="float-right">
                                    <b-button variant="primary" size="lg" @click="login">Login to Dashboard</b-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center text-white opacity-8 mt-3">
                        Copyright &copy; ArchitectUI 2019
                    </div>
                </b-col>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return {
                email:"",
                password:"",
                url:process.env.VUE_APP_DASHBOARD_API_URL
            }
        },
        methods: {
            login(){
                console.log(this.$dashboardUrl)
                console.log(this.url)
                let data = {username:this.email, password:this.password};
                this.axios.post(this.$dashboardUrl + "/auth/login" ,data).then((response) => {
                    if(response.data){
                        localStorage.setItem("token",response.data.accessToken);
                        localStorage.setItem("token_type",response.data.tokenType);
                    }
                    console.log(response.data);
                })
            }
        }
    }
</script>

<style scoped>

</style>