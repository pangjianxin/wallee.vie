<template>
  <el-badge :value="0">
    <el-popover
      placement="bottom-end"
      :hide-after="0"
      :width="260"
      trigger="hover"
      popper-class="admin-info-box"
    >
      <template #reference>
        <el-icon class="nav-menu-icon" name="el-icon-Monitor" size="18">
          <Message></Message>
        </el-icon>
      </template>
      <!-- <template v-if="messages && messages.length > 0">
        <el-card
          v-for="(item, index) in messages"
          :key="item.id"
          shadow="never"
        >
          <el-row justify="space-between">
            <span class="ba-start">
              <el-icon>
                <Calendar></Calendar>
              </el-icon>
              {{ dayjs(item.creationTime).format("YYYY/MM/DD") }}
            </span>
            <el-button
              type="primary"
              icon="Search"
              :size="'small'"
              plain
              @click="() => checkRequirement(item.source!)"
            >
            </el-button>
          </el-row>
          <el-row>
            {{ item.information }}
          </el-row>
        </el-card>
      </template> -->
    </el-popover>
  </el-badge>
</template>

<script setup lang="ts"></script>

<style scoped></style>
