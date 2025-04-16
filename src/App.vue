<template>
  <div class=" flex items-center justify-between h-screen">
    <div class=" w-[300px] h-full border-r border-gray-300">
      <div class="h-[90%] overflow-y-auto">
        <ConversationList :items="items" />
      </div>
      <div class="h-[10%] grid grid-cols-2 gap-2 p-2">
        <RouterLink to="/">
          <Button icon-name="radix-icons:chat-bubble" class="w-full">
            新建聊天
          </Button>
        </RouterLink>
        <RouterLink to="/settings">
          <Button icon-name="radix-icons:gear" plain class="w-full">
            设置
          </Button>
        </RouterLink>
      </div>
    </div>
    <div class=" h-full flex-1">
      <RouterView  />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { ConversationProps, ProviderProps } from './types'
import ConversationList from './components/ConversationList.vue'
import ProviderSelect from './components/ProviderSelect.vue'
import MessageInput from './components/MessageInput.vue'
import Button from './components/Button.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const selectedModel = ref('')
const items: ConversationProps[] = [
  {
    id: 1,
    title: '什么是光合作用 01',
    selectedModel: 'GPT-3.5-Turbo',
    updatedAt: '2025-10-01'
  },
  {
    id: 2,
    title: '什么是光合作用 02',
    selectedModel: 'GPT-3.5-Turbo',
    updatedAt: '2025-10-02'
  },
  {
    id: 3,
    title: '什么是光合作用 03',
    selectedModel: 'GPT-3.5-Turbo',
    updatedAt: '2025-10-03'
  },
  {
    id: 4,
    title: '什么是光合作用 04',
    selectedModel: 'GPT-3.5-Turbo',
    updatedAt: '2025-10-04'
  },
  {
    id: 5,
    title: '什么是光合作用 05',
    selectedModel: 'GPT-3.5-Turbo',
    updatedAt: '2025-10-05'
  },
  {
    id: 6,
    title: '什么是光合作用 06',
    selectedModel: 'GPT-3.5-Turbo',
    updatedAt: '2025-10-06'
  },
  {
    id: 7,
    title: '什么是光合作用 07',
    selectedModel: 'GPT-3.5-Turbo',
    updatedAt: '2025-10-07'
  },
  {
    id: 8,
    title: '什么是光合作用 08',
    selectedModel: 'GPT-3.5-Turbo',
    updatedAt: '2025-10-08'
  },
  {
    id: 9,
    title: '什么是光合作用 09',
    selectedModel: 'GPT-3.5-Turbo',
    updatedAt: '2025-10-09'
  },
  {
    id: 10,
    title: '什么是光合作用 10',
    selectedModel: 'GPT-3.5-Turbo',
    updatedAt: '2025-10-10'
  }
]

const providers: ProviderProps[] = [
  {
    id: 1,
    name: '文心一言',
    desc: '文心一言 百度出品的大模型',
    models: ['ERNIT-4.0-8K', 'ERNIT-3.5-8K', 'ERNIT-Speed-8K'],
    avatar: 'https://www.aliyun.com/favicon.ico',
    createdAt: '2025-10-01',
    updatedAt: '2025-10-01'
  },
  {
    id: 2,
    name: '通义千问',
    desc: '通义千问 阿里出品的大模型',
    models: ['qwen-turbo', 'qwen-plus', 'qwen-max'],
    avatar: 'https://www.aliyun.com/favicon.ico',
    createdAt: '2025-10-01',
    updatedAt: '2025-10-01'
  },
]

</script>