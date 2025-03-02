<script setup lang="ts"></script>

<template>
  <div class="home">
    <HomeSlider />
    <HomeListShoe />
    <HomeEvent />
    <HomeBestSaler />
    <HomeAdvise />
    <HomeBestSaler
      :image-title="'/images/bg-shoe-dayly.jpg'"
      :see-more="'Xem thêm Sản phẩm'"
    />
    <HomeBestSaler
      :image-title="'/images/bg-shose-excercise.jpg'"
      :see-more="'Xem thêm Sản phẩm'"
    />
    <HomeBestSaler
      :image-title="'/images/bg-thidau.jpg'"
      :see-more="'Xem thêm Sản phẩm'"
    />
    <HomeBrand />
    <HomeIntro />
    <HomeReason />
  </div>
</template>
