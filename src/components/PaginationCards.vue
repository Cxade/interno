<template>
  <div class="pagination-box">
    <div
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      class="pagination"
      @click="changePage(pageNumber)"
      :class="{ active: pageNumber === currentPage }"
    >
      {{ pageNumber }}
    </div>
    <div class="pagination" @click="nextPage(next)">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="53"
        height="52"
        viewBox="0 0 53 52"
        fill="none"
      >
        <path
          d="M23.5571 32L29.5 25.3143L23.5571 18.6286"
          stroke="#292f36"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaginationCards",
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changePage(pageNumber) {
      this.$emit("page-change", pageNumber);
    },
    nextPage(next) {
      this.$emit("next-page", next);
    },
  },
  computed: {
    next() {
      return this.currentPage < this.totalPages ? this.currentPage + 1 : 1;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.pagination-box {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  border-radius: 50px;
  border: 1px solid $mainColor;
  cursor: pointer;
  user-select: none;
}
.active {
  border: none;
  background-color: $backColor;
}
</style>
