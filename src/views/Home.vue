<template>
	<div class="HomeView">
		<div class="menu-container">
			<el-row class="tac">
				<el-col>
					<h5 class="menu-text">菜单 {{index}}</h5>
					<el-menu
						default-active="1"
						class="el-menu-vertical-demo"
						@open="handleOpen"
						@close="handleClose"
						@select="handleChange"
						background-color="#545c64"
						text-color="#fff"
						active-text-color="#ffd04b"
					>
						<el-menu-item index="1">
							<i class="el-icon-location"></i>
							<span>人员</span>
						</el-menu-item>
						<el-menu-item index="2">
							<i class="el-icon-menu"></i>
							<span slot="title">项目</span>
						</el-menu-item>
						<el-menu-item index="3">
							<i class="el-icon-document"></i>
							<span slot="title">导航三</span>
						</el-menu-item>
						<el-menu-item index="4">
							<i class="el-icon-setting"></i>
							<span slot="title">导航四</span>
						</el-menu-item>
					</el-menu>
				</el-col>
			</el-row>
		</div>
		<div class="content-container">
			<User v-if="index == 1"/>
			<Project v-else-if="index == 2"/>
		</div>

	</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import User from "@/components/HomeChild/User.vue";
import Project from "@/components/HomeChild/Project.vue";

@Component({
	components: {Project, User},
})
export default class Home extends Vue {

	private index : number = 1;

	private handleOpen() {
		console.log("?")
	}
	private handleClose() {

	}
	private handleChange(e : any) {
		// console.log(e)
		this.index = e;
	}
}
</script>

<style lang="scss">
	.HomeView {
		height: 100%;
		.menu-text {
			background-color : #545c64;
			color : #fff;
			margin: 0;
			padding: 20px 0;
		}
		display: flex;
		flex-direction: row;
		.menu-container {
			flex: 0 0;
			width: 180px;
			height: 100%;
			.tac {
				height: 100%;
				 > .el-col {
					 height: 100%;
					 background: #545c64;
				}
			}
		}
		.content-container {
			flex: 1 1 auto;
		}
		//.el-menu-vertical-demo  {
		//	//transform: translate(-30px);
		//}
	}
</style>

<style lang="scss">

</style>
