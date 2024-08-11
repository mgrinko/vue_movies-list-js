<script setup>
import movies from './data/movies.json';
</script>

<template>
  <!-- eslint-disable max-len -->
  <div class="page">
    <div class="page-content">
      <div class="movies">
        <div
          class="card"
          data-cy="Movie"
          v-for="movie of movies"
          :key="movie.imdbId"
        >
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                data-cy="MovieImage"
                :src="movie.imgUrl"
                :alt="movie.title"
              />
            </figure>
          </div>

          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img src="./assets/images/imdb-logo.jpeg" alt="imdb" />
                </figure>
              </div>

              <div class="media-content">
                <p class="title is-8" data-cy="MovieTitle">{{ movie.title }}</p>
              </div>
            </div>

            <div class="content">
              <p data-cy="MovieDescription">{{ movie.description }}</p>
              <a :href="movie.imdbUrl" data-cy="MovieLink">IMDB</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sidebar" data-cy="Sidebar">Sidebar will be here</div>
  </div>
</template>
