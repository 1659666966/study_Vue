<template>
    <div class="block text-center">
        <span class="demonstration"></span>
        <el-carousel height="150px" v-if="isShow">
            <el-carousel-item v-for="item in images" :key="item">
               <el-link :href="item.courseUrl" target="_blank">
                <el-image :src="item.imageUrl"></el-image>
            </el-link>
            </el-carousel-item>
        </el-carousel>
    </div>
    <HomeContent/>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getBanners2 } from '../http/index'  
import HomeContent from '../components/HomeContent.vue'
const images = ref();
const isShow =ref(false);
onMounted(async () => {
    images.value = (await getBanners2()).data
    isShow.value =true;
})

// images.value=[
//     {
//         "imageUrl":"/images/banners/21_birthday_banner_pc.jpg",
//         "courseUrl":"https://www.hua.com/"
//     },
//     {
//         "imageUrl":"/images/banners/21_brand_banner_pc.jpg",
//         "courseUrl":"https://www.hua.com/"
//     },
//     {
//         "imageUrl":"/images/banners/21_syz_banner_pc.jpg",
//         "courseUrl":"https://www.hua.com/"
//     }
// ]

</script>

<style lang="scss">
.el-carousel__container {
    height: 384px !important;
    margin-top: 10px;
}
</style>