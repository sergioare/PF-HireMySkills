import { React, useState, useEffect } from "react";
import styles from "./Review.module.css";
import { useDispatch, useSelector } from "react-redux";
import pictureDefault from "../../assets/pictureDefault.png";
import { useParams } from "react-router-dom";
import {
  getReviews,
  postReviews,
  getProfessionalReview,
  getCouldReview,
} from "../../redux/actions/actions";
import { Label, Textarea, Button } from "flowbite-react";
import ReactStars from "react-rating-stars-component";
import Stars from "../Stars/Stars";

const Review = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews);
  const relation = useSelector((state) => state.relation);
  console.log(relation, "relation");

  const [input, setInput] = useState({
    review_comment: "",
    userId: "685427dc-0be7-4591-b82f-f2567355b4f4",
    professionalId: id,
  });
  // console.log(id, "id");
  useEffect(() => {
    // console.log(input.userId, "AA");
    dispatch(getProfessionalReview(id));
    dispatch(getCouldReview(id, input.userId));
  }, [dispatch, id, input.userId]);

  const handleChange = (ev) => {
    setInput({
      ...input,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleSubmit = (ev) => {
    // console.log(input);
    ev.preventDefault();
    dispatch(getReviews());
    dispatch(postReviews(input));
  };

  const secondExample = {
    size: 25,
    count: 5,
    color: "black",
    activeColor: "#ecea4c",
    value: parseFloat(input.rating),
    a11y: true,
    isHalf: false,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      console.log(`new value is ${newValue}`);
      setInput({
        ...input,
        review_rating: newValue,
      });
    },
  };

  return (
    <div className={styles.review}>
      <hr />
      <div className="w-100 divcomment">
        <div className={styles.reviewTitle}>¡Write your review!</div>
        <form onSubmit={handleSubmit}>
          <div className={styles.stars}>
            <ReactStars {...secondExample} />
          </div>
          <div id="textarea">
            <div className="mb-2 block">
              <Label htmlFor="comment" />
            </div>
            <Textarea
              id="comment"
              placeholder="Please leave your comments..."
              required={true}
              onChange={(e) => handleChange(e)}
              name="review_comment"
              value={input.review_comment}
              className="fs-6 w-100"
            />
          </div>
          {relation === false ? (
            <Button
              gradientDuoTone="purpleToBlue"
              type="submit"
              className={styles.Button}
              disabled
            >
              Comment
            </Button>
          ) : (
            <Button
              gradientDuoTone="purpleToBlue"
              type="submit"
              className={styles.Button}
            >
              Comment
            </Button>
          )}
        </form>
      </div>
      {/* ---------review-------- */}
      <br />
      <hr />
      <div className={styles.rewTitle}>
        <p style={{ color: " #1F1F1F" }}>Comments</p>
      </div>
      <div className={styles.rewContainer}>
        {reviews.length ? (
          reviews.map((rev) => {
            return (
              <div className={styles.divComment}>
                <div className={styles.rewProfile}>
                  <div className={styles.rewHeader}>
                    <div className={styles.rewImg}>
                      <img
                        src={rev.user.photo ? rev.user.photo : pictureDefault}
                        alt="Img not found"
                      />
                    </div>
                    <div className={styles.rewName}>
                      <strong>{rev.user.name}</strong>
                      {/* <span>nickName</span> */}
                    </div>
                  </div>
                  <div className={styles.rewStar}>
                    <Stars
                      rating={input.review_rating}
                      value={rev.review_rating}
                    />
                  </div>
                </div>
                <div className={styles.rewText}>
                  <p style={{ color: " #1F1F1F" }}>{rev.review_comment}</p>
                </div>
              </div>
            );
          })
        ) : (
          <div style={{ color: " #1F1F1F" }}>Not fount comments</div>
        )}
        <hr />
      </div>
    </div>
  );
};

export default Review;
