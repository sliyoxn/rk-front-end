<template>
	<div class="ProjectView">
		<div class="opt-container">
			<el-button type="primary" @click="addProject">增加项目</el-button>
		</div>

		<el-table :data="tableData" style="width: 100%" >
			<el-table-column align="center" prop="pid" label="id"></el-table-column>
			<el-table-column align="center" prop="name" label="项目名" ></el-table-column>
			<el-table-column align="center" prop="uid" label="项目拥有者"></el-table-column>
			<el-table-column align="center" prop="uName" label="项目拥有者名称"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button
						size="mini"
						@click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button
						size="mini"
						type="danger"
						@click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
export default class Project extends Vue {
	private tableData = [{
		pid : '1',
		name : '冲冲冲',
		uid : '1',
		uName : 'SakuraSnow'

	}, {
		pid : '2',
		name : '一个普普通通的项目',
		uid : '2',
		uName : 'Snow'
	}];
	handleEdit() {

	}
	handleDelete() {

	}
	addProject() {

	}

}
</script>

<style scoped lang="scss">
	.ProjectView {
		.opt-container {
			margin-top: 30px;
			margin-bottom: 30px;
			display: flex;
			padding-left: 100px;
			box-sizing: border-box;
		}
	}
</style>