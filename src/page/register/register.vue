<template>
   <el-row>
        <el-col :span="14"  style="background-color:#fff">
          <!--<el-col style="height:50px;background-color:#EAEDF1">
	        </el-col>-->
          <el-col :span="14" :offset="5" style="margin-top:40px">
            <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px">
                <el-form-item label="用户类型" prop="type">
                    <el-select v-model="ruleForm.type" placeholder="请选择用户类型" @change="ifShow">
                        <el-option label="政府用户" value="gov" ></el-option>
                        <el-option label="企业用户" value="firm" ></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="登录名称" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="登录密码" prop="pass" required="true">
                    <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass" required="true">
                    <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="企业名称" prop="user" v-if="firmShow">
                    <el-input v-model="ruleForm.user"></el-input>
                </el-form-item>
                <el-form-item label="政府名称" prop="user" v-if="govShow">
                    <el-input v-model="ruleForm.user"></el-input>
                </el-form-item>
                <el-form-item label="负责人姓名" prop="people">
                    <el-input v-model="ruleForm.people"></el-input>
                </el-form-item>
                <el-form-item label="邮箱号" prop="email">
                    <el-input v-model="ruleForm.email"></el-input>
                </el-form-item>
                <el-form-item label="手机号码" prop="phone">
                    <el-input v-model="ruleForm.phone"></el-input>
                </el-form-item>
                <el-form-item label="地址" prop="address">
                    <el-input v-model="ruleForm.address"></el-input>
                </el-form-item>
                <el-form-item label="所属区域" >
                    <!--<el-input v-model="form.distict"></el-input>-->
                    <div class="block">
                        <el-cascader expand-trigger="hover" :options="options" v-model="selectedOptions" @change="handleChange">
                        </el-cascader>
                    </div>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm()" :loading="regState">立刻注册</el-button>
                </el-form-item>
            </el-form>
           </el-col>
        </el-col>
   </el-row>
</template>
<script>
  function submit(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          type: '',
          user: '',
          pass: '',
          checkPass: '',
          name: '',
          people: '',
          email: '',
          phone: '',
          address: '',
          //district: ''
        },
        regState: false,
				firmShow: false,
				govShow: false,
        options: [{
          value: '安徽省',
          label: '安徽省',
          children: [{
            value: '合肥市',
            label: '合肥市',
            children: [{
              value: '市辖区',
              label: '市辖区'
            }, {
              value: '瑶海区',
              label: '瑶海区'
            }, {
              value: '庐阳区',
              label: '庐阳区'
            }, {
              value: '蜀山区',
              label: '蜀山区'
            }, {
              value: '包河区',
              label: '包河区'
            }, {
              value: '长丰县',
              label: '长丰县'
            }, {
              value: '肥东县',
              label: '肥东县'
            }, {
              value: '肥西县',
              label: '肥西县'
            }, {
              value: '庐江县',
              label: '庐江县'
            }, {
              value: '巢湖市',
              label: '巢湖市'
            }]
          }, {
            value: '芜湖市',
            label: '芜湖市',
            children: [{
              value: '市辖区',
              label: '市辖区'
            }, {
              value: '镜湖区',
              label: '镜湖区'
            }, {
              value: '弋江区',
              label: '弋江区'
            }, {
              value: '鸠江区',
              label: '鸠江区'
            }, {
              value: '三山区',
              label: '三山区'
            }, {
              value: '芜湖县',
              label: '芜湖县'
            }, {
              value: '繁昌县',
              label: '繁昌县'
            }, {
              value: '南陵县',
              label: '南陵县'
            }, {
              value: '无为县',
              label: '无为县'
            }]
          }, {
            value: '蚌埠市',
            label: '蚌埠市',
            children: [{
              value: '市辖区',
              label: '市辖区'
            }, {
              value: '龙子湖区',
              label: '龙子湖区'
            }, {
              value: '蚌山区',
              label: '蚌山区'
            }, {
              value: '禹会区',
              label: '禹会区'
            }, {
              value: '淮上区',
              label: '淮上区'
            }, {
              value: '怀远县',
              label: '怀远县'
            }, {
              value: '五河县',
              label: '五河县'
            }, {
              value: '固镇县',
              label: '固镇县'
            }]
          }, {
            value: '淮南市',
            label: '淮南市',
            children: [{
              value: '市辖区',
              label: '市辖区'
            }, {
              value: '大通区',
              label: '大通区'
            }, {
              value: '田家庵区',
              label: '田家庵区'
            }, {
              value: '谢家集区',
              label: '谢家集区'
            }, {
              value: '八公山区',
              label: '八公山区'
            }, {
              value: '潘集区',
              label: '潘集区'
            }, {
              value: '凤台县',
              label: '凤台县'
            }]
          }, {
            value: '马鞍山市',
            label: '马鞍山市',
            children: [{
              value: '市辖区',
              label: '市辖区'
            }, {
              value: '花山区',
              label: '花山区'
            }, {
              value: '雨山区',
              label: '雨山区'
            }, {
              value: '博望区',
              label: '博望区'
            }, {
              value: '当涂县',
              label: '当涂县'
            }, {
              value: '含山县',
              label: '含山县'
            }, {
              value: '和县',
              label: '和县'
            }]
          }, {
            value: '淮北市',
            label: '淮北市',
            children: [{
              value: '市辖区',
              label: '市辖区'
            }, {
              value: '杜集区',
              label: '杜集区'
            }, {
              value: '弋江区',
              label: '弋江区'
            }, {
              value: '相山区',
              label: '相山区'
            }, {
              value: '烈山区',
              label: '烈山区'
            }, {
              value: '濉溪县',
              label: '濉溪县'
            }]
					}, {
            value: '铜陵市',
            label: '铜陵市',
            children: [{
              value: '市辖区',
              label: '市辖区'
            }, {
              value: '铜官山区',
              label: '铜官山区'
            }, {
              value: '狮子山区',
              label: '狮子山区'
            }, {
              value: '郊区',
              label: '郊区'
            }, {
              value: '铜陵县',
              label: '铜陵县'
            }]
          }, {
            value: '安庆市',
            label: '安庆市',
            children: [{
              value: '市辖区',
              label: '市辖区'
            }, {
              value: '迎江区',
              label: '迎江区'
            }, {
              value: '大观区',
              label: '大观区'
            }, {
              value: '宜秀区',
              label: '宜秀区'
            }, {
              value: '怀宁县',
              label: '怀宁县'
            }, {
              value: '枞阳县',
              label: '枞阳县'
            }, {
              value: '潜山县',
              label: '潜山县'
            }, {
              value: '无为县',
              label: '无为县'
            },{
              value: '太湖县',
              label: '太湖县'
            }, {
              value: '宿松县',
              label: '宿松县'
            }, {
              value: '枞阳县',
              label: '枞阳县'
            }, {
              value: '望江县',
              label: '望江县'
            }, {
              value: '岳西县',
              label: '岳西县'
            },{
              value: '桐城市',
              label: '桐城市'
            }]
          }, {
            value: '黄山市',
            label: '黄山市',
            children: [{
              value: '市辖区',
              label: '市辖区'
            }, {
              value: '屯溪区',
              label: '屯溪区'
            }, {
              value: '黄山区',
              label: '黄山区'
            }, {
              value: '徽州区',
              label: '徽州区'
            }, {
              value: '歙县',
              label: '歙县'
            }, {
              value: '休宁县',
              label: '休宁县'
            }, {
              value: '黟县',
              label: '黟县'
            }, {
              value: '祁门县',
              label: '祁门县'
            }]
          }, {
            value: '滁州市',
            label: '滁州市',
            children: [{
              value: '市辖区',
              label: '市辖区'
            }, {
              value: '琅琊区',
              label: '琅琊区'
            }, {
              value: '弋江区',
              label: '弋江区'
            }, {
              value: '南谯区',
              label: '南谯区'
            }, {
              value: '来安县',
              label: '来安县'
            }, {
              value: '全椒县',
              label: '全椒县'
            }, {
              value: '定远县',
              label: '定远县'
            }, {
              value: '凤阳县',
              label: '凤阳县'
            }, {
              value: '天长市',
              label: '天长市'
            }, {
              value: '明光市',
              label: '明光市'
            }]
          }, {
            value: '阜阳市',
            label: '阜阳市',
            children: [{
              value: '市辖区',
              label: '市辖区'
            }, {
              value: '颍州区',
              label: '颍州区'
            }, {
              value: '颍东区',
              label: '颍东区'
            }, {
              value: '颍泉区',
              label: '颍泉区'
            }, {
              value: '临泉县',
              label: '临泉县'
            }, {
              value: '太和县',
              label: '太和县'
            }, {
              value: '阜南县',
              label: '阜南县'
            }, {
              value: '颍上县',
              label: '颍上县'
            }, {
              value: '界首市',
              label: '界首市'
            }]
          }, {
            value: '宿州市',
            label: '宿州市',
            children: [{
              value: '市辖区',
              label: '市辖区'
            }, {
              value: '埇桥区',
              label: '埇桥区'
            }, {
              value: '砀山县',
              label: '砀山县'
            }, {
              value: '萧县',
              label: '萧县'
            }, {
              value: '灵璧县',
              label: '灵璧县'
            }, {
              value: '泗县',
              label: '泗县'
            }]
          }, {
            value: '六安市',
            label: '六安市',
            children: [{
              value: '市辖区',
              label: '市辖区'
            }, {
              value: '金安区',
              label: '金安区'
            }, {
              value: '裕安区',
              label: '裕安区'
            }, {
              value: '寿县',
              label: '寿县'
            }, {
              value: '霍邱县',
              label: '霍邱县'
            }, {
              value: '舒城县',
              label: '舒城县'
            }, {
              value: '金寨县',
              label: '金寨县'
            }, {
              value: '霍山县',
              label: '霍山县'
            }]
          }, {
            value: '亳州市',
            label: '亳州市',
            children: [{
              value: '市辖区',
              label: '市辖区'
            }, {
              value: '谯城区',
              label: '谯城区'
            }, {
              value: '涡阳县',
              label: '涡阳县'
            }, {
              value: '蒙城县',
              label: '蒙城县'
            }, {
              value: '利辛县',
              label: '利辛县'
            }]
          }, {
            value: '池州市',
            label: '池州市',
            children: [{
              value: '市辖区',
              label: '市辖区'
            }, {
              value: '贵池区',
              label: '贵池区'
            }, {
              value: '东至县',
              label: '东至县'
            }, {
              value: '石台县',
              label: '石台县'
            }, {
              value: '青阳县',
              label: '青阳县'
            }]
          }, {
            value: '宣城市',
            label: '宣城市',
            children: [{
              value: '市辖区',
              label: '市辖区'
            }, {
              value: '宣州区',
              label: '宣州区'
            }, {
              value: '郎溪县',
              label: '郎溪县'
            }, {
              value: '广德县',
              label: '广德县'
            }, {
              value: '三山区',
              label: '三山区'
            }, {
              value: '泾县',
              label: '泾县'
            }, {
              value: '绩溪县',
              label: '绩溪县'
            }, {
              value: '旌德县',
              label: '旌德县'
            }, {
              value: '宁国市',
              label: '宁国市'
            }]
        }]
				}],
				rules:{
          type:[
            {required:true, message:'请选择用户类型', trigger:'change'}
          ],
          user:[
            {required:true, message:'请输入登录名称', trigger:'blur'}
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          name:[
            {required:true, message:'请输入用户名称', trigger:'blur'}
          ],
          people:[
            {required:true, message:'请输入负责人姓名', trigger:'blur'}
          ],
          email:[
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change'}
          ],
          phone:[
            {required:true, message:'请输入手机号码', trigger:'blur'}
          ],
          address:[
            {required:true, message:'请输入地址', trigger:'blur'}
          ]
        },

        selectedOptions: []
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      },
		  submitForm() {
        this.regState = true;
        /*this.$refs[formName].validate((valid) => {
          if (valid) {
						alert(1);
            setTimeout(function(){
            this.regState = false;
						alert("您注册成功")
            },1500);
          } else {
						alert(2);
            setTimeout(function(){
            this.regState = false;
						alert("您注册未成功")
            },1500);
            return false;
          }
        });*/
        /*setTimeout(function(){
          this.regState = false;
					alert("注册成功");
					this.$message({
            message: '恭ddd喜您注册成功',
            type: 'success'
          });
        },1500);*/
				var zhuangtai = setTimeout(function(){
          this.regState = false;
					return this.regState;
					/*this.$message({
            message: '恭ddd喜您注册成功',
            type: 'success'
          });*/
        },1500);
				this.$message({
            message: '恭喜您注册成功',
            type: 'success'
          });
				//alert(this.regState);
      },
      ifShow(value){
				console.log(value);
				if(value=="gov"){
					this.govShow=true;
					this.firmShow=false;
				}
				if(value=="firm"){
					this.firmShow=true;
					this.govShow=false;
				}
			}
    }
  };

</script>
<style lang="stylus" scoped>
 .el-select
    display: block;
  .el-cascader
    display: block;

</style>
