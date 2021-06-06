<template>
	<div class="ServiceView">
		<div class="opt-container">
			<el-button type="primary" @click="addProject">增加服务</el-button>
		</div>

		<el-table :data="tableData" style="width: 100%" >
			<el-table-column align="center" prop="sid" label="id"></el-table-column>
			<el-table-column align="center" prop="name" label="服务名" ></el-table-column>
			<el-table-column align="center" prop="type" label="服务类型"></el-table-column>
			<el-table-column align="center" prop="content" label="服务内容"></el-table-column>
			<el-table-column align="center" prop="uid" label="服务提供者"></el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button
						size="mini"
						@click="handleEdit(scope.$index, scope.row)">购买服务</el-button>
					<el-button
						size="mini"
						type="danger"
						@click="handleDelete(scope.$index, scope.row)" v-if="scope.row.uid == 1">删除</el-button>
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
export default class Service extends Vue {
	private tableData = [{
		sid : '1',
		name : '冲冲冲',
		type : '开发',
		content : '使用Spring开发',
		uid : '1',
		uName : 'SakuraSnow'

	}, {
		sid : '2',
		name : '一个普普通通的项目',
		type : '开发',
		content : '使用Vue开发',
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
	.ServiceView {
		.opt-container {
			margin-top: 30px;
			margin-bottom: 30px;
			display: flex;
			padding-left: 100px;
			box-sizing: border-box;
		}
	}
</style>