import axios from "axios";

export const getReviews = () => {
  return axios
    .get("https://wandering-pink-gloves.cyclic.app/api/reviews")
    .then((reviews) => {
      return reviews.data;
    });
};

export const getCategories = () => {
  return axios
    .get("https://wandering-pink-gloves.cyclic.app/api/categories")
    .then((reviews) => {
      return reviews.data;
    });
};

export const getUsers = () => {
  return axios
    .get("https://wandering-pink-gloves.cyclic.app/api/users")
    .then((reviews) => {
      return reviews.data;
    });
};

export const getReviewsById = (review_id) => {
  return axios
    .get(`https://wandering-pink-gloves.cyclic.app/api/reviews/${review_id}`)
    .then((reviews) => {
      return reviews.data;
    });
};

export const getReviewsCommentsById = (review_id) => {
  return axios
    .get(
      `https://wandering-pink-gloves.cyclic.app/api/reviews/${review_id}/comments`
    )
    .then((reviews) => {
      return reviews.data;
    });
};

export const patchReviewVotes = (review_id, voteChange) => {
  return axios.patch(
    `https://wandering-pink-gloves.cyclic.app/api/reviews/${review_id}`,
    { inc_votes: voteChange }
  );
};

export const postReviewComment = (username, comment, review_id) => {
  return axios.post(
    `https://wandering-pink-gloves.cyclic.app/api/reviews/${review_id}/comments`,
    {
      username: username,
      body: comment,
    }
  );
};
