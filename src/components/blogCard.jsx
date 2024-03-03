/* eslint-disable react/prop-types */
import styled from "styled-components";

const BlogCard = ({ image, title, text, rating = 0 }) => {
  const MAX_RATING = 5;
  const filledStars = Math.min(rating, MAX_RATING);
  const emptyStars = MAX_RATING - filledStars;

  return (
    <BlogCardWrapper>
      <Image src={image} alt={title} />
      <CardContent>
        <Title>{title}</Title>
        <Text>{text.length > 250 ? `${text.slice(0, 250)}...` : text}</Text>
        {rating > 0 ? (
          <Buttom>
            <ReadMoreButton>Read More...</ReadMoreButton>
            <Rating>
              {[...Array(filledStars)].map((_, index) => (
                <StarIcon key={index} filled>
                  ★
                </StarIcon>
              ))}
              {[...Array(emptyStars)].map((_, index) => (
                <StarIcon key={index} filled={false}>
                  ★
                </StarIcon>
              ))}
            </Rating>
          </Buttom>
        ) : (
          <ReadMoreButton>Read More...</ReadMoreButton>
        )}
      </CardContent>
    </BlogCardWrapper>
  );
};

export default BlogCard;

//styles

const BlogCardWrapper = styled.div`
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 280px;
  background-color: #fff;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 10px 15px;
`;

const Title = styled.h4`
  font-weight: 600;
  margin: 10px 0;
`;

const Text = styled.p`
  line-height: 1.5;
  opacity: 0.6;
  font-size: 85%;
`;

const Buttom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 85%;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const StarIcon = styled.span`
  color: ${({ filled }) => (filled ? "gold" : "grey")};
`;

const ReadMoreButton = styled.span`
  color: ${({ theme }) => theme.colors.button};
  background: none;
  border: none;
  border-radius: 5px;
  padding: 10px 0;
  cursor: pointer;
  font-size: 85%;
`;
