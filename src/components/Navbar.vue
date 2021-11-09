<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary ">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">{{ msg }}</a>
      <form class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Buscar"
          aria-label="Search"
        />
        <button class="btn btn-secondary my-2 my-sm-0" type="submit">
          Buscar
        </button>
      </form>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'barra',
    props: {
        msg: String
    }
};
</script>