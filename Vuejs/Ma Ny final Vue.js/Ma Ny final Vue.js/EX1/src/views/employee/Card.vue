<template>
  <div class="text-center">
    <img :src="employee.image">
    <div >
      <h5>{{ employee.name }}</h5>
      <p><strong>Email:</strong> {{ employee.email }}</p>
      <p><strong>Phone:</strong> {{ employee.phone }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmployeeCard',
  props: {
    employee: {
      type: Object,
    }
  }
};
</script> 
  
  <style>
  </style>
  