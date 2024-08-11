<script setup>
// import movies from './data/movies.json';
</script>

<template>
  <!-- eslint-disable max-len -->
  <div class="page">
    <div class="page-content">
      <div class="movies">
        <div class="card" data-cy="Movie">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                data-cy="MovieImage"
                src="https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg"
                alt="Film logo"
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
                <p class="title is-8" data-cy="MovieTitle">Love Actually</p>
              </div>
            </div>

            <div class="content">
              <p data-cy="MovieDescription">
                A thief who steals corporate secrets through the use of
                dream-sharing technology is given the inverse task of planting
                an idea into the mind of a C.E.O.
              </p>

              <a
                href="https://www.imdb.com/title/tt0314331"
                data-cy="MovieLink"
              >
                IMDB
              </a>
            </div>
          </div>
        </div>

        <div class="card" data-cy="Movie">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                data-cy="MovieImage"
                src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
                alt="Film logo"
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
                <p class="title is-8" data-cy="MovieTitle">Inception</p>
              </div>
            </div>

            <div class="content">
              <p data-cy="MovieDescription">
                Follows the lives of eight very different couples in dealing
                with their love lives in various loosely interrelated tales all
                set during a frantic month before Christmas in London, England.
              </p>

              <a
                href="https://www.imdb.com/title/tt1375666"
                data-cy="MovieLink"
              >
                IMDB
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sidebar" data-cy="Sidebar">Sidebar will be here</div>
  </div>
</template>
