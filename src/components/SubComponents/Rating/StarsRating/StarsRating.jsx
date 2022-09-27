import React from "react";
import {
  Container,
  RatingLink,
  RatingLayers,
  TopLayer,
  BottomLayer,
} from "./starsStyles";
import { StarsForegroundSVG, StarsBackgroundSVG } from "./StarsPaths";

const StarsRating = (props) => {
  const decimalAvgRating = props.avgRating ? props.avgRating / 5 : 0.5;

  return (
    <Container>
      <RatingLayers size={props.size}>
        <TopLayer>
          <StarsForegroundSVG size={props.size} />
        </TopLayer>
        <BottomLayer>
          <StarsBackgroundSVG size={props.size} avgRating={decimalAvgRating} />
        </BottomLayer>
      </RatingLayers>
      <div>
        <RatingLink href="#newsletter" paddingRight={10}>
          <b>{props.numRatings}</b> ratings
        </RatingLink>
        |
        <RatingLink href="#newsletter" paddingLeft={10}>
          <b>{props.numAnsweredQuestions}</b> answered questions
        </RatingLink>
      </div>
    </Container>
  );
};

export default StarsRating;
