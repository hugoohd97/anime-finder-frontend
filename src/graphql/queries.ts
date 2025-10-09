import { gql } from "@apollo/client";

export const GET_GENRES = gql`
  query GetGenres {
    GenreCollection
  }
`;

export const GET_ANIMES = gql`
  query GetAnimes(
    $page: Int
    $perPage: Int
    $search: String
    $genreIn: [String]
    $status: MediaStatus
    $season: MediaSeason
    $seasonYear: Int
    $sort: [MediaSort]
  ) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        currentPage
        hasNextPage
      }
      media(
        type: ANIME
        isAdult: false
        search: $search
        genre_in: $genreIn
        status: $status
        season: $season
        seasonYear: $seasonYear
        sort: $sort
      ) {
        id
        title {
          english
          native
        }
        coverImage {
          large
        }
        bannerImage
        episodes
        averageScore
        status
        startDate {
          year
          month
          day
        }
        endDate {
          year
          month
          day
        }
        trailer {
          id
          site
        }
      }
    }
  }
`;

export const GET_ANIME_DETAIL = gql`
  query GetAnime($id: Int) {
    Media(id: $id, type: ANIME, isAdult: false) {
      id
      title {
        english
        native
      }
      description(asHtml: false)
      bannerImage
      coverImage {
        large
      }
      averageScore
      episodes
      status
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      trailer {
        id
        site
      }
    }
  }
`;
