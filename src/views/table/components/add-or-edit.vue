<template>
  <div>
    <el-dialog :title="title" :visible="show" @opened="handleOpened" @close="handleClose">
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px">
        <el-form-item label="序号" prop="order">
          <el-input v-model="ruleForm.order" />
        </el-form-item>
        <el-form-item label="目录ID" prop="file_id">
          <el-input v-model="ruleForm.file_id" />
        </el-form-item>
        <el-form-item label="目录名称" prop="file_name">
          <el-input v-model="ruleForm.file_name" />
        </el-form-item>
        <el-form-item label="排序号" prop="sort">
          <el-input v-model="ruleForm.sort" />
        </el-form-item>
        <el-form-item label="创建人" prop="create_name">
          <el-input v-model="ruleForm.create_name" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="() => this.$emit('closeForm')">取消</el-button>
        <el-button type="primary" @click="handleSubmit">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'AddOrEdit',
  props: {
    show: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    formData: {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  data() {
    return {
      ruleForm: {
        order: '',
        file_id: '',
        file_name: '',
        sort: '',
        create_name: '',
        create_time: ''
      },
      rules: {
        order: [
          { required: true, message: '请输入序号', trigger: 'blur' }
        ],
        file_id: [
          { required: true, message: '请输入目录ID', trigger: 'blur' }
        ],
        file_name: [
          { required: true, message: '请输入目录名称', trigger: 'blur' }
        ],
        sort: [
          { required: true, message: '请输入排序号', trigger: 'blur' }
        ],
        create_name: [
          { required: true, message: '请输入创建人', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 修改表单时赋值
    handleOpened() {
      for (const key in this.formData) {
        if (this.formData.hasOwnProperty(key)) {
          this.ruleForm[key] = this.formData[key]
        }
      }
    },
    // 提交表单
    handleSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.$emit('handleFormData', this.ruleForm)
        } else {
          return false
        }
      })
    },
    // 重置表单关闭弹窗
    handleClose() {
      this.$refs.ruleForm.resetFields()
      this.$emit('closeForm')
    }
  }
}
</script>
