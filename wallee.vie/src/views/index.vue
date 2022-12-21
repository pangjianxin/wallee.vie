<template>
  <div class="small-panel-box">
    <el-row :gutter="20">
      <el-col :sm="12" :lg="6">
        <div class="small-panel user-reg suspension">
          <div class="small-panel-title">
            {{ "dashboard.Member registration" }}
          </div>
          <div class="small-panel-content">
            <div class="content-left">
              <el-icon size="20" color="#F56C6C">
                <user></user>
              </el-icon>
              <span id="user_reg_number">5456</span>
            </div>
            <div class="content-right">+14%</div>
          </div>
        </div>
      </el-col>
      <el-col :sm="12" :lg="6">
        <div class="small-panel file suspension">
          <div class="small-panel-title">
            {{ "dashboard.Number of attachments Uploaded" }}
          </div>
          <div class="small-panel-content">
            <div class="content-left">
              <el-icon size="20" color="#F56C6C">
                <user></user>
              </el-icon>
              <span id="file_number">1234</span>
            </div>
            <div class="content-right">+50%</div>
          </div>
        </div>
      </el-col>
      <el-col :sm="12" :lg="6">
        <div class="small-panel users suspension">
          <div class="small-panel-title">
            {{ "dashboard.Total number of members" }}
          </div>
          <div class="small-panel-content">
            <div class="content-left">
              <el-icon size="20" color="#F56C6C">
                <user></user>
              </el-icon>
              <span id="users_number">9486</span>
            </div>
            <div class="content-right">+28%</div>
          </div>
        </div>
      </el-col>
      <el-col :sm="12" :lg="6">
        <div class="small-panel addons suspension">
          <div class="small-panel-title">
            {{ "dashboard.Number of installed plug-ins" }}
          </div>
          <div class="small-panel-content">
            <div class="content-left">
              <el-icon size="20" color="#F56C6C">
                <user></user>
              </el-icon>
              <span id="addons_number">875</span>
            </div>
            <div class="content-right">+88%</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import useOidcStore from "/@/store/modules/useOidcStore";
import useAppConfig from "/@/store/modules/useApplicationConfigStore";
const appconfig = useAppConfig();
</script>
<route>
    {
      meta:{
        title:"首页",
        description:"在线考试系统",
        keepAlive:true,
        componentName:"首页"
      }
    }
  </route>
<style scoped lang="scss">
.welcome {
  background: #e1eaf9;
  border-radius: 6px;
  display: flex;
  align-items: center;
  padding: 15px 20px !important;
  box-shadow: 0 0 30px 0 rgba(82, 63, 105, 0.05);
  .welcome-img {
    height: 100px;
    margin-right: 10px;
    user-select: none;
  }
  .welcome-title {
    font-size: 1.5rem;
    line-height: 30px;
    color: var(--ba-color-primary-light);
  }
  .welcome-note {
    padding-top: 6px;
    font-size: 15px;
    color: var(--el-text-color-primary);
  }
}
</style>
