import { React, useState, useEffect } from "react";
import styles from "./Review.module.css";
import { useDispatch, useSelector } from "react-redux";
import pictureDefault from "../../assets/pictureDefault.png";
import { useParams } from "react-router-dom";
import { getReviews, postReviews } from "../../redux/actions/actions";
// import { FaStar } from "react-icons/fa";
import { Label, Textarea, Button } from "flowbite-react";
import ReactStars from "react-rating-stars-component";

const Review = () => {
  const [input, setInput] = useState({
    comment: "",
    // rating: 0,
    userId: "e9deef10-c517-42da-858c-5e042dcfe9ce",
    professionalId: "7092aff9-9536-4099-87c2-f9f1438cb246",
  });
  const { id } = useParams();
  const dispatch = useDispatch();
  const review = useSelector((state) => state.review);

  useEffect(() => {
    dispatch(getReviews(id));
  }, [dispatch, id]);
  //   const [currentValue, setcurrentValue] = useState({
  //     rating: "",
  //   });
  //   const [hoverValue, sethoverValue] = useState(undefined);
  //   const stars = Array(5).fill(0);

  //   const handleMouse = (e, newValue) => {
  //     console.log(e, "T");
  //     sethoverValue(newValue);
  //     // setInput({
  //     //   ...input,
  //     //   rating: newValue,
  //     // });
  //   };
  //   const handleMouseLeave = () => {
  //     sethoverValue(undefined);
  //   };

  const handleChange = (ev) => {
    setInput({
      ...input,
      [ev.target.name]: ev.target.value,
    });
  };

  //   const handleClick = (e) => {
  //     console.log(e.target.value, "W");
  //     setInput((state) => {
  //       const newState = {
  //         ...state,
  //         [e.target.name]: e.target.value,
  //       };
  //       return newState;
  //     });
  //   };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setInput({
      comment: "",
      rating: 0,
      userId: "e9deef10-c517-42da-858c-5e042dcfe9ce",
      professionalId: "7092aff9-9536-4099-87c2-f9f1438cb246",
    });
    dispatch(postReviews(input));
    dispatch(getReviews());
    // setcurrentValue({
    //   rating: "",
    // });
  };
  //   console.log(handleSubmit, "submit");
  let btndisabled = !(input.rating === 0 && input.comment.length);

  const secondExample = {
    size: 20,
    count: 5,
    color: "black",
    activeColor: "#ecea4c",
    value: input.rating,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      console.log(`new value is ${newValue}`);
      setInput({
        ...input,
        rating: newValue,
      });
    },
  };

  return (
    <div className={styles.review}>
      <hr />
      <div>
        <div className={styles.review}>¡Write your review!</div>
        <form onSubmit={handleSubmit}>
          <div className={styles.stars}>
            <ReactStars {...secondExample} />
            {/* {stars.map((_, index) => {
              return (
                <div>
                  <FaStar
                    className={
                      (hoverValue || input.rating) > index
                        ? styles.yellow
                        : styles.gray
                    }
                    key={index}
                    // onMouseOver={(e) => handleChange(e)}
                    onMouseOver={(e) => {
                      handleMouse(e, index + 1);
                      handleChange(index + 1);
                    }}
                    onMouseLeave={handleMouseLeave}
                    name="rating"
                    value={input.rating}
                  />
                </div>
              );
            })} */}
          </div>
          <div id="textarea">
            <div className="mb-2 block">
              <Label htmlFor="comment" />
            </div>
            <Textarea
              id="comment"
              placeholder="Please leave your comments..."
              required={true}
              rows={8}
              onChange={(e) => handleChange(e)}
              name="comment"
              value={input.comment}
              className="fs-5"
            />
          </div>
          <Button
            gradientDuoTone="purpleToBlue"
            type="submit"
            className={styles.Button}
          >
            Comments
          </Button>
        </form>
      </div>
      {/* ---------review-------- */}
      <hr />
      <div className={styles.rewTitle}>
        <p>Comments</p>
      </div>
      <div className={styles.rewContainer}>
        <div className={styles.rewProfile}>
          <div className={styles.rewHeader}>
            <div className={styles.rewImg}>
              <img src={pictureDefault} alt="Img not found" />
            </div>
            <div className={styles.rewName}>
              <strong>Name</strong>
              {/* <span>nickName</span> */}
            </div>
          </div>
          <div className={styles.rewStar}>estrellas</div>
        </div>
        <div className={styles.rewText}>
          <p>comentario</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
