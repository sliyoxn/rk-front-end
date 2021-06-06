<template>
	<div class="UserView">
		<div class="opt-container">
			<el-button type="primary" @click="addUser">增加用户</el-button>
			<el-button type="primary" @click="delUser">删除用户</el-button>
		</div>

		<el-table :data="tableData" style="width: 100%" >
			<el-table-column align="center" prop="uid" label="id"></el-table-column>
			<el-table-column align="center" prop="name" label="姓名" ></el-table-column>
			<el-table-column align="center" prop="phone" label="电话"></el-table-column>
			<el-table-column align="center" prop="email" label="邮箱"></el-table-column>
			<el-table-column align="center" label="权限">
				<template slot-scope="scope">
					{{scope.row.identity === 1 ? '普通用户' : '管理员'}}
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
	components: {},
})
export default class User extends Vue {
	private tableData = [{
		uid : '1',
		name : 'SakuraSnow',
		phone : '123456789',
		email : "123456789@qq.com",
		identity : 1
	}, {
		uid : '2',
		name : 'Snow',
		phone : '147852369',
		email : "147852369@qq.com",
		identity : 2
	}];
	private addUser() {

	}
	private delUser() {

	}
}
</script>

<style scoped lang="scss">
	.UserView {
		.opt-container {
			margin-top: 30px;
			margin-bottom: 30px;
		}
	}
</style>