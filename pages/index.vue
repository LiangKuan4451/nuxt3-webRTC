<template>
    <div class="container mx-auto">
        <!-- 导航栏 -->
        <div class="navbar bg-base-100 shadow-sm">
            <div class="flex-1">
                <a class="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div class="flex gap-2">
                <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul tabindex="0"
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a class="justify-between">
                                Profile
                                <span class="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 聊天窗口 -->
        <div>
            <label class="input">
                <span class="label">呼叫方：</span>
                <input type="text" v-model="callerUserID" placeholder="输入名称" />
            </label>
            <button class="btn" @click="init"> 1.初始化 </button> <br>
        </div>
        <div>
            <label class="input">
                <span class="label">接收方：</span>
                <input type="text" v-model="calleeUserID" placeholder="输入名称" />
            </label>
            <button class="btn" @click="call"> 2.呼叫 </button>
        </div>

        <!--【1】Import the TUICallKit component: Call interface UI -->
        <TUICallKit style="width: 650px; height: 500px " />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TUICallKit, TUICallKitServer, TUICallType } from "@tencentcloud/call-uikit-vue";
import * as GenerateTestUserSig from "../debug/GenerateTestUserSig-es.js"; // Refer to Step 3

const SDKAppID = 1600078796;       // TODO: Replace with your SDKAppID (Notice: SDKAppID is of type number）
const SecretKey = '7808e6031e9f9d5bbb2a7a3f42fe6064907146f80727723e0080569370d5f65d';   // TODO: Replace with your SecretKey

const callerUserID = ref('');
const calleeUserID = ref('');

//【2】Initialize the TUICallKit component
const init = async () => {
    const { userSig } = GenerateTestUserSig.genTestUserSig({
        userID: callerUserID.value,
        SDKAppID,
        SecretKey: SecretKey,
    });
    await TUICallKitServer.init({
        userID: callerUserID.value,
        userSig,
        SDKAppID,
        // tim: this.tim     // 如果工程中已有 tim 实例，需在此处传入
    });
    alert('TUICallKit init succeed');
}

const call = async () => {
    await TUICallKitServer.calls({
        userIDList: [calleeUserID.value],
        type: TUICallType.VIDEO_CALL,
    });
};
</script>

<style scoped></style>
