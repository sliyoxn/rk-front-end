<template>
	<div class="loginView">
		<div class="item">
			<el-input v-model="username" placeholder="用户名"></el-input>
		</div>
		<div class="item">
			<el-input v-model="password" placeholder="密码"></el-input>
		</div>
		<div class="item">
			<el-button @click="loginSystem" style="width: 100%" type="primary">确认</el-button>
		</div>


	</div>
</template>


<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
	components: {},
})
export default class Login extends Vue {
	private username = "";
	private password = ""

	private loginSystem() {

		const login = (data : any) =>  {
			this.$router.push("/");
		}

		this.$http.post("/login", {
			username : this.username,
			password : this.password
		}).then(login, login);
	}
	
}
</script>

<style lang="scss" scoped>
	.loginView {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: center;
		width: 100%;
		height: 100%;
		.item {
			width: 300px;
			margin-top: 30px;
			transform: translateY(-100px);
		}
		background-image: linear-gradient(-90deg, #29bdd9 0%, #276ace 100%);
	}
</style>