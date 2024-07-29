<template>
  <div class="p-5 container d-flex ">
    <img src="https://cdn.mos.cms.futurecdn.net/vJvY6J485ReQFXAgx5DSJ3-1200-80.jpg" >
    <div class="m-5 w-100">
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Commemt feedback</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-success text-center w-80">Submit</button>
        </form>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
img{
    border-radius: 20px;
}
</style>