<template>
  <div class=" w-[90%] mx-auto h-full">
    <div class="flex items-center h-[85%]">
      <ProviderSelect :items="providers" v-model="currentProvider"/>
    </div>
    <div class="flex items-center h-[15%]">
      <MessageInput @create="createConversation" :disabled="currentProvider === ''"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProviderSelect from '../components/ProviderSelect.vue'
import MessageInput from '../components/MessageInput.vue'

const currentProvider = ref('')
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